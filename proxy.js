const request = require('./request-promise');
const BASE_URL = 'https://api.nestoria.co.uk/api';
const BASE_HEADES = {
  'content-type': 'application/json'
};

module.exports = async (path = '/', method = 'GET', qs = {}, body) => {
  const options = {
    uri: path.startsWith('/') ? `${BASE_URL}${path}`: `${BASE_URL}/${path}`,
    headers: BASE_HEADES,
    method,
    body,
    qs,
    json: true
  };

  return await request(options);
};
