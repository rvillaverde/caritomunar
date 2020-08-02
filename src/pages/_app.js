import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AppProvider } from '../components/appContext'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { REHYDRATE } from 'redux-persist'
import theme from '../theme/theme'

import '../../public/styles/global.scss'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps: pageProps};
  }

  componentDidMount() {
    persistor.dispatch({ type: REHYDRATE });
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </AppProvider>
        </PersistGate>
      </Provider>
    )
  }
}

const makeStore = () => store
export default withRedux(makeStore)(MyApp)

// const makeStore = (context) => createStore(reducer)
// const wrapper = createWrapper(makeStore, {debug: true})
// export default wrapper.withRedux(MyApp)
