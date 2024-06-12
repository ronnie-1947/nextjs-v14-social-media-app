import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Input} from "@nextui-org/react";
import Link from "next/link";
import AuthContent from "./s_authcontent";
import SearchInput from "./search-input";


function NavigationBar() {
  
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href='/' className="font-bold">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <SearchInput/>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">        
          <AuthContent/>
      </NavbarContent>
    </Navbar>
  )
}

export default NavigationBar;
