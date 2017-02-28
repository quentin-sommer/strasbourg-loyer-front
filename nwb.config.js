module.exports = {
  type: 'preact-app',
  webpack: {
    define: {
      _API_URL_: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://www.strasbourg-loyer.fr' : 'http://localhost:3030')
    },
    babel: {
      cherryPick: ['react-collection-helpers']
    }
  }
}

