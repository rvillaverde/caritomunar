import React, { Component } from 'react'
import Router from 'next/router'
import api from '../api/auth'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const parseCookies = (request) => {
  let cookies = {},
    rc = request.headers.cookie;

  rc && rc.split(';').forEach(function(cookie) {
    let parts = cookie.split('=');
    cookies[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return cookies;
}

const redirect = (ctx) => {
  if (ctx.res) {
    ctx.res.redirect('/login')
    ctx.res.end()
  } else {
    Router.push('/login')
  }
}

const withAuth = (AuthComponent) => {
  return class Authenticated extends Component {
    static async getInitialProps(ctx) {
      let token

      if (ctx.req) {
        token = parseCookies(ctx.req).token
      } else {
        token = cookies.get('token')
      }

      await api.validate(token)
        .then((res) => {
        })
        .catch((error) => {
          redirect(ctx)
        })

      const pageProps = AuthComponent.getInitialProps && await AuthComponent.getInitialProps(ctx);
      return { ...pageProps }
    }

    render() {
      return (
        <AuthComponent { ...this.props } />
      )
    }
  }
}

export default withAuth
