import React from 'react'
import { connect } from 'react-redux'
import { createProject, updateProject } from '../../../redux/actions/project'
import { PrimaryButton } from '../../buttons'
import FileDropper from '../../fileDropper/FileDropper'
import { FormField, FormInput, FormRow, FormColumn } from '../../forms'
import { TypographyBody } from '../../theme/typography'
import './style.scss'

const FIELDS = [
  { name: 'name', label: 'Name', type: 'string' },
  { name: 'order', label: 'Order', type: 'number' },
  { name: 'year', label: 'Year', type: 'number' },
  { name: 'homeDescription', label: 'Home description', type: 'string' },
]

class ProjectForm extends React.Component {
  state = {
    project: this.props.project || {}
  }

  get classes () {
    const { loading } = this.props
    return [
      'ui-project_form',
      loading && 'loading'
    ].filter(Boolean).join(' ')
  }

  get thumbnailPreview () {
    const {
      thumbnailPreview,
      project: { thumbnailUrl }
    } = this.state

    const image = thumbnailPreview ?
      thumbnailPreview :
      thumbnailUrl

    return (
      <div
        className='admin-project_thumbnail'
        style={{
          backgroundImage: `url(${ image })`
        }}
      >
      </div>
    )
  }

  handleChange = (value) => {
    this.setState({
      project: {
        ...this.state.project,
        ...value
      },
      hasChanges: true
    })
  }

  handleThumbnailChange = (files) => {
    this.setState({
      thumbnail: files[0],
      thumbnailPreview: URL.createObjectURL(files[0]),
      hasChanges: true,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const { createProject, updateProject } = this.props
    const { project = {}, thumbnail } = this.state
    project.id ?
      updateProject({ project, thumbnail }) :
      createProject({ project, thumbnail })
  }

  render () {
    const {
      project,
      thumbnail
    } = this.state
  
    return (
      <form onSubmit={ this.handleSubmit } className={ this.classes }>
        <FormRow>
          <FormColumn width={ 0.4 }>
            <FileDropper onChange={ this.handleThumbnailChange }>
              {
                thumbnail || project.thumbnailUrl ? (
                  this.thumbnailPreview
                ) : (
                  <TypographyBody>
                    Upload image
                  </TypographyBody>
                )
              }
            </FileDropper>
          </FormColumn>
          <FormColumn width={ 0.6 }>
            {
              FIELDS.map((field, i) => (
                <FormField key={ i }>
                  <FormInput
                    name={ field.name }
                    label={ field.label }
                    type={ field.type }
                    onChange={ this.handleChange }
                    value={ project[field.name] }
                  />
                </FormField>
              ))
            }
          </FormColumn>
        </FormRow>
        <PrimaryButton type='submit'>
          Save
        </PrimaryButton>
      </form>
    )
  }
}

const mapStateToProps = function({ project }) {
  return {
    projects: project.projects,
    loading: project.loading
  }
}

const mapDispatchToProps = {
  createProject,
  updateProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
// export default ProjectForm
