import React, { Component } from "react";
import Row from "../row";
import { StarshipList } from "../sw-components/item-lists";
import StarshipDetails from "../sw-components/starship-details";

export default class StarshipsPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedItemId: null
    }
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItemId: id
    })
  }

  render() {
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails selectedItemId={this.state.selectedItemId} />} />
    );
  }
};