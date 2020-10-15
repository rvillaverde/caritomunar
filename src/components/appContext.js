import React, { Component } from 'react'

const AppContext = React.createContext()

class AppProvider extends Component {
  state = {
    sections: [
      { id: 'home', label: 'Home', href: '/', footer: false },
      { id: 'admin', label: 'Admin', href: '/admin', footer: false, private: true },
    ],
    contact: {
      email: 'caritomunar@gmail.com',
      linkedIn: 'www.linkedin.com',
    }
  }

  render () {
    return (
      <AppContext.Provider
        value={this.state}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

const Appconsumer = AppContext.Consumer

export default AppContext
export { AppProvider, Appconsumer }
