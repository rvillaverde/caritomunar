const ProjectDAO = require('../daos/projectDAO')
const ImageService = require('./imageService')

class ProjectService {
  static getProjects = async () => {
    return await ProjectDAO.fetchAll()
  }

  static getProject = async (id) => {
    return await ProjectDAO.findById(id)
  }

  static findByField = async (field) => {
    return await ProjectDAO.findByField(field)
  }

  static createProject = async (project, thumbnail, images) => {
    const uploadedThumbnail = await ImageService.uploadImage(thumbnail)
    project.thumbnailUrl = uploadedThumbnail.url
    project.thumbnailCdnId = uploadedThumbnail.id
    console.log('create project', project)
    return ProjectDAO.create(project, { returning: true })
    .then((project) => {
      return project
    }, (error) => {
      handleError(error.original.code)
    })
  }

  static updateProject = async (project, cover, images) => {
    const { id } = project
    return ProjectDAO.update(id, project, { returning: true })
    .then((project) => {
      return project
    }, (error) => {
      handleError(error.original.code)
    })
  }

  static deleteProject = async (id) => {
    return await ProjectDAO.delete(id)
  }
}

const handleError = (code) => {
  throw new Error('Error creating project.')
}

module.exports = ProjectService
