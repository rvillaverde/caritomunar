
import Layout from '../../components/layout'
import styled from 'styled-components'
import { TypographyTitle1, TypographyTitle2 } from '../../components/theme/typography'
import withAuth from '../../utils/withAuth'
import ProjectForm from '../../components/admin/projectForm/ProjectForm'
import Projects from '../../components/admin/projectTable/ProjectTable'
import Presentation from '../../components/admin/presentation/Presentation'
// import { getProjects } from '../../api/project'

const Admin = () => {
  return (
    <Layout home active='admin'>
      <section>
        <HomeTitle>
          <TypographyTitle1>
            Admin Carito Munar!
          </TypographyTitle1>
        </HomeTitle>

        <HomeTitle>
          <TypographyTitle2>
            Home Presentation
          </TypographyTitle2>
        </HomeTitle>
        <Presentation />

        <HomeTitle>
          <TypographyTitle2>
            My projects
          </TypographyTitle2>
        </HomeTitle>
        <Projects />

        {/* <TypographyTitle3>
          Create project
        </TypographyTitle3>
        <ProjectForm /> */}
      </section>
    </Layout>
  )
}

const HomeTitle = ({ children }) => {
  return (
    <div className='admin-section_title'>
      { children }
    </div>
  )
}

// Admin.getInitialProps = async (ctx) => {
//   const projects = fetchProjects()
//   return { projects }
// }



// const HomeSection = styled.section`
//   max-width: ${({ theme }) => theme.viewport};
//   margin: 0 auto;
//   padding: 24px 0;
//   padding-bottom: 0;
// `


export default withAuth(Admin)
