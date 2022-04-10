import React from "react";
import { HStack, Link, Spacer } from "@chakra-ui/react";

const NavBarLinksMenuQSO = () => {
  return (
    <>
      <HStack spacing={8}>
        <Link as={Link} href="/" fontWeight="bold">
          Main
        </Link>
        <Spacer />
        <Link as={Link} href="/enternewqso" fontWeight="bold">
          Enter New QSO
        </Link>
      </HStack>
    </>
  );
};

export default NavBarLinksMenuQSO;
