const PhotoService = require('../services/PhotoService');

module.exports = {
  async index(req, res, next){
    try {
      let photos = await PhotoService.getPhotos();

      return res.status(200).json(photos);
    } catch (error) {
      return res.status(400).json({ message: 'Error ' + error.message })
    }
  }
}