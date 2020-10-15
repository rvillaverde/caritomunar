import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { TypographyBody, TypographyTitle1, TypographyTitle5 } from './theme/typography'
import AppContext from './appContext'

class AppFooter extends React.Component {
  static contextType = AppContext

  render () {
    const { sections } = this.context
    const navItems = sections.filter(section => section.footer)

    return (
      <Footer>
        <FooterInner>
          <TypographyTitle5>
            Get in touch
          </TypographyTitle5>
          <TypographyTitle1>
            Let's work together
          </TypographyTitle1>
          <TypographyBody>
            If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me.
          </TypographyBody>
        </FooterInner>
      </Footer>
    )
  }
}

const Footer = styled.footer`
  width: 100%;
  min-height: 280px;
  display: flex;
  align-items: center;
  background-color: var(--color-secondary);
`
const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.viewport};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  @media (max-width: 459px) {
    flex-direction: column;
  }
`

export default AppFooter
