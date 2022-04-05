import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainContainerQSO from "./MainContainerQSO";
// import { Flex } from "@chakra-ui/react";
import NewQSOContainer from "./newqso/NewQSOContainer";

const QSORoutes = (props) => {
  const [notes, setNotes] = useState("");
  const setDataError = props.setDataError;

  return (
    <Routes>
      <Route exact path="/enternewqso" element={<NewQSOContainer notes={notes} setNotes={setNotes}/>}></Route>
      <Route path="/" element={<MainContainerQSO setdataError={setDataError} notes={notes} setNotes={setNotes} />}></Route>
    </Routes>
  );
};

export default QSORoutes;
