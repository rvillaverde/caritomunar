import Head from 'next/head'
import Layout from '../components/layout'
import styled from 'styled-components'
import { TypographyTitle1 } from '../components/theme/typography'

export default function Home() {
  return (
    <Layout home active='home'>
      <HomeSection>
        <TypographyTitle1>
          Welcome to Base Project!
        </TypographyTitle1>
      </HomeSection>
    </Layout>
  )
}

const HomeSection = styled.section`
  max-width: ${({ theme }) => theme.viewport};
  margin: 0 auto;
  padding: 24px 12px;
`
