import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}

export default Landing;
