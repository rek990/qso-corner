import React from "react";
import { Heading } from "@chakra-ui/react";

const NavBarHeaderQSO = () => {
  return (
    <>
      <Heading
        fontStyle="normal"
        fontSize="25px"
        fontWeight="bold"
        display="flex"
        color="#FE1100"
        size="md"
        paddingLeft="0.5em"
      >
        QSO Corner
      </Heading>
    </>
  );
};

export default NavBarHeaderQSO;
