import React from "react";
import Row from "../row";
import { PeopleList } from "../sw-components/item-lists";
import { withRouter } from "react-router-dom";
import PersonDetails from "../sw-components/person-details";

const PeoplePage = ({ history, match }) => {
  const {id} = match.params;

  return (
    <Row left={<PeopleList onItemSelected={(id) => history.push(id)} />}
         right={<PersonDetails selectedItemId={id}/>} />
  );
};

export default withRouter(PeoplePage);