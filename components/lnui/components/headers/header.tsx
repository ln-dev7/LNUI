import React from "react";

export default function () {
  return (
    <div
    className="lnui-componenrs-headers-header"
     style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "white",
    }}>
      <header className="header">
        <div className="header__container">
          <div className="header-logo">
            <img
              src="https://flutter-cameroon.leonelngoya.com/assets/9.svg"
              alt="logo"
            />
          </div>
          <div className="header-nav">
            <ul className="header-nav__links">
              <a href="#">Events</a>
              <a href="#">Forum</a>
              <a href="#">Articles</a>
              <a href="#">Podcasts</a>
              <a href="#">Jobs</a>
              <img src="https://flutter-cameroon.leonelngoya.com/assets/29.svg" alt="icon" />
            </ul>
            <div className="header-nav__auth">
              <button>Login</button>
              <button>Sign up</button>
            </div>
          </div>
          <img
            className="menu-open"
            src="https://flutter-cameroon.leonelngoya.com/assets/12.svg"
            alt="icon"
          />
          <div className="header-overlay">
            <div className="header-menu">
              <div className="header-menu__top">
                <img src="assets/29.svg" alt="icon" />
                <img
                  className="menu-close"
                  src="https://flutter-cameroon.leonelngoya.com/assets/13.svg"
                  alt="icon"
                />
              </div>
              <div className="header-menu__items">
                <ul>
                  <a href="#">Events</a>
                  <a href="#">Forum</a>
                  <a href="#">Articles</a>
                  <a href="#">Podcasts</a>
                  <a href="#">Jobs</a>
                </ul>
                <div>
                  <button>Login</button>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
