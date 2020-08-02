import styled from 'styled-components'

export const TypographyTitle1 = styled.h1`
  font-family: ${({ theme }) => theme.typography.primary};
  color: ${ props => props.theme.colors[props.color] };
  font-size: 32px;
  font-weight: 800;
  margin: 0;
`
export const TypographyBody = styled.p`
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 14px;
  margin: 0;
`
export const TypographyCaption = styled.p`
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 12px;
  margin: 0;
`
export const TypographySubtitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 18px;
  margin: 0;
`
