import React from "react";
import { Route, Routes } from "react-router-dom";

import AlertDoc from "../../documentation/Alert/AlertDoc";
import AvatarDoc from "../../documentation/Avatar/AvatarDoc";
import BadgeDoc from "../../documentation/Badge/BadgeDoc";
import ButtonDoc from "../../documentation/Button/ButtonDoc";
import CardDoc from "../../documentation/Card/CardDoc";
import HeadingDoc from "../../documentation/Heading/HeadingDoc";
import ImageDoc from "../../documentation/Image/ImageDoc";
import Search from "../../InAppComponents/Search/Search";

import SideBar from "../Sidebar/Sidebar";
import TextDoc from "../../documentation/Text/TextDoc";

import "./DocLayout.css";

function DocLayout() {
  return (
    <div className="page">
      <Search />
      <div className="layout">
        <SideBar />
        <div className="each">
          <Routes>
            <Route path="/avatar" element={<AvatarDoc />} />
            <Route path="/alert" element={<AlertDoc />} />
            <Route path="/badge" element={<BadgeDoc />} />
            <Route path="/button" element={<ButtonDoc />} />
            <Route path="/card" element={<CardDoc />} />
            <Route path="/heading" element={<HeadingDoc />} />
            <Route path="/text" element={<TextDoc />} />
            <Route path="/image" element={<ImageDoc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default DocLayout;
