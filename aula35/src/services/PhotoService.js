const api = require('../config/api');

module.exports = {
  async getPhotos(){
    let { data } = await api.get('/photos');

    return data;
  }
}