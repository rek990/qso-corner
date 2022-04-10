import React from "react";
import { Heading, Link } from "@chakra-ui/react";

const NavBarHeaderQSO = () => {
  return (
    <>
      <Heading
        fontStyle="normal"
        fontSize="25px"
        fontWeight="bold"
        color="#FE1100"
        size="md"
        paddingLeft="0.5em"
      >
        <Link as={Link} href="/">
          QSO Corner
        </Link>
      </Heading>
    </>
  );
};

export default NavBarHeaderQSO;
