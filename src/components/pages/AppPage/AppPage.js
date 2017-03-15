import React, { Component } from 'react'
import styles from './AppPage.css'

import { PageTemplate } from '../../templates'
import { Header, Content, Footer } from '../../organisms'

class AppPage extends Component {
  render() {
    return (
      <PageTemplate
        header={<Header theme={styles['header']}/>}
        footer={<Footer />}
      >
        <Content />
      </PageTemplate>
    )
  }
}

export default AppPage
