import React, { useContext } from "react";
import "./Navigation.scss";
import { FaHome } from "react-icons/fa";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { linkItems } from "../../Data/navigationLinkList";
import DarkModeButton from "../../Theme/ThemeButton";
import { ThemeContext } from "../../Theme/ThemeContext";

export default function Navigation() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div id={darkMode ? "theme-dark" : "theme-light"}>
      <div className="navbar">
        {/* left */}
        <div className="nav-left">
          <div className="brand">
            <a href="/#">
              <FaHome className="nav-icon" />
            </a>
          </div>
        </div>

        {/* mid */}
        <div className="nav-mid">
          <InputGroup>
            <FormControl placeholder="Type something and search" />
            <Button className="nav-searchButton">Search</Button>
          </InputGroup>
        </div>

        {/* right */}
        <div className="nav-right">
          <div className="linkList">
            {linkItems.length > 0 &&
              linkItems.map((item) => {
                return (
                  <a className="linkItem" href={item.link} key={item.title}>
                    {item.title}
                  </a>
                );
              })}
            <div className="linkItem">
              <DarkModeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
