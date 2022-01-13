import React from "react";
import { Image } from "@chakra-ui/react";
import Logo from "../../IMG_2755.JPG";

const NavBarLogo = (props) => {
  return (
    <>
      <Image
        boxSize="50px"
        className="img-responsive"
        src={Logo}
        alt="logo"
        id="navbar-branding-logo"
        fit="fill"
        marginLeft="0.5em"
        marginBottom="0.5em"
        marginRight="0.5em"
        paddingTop="0.5em"
        paddingBottom="0.5em"
      />
    </>
  );
};

export default NavBarLogo;
