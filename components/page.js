import React from 'react'
import { initGA, logPageView } from '../utils/analytics'
import Meta from './meta'

export default class Page extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div>
      <Meta />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
