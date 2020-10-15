import React from 'react'
import { connect } from 'react-redux'
import { fetchPresentation, updatePresentation } from '../../../redux/actions/presentation'
import { PrimaryButton } from '../../buttons'
import FileDropper from '../../fileDropper/FileDropper'
import { FormColumn, FormField, FormInput, FormRow } from '../../forms'
import { TypographyBody } from '../../theme/typography'
import ImagePreview from '../imagePreview/ImagePreview'
import './style.scss'

const FIELDS = [
  { name: 'intro', label: 'Intro', type: 'textarea' },
  { name: 'quote', label: 'Quote', type: 'string' },
  { name: 'legend', label: 'Legend', type: 'string' },
]

class Presentation extends React.Component {
  state = {
    presentation: this.props.presentation
  }

  get classes () {
    const { loading } = this.props
    return [
      'ui-presentation_wrapper',
      loading && 'loading'
    ].filter(Boolean).join(' ')
  }

  componentDidMount () {
    const { fetchPresentation } = this.props
    fetchPresentation()
  }

  handleChange = (value) => {
    this.setState({
      presentation: {
        ...this.state.presentation,
        ...value
      },
      hasChanges: true
    })
  }

  handlePhotoChange = (files) => {
    this.setState({
      photo: files[0],
      photoPreview: URL.createObjectURL(files[0]),
      hasChanges: true,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const { updatePresentation } = this.props
    const { presentation = {}, photo } = this.state
    updatePresentation({ presentation, photo })
  }

  render () {
    const {
      presentation,
      photo,
      photoPreview
    } = this.state
  
    return (
      <div className={this.classes}>
        <div className='ui-presentation'>
          <form onSubmit={ this.handleSubmit } className='ui-presentation_form'>
          <FormRow>
            <FormColumn width={ 0.4 }>
              <FileDropper onChange={ this.handlePhotoChange }>
                {
                  photo || presentation.photoUrl ? (
                    <ImagePreview
                      preview={photoPreview}
                      url={presentation.photoUrl}
                    />
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
                      value={ presentation[field.name] }
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = function({ presentation }) {
  return {
    presentation: presentation,
    loading: presentation.loading
  }
}

const mapDispatchToProps = {
  fetchPresentation,
  updatePresentation
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation)
