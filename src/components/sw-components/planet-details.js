import React from "react";
import ItemDetails, { Record } from "../item-details";
import withSwapi from "../hoc-helpers/with-swapi";


const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props} field="planet">
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="Rotation period:" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPlanet,
    getImage: swapi.getPlanetImage
  };
};

export default withSwapi(PlanetDetails, mapMethodsToProps);