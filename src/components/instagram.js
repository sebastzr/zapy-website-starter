import React, { useEffect, useState } from "react"
import instagramStyles from "./instagram.module.scss"
import _get from "lodash/get"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Instagram() {
  const [posts, setPosts] = useState([])

  const axios = require("axios").default

  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${process.env.GATSBY_INSTAGRAM_TOKEN}&limit=7`
      )
      .then(function (response) {
        setPosts(_get(response, "data.data"))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const data = useStaticQuery(graphql`
    query Instagram {
      instagramTitle: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className={instagramStyles.container}>
      <div className={instagramStyles.title}>
        <Img fluid={data.instagramTitle.childImageSharp.fluid} />
      </div>
      <div className={instagramStyles.posts}>
        {posts.map((item, i) => {
          if (item.media_type === "VIDEO") {
            return (
              <div className={instagramStyles.post} key={`post-${i}`}>
                <iframe
                  className={instagramStyles.img}
                  src={item.media_url}
                  frameborder="0"
                  width="250px"
                  height="250px"
                  title={`insta-video-${i}`}
                ></iframe>
                <div className={instagramStyles.middle}>
                  <a
                    className={instagramStyles.text}
                    href={item.permalink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ver publicación
                  </a>
                </div>
              </div>
            )
          } else {
            return (
              <div className={instagramStyles.post} key={`post-${i}`}>
                <img
                  className={instagramStyles.img}
                  src={item.media_url}
                  alt={`Post instagram ${i}`}
                  width="250px"
                  height="250px"
                />
                <div className={instagramStyles.middle}>
                  <a
                    className={instagramStyles.text}
                    href={item.permalink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ver publicación
                  </a>
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
