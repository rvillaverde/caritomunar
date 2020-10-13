import FormInput from './formInput'
import './style.scss'

const FormTitle = ({ children }) => {
  return (
    <div className='form-title'>
      { children }
    </div>
  )
}

const FormSection = ({ children }) => {
  return (
    <section className='form-section'>
      { children }
    </section>
  )
}

const FormSubsection = ({ children }) => {
  return (
    <div className='form-subsection'>
      { children }
    </div>
  )
}

const FormSubsectionLarge = ({ children }) => {
  return (
    <div className='form-subsection__large'>
      { children }
    </div>
  )
}

const FormRow = ({ children }) => {
  return (
    <div className='form-row'>
      { children }
    </div>
  )
}

const FormField = ({ children, className }) => {
  const classes = () => (
    [
      'form-field',
      className
    ].filter(Boolean).join(' ')
  )

  return (
    <div className={ classes() }>
      { children }
    </div>
  )
}

const SmallFormField = ({ children }) => {
  return (
    <FormField className='form-field__small'>
      { children }
    </FormField>
  )
}

export {
  FormTitle,
  FormSection,
  FormSubsection,
  FormSubsectionLarge,
  FormRow,
  FormField,
  SmallFormField,
  FormInput
}
