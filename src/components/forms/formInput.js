import React from 'react'
import { TypographyBody } from '../theme/typography'

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
    const { id, name, label, placeholder, type } = this.props
    return (
      <React.Fragment>
        {
          label && (
            <label>
              <TypographyBody>
                { label }
              </TypographyBody>
            </label>
          )
        }
        <input
          ref={ this.inputRef }
          className='form-input'
          id={ id }
          name={ name }
          placeholder={ placeholder }
          type={ type }
          onChange={ this.handleChange }
        />
      </React.Fragment>
    )
  }
}

export default FormInput
