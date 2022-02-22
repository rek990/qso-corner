import React from "react";
import { Input } from "@chakra-ui/react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <>
      <Input
        color="black"
        border="2px solid"
        borderColor="#FE875D"
        borderRadius="6px"
        bg="#C8E0E9"
        focusBorderColor="#356288"
        errorBorderColor="#FE1100"
        placeholder="Search"
        size="sm"
        width="20vw"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </>
  );
};

export default GlobalFilter;
