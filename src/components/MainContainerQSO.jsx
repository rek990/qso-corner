import React, { useState, useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import LogbookContainer from "./logbook/LogbookContainer";
// import axiosInstance from "./authentication/authApi";

const MainContainerQSO = ({notes, setNotes}) => {
  // state variables
  // stateless variables
  //const setDataError = props.setDataError;


  // When the QSO log history has been established and stored in the database on the backend, a useEffect() will be needed to include a GET request that retrieves this data.
  return (
    <Flex
      position="absolute"
      bg="rgba(53, 98, 136, 0.6)"
      height="55%"
      width="75vw"
      justifyContent="center"
      alignItems="center"
    >
      <LogbookContainer notes={notes} setNotes={setNotes}/>
    </Flex>
  );
};

export default MainContainerQSO;
