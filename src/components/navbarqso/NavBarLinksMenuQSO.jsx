import React from "react";
import { Flex, HStack, Link, Spacer } from "@chakra-ui/react";

const NavBarLinksMenuQSO = () => {
  return (
    <>
      <HStack spacing={8}>
        <Link
          as={Link}
          href="/"
          fontStyle="normal"
          fontWeight="bold"
          display="flex"
          alignItems="center"
        >
          Main
        </Link>
        <Spacer />
        <Link
          as={Link}
          href="/enternewqso"
          fontStyle="normal"
          fontWeight="bold"
          display="flex"
          alignItems="center"
        >
          Enter New QSO
        </Link>
      </HStack>
    </>
  );
};

export default NavBarLinksMenuQSO;
