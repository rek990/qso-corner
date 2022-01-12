import React from "react";
import { HStack, Flex } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import NavBarHeaderQSO from "./NavBarHeaderQSO";
// import NavBarLinksMenuQSO from "./NavBarLinksMenuQSO";
import NavBarImg from "./NavBarImg";

const NavBarContainerQSO = () => {
  return (
    <>
      <Flex
        width="100%"
        height="48px"
        position="absolute"
        top="0px"
        bg="#AACFDD"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        flexWrap="wrap"
        margin="auto"
      >
        <HStack>
          <NavBarImg />
          {/*
<NavBarHeaderLLF />
               <NavBarLinksMenuLLF />*/}
        </HStack>
      </Flex>
    </>
  );
};

export default NavBarContainerQSO;
