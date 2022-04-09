import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainContainerQSO from "./MainContainerQSO";
import NewQSOContainer from "./newqso/NewQSOContainer";

const QSORoutes = (props) => {
  const [notes, setNotes] = useState("");
  const [renderedNotes, setRenderedNotes] = useState("");
  const setDataError = props.setDataError;

  return (
    <Routes>
      <Route exact path="/enternewqso" element={<NewQSOContainer notes={notes} setNotes={setNotes} renderedNotes={renderedNotes} setRenderedNotes={setRenderedNotes}/>}></Route>
      <Route path="/" element={<MainContainerQSO setdataError={setDataError} notes={notes} setNotes={setNotes} renderedNotes={renderedNotes} setRenderedNotes={setRenderedNotes}/>}></Route>
    </Routes>
  );
};

export default QSORoutes;
