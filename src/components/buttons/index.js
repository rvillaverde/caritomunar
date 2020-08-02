import styled from 'styled-components'

export const ButtonLabel = styled.span`
  position: relative;
`
const BasicButton = styled.button`
  transition: all 0.3s ease-in;
  outline: none;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  font-size: 12px;
  line-height: 12px;
  font-family: ${({ theme }) => theme.typography.secondary};
  background-color: transparent;
  text-transform: uppercase;
  padding: 8px 36px;
  font-weight: 600;
  position: relative;

  &:before {
    transition: all 0.2s ease-in;
    transform-origin: left center;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: scaleX(0);
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`
export const PrimaryButton = styled(BasicButton)`
  color: ${({ theme }) => theme.colors.gray_100};
  border-width: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  letter-spacing: 1px;

  &:not(:disabled):hover {

  }
`
export const SecondaryButton = styled(BasicButton)`
  color: ${({ theme }) => theme.colors.gray_100};
  border-width: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
  letter-spacing: 1px;

  &:not(:disabled):hover {

  }
`
export const TertiaryButton = styled(BasicButton)`
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;

  &:not(:disabled):hover {

  }
`
