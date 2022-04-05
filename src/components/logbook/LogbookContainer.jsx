import React from "react";
import LogbookTableAPI from "./LogbookTableAPI";
// import LogbookTable from "./LogbookTable";
import { VStack, Flex, Spacer, Heading } from "@chakra-ui/react";

const LogbookContainer = ({notes, setNotes}) => {
  return (
    <Flex direction="row" width="100%">
      <VStack>
        <Spacer />
        <Flex
          width="30vw"
          height="7vh"
          bg="#FE875D"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" color="#356288">
            QSO Corner
          </Heading>
        </Flex>
        <LogbookTableAPI notes={notes} setNotes={setNotes}/>
      </VStack>
    </Flex>
  );
};

export default LogbookContainer;

{
  /*<LogbookTable />*/
}
