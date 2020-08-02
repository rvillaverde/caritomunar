import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { TypographyBody, TypographySubtitle } from './theme/typography'
import AppContext from './appContext'
import {
  logout
} from '../redux/actions/auth'

class AppHeader extends React.Component {
  static contextType = AppContext

  handleLogout = (e) => {
    e.preventDefault()
    this.props.logout()
    Router.push('/login')
  }

  render () {
    const { sections } = this.context
    const { auth, logout } = this.props

    return (
      <HeaderWrapper>
        <Main>
          <MenuButton onClick={ this.props.handleMenuToggle } open={ this.props.navOpen }>
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
          <MainInner>
            <LogoSection>
              <Link href='/' as='/'>
                <TypographySubtitle>
                  Base project
                </TypographySubtitle>
              </Link>
            </LogoSection>
            <MenuSection open={ this.props.navOpen }>
              <HeaderNav>
                <HeaderNavList>
                  {
                    sections.map((item, i) => (
                      <HeaderNavItem key={i} active={ this.props.active === item.id }>
                        <Link href={item.href} as={item.href}>
                          <TypographyBody as='a' href={item.href}>
                            { item.label }
                          </TypographyBody>
                        </Link>
                      </HeaderNavItem>
                    ))
                  }
                  {
                    auth.token ? (
                      <HeaderNavItem>
                        <TypographyBody as='a' onClick={ this.handleLogout }>
                          Logout
                        </TypographyBody>
                      </HeaderNavItem>
                    ) : (
                      <HeaderNavItem active={ this.props.active === 'login' }>
                        <Link href='/login' as='/login'>
                          <TypographyBody as='a' href='/login'>
                            Login
                          </TypographyBody>
                        </Link>
                      </HeaderNavItem>
                    )
                  }
                </HeaderNavList>
              </HeaderNav>
            </MenuSection>
          </MainInner>
        </Main>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  transition: all .5s ease-in-out;
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.header.height};
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  z-index: 12;
  top: 0;
  transform: translateY(0);

  @media (max-width: 767px) {
    height: ${({ theme }) => theme.header.heightMobile};
  }
`
const Main = styled.div`
  flex-grow: 1;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.2);
  position: relative;
`
const MainInner = styled.div`
  max-width: ${({ theme }) => theme.viewport};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 12px;

  @media (max-width: 767px) {
    justify-content: center;
  }
`
const Section = styled.div`
`
const LogoSection = styled(Section)`
`
const MenuSection = styled(Section)`
  @media (max-width: 767px) {
    background-color: white;
    transition: all .3s ease-in;
    transform: ${ ({ open }) => open ? 'translateX(0)' : 'translateX(-100%)' };
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;
    height: 100vh;
    padding: 24px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
`
const HeaderNav = styled.nav`
@media (max-width: 767px) {
  display: flex;
}
`
const HeaderNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

@media (max-width: 767px) {
  flex-direction: column;
  height: 100%;
  max-height: 300px;
  justify-content: space-between;
  margin: auto;
}
`
const HeaderNavItem = styled.li`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.gray_800};
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  
  a {
    cursor: pointer;
    padding: 12px;
  }

  @media (min-width: 768px) {
    max-width: 120px;

    &:last-child {
      padding-right: 0;
    }
  }

  @media (max-width: 767px) {
    a {
      font-size: 18px;
    }
  }
`
const MenuButton = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 41px;
  height: 41px;
  position: fixed;
  left: 0;
  padding: 12px;
  margin: 12px;
  z-index: 12;
  border-radius: 4px;

  span {
    background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.gray_800};
    transition: all .3s cubic-bezier(0.65, 0.05, 0.36, 1);
    width: 100%;
    height: 2px;
  }

  span:nth-child(1) {
    transform-origin: top left;
    transform: ${ ({open}) => open ? 'rotate(45deg) translate(4px, -1px)' : 'rotate(0)'};
  }

  span:nth-child(2) {
    opacity: ${ ({open}) => open ? 0 : 1 };
  }

  span:nth-child(3) {
    transform-origin: bottom left;
    transform: ${ ({open}) => open ? 'rotate(-45deg) translate(3px, 1px)' : 'rotate(0)'};
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
