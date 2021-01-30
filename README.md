<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Zapy.dev Website Starter
</h1>

This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.
Also includes several plugins configuration and components required for a really good website.

## Using the Zapy.dev starter

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the zapy-website-starter.

    ```shell
    # create a new Gatsby site using the zapy-website-starter
    gatsby new my-zapy-website-starter https://github.com/sebastzr/zapy-website-starter
    ```

1.  **Configuration.**

    Navigate into your new site’s directory and execute:

    ```shell
    #create .env file
    cd my-zapy-website-starter/
    cp .env.base .env
    ```

    Give a value to all environment variables.

    - **GATSBY_SITE_TITLE_TEMPLATE**: A descriptive title (e.g. Restaurant Zapy.dev, Website shop Zapy.dev)
    - **GATSBY_SITE_LOGO**: Inside static folder logo (e.g. `logo.png`)
    - **GATSBY_SITE_THEME_COLOR**: Hex main website color (e.g. `#ffffff`)
    - **GATSBY_INSTAGRAM_TOKEN**: Token generated in Facebook for developers, in order to fetch instagram posts

1.  **Start developing.**

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `zapy-website-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

- **`/assets`**: Inside directories: `/img`, `/fonts`.
- **`/components`**: Inside components: `seo.js`, `instagram.js`, `layout.js`, `header.js`, `footer.js`.
- **`/pages`**: Pages directory.
- **`main.scss`**: Global styles.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **Depencencies.**

- **[axios](https://https://www.npmjs.com/package/axios)**
- **[dotenv](https://https://www.npmjs.com/package/dotenv)**
- **[lodash](https://https://www.npmjs.com/package/lodash)**
- **[node-sass](https://https://www.npmjs.com/package/node-sass)**
- **[pngquant-bin](https://https://www.npmjs.com/package/pngquant-bin)**
- **[react](https://https://www.npmjs.com/package/react)**
- **[react-dom](https://https://www.npmjs.com/package/react-dom)**
- **[react-helmet](https://https://www.npmjs.com/package/react-helmet)**

14. **Gastsby plugins.**

- **[gatsby-react-helmet](https://https://www.npmjs.com/package/gatsby-react-helmet)**: Inside `<head></head>` elements.
- **[gatsby-plugin-manifest](https://https://www.npmjs.com/package/gatsby-plugin-manifest)**: PWA information.
- **[gatsby-plugin-offline](https://https://www.npmjs.com/package/gatsby-plugin-offline)**: PWA offline capability.
- **[gatsby-plugin-sass](https://https://www.npmjs.com/package/gatsby-plugin-sass)**: Use `.scss` files for styling.
- **[gatsby-plugin-sharp](https://https://www.npmjs.com/package/gatsby-plugin-sharp)**: Optimize image loading. (And more...)
- **[gatsby-transformer-sharp](https://https://www.npmjs.com/package/gatsby-transformer-sharp)**: Optimize image loading. (And more...)
- **[gatsby-source-filesystem](https://https://www.npmjs.com/package/gatsby-source-filesystem)**: Optimize image loading. (And more...)
- **[gatsby-plugin-google-gtag](https://https://www.npmjs.com/package/gatsby-plugin-google-gtag)**: Google Analytics.
- **[gatsby-plugin-smoothscroll](https://https://www.npmjs.com/package/gatsby-plugin-smoothscroll)**: Smooth scroll effect.

## 💫 Deploy

- **[Firebase](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-firebase/#reach-skip-nav)**

<!-- AUTO-GENERATED-CONTENT:END -->
