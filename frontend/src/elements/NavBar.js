import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../globals";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Wrapper = styled.div`
  width: 5rem;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  overflow-x: hidden;
  background-image: linear-gradient(
    ${colors.atomicTangerine},
    ${colors.wildWatermelon} 65%
  );
`;

const LogoWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  text-align: center;
`;

const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  ${props =>
    props.highlighted === true && `background-color: rgba(169,169,169, 0.5);`}
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "/" };
  }

  componentDidMount() {
    let currentPath = this.props.location.pathname;
    this.setState({ active: currentPath });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      let currentPath = this.props.location.pathname;
      this.setState({ active: currentPath });
    }
  }

  renderIcon = (iconName, link, key) => {
    var highlighted = false;
    if (this.state.active.startsWith(link)) {
      highlighted = true;
    }
    return (
      <IconWrapper key={key} highlighted={highlighted}>
        <NavLink to={link}>
          <img
            src={process.env.PUBLIC_URL + `../icons/${iconName}.png`}
            width="100%"
            alt="LoGo"
          />
        </NavLink>
      </IconWrapper>
    );
  };

  render() {
    const iconNames = [
      ["iconMail", "/mail"],
      ["iconAgenda", "/agenda"],
      ["iconPatients", "/patient"],
      ["iconSettings", "/settings"]
    ];
    return (
      <Wrapper>
        <LogoWrapper>
          <NavLink to="/">
            <img
              src={process.env.PUBLIC_URL + "../logos/logoWhite.png"}
              height="100%"
              alt="LoGo"
            />
          </NavLink>
        </LogoWrapper>
        <IconsWrapper>
          {iconNames.map((name, index) =>
            this.renderIcon(name[0], name[1], index)
          )}
        </IconsWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(NavBar);
