import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import DataElement from "./DataElement";
import { customScrollBar } from "../globals";

const Wrapper = styled.div`
  border: 1px solid #bebebe;
  border-radius: 10px;
  font-size: 8pt;
`;

const TitleBar = styled.div`
  background-color: ${props =>
    props.divergent ? "rgba(255, 153, 153, 0.2)" : "#F5F5F5"};
  padding: 0.5rem;
  height: 30%;
  border-radius: 10px 10px 0 0;
`;

const TitleTopWrapper = styled.div`
  display: flex;
`;

const ProfilePictureWrapper = styled.div`
  width: 20%;
  padding: 1em;
`;
const TitleTextWrapper = styled.div`
  width: 60%;
`;

const Name = styled.div``;
const LastMeeting = styled.div`
  color: grey;
`;
const TitleIconWrapper = styled.div`
  width: 20%;
  padding: 1em;
`;

const TitleBarButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleBarButton = styled(Button)`
  background-color: white;
  border-radius: 20px;
  border: 1px solid grey;
  width: 100%;
  ${props => props.margin && `margin: ${props.margin};`};
`;

const Timeline = styled.div`
  overflow: auto;
  ${customScrollBar};
  height: 200px;
`;

const BottomButtons = styled.div`
  border-top: 1px solid #d3d3d3;
`;

const BottomButton = styled(Button)`
  background-color: white;
  width: 50%;
  height: 2.5rem;
  border-radius: ${props => props.borderRadius && `${props.borderRadius};`};
  border: 0;
  ${props => props.borderLeft && `border-left: 1px solid #d3d3d3;`};
`;

const NavLinkSux = styled.div`
  width: ${props => (props.patientDetail ? "50%" : "100%")};
`;

const TextIcon = styled.img`
  margin: ${props => (props.margin ? props.margin : "0.5em")};
`;

const TitleBarButtonImpl = ({ iconString, text }) => {
  return (
    <TitleBarButton margin="0 0 0 1px">
      <TextIcon
        src={process.env.PUBLIC_URL + `../icons/${iconString}.png`}
        width="10%"
        alt="LoGo"
        margin="0 0.5rem"
      />
      {text}
    </TitleBarButton>
  );
};

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    const { user, data } = this.props;
    const icon = user.divergent_data
      ? "../icons/iconCross.png"
      : "../icons/iconCheck.png";

    return (
      <Wrapper>
        <TitleBar divergent={user.divergent_data}>
          <TitleTopWrapper>
            <ProfilePictureWrapper>
              <img
                src={process.env.PUBLIC_URL + "../icons/faceicon.png"}
                width="100%;"
                alt="LoGo"
              />
            </ProfilePictureWrapper>
            <TitleTextWrapper>
              <Name>
                {user.first_name}, {user.last_name}
              </Name>
              <LastMeeting>Laatste meeting op 12-3-2019</LastMeeting>
            </TitleTextWrapper>
            <TitleIconWrapper>
              <img
                src={process.env.PUBLIC_URL + icon}
                width="100%;"
                alt="LoGo"
              />
            </TitleIconWrapper>
          </TitleTopWrapper>
          <TitleBarButtonsWrapper>
            {this.props.patientDetail ? null : (
              <NavLinkSux>
                <NavLink to={"/patient/" + user.id}>
                  <TitleBarButtonImpl
                    iconString="iconData"
                    text="Data Overzicht"
                  />
                </NavLink>
              </NavLinkSux>
            )}
            <NavLinkSux patientDetail={this.props.patientDetail}>
              {this.props.patientDetail ? (
                <TitleBarButtonImpl iconString="iconPhone" text="Contact" />
              ) : (
                <NavLink to={"/nowhere"}>
                  <TitleBarButtonImpl iconString="iconPhone" text="Contact" />
                </NavLink>
              )}
            </NavLinkSux>
          </TitleBarButtonsWrapper>
        </TitleBar>
        <Timeline>
          {data && data.length > 0 ? (
            data.map((e, i) => (
              <DataElement key={i} index={data.length - i} data={e} />
            ))
          ) : (
            <DataElement>Geen data</DataElement>
          )}
        </Timeline>
        <BottomButtons>
          <BottomButton
            borderRadius="0 0 0 10px;"
            onClick={() => console.log("Left")}
          >
            <TextIcon
              src={process.env.PUBLIC_URL + "../icons/iconAgendaRed.png"}
              height="50%;"
              alt="LoGo"
            />
            Agenda
          </BottomButton>
          <BottomButton
            borderRadius="0 0 10px 0"
            borderLeft
            onClick={() => console.log("Right")}
          >
            <TextIcon
              src={process.env.PUBLIC_URL + "../icons/iconDownload.png"}
              height="50%;"
              alt="LoGo"
            />
            Download Data
          </BottomButton>
        </BottomButtons>
      </Wrapper>
    );
  }
}

export default Card;
