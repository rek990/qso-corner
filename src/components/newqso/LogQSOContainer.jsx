import React from "react";
import {
  Grid,
  GridItem,
  Header,
  VStack,
  HStack,
  Flex,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";

const LogQSOContainer = () => {
  return (
    <>
      <Grid
        className="log-qso-container-grid"
        position="absolute"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
      >
        <GridItem id="call-sign-input">
          <Input
            placeholder="Call Sign"
            size="sm"
            borderRadius="6px"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
          ></Input>
        </GridItem>
        <GridItem id="date-input">
          <Input
            placeholder="Date"
            size="sm"
            borderRadius="6px"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
          ></Input>
        </GridItem>
        <GridItem id="time-input">
          <Input
            placeholder="Time (UTC)"
            size="sm"
            borderRadius="6px"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
          ></Input>
        </GridItem>
        <GridItem id="band-dropdown-menu">
          <Select
            placeholder="Band"
            size="sm"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
            borderRadius="6px"
          >
            <option>160m</option>
            <option>80m</option>
            <option>40m</option>
            <option>30m</option>
            <option>20m</option>
            <option>17m</option>
            <option>15m</option>
            <option>12m</option>
            <option>10m</option>
            <option>6m</option>
            <option>2m</option>
            <option>70cm</option>
          </Select>
        </GridItem>
        <GridItem id="mode-dropdown-menu">
          <Select
            placeholder="Mode"
            size="sm"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
            borderRadius="6px"
          >
            <option>SSB</option>
            <option>CW</option>
            <option>AM</option>
            <option>FM</option>
            <option>RTTY</option>
            <option>PSK31</option>
            <option>DSTAR</option>
          </Select>
        </GridItem>
        <GridItem id="frequency-input">
          <Select
            placeholder="Frequency"
            size="sm"
            borderRadius="6px"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
          >
            <option>1.8 MHz</option>
            <option>3.5 MHz</option>
            <option>7 MHz</option>
            <option>10.1 MHz</option>
            <option>14 MHz</option>
            <option>18 MHz</option>
            <option>21 MHz</option>
            <option>24 MHz</option>
            <option>28 MHz</option>
            <option>50 MHz</option>
            <option>144 MHz</option>
            <option>420 MHz</option>
          </Select>
        </GridItem>
        <GridItem id="power-input">
          <Input
            placeholder="Power (W)"
            size="sm"
            borderRadius="6px"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
          ></Input>
        </GridItem>
        <GridItem id="sent-signal-input">
          <Input
            placeholder="Sent"
            size="sm"
            borderRadius="6px"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
          ></Input>
        </GridItem>
        <GridItem id="received-signal-input">
          <Input
            placeholder="Received"
            size="sm"
            borderRadius="6px"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
          ></Input>
        </GridItem>
        <GridItem id="notes">
          <Textarea
            placeholder="Notes"
            size="sm"
            borderRadius="6px"
            border="2px solid"
            borderColor="#FE875D"
            bg="white"
            focusBorderColor="teal.500"
            errorBorderColor="red.400"
          ></Textarea>
        </GridItem>
        <GridItem id="submit-button">
          {" "}
          <Button type="submit" size="sm" bg="#FE875D" color="white">
            Submit
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default LogQSOContainer;
