import React from "react";
import ItemDetails, { Record } from "../item-details";
import withSwapi from "../hoc-helpers/with-swapi";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} field = "person">
      <Record field="gender" label="Gender:" />
      <Record field="birthYear" label="Birth year:" />
      <Record field="eyeColor" label="Eye color:" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPerson,
    getImage: swapi.getPersonImage
  };
};

export default withSwapi(PersonDetails, mapMethodsToProps);