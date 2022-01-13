import React from "react";
import { Box, HStack, Link } from "@chakra-ui/react";

const NavBarLinksMenuQSO = () => {
  return (
    <>
      <Box>
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
      </Box>
    </>
  );
};

export default NavBarLinksMenuQSO;
