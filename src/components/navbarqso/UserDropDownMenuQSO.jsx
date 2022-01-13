import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem, MenuDivider, Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const UserDropdownMenu = (props) => {
  //let name = props.name;
  let callsign = "KO4KVG";
  let logout = props.logout;

  return (
    <>
      <Menu id="dropdown-menu">
        <MenuButton
          id="user-menu-button"
          as={Button}
          marginRight="0.5rem"
          bg="#FE1100"
          color="#AACFDD"
          _hover={{ bg: "#356288" }}
          _expanded={{ bg: "#356288" }}
          _active={{ bg: "#356288" }}
          rightIcon={<ChevronDownIcon />}
        >
          {" "}
          {/*need to determine why _hover and _active or _expanded does not work*/}
          {callsign}
        </MenuButton>
        <MenuList minWidth="100px">
          <MenuItem fontSize="14px">Profile Settings</MenuItem>
          {/*<MenuItem fontSize="14px">Subscription Settings</MenuItem>*/}
          <MenuDivider />
          <MenuItem fontSize="14px" onClick={() => logout()}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserDropdownMenu;
