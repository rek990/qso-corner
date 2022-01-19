import React from "react";
import { Input } from "@chakra-ui/react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <>
      <Input
        color="black"
        border="1px solid"
        borderColor="#356288"
        borderRadius="15px"
        bg="#AACFDD"
        focusBorderColor="#356288"
        errorBorderColor="#FE1100"
        placeholder="Search"
        size="sm"
        width="50vw"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </>
  );
};

export default GlobalFilter;
