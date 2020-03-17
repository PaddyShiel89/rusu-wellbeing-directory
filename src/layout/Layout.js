import React, { useContext } from "react"
import PropTypes from "prop-types"

import { withTheme } from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import GlobalStyle from "../styles/global"

import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"

const Layout = withTheme(({children, theme, title}) => {
  const themeContext = useContext(ThemeManagerContext)

  return (
    <>
      <GlobalStyle theme={theme} />
      <SEO title={title} />
      <Header theme={theme} />
      <main>{children}</main>
      <Footer>
        <DarkMode isDark={themeContext.isDark} toggle={themeContext.toggleDark} />
      </Footer>
    </>
  )
})

export default Layout

const DarkMode = ({ isDark, toggle }) => (
  <div>
  <label>
    <input
      type="checkbox"
      onChange={() => toggle()}
      checked={isDark}
    />{" "}
    Dark Mode
  </label>
</div>
)

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