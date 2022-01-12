import React from "react";
import { Image } from "@chakra-ui/react";
import Logo from "../../HTs.svg";

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
        marginLeft="10px"
        paddingRight="10px"
      />
    </>
  );
};

export default NavBarLogo;
