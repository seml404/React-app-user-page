import React from "react";

export default function HeaderMain({ userInfo }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-left">
            <img className="logo-main" alt="logo-main"></img>
          </div>
          <div className="header-right">
            <div className="small-container btn-search"></div>
            <div className="mall-container  btn-user-details"></div>
          </div>
        </div>
      </header>
    </>
  );
}
