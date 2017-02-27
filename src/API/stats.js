import request from 'superagent'

const fetchStats = () => request
  .get(`${_API_URL_}/api/stats`)
  .then(response => response.body)
  .catch(console.log)

export default fetchStats
