import React from "react";
import { Heading, Text, Flex, HStack, VStack } from "@chakra-ui/react";

const QRZAPIContainer = () => {
  return (
    <>
      <HStack spacing={5} padding="1%">
        <Heading size="lg">John Doe</Heading>
        <Heading size="xs">General Class</Heading>
      </HStack>
      <VStack textAlign="start">
        <Text>123 Main Street</Text>
        <Text>Anytown, GA 12345</Text>
        <Text> United States of America</Text>
      </VStack>
    </>
  );
};

export default QRZAPIContainer;
