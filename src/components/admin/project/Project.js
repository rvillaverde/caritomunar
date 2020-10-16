import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { TypographyBody } from '../../theme/typography'
import ProjectForm from '../projectForm/ProjectForm'
import './style.scss'

class Project extends React.Component {
  state = {
    editing: false
  }

  get chevronClasses () {
    const { editing } = this.state
  
    return [
      'ui-project_chevron',
      editing && 'editing'
    ].filter(Boolean).join(' ')
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
            { project ? project.name : 'New project' }
          </TypographyBody>
          <FontAwesomeIcon className={ this.chevronClasses } icon={faChevronRight} />
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
