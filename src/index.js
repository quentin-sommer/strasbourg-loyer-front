import {h, render} from 'preact'
import './app.less'

require('typeface-lato')
require('typeface-aleo')

if (process.env.NODE_ENV === 'production') {
  require('./hotjar').default
  require('./ga').default
}

let root
function init() {
  let App = require('./Components/App').default

  root = render(
    <App/>,
    document.querySelector('#app'), root
  )
}

init()

if (module.hot) {
  module.hot.accept('./Components/App', () => window.requestAnimationFrame(() => {
    init()
  }))
}
