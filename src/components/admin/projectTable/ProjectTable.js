import React from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../../../redux/actions/project'
import Project from '../project/Project'

class Projects extends React.Component {
  componentDidMount () {
    const { fetchProjects } = this.props
    fetchProjects()
  }

  render () {
    const { projects = [] } = this.props

    return (
      projects.map((project, i) => (
        <Project key={i} project={project} />
      ))
    )
  }
}

const mapStateToProps = function({ project }) {
  return {
    projects: project.projects
  }
}

const mapDispatchToProps = {
  fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
