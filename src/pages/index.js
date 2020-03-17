import React from "react"
// import styled from "styled-components"
import Layout from "../layout/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>Hello world</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt
      risus id consectetur sodales. Curabitur sed elit tellus. Duis tincidunt ex
      vitae ligula ornare pellentesque. Nunc interdum consequat diam nec
      venenatis. Vivamus at vestibulum mauris.
    </p>
    <p>
      Fusce sed tellus ac mauris ornare mollis et quis odio. Nullam viverra
      mollis est, nec ultrices odio cursus ac. Aenean quis faucibus turpis. Ut
      id risus vel odio efficitur volutpat.
    </p>
    <hr />
    <Link to={"/"}>Homepage</Link>
    <ol>
      <li>number 1</li>
      <li>number 2</li>
      <li>number 3</li>
    </ol>
  </Layout>
)
