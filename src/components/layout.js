import Head from 'next/head'
import Header from './header.js'
import Footer from './footer'
import styled from 'styled-components'

const name = 'Carito Munar'
const siteTitle = 'Carito Munar'
const description = 'Carito Munar'

const Layout = styled.div`
  background-color: white;
`

class AppLayout extends React.Component {
  state = {
    navMenuOpen: false
  }

  toggleMenu = () => {
    this.setState({ navMenuOpen: !this.state.navMenuOpen }, () => {
      this.state.navMenuOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
    })
  }

  render () {
    const { children, home, active } = this.props
    const { navMenuOpen } = this.state

    return (
      <Layout>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          <title>{ siteTitle }</title>
          <meta
            name={ name }
            content={ description }
          />
          <meta name="og:title" content={ siteTitle } />
          <meta name="og:description" content={ description } />
          <meta property="og:url" content="https://www.caritomunar.herokuapp.com" />
          <meta property="og:image" content="/img/icon.png" />
        </Head>
          
        <Header name={name} home={home} active={active} navOpen={navMenuOpen} handleMenuToggle={this.toggleMenu} />
        <Main>
          {
            children
          }
        </Main>
        <Footer />
      </Layout>
    )
  }
}

const Main = styled.main`
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.header.height};

  @media (max-width: 767px) {
    padding-top: ${({ theme }) => theme.header.heightMobile};
  }
`

export default AppLayout;
