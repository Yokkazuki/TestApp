import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Container.scss"
import Homepage from "./Homepage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function Container() {
  return (
    <div className="Container">
      <Routes>
        <Route index path="/Homepage" element={<Homepage />} />
        <Route exact path="/Page1" element={<Page1 />} />
        <Route exact path="/Page2" element={<Page2 />} />
        <Route exact path="/Page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}
