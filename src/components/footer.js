import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { TypographyBody, TypographyCaption } from './theme/typography'
import AppContext from './appContext'

class AppFooter extends React.Component {
  static contextType = AppContext

  render () {
    const { sections } = this.context
    const navItems = sections.filter(section => section.footer)

    return (
      <Footer>
        <FooterInner>
          <Section>
          </Section>
          <Section>
            <FooterTitle>
              Menú
            </FooterTitle>
            <FooterNavList>
              {
                navItems.map((item, i) => (
                  <FooterNavItem key={i}>
                    <Link href={item.href} as={item.href}>
                      <TypographyBody as='a' href={item.href}>
                        {item.label}
                      </TypographyBody>
                    </Link>
                  </FooterNavItem>
                ))
              }
            </FooterNavList>
          </Section>
          <Section>
            <FooterTitle>
              Contacto
            </FooterTitle>
          </Section>
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
  background-color: black;
`
const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.viewport};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 40px;

  @media (max-width: 459px) {
    flex-direction: column;
  }
`
const Section = styled.div`
  max-width: 280px;

  &:not(:first-child) {
    @media (max-width: 459px) {
      margin-top: 24px;

      &:before {
        content: '';
        display: block;
        height: 1px;
        width: calc(100% - 96px);
        margin: 24px auto;
        margin-top: 0;
        opacity: 0.4;
      }
    }
    @media (min-width: 460px) {
      margin-left: 24px;
    }
  }
`
const FooterTitle = styled(TypographyCaption)`
  margin-bottom: 24px;
`
const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const FooterNavItem = styled.li`
  text-transform: uppercase;

  &:not(:first-child) {
    padding-top: 8px;
  }
`

export default AppFooter
