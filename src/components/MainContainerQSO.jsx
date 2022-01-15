import React, { useState, useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import LogbookContainer from "./logbook/LogbookContainer";
// import axiosInstance from "./authentication/authApi";

const MainContainerQSO = (props) => {
  // state variables
  // stateless variables
  //const setDataError = props.setDataError;

  // When the QSO log history has been established and stored in the database on the backend, a useEffect() will be needed to include a GET request that retrieves this data.
  return (
    <Flex
      position="absolute"
      height="50%"
      width="75vw"
      bg="#FE1100"
      justifyContent="center"
      alignItems="center"
    >
      <LogbookContainer />
    </Flex>
  );
};

export default MainContainerQSO;
