import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainContainerQSO from "./MainContainerQSO";
// import { Flex } from "@chakra-ui/react";
// import LogQSOContainer from "./newqso/LogQSOContainer";

const QSORoutes = (props) => {
  const setDataError = props.setDataError;
  return (
    <Routes>
      <Route exact path="/enternewqso">
        {/*<LogQSOContainer />*/}
      </Route>
      <Route path="/" element={<MainContainerQSO setdataError={setDataError} />}></Route>
    </Routes>
  );
};

export default QSORoutes;
