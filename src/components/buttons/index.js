import './style.scss'

export const ButtonLabel = ({ children }) => {
  return (
    <span className='button-label'>
      { children }
    </span>
  )
}

const BasicButton = ({ children, type, className }) => {
  const classes = () => (
    [
      'button__basic',
      className
    ].filter(Boolean).join(' ')
  )

  return (
    <button type={type} className={ classes() }>
      { children }
    </button>
  )
}

export const PrimaryButton = ({ children, type }) => {
  return (
    <BasicButton type={type} className='button__primary'>
      { children }
    </BasicButton>
  )
}
