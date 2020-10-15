import React from 'react'
import { TypographyBody } from '../../theme/typography'
import ProjectForm from '../projectForm/ProjectForm'
import './style.scss'

class Project extends React.Component {
  state = {
    editing: false
  }

  handleOnClick = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  render () {
    const { project } = this.props
    const { editing } = this.state
  
    return (
      <div className='ui-project_wrapper'>
        <div className='ui-project'>
          <TypographyBody className='ui-project_title' onClick={this.handleOnClick}>
            { project.name }
          </TypographyBody>
        </div>
        {
          editing && (
            <ProjectForm project={project} />
          )
        }
      </div>
    )
  }
}

export default Project
