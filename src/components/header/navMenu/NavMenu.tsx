import React from "react";
import { useLocation, Link } from "react-router-dom";
import { NavMenuWrapper, NavItem } from "./NavMenuStyles";

const navItems = [
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "RESUME", path: "/resume" },
  { name: "ABOUT US", path: "/aboutus" },
  { name: "INTERVIEW", path: "/interview" },
  { name: "FEED", path: "/feed" },
  { name: "PROJECT", path: "/projects" },
];

const NavMenu: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/projects") {
      return location.pathname.startsWith("/projects");
    }
    return location.pathname === path;
  };

  return (
    <NavMenuWrapper>
      {navItems.map(({ name, path }) => (
        <NavItem key={path} to={path} $active={isActive(path)}>
          {name}
        </NavItem>
      ))}
    </NavMenuWrapper>
  );
};

export default NavMenu;
