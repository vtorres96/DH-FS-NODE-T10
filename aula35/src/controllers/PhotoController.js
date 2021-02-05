const api = require('../config/api');

module.exports = {
  async index(req, res, next){
    try {
      let photos = await api.get('/photos');
      let { data } = photos;
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ message: 'Error ' + error.message })
    }
  }
}