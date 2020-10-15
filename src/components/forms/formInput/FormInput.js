import React from 'react'
import { TypographyBody } from '../../theme/typography'
import './style.scss'

class FormInput extends React.Component {
  inputRef = React.createRef()

  handleChange = (e) => {
    const { value } = e.target
    const { onChange, name } = this.props
    onChange && onChange({ [name]: value })
  }

  get value () {
    return this.inputRef.current.value
  }

  render () {
    const { id, name, label, placeholder, type, value } = this.props
    return (
      <React.Fragment>
        {
          label && (
            <TypographyBody as='label'>
              { label }
            </TypographyBody>
          )
        }
        <input
          ref={ this.inputRef }
          className='form-input'
          id={ id }
          name={ name }
          placeholder={ placeholder }
          type={ type }
          value={ value }
          onChange={ this.handleChange }
        />
      </React.Fragment>
    )
  }
}

export default FormInput
