import React from "react";
import { Routes, Route } from "react-router-dom";
//import MainContainerQSO from "./MainContainerQSO";
//import LogQSOContainer from "./newqso/LogQSOContainer";

const QSORoutes = (props) => {
  const setDataError = props.setDataError;
  return (
    <Routes>
      <Route exact path="/enternewqso">
        {/*<LogQSOContainer />*/}
      </Route>
      <Route path="/">{/*<MainContainerQSO setDataError={setDataError} />*/}</Route>
    </Routes>
  );
};

export default QSORoutes;
