module.exports = {
  type: 'preact-app',
  webpack: {
    aliases: {
      'react-addons-css-transition-group': 'preact-css-transition-group',
      'react-addons-transition-group': 'preact-css-transition-group',
    },
    define: {
      _API_URL_: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://www.strasboug-loyer.fr' : 'http://localhost:3030')
    },
    babel: {
      cherryPick: ['elemental', 'react-collection-helpers']
    }
  }
}

