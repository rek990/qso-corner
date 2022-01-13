import React, { useState, useEffect } from "react";
import { Box, Flex, Image, chakra } from "@chakra-ui/react";
//import logo from "./logo.svg";
//import logo from "./HTs.svg";
//import "./App.css"; // most likely to be removed to style with Chakra UI instead
// import LoginFormQSO from "../src/components/authentication/LoginFormQSO";
import NavBarContainerQSO from "./components/navbarqso/NavBarContainerQSO";
import QSORoutes from "./components/QSORoutes";
import ErrorAlertQSO from "./components/alerts/ErrorAlertQSO";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [dataError, setDataError] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const imageFilePath = "./IMG_2755.PNG";
  // The following useEffect() will be added once the backend is set up. Once set up, it should retrieve the value of the "refresh_token" key that is saved to the browser when the component renders for the first time.

  /*
    useEffect(() => {
      const refreshToken = localStorage.getItem("refresh_token");
      setAuthenticated(refreshToken);
    }, []);
    */

  return (
    <Flex className="App" height="100%" bg="#356288" justifyContent="center" alignItems="center">
      <span>QSO Corner</span>
      <NavBarContainerQSO currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <chakra.main>
        {dataError ? <ErrorAlertQSO /> : null}
        <QSORoutes setDataError={setDataError} />
      </chakra.main>
    </Flex>
  );
};

export default App;
