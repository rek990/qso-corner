import React, { useState, useEffect } from "react";
import { Box, Flex, Image, chakra } from "@chakra-ui/react";
//import logo from "./logo.svg";
//import logo from "./HTs.svg";
//import "./App.css"; // most likely to be removed to style with Chakra UI instead
// import LoginFormQSO from "../src/components/authentication/LoginFormQSO";
import NavBarContainerQSO from "./components/navbarqso/NavBarContainerQSO";
import QSORoutes from "./components/QSORoutes";
import ErrorAlertQSO from "./components/alerts/ErrorAlertQSO";
import Logo from "./IMG_2755.JPG";
//import Logo from "../src/images/IMG_2755.PNG";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [dataError, setDataError] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  //const imageFilePath = "./IMG_2755.JPG";
  // The following useEffect() will be added once the backend is set up. Once set up, it should retrieve the value of the "refresh_token" key that is saved to the browser when the component renders for the first time.

  /*
    useEffect(() => {
      const refreshToken = localStorage.getItem("refresh_token");
      setAuthenticated(refreshToken);
    }, []);
    */

  return (
    <Flex className="App" height="100%" alignItems="center" justifyContent="center">
      <NavBarContainerQSO currentUser={currentUser} setCurrentUser={setCurrentUser} z-index={1} />
      {dataError ? <ErrorAlertQSO /> : null}
      <QSORoutes setDataError={setDataError} />
      <Image src={Logo} fit="fill" zIndex={-1} />
    </Flex>
  );
};

export default App;
