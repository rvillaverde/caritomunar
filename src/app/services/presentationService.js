const ImageService = require('./imageService')
const fs = require('fs')
const path = require('path')

const PATH = '../../../public/data/presentation.json'
const FILE = path.join(__dirname, PATH)

class PresentationService {
  static getPresentation = async () => {
    return new Promise((resolve, reject) => {
      fs.readFile(FILE, (err, data) => {
        if (!data || err) {
          reject(err)
        } else {
          resolve(JSON.parse(data))
        }
      })
    })
  }

  static updatePresentation = async (presentation, photo) => {
    console.log('update presentation', presentation, photo)
    if (photo) {
      const uploadedPhoto = await ImageService.uploadImage(photo)
      presentation.photoUrl = uploadedPhoto.url
      presentation.photoCdnId = uploadedPhoto.id
    }
    return new Promise((resolve, reject) => {
      fs.writeFile(
        FILE,
        JSON.stringify(presentation),
        () => {
          resolve(presentation)
        }
      )
    })
  }
}

module.exports = PresentationService
