import React, { useState } from "react"
import headerStyles from "./header.module.scss"

export default function Header() {
  const [Header, setHeader] = useState(true)
  const [NavList, setNavList] = useState(true)

  const headerAnimation = () => {
    if (window.scrollY >= 153) {
      setHeader(false)
    } else {
      setHeader(true)
    }
  }

  const showNavList = () => {
    setNavList(!NavList)
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", headerAnimation)
  }

  return (
    <header
      className={
        Header
          ? headerStyles.header
          : `${headerStyles.header} ${headerStyles.active}`
      }
    >
      <nav
        className={
          NavList
            ? headerStyles.navbar
            : `${headerStyles.navbar} ${headerStyles.active}`
        }
      >
        <div
          onKeyDown={() => showNavList()}
          role="link"
          tabIndex="0"
          onClick={() => showNavList()}
          className={headerStyles.hamburger}
        >
          <div className={headerStyles.line}></div>
          <div className={headerStyles.line}></div>
          <div className={headerStyles.line}></div>
        </div>
        <div
          onKeyDown={() => showNavList()}
          role="link"
          tabIndex="0"
          onClick={() => showNavList()}
          className={headerStyles.close}
        >
          &#10006;
        </div>
        <ul
          className={
            NavList
              ? headerStyles.navList
              : `${headerStyles.navList} ${headerStyles.active}`
          }
        >
          <li className={headerStyles.navLink}>INICIO</li>
          <li>LINK</li>
          <li>LINK</li>
          <li>LINK</li>
          <li>LINK</li>
          <li>LINK</li>
        </ul>
      </nav>
    </header>
  )
}
