import React from "react"
import "./Navigation.css"
import { FaHome } from "react-icons/fa"
import { Button, FormControl, InputGroup } from "react-bootstrap"
import { linkItems } from "../../Data/navigationLinkList"
import DarkModeButton from "../../Theme/ThemeButton"

export default function Navigation() {
  return (
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
              )
            })}
          <div className="linkItem">
            <DarkModeButton />
          </div>
        </div>
      </div>
    </div>
  )
}
