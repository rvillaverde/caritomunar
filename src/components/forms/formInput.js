import React from 'react'
import styled from 'styled-components'
import { TypographyBody } from '../theme/typography'

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
`
const Label = styled.label`
`

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
    const { className, id, name, label, placeholder, type } = this.props
    return (
      <React.Fragment>
        <Label>
          <TypographyBody>
            { label }
          </TypographyBody>
        </Label>
        <Input
          ref={ this.inputRef }
          className={ className }
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
