import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
// import LogQSOContainer from "./LogQSOContainer";
// import QSOHistoryContainer from "./QSOHistoryContainer";
// import QRZAPIContainer from "./QRZAPIContainer";

const NewQSOContainer = () => {
  return (
    <>
      <Grid
        position="absolute"
        templateRows="repeat(2)"
        templateColumns="repeat(3, 1fr)"
        gap={10}
        height="75%"
        width="90vw"
      >
        <GridItem id="log-new-qso" bg="#AACFDD" height="380px" width="775px">
          <span>Log New QSO</span>
        </GridItem>
        <GridItem id="qrz-api-info" bg="#AACFDD" width="443ppx" height="380px">
          <span>QRZ API Info </span>
        </GridItem>
        <GridItem id="qso-contact-history-table" bg="#AACFDD" colSpan={2} height="415px">
          <span>QSO Contact History</span>
        </GridItem>
      </Grid>
    </>
  );
};

export default NewQSOContainer;