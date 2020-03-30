import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { BabyBloomButton } from "../elements/Button";
import Card from "../elements/Card";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: "#BEBEBE";
`;

const TopBarWrapper = styled.div`
  padding-bottom: 1em;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const SearchPatientInput = styled.input`
  width: 50%;
  border-radius: 25px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

const SortWrapper = styled.div`
  margin-left: 1rem;
  vertical-align: middle;
  display: flex;
  align-items: center;
`;

const Dropdown = styled.select`
  background-color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background: url(${props => props.url}) no-repeat;
  width: 75px;
  background-position: ${props => props.xPos} 6px;
  background-size: 20%;
  outline: none;
  padding-left: 0.5em;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: table;
`;

const UserCardWrapper = styled.div`
  width: 33.3%;
  @media screen and (max-width: 991px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  padding: 1rem;
  display: inline-block;
`;

const HorizontalRule = styled.hr`
  border: 1px solid #bebebe;
  margin: 0 -1rem;
`;

export default class PatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      searchInput: "",
      dropdownValue: "naam",
      midwifeId: 1
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("http://localhost:8000/api/user?midwife=" + this.state.midwifeId)
      .then(res => {
        this.setState({ users: res.data, filteredUsers: res.data });
        res.data.map(e => {
          return this.getPatientData(e);
        });
      })
      .catch(e => console.log(e));
  };

  getPatientData(user) {
    axios
      .get(`http://localhost:8000/api/data?user=${user.id}`)
      .then(res => {
        var tempArr = [];
        res.data.map(key => {
          return tempArr.push(key);
        });
        tempArr = tempArr.reverse();

        let tempUsersArr = this.state.users;
        let index = tempUsersArr.indexOf(user);
        tempUsersArr[index].data = tempArr;
        this.setState({ users: tempUsersArr, filteredUsers: tempUsersArr });
      })
      .catch(e => console.log(e));
  }

  searchList(list, search) {
    search = search.split(" ").filter(i => i);
    return list.filter(x => {
      var contains = false;
      search.forEach(word => {
        if (
          x.first_name.toLowerCase().includes(word.toLowerCase()) ||
          x.last_name.toLowerCase().includes(word.toLowerCase())
        ) {
          contains = true;
        }
      });
      return contains;
    });
  }

  filterList = e => {
    const search = e.target.value;
    if (search !== "") {
      this.setState({ searchInput: search });
      var tempUserList = this.state.users;
      tempUserList = this.searchList(tempUserList, search);
      this.setState({ filteredUsers: tempUserList });
    } else {
      this.setState({ filteredUsers: this.state.users });
    }
  };

  sortList = e => {
    const value = e.target.value;
    this.setState({ dropdownValue: value });
    var tempUserList = this.state.filteredUsers;
    if (value === "naam") {
      tempUserList.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return 1;
        }
        if (a.first_name < b.first_name) {
          return -1;
        }
        return 0;
      });
    } else if (value === "id") {
      tempUserList.sort((a, b) => a.id - b.id);
    } else if (value === "datum") {
      tempUserList.sort(
        (a, b) => new Date(b.creation_date) - new Date(a.creation_date)
      );
    }
    this.setState({ filteredUsers: tempUserList });
  };

  addPatient() {
    console.log("Adding patient...");
  }

  render() {
    const dropdownOptions = ["naam", "id", "datum"];
    const xPos = `${this.state.dropdownValue.length * 0.7}rem`;

    return (
      <Wrapper>
        <TopBarWrapper>
          <SearchPatientInput
            onChange={this.filterList}
            placeholder="Zoek op naam, geboortedatum.."
          />
          <SortWrapper>
            Sorteren op:
            <Dropdown
              onChange={this.sortList}
              url={process.env.PUBLIC_URL + "../icons/chevrondownIcon.png"}
              xPos={xPos}
            >
              {dropdownOptions.map((e, index) => (
                <option key={index}>{e}</option>
              ))}
            </Dropdown>
          </SortWrapper>
          <BabyBloomButton onClick={this.addPatient}>
            Patient Toevoegen
          </BabyBloomButton>
        </TopBarWrapper>
        <HorizontalRule />
        <ContentWrapper>
          {this.state.filteredUsers.map((user, index) => (
            <UserCardWrapper key={index}>
              <Card user={user} data={user.data} />
            </UserCardWrapper>
          ))}
        </ContentWrapper>
      </Wrapper>
    );
  }
}
