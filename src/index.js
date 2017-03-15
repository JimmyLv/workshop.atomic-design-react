import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { AppPage } from './components/pages'
import './index.css'

ReactDOM.render(
  <AppContainer>
    <AppPage />
  </AppContainer>,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/pages/AppPage/AppPage', () => {
    const NextApp = require('./components/pages/AppPage/AppPage').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
