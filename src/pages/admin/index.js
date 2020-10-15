
import Layout from '../../components/layout'
import styled from 'styled-components'
import { TypographyTitle1, TypographyTitle3 } from '../../components/theme/typography'
import withAuth from '../../utils/withAuth'
import ProjectForm from '../../components/admin/projectForm/ProjectForm'
import Projects from '../../components/admin/projectTable/ProjectTable'
// import { getProjects } from '../../api/project'

const Admin = () => {
  return (
    <Layout home active='admin'>
      <HomeSection>
        <TypographyTitle1>
          Admin Carito Munar!
        </TypographyTitle1>
        <TypographyTitle3>
          My projects
        </TypographyTitle3>
        <Projects />

        <TypographyTitle3>
          Create project
        </TypographyTitle3>
        <ProjectForm />
      </HomeSection>
    </Layout>
  )
}

// Admin.getInitialProps = async (ctx) => {
//   const projects = fetchProjects()
//   return { projects }
// }



const HomeSection = styled.section`
  max-width: ${({ theme }) => theme.viewport};
  margin: 0 auto;
  padding: 24px 12px;
`


export default withAuth(Admin)
