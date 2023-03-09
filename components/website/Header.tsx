import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header-left">
          <div className="lnui-logo">
            <Image
              loader={({ src }) => src}
              src="logos/logo.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <h1>lnui</h1>
          </div>
        </div>
        <div className="header-right">
          <Link className="header-right__item" href="/components">
            <span>Components</span>
          </Link>
          <Link className="header-right__item" href="/templates">
            <span className="item__link">Templates</span>
          </Link>
          <div className="line"></div>
          <a
            className="header-right__github"
            href="https://github.com/ln-dev7/lnui"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                fill="rgba(148,163,184,1)"
              />
            </svg>
          </a>
          <div className="line"></div>
          <a
            href="https://www.producthunt.com/posts/lnui?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lnui"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              loader={({ src }) => src}
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=370671&theme=neutral"
              alt="LNUI - Create&#0032;beautiful&#0032;websites&#0032;with&#0032;multiple&#0032;components | Product Hunt"
              width="220"
              height="50"
            />
          </a>
        </div>
        <div onClick={openMenu} className="header-right__more">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0f172a"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {isMenuOpen && (
          <div className="header-overlay">
            <div className="header-overlay__menu">
              <button onClick={closeMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                    fill="rgba(148,163,184,1)"
                  />
                </svg>
              </button>
              <ul>
                <li>
                  <Link href="/components">
                    <span>Components</span>
                  </Link>
                </li>
                <li>
                  <Link href="/templates">
                    <span>Templates</span>
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/ln-dev7/lnui">
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.producthunt.com/posts/lnui?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lnui">
                    <span>Product Hunt</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
