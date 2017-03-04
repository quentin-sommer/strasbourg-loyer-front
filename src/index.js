import {h, render} from 'preact'
import './app.less'

require('typeface-lato')
require('typeface-aleo')

if (process.env.NODE_ENV === 'production') {
  require('./hotjar').default
  require('./ga').default
  require('./sw-registration')
}

let root
function init() {
  let App = require('./Components/App').default
  const mount = document.querySelector('#app')

  if (process.env.NODE_ENV !== 'production') {
    const renderToString = require('preact-render-to-string')
    console.log(renderToString(<App/>))
  }
  mount.removeChild(mount.children[0])
  root = render(
    <App/>,
    mount, root
  )
}

init()

if (module.hot) {
  module.hot.accept('./Components/App', () => window.requestAnimationFrame(() => {
    init()
  }))
}
