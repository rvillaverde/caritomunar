import Layout from '../../components/layout'
import styled from 'styled-components'
import { TypographyTitle1 } from '../../components/theme/typography'
import withAuth from '../../utils/withAuth'

const Admin = () => {
  return (
    <Layout home active='admin'>
      <HomeSection>
        <TypographyTitle1>
          Admin Base Project!
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

export default withAuth(Admin)
