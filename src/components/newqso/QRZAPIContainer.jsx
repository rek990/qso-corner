import React from "react";
import { Heading, Text, Flex, HStack, VStack } from "@chakra-ui/react";

const QRZAPIContainer = () => {
  return (
    <>
      <HStack spacing={10} textAlign="start">
        <VStack>
          <Heading size="lg" textAlign="start">
            John Doe
          </Heading>
          <Text>123 Main Street Anytown, GA 12345 United States of America</Text>
        </VStack>
        <Heading size="xs">General Class</Heading>
      </HStack>
    </>
  );
};

export default QRZAPIContainer;
