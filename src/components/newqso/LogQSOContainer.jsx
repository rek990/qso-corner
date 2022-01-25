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
      <Grid position="absolute" templateRows="repeat(5, 1fr)" templateColumns="repeat(4, 1fr)">
        <GridItem id="call-sign-input">
          <Input placeholder="Call Sign"></Input>
        </GridItem>
        <GridItem id="date-input">
          <Input placeholder="Date"></Input>
        </GridItem>
        <GridItem id="time-input">
          <Input placeholder="Time (UTC)"></Input>
        </GridItem>
        <GridItem id="band-dropdown-menu">
          <Select>
            <option>135 kHz</option>
            <option>472 kHz</option>
            <option>1.8 MHz</option>
            <option>3.5 MHz</option>
            <option>5.3 MHz</option>
            <option>7 MHz</option>
            <option>10.1 MHz</option>
            <option>14 MHz</option>
            <option>18 MHz</option>
            <option>21 MHz</option>
            <option>24 MHz</option>
            <option>28 MHz</option>
            <option>50 MHz</option>
            <option>144 MHz</option>
            <option>222 MHz</option>
            <option>420 MHz</option>
            <option>902 MHz</option>
            <option>1240 MHz</option>
          </Select>
        </GridItem>
        <GridItem id="mode-dropdown-menu">
          <Select></Select>
        </GridItem>
        <GridItem id="frequency-input">
          <Select placeholder="Frequency"></Select>
        </GridItem>
        <GridItem id="power-input">
          <Input placeholder="Power (W)"></Input>
        </GridItem>
        <GridItem id="sent-signal-input">
          <Input placeholder="Sent"></Input>
        </GridItem>
        <GridItem id="received-signal-input">
          <Input placeholder="Received"></Input>
        </GridItem>
        <GridItem id="notes">
          <Textarea placeholder="Notes"></Textarea>
        </GridItem>
        <GridItem id="submit-button">
          <Button type="submit">Submit</Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default LogQSOContainer;
