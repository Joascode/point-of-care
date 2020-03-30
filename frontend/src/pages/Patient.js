import React, { Component } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";
import axios from "axios";
import { Button, BabyBloomButton } from "../elements/Button";
import Notes from "../elements/Notes";
import { Row } from "../elements/Row";
import Card from "../elements/Card";
import Graph from "../elements/Graph";
import { NavLink } from "react-router-dom";
import { customScrollBar } from "../globals";

const ModalSubmitButton = styled(Button)`
  float: right;
`;

const CardWrapper = styled.div`
  width: 33.3%;
`;

const NotesWrapper = styled.div`
  width: 33.3%;
`;

const NotesContent = styled.div`
  max-height: 300px;
  overflow: auto;
  border: 1px solid #bebebe;
  border-radius: 10px;
  height: 80%;
  ${customScrollBar};
`;

const EchoWrapper = styled.div`
  height: 300px;
  width: 66.6%;
  display: flex;
  justify-content: center;
`;

const AddNoteWrapper = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
`;

const NotesHeader = styled.div`
  text-align: center;
`;

class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      noteInput: "",
      notes: [],
      patientId: this.props.match.params.id,
      hasResults: false,
      user: null
    };
    this.notesRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.submitModal = this.submitModal.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getNotes();
  }

  onOpenModal = () => {
    this.setState({ showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleChange(e) {
    this.setState({ noteInput: e.target.value });
  }

  keyPress(e, callback) {
    var keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      callback(e);
    }
  }

  getNotes() {
    axios
      .get(`http://localhost:8000/api/note/?patientId=${this.state.patientId}`)
      .then(res => {
        if (res.data && res.data.length) {
          if (res.data.length > 1) {
            this.setState({ hasResults: true });
          }
          var tempArr = [];
          res.data.map(e => {
            return tempArr.push(e);
          });
          tempArr.sort((a, b) => b.id - a.id);
          this.setState({
            notes: tempArr,
            showComments: true
          });
        }
      })
      .catch(e => console.error(e));
  }

  submitModal(e) {
    e.preventDefault();
    const input = this.state.noteInput;
    axios({
      method: "post",
      url: "http://localhost:8000/api/note/",
      data: {
        text: input,
        patient: this.state.patientId,
        midwife: 3
      }
    }).then(res => {
      var tempArr = [res.data, ...this.state.notes]; // Put new note in front of the array
      this.setState({ notes: tempArr, noteInput: "" });
    });
    this.notesRef.current.scrollTop = 0;
    this.onCloseModal();
  }

  getUser() {
    axios
      .get("http://localhost:8000/api/user/" + this.state.patientId)
      .then(res => {
        this.setState({ user: res.data });
        this.getPatientData(res.data);
      })
      .catch(e => console.log(e));
  }

  getPatientData(user) {
    axios
      .get(`http://localhost:8000/api/data?user=${user.id}`)
      .then(res => {
        var tempArr = [];
        res.data.map(key => {
          return tempArr.push(key);
        });
        tempArr = tempArr.reverse();

        let tempUser = this.state.user;
        tempUser.data = tempArr;
        this.setState({ user: tempUser });
      })
      .catch(e => console.log(e));
  }

  render() {
    const user = this.state.user;
    if (user === null) {
      return <p>Patient niet gevonden</p>;
    }
    return (
      <div>
        <Modal
          open={this.state.showModal}
          onClose={this.onCloseModal}
          center
          little
        >
          <form>
            <br />
            <p>Voer hier een nieuwe notitie in</p>
            <textarea
              onChange={this.handleChange}
              onKeyDown={e => this.keyPress(e, this.submitModal)}
            />
            <ModalSubmitButton>Voeg toe!</ModalSubmitButton>
          </form>
        </Modal>
        <Row>
          <NavLink to="/patient">&#8249; Terug naar overzicht</NavLink>
        </Row>
        <Row>
          <CardWrapper>
            <Card patientDetail user={user} data={user.data} />
          </CardWrapper>
          <Graph patientId={this.state.patientId} />
        </Row>
        <Row>
          <NotesWrapper>
            <NotesHeader>Notities</NotesHeader>
            <NotesContent ref={this.notesRef}>
              <Notes
                notes={this.state.notes}
                alertParent={notes => this.setState({ notes: notes })}
              />
            </NotesContent>
            <AddNoteWrapper>
              <BabyBloomButton onClick={this.onOpenModal}>
                Nieuwe notitie
              </BabyBloomButton>
            </AddNoteWrapper>
          </NotesWrapper>
          <EchoWrapper>
            <img
              src={process.env.PUBLIC_URL + "../echo.jpeg"}
              height="100%;"
              alt="Foto van zwangerscahp ofzo"
            />
          </EchoWrapper>
        </Row>
      </div>
    );
  }
}

export default Patient;
