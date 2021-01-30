import React from "react"
import Layout from "../components/layout"
import "../main.scss"

export default function NotFound() {
  return (
    <div>
      <Layout>
        <div className="not-found">
          <h1>404: Página no encontrada</h1>
        </div>
      </Layout>
    </div>
  )
}
