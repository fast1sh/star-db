import React from "react";
import Row from "../row";
import { withRouter } from "react-router-dom";
import { PlanetList } from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";

const PlanetsPage = ({ history, match }) => {
  const {id} = match.params;

  return (
    <Row
      left={<PlanetList onItemSelected={(id) => history.push(id)} />}
      right={<PlanetDetails selectedItemId={id} />} />
  );
};

export default withRouter(PlanetsPage);