import React from "react";
import { Heading, Text, Flex, HStack, VStack, Box } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const QRZAPIContainer = () => {
  /*fetch("https://logbook.qrz.com/api")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });*/
  return (
    <>
      <Box boxSizing="border-box" paddingTop="3%" paddingLeft="5%" float="left">
        <Heading size="lg">John Doe</Heading>
        <Text>123 Main Street</Text>
        <Text>Anytown, GA 12345</Text>
        <Text> United States of America</Text>
      </Box>
      <Box boxSizing="border-box" paddingTop="3%" paddingRight="5%" float="right">
        <Heading size="sm">General Class</Heading>
      </Box>
    </>
  );
};

export default QRZAPIContainer;
