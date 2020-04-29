import React, { useContext } from "react"
import PropTypes from "prop-types"

import { withTheme } from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import GlobalStyle from "../styles/global"

import CookieConsent from "./CookieConsent"
import Footer from "./Footer"
import Header from "./Header"
import MobileNavigation from "./MobileNavigation"
import SEO from "./SEO"

const Layout = withTheme(({children, theme, title, description, image, imageAlt, imageTwitter, pathname, article }) => {
  const themeContext = useContext(ThemeManagerContext)

  return (
    <>
      <GlobalStyle theme={theme} />
      <CookieConsent />
      <SEO
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
        imageTwitter={imageTwitter}
        pathname={pathname}
        article={article}
      />
      <Header theme={theme} />
      <MobileNavigation />
      <main>{children}</main>
      <Footer darkMode={{isDark: themeContext.isDark, toggle: themeContext.toggleDark}} />
    </>
  )
})

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  theme: PropTypes.string,
  title: PropTypes.string,
}

Layout.defaultProps = {
  children: null,
  theme: null,
  title: null,
}