import styled from 'styled-components'
import FormInput from './formInput'

const FormTitle = styled.div`
` 
const FormSection = styled.section`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`
const FormSubsection = styled.div`
`
const FormSubsectionLarge = styled.div`
  flex: 1;
`
const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`
const FormField = styled.div`
  flex-grow: 1;
  margin: 0 8px;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 480px) {
    margin: 12px 0;
    margin-top: 0;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
const SmallFormField = styled(FormField)`
  && {
    max-width: 50%;
    flex-shrink: 1;

    &:last-child {
      margin-left: 8px;
    }
  }
`

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
