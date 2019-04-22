import React from "react";
import ItemDetails, { Record } from "../item-details";
import withSwapi from "../hoc-helpers/with-swapi";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props} field="starship">
      <Record field="length" label="Length:" />
      <Record field="costInCredits" label="Cost:" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getStarship,
    getImage: swapi.getStarshipImage
  };
};

export default withSwapi(StarshipDetails, mapMethodsToProps);