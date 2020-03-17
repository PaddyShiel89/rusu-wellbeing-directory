import React from "react"
import Layout from "../layout/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout title="Page not found">
    <h1>404: Page not found</h1>
    <p>
      We couldn't find the page you were looking for.
    </p>
    <Link to={"/"}>Return to the homepage</Link>
  </Layout>
)
