import React from 'react'
import Router from 'next/router'
import api from '../../api/user'
import Layout from '../../components/layout'
import styled from 'styled-components'
import {
  FormRow,
  FormField,
  FormInput
} from '../../components/forms'
import {
  PrimaryButton
} from '../../components/buttons'
import { TypographyBody } from '../../components/theme/typography'
import Link from 'next/link'

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

class Create extends React.Component {
  state = {
    invalid: false,
    saved: false,
    user: {}
  }

  handleChange = (value) => {
    this.setState({
      user: {
        ...this.state.user,
        ...value,
      }
    })
  }

  handleCreate = async (e) => {
    e.preventDefault()
    const { user } = this.state

    this.setState({
      invalid: false,
      saved: false
    })

    api.createAdmin(user)
    .then(res => {
      this.setState({ invalid: false, saved: true })
    })
    .catch(error => {
      this.setState({
        invalid: true,
        saved: false,
        errorMessage: error.message
      })
    })
  }

  render() {
    return (
      <Layout active='create'>
        <Container>
          <MyForm onSubmit={ this.handleCreate }>
            <FormRow>
              <FormField>
                <FormInput
                  label="Username"
                  name="username"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <FormInput
                  label="First name"
                  name="firstName"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <FormInput
                  label="Last name"
                  name="lastName"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                />
              </FormField>
            </FormRow>
            { this.state.invalid && 
              <Legend>
                { this.state.errorMessage || 'There was a problem creating the user.' }
              </Legend>
            }
            { this.state.saved && 
              <Legend>
                User saved successfully.
                <br />
                Go to 
                <Link href='/login' as='/login'>
                  <TypographyBody as='a' href='/login'>
                    Login
                  </TypographyBody>
                </Link>
              </Legend>
            }
            <PrimaryButton type="submit">Create</PrimaryButton>
          </MyForm>
        </Container>
      </Layout>
    )
  }
}

export default Create
