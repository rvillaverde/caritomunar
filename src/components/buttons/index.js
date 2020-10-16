import './style.scss'

export const ButtonLabel = ({ children }) => {
  return (
    <span className='button-label'>
      { children }
    </span>
  )
}

const BasicButton = ({ children, type, onClick, className }) => {
  const classes = () => (
    [
      'button__basic',
      className
    ].filter(Boolean).join(' ')
  )

  return (
    <button type={type} className={ classes() } onClick={ onClick }>
      { children }
    </button>
  )
}

export const PrimaryButton = ({ children, type, onClick }) => {
  return (
    <BasicButton type={type} className='button__primary' onClick={ onClick }>
      { children }
    </BasicButton>
  )
}

export const SecondaryButton = ({ children, type, onClick }) => {
  return (
    <BasicButton type={type} className='button__secondary' onClick={ onClick }>
      { children }
    </BasicButton>
  )
}

export const TextButton = ({ children, type, onClick }) => {
  return (
    <BasicButton type={type} className='button__text' onClick={ onClick }>
      { children }
    </BasicButton>
  )
}
