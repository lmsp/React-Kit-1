/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'

const title =
  'React con Webpack and HappyPack, Babel, Flow, Standard.js y BrowserSync'

// Esta función sirve sólo como ejemplo para probar flow
function createDivId (a: string, b: string, c: string) {
  return a + b + c
}

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById(createDivId('a', 'p', 'p'))
)

module.hot.accept()
