import React from "react";
import {
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const UserDropdownMenu = (props) => {
  //let name = props.name;
  let callsign = "KO4KVG";
  let logout = props.logout;

  return (
    <>
      <HStack>
        <Menu id="dropdown-menu">
          <MenuButton
            id="user-menu-button"
            as={Button}
            style={{ right: 10 }}
            bg="#356288"
            _hover={{ bg: "#FE875D" }}
            _expanded={{ bg: "#FE875D" }}
            _active={{ bg: "#FE875D" }}
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
      </HStack>
    </>
  );
};

export default UserDropdownMenu;
