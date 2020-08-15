import React from 'react'
import Router from 'next/router'
import api from '../api/auth'
import { connect } from 'react-redux'
import { login } from '../redux/actions/auth'
import Layout from '../components/layout'
import styled from 'styled-components'
import {
  FormRow,
  FormField,
  FormInput
} from '../components/forms'
import {
  PrimaryButton
} from '../components/buttons'
import { TypographyBody } from '../components/theme/typography'

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
const MyForm = styled.form`
  padding: 24px;
  width: 100%;
  max-width: 400px;
`
const Legend = styled(TypographyBody)`
  margin-bottom: 12px;
`

class Login extends React.Component {
  state = {
    invalid: false,
  }

  usernameRef = React.createRef()
  passwordRef = React.createRef()

  handleLogin = async (e) => {
    e.preventDefault()
    const username = this.usernameRef.current.value
    const password = this.passwordRef.current.value

    api.login(username, password)
    .then(res => {
      this.props.login(res)
      this.setState({ invalid: false })
    })
    .catch(error => {
      this.setState({ invalid: true })
    })
  }

  render() {
    const { auth } = this.props

    if (auth.token) {
      Router.push('/')
    }

    return (
      <Layout active='login'>
        <Container>
          <MyForm onSubmit={ this.handleLogin }>
            <FormRow>
              <FormField>
                <FormInput
                  ref={this.usernameRef}
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <FormInput
                  ref={this.passwordRef}
                  label="Password"
                  name="password"
                  type="password"
                />
              </FormField>
            </FormRow>
            { this.state.invalid && 
              <Legend>
                User or password incorrect.
              </Legend>
            }
            <PrimaryButton type="submit">Login</PrimaryButton>
          </MyForm>
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
