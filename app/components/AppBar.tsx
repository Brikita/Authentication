import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import React from 'react'
import SigninButton from "./SigninButton";
import Link from "next/link";

type Props = {}

const AppBar = (props: Props) => {
  return (
      <Navbar isBordered>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="hover:bg-sky-500 transition-colors" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SigninButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  
  )
}

export default AppBar