import React, { useMemo, useContext } from "react";
import { users } from "../../Data/users";
import "./Page1.scss";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { ThemeContext } from "../../Theme/ThemeContext";

export default function Page1() {
  const highlightUser = useMemo(() => {
    return _getHighlightUser(users);
  }, []);

  const _highlight_arrowLeft = useMemo(() => {
    return _hightlightMoveLeft;
  }, []);

  const _highlight_arrowRight = useMemo(() => {
    return _hightlightMoveRight;
  }, []);

  const { darkMode } = useContext(ThemeContext);
  return (
    <div id={darkMode ? "theme-dark" : "theme-light"}>
      <div className="Page1">
        {/* Hightlight */}
        <div className="users-highlight-style">
          <FaArrowCircleLeft
            className="arrowIcon-left"
            onClick={_highlight_arrowLeft}
          />
          <FaArrowCircleRight
            className="arrowIcon-right"
            onClick={_highlight_arrowRight}
          />
          <div className="users-container">
            {highlightUser?.map((user, i) => {
              return (
                <div className="user-card" key={user.cell}>
                  <div className="user-thumbnail-container">
                    <img
                      className="user-thumbnail"
                      src={user.picture.medium}
                      alt="user thumbnail"
                    />
                  </div>
                  <div className="user-name">
                    <div className="title">{user.name.title}.</div>
                    <div className="first">{user.name.first}</div>
                    <div className="last">{user.name.last}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Page style */}
        <div className="users-page-style">
          <div className="users-container">
            {users?.map((user, i) => {
              return (
                <div className="user-card" key={user.cell}>
                  <div className="user-thumbnail-container">
                    <img
                      className="user-thumbnail"
                      src={user.picture.large}
                      alt="user thumbnail"
                    />
                  </div>
                  <div className="user-name">
                    <div className="title">{user.name.title}.</div>
                    <div className="first">{user.name.first}</div>
                    <div className="last">{user.name.last}</div>
                  </div>
                  <div className="user-info">
                    <div>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</div>
                    <div>{user.gender}</div>
                    <div>{user.location.country}</div>
                    <div>{user.phone}</div>
                    <div>{user.email}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

function _getHighlightUser(items) {
  let hightlightItems = [];
  for (let i = 0; i < items.length; i++) {
    if (hightlightItems.length > 50) break;
    const randNum = Math.floor(Math.random() * 100);
    const randUser = items[randNum];
    const hasUser = hightlightItems.some((item) => item.cell === randUser.cell);
    if (!hasUser) hightlightItems.push(randUser);
  }
  return hightlightItems;
}

function _hightlightMoveLeft() {
  const hightlightContainer =
    document.getElementsByClassName("users-container")[0];

  hightlightContainer.scrollLeft -= 2000;
}
function _hightlightMoveRight() {
  const hightlightContainer =
    document.getElementsByClassName("users-container")[0];

  hightlightContainer.scrollLeft += 2000;
}
