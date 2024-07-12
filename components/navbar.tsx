"use client";
// Import necessary modules
import { useEffect, useState, useRef } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Orbitronn } from '@/config/fonts';
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { DiscordIcon } from './icons';
import { NavItem } from '@/config/types';

// Import admins.json (replace with actual path)
import admins from '../public/admins.json';

// Define the Navbar component
export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user.email);
      } else {
        setIsLoggedIn(false);
        setUserEmail('');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUserEmail('');
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  // Function to check if user's email is in admins.json
  const isAdmin = () => {
    return admins.admins.includes(userEmail);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <div className={Orbitronn.className}>
            <p className="font-bold text-inherit text-[25px]">CIIE</p>
          </div>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item: NavItem) => (
            <NavbarItem key={item.href}>
              {isLoggedIn ? (
                isAdmin() || item.label === "Class-Recordings" || item.label === "Quiz"  || item.label === "Score Board"  || item.label === "Quiz" || item.label === "Notes" ? (
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                ) : null
              ) : null}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          {!isLoggedIn && (
            <Button color="primary" variant="ghost" className="ml-3" as={Link} href="/login">
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navMenuItems.map((item: NavItem, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextLink
              className={clsx("w-full", linkStyles({ color: "foreground" }))}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
        {!isLoggedIn && (
          <NavbarMenuItem>
            <NextLink
              className={clsx("w-full", linkStyles({ color: "foreground" }))}
              href="/login"
            >
              Login
            </NextLink>
          </NavbarMenuItem>
        )}
        {!isLoggedIn && (
          <NavbarMenuItem>
            <NextLink
              className={clsx("w-full", linkStyles({ color: "foreground" }))}
              href="/sign-up"
            >
              Sign Up
            </NextLink>
          </NavbarMenuItem>
        )}
      </NavbarMenu>

      {isLoggedIn && (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full text-white font-bold"
          >
            {userEmail.charAt(0).toUpperCase()}
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
            >
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-black hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </NextUINavbar>
  );
};
