import React, { useEffect, useState } from "react"
import _get from "lodash/get"

export default function News() {
  const [posts, setPosts] = useState([])

  const axios = require("axios").default

  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${process.env.GATSBY_INSTAGRAM_TOKEN}&limit=7`
      )
      .then(function (response) {
        setPosts(_get(response, "data.data"))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {posts.map((item, i) => {
        return <div>{/* Your html here */}</div>
      })}
    </div>
  )
}
