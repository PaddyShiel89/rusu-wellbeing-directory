import { createGlobalStyle } from "styled-components"
import { breakpointMixin, color, font, form, legend, table, transition, spacing } from "./styles"
import { divideRem } from "../utils/maths"

const responsiveFontBreakpoint = breakpointMixin.min.lg
const responsiveFontMultiplier = 1

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 62.5%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    height: 100%;
  }

  #gatsby-focus-wrapper {
    position: relative;
    min-height: 100vh;
    padding-bottom: ${spacing.footerHeight.base};
  }

  body {
    margin: 0;
    font-family: ${font.base.family};
    font-size: ${font.base.size};
    font-weight: ${font.base.weight};
    line-height: ${font.base.lineHeight};
    color: ${props =>
      props.theme.isDark ? font.base.darkThemeColor : font.base.color};
    text-align: left;
    background-color: ${props =>
      props.theme.isDark ? color.gray[900] : color.gray[100]};
  }

  [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: ${font.headings.marginBottom};
    line-height: ${font.headings.lineHeight};
  }

  h1 {
    font-size: calc(${font.base.size} + ${responsiveFontMultiplier * font.headings.h1.multiplier}vw);
    font-weight: ${font.headings.h1.weight};
    text-transform: ${font.headings.h1.transform};

    ${responsiveFontBreakpoint`
      font-size: ${font.headings.h1.size};
    `}
  }

  h2 {
    font-size: calc(${font.base.size} + ${responsiveFontMultiplier * font.headings.h2.multiplier}vw);
    font-weight: ${font.headings.h2.weight};
    text-transform: ${font.headings.h2.transform};

    ${responsiveFontBreakpoint`
      font-size: ${font.headings.h2.size};
    `}
  }

  h3 {
    font-size: calc(${font.base.size} + ${responsiveFontMultiplier * font.headings.h3.multiplier}vw);
    font-weight: ${font.headings.h3.weight};
    text-transform: ${font.headings.h3.transform};

    ${responsiveFontBreakpoint`
      font-size: ${font.headings.h3.size};
    `}
  }

  h4 {
    font-size: calc(${font.base.size} + ${responsiveFontMultiplier * font.headings.h4.multiplier}vw);
    font-weight: ${font.headings.h4.weight};
    text-transform: ${font.headings.h4.transform};

    ${responsiveFontBreakpoint`
      font-size: ${font.headings.h4.size};
    `}
  }

  h5 {
    font-size: calc(${font.base.size} + ${responsiveFontMultiplier * font.headings.h5.multiplier}vw);
    font-weight: ${font.headings.h5.weight};
    text-transform: ${font.headings.h5.transform};

    ${responsiveFontBreakpoint`
      font-size: ${font.headings.h5.size};
    `}
  }

  h6 {
    font-size: ${font.base.size};
    font-weight: ${font.headings.h6.weight};
    text-transform: ${font.headings.h6.transform};

    ${responsiveFontBreakpoint`
      font-size: ${font.headings.h6.size};
    `}
  }

  p {
    margin-top: 0;
    margin-bottom: ${font.paragraph.marginBottom};
  }

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: ${spacing.spacer};
    font-style: normal;
    line-height: inherit;
  }

  ol, ul, dt {
    margin-top: 0;
    margin-bottom: ${spacing.spacer};
  }

  ol, ul {
    & ol, ul {
      margin-bottom: 0;
    }
  }

  dt {
    weight: ${font.weight.bold};
  }

  dd {
    margin-bottom: ${divideRem(spacing.spacer, 2)};
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 ${spacing.spacer};
  }

  b, strong {
    font-weight: ${font.weight.bolder};
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  a {
    color: ${props =>
      props.theme.isDark
        ? font.link.darkThemeColor
        : font.link.color};
  text-decoration: ${font.link.decoration};
    background-color: transparent;

    &:hover {
      color: ${props =>
        props.theme.isDark
          ? font.link.hover.darkThemeColor
          : font.link.hover.color};
      text-decoration: ${font.link.hover.decoration};
    }

    &:not([href]) {
      &, &:hover {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ${font.family.monospace};
    font-size: 1em;
  }

  pre {
    margin-top: 0;
    margin-bottom: ${spacing.spacer};
    overflow: auto;
  }

  figure {
    margin: 0 0 ${spacing.spacer}
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: ${table.cell.padding};
    padding-bottom: ${table.cell.padding};
    color: ${props =>
      props.theme.isDark ? table.caption.darkThemeColor : table.caption.color};
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: ${form.label.marginBottom}
  }

  button {
    border-radius: 0;

    &:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  select {
    word-wrap: normal;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    &:not(:disabled) {
      cursor: pointer;
    }
    &::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;  
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: ${legend.marginBottom};
    font-size: ${legend.fontSize};
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px; // 2. Correct the outline style in Safari.
    -webkit-appearance: none;  
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }
  
  template {
    display: none;
  }
  
  [hidden] {
    display: none !important;
  }

  .collapse:not(.show) {
    display: none;
  }
  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: ${transition.collapse};
  }
`
