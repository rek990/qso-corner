import React from "react";
import { HStack, Flex, Spacer } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import NavBarHeaderQSO from "./NavBarHeaderQSO";
import NavBarLinksMenuQSO from "./NavBarLinksMenuQSO";
import UserDropdownMenuQSO from "./UserDropDownMenuQSO";
//import NavBarImg from "./NavBarImg";

const NavBarContainerQSO = () => {
  // Once authentication is set up, logic should be implemented to show certain menu options when a user is logged in.

  return (
    <>
      <Flex
        width="100%"
        height="7vh"
        position="absolute"
        top="0vh"
        bg="#AACFDD"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        flexWrap="wrap"
        margin="auto"
      >
        <Flex direction="row" width="100%" alignItems="center">
          <NavBarHeaderQSO />
          <Spacer />
          <NavBarLinksMenuQSO />
          <Spacer />
          <UserDropdownMenuQSO />
        </Flex>
      </Flex>
    </>
  );
};

export default NavBarContainerQSO;
