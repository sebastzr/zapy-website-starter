import React from "react"
import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import "../main.scss"

export default function Layout(props) {
  return (
    <div className="container">
      <SEO />
      <div className="content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
