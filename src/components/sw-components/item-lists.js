import React from "react";
import ItemList from "../item-list";
import { withData, withSwapi } from "../hoc-helpers";

const wrapper = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
};
const renderPersonList = wrapper(ItemList, (item) => `${item.name} (${item.gender}, ${item.birthYear})`);
const renderPlanetList = wrapper(ItemList, (item) => `${item.name}`);
const renderStarshipList = wrapper(ItemList, (item) => `${item.name}`);

const mapPersonMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllStarships
  };
};

const PeopleList = withSwapi(
                    withData(renderPersonList), 
                    mapPersonMethodsToProps);
const PlanetList = withSwapi(
                    withData(renderPlanetList),
                    mapPlanetMethodsToProps);
const StarshipList = withSwapi(
                      withData(renderStarshipList),
                      mapStarshipMethodsToProps);

export { PeopleList, PlanetList, StarshipList };