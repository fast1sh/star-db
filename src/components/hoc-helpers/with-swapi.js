import React from "react";
import { SwapiConsumer } from "../swapi-service-context/swapi-service-context";

const withSwapi = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiConsumer>
        {
          (swapi) => {
            const swapiProps = mapMethodsToProps(swapi);
            return (
              <Wrapped {...props} {...swapiProps} />
            );
          }
        }
      </SwapiConsumer>
    );
  }
};

export default withSwapi;