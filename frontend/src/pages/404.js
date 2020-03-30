import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <p>
          Page{" "}
          {this.props.location.pathname.substring(
            1,
            this.props.location.pathname.length
          )}{" "}
          not found 4040404040404
        </p>
        <img
          src={process.env.PUBLIC_URL + "/404john.gif"}
          width="100%"
          alt="Can't load gif, still no page found yo"
        />
      </div>
    );
  }
}
