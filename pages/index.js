import Page from '../components/page'
import React from 'react'

export default class extends React.Component {
  static async getInitialProps() {
    let data = { name: "tom" }
    return ({ data: data })
  }

  render() {
    return (
      <Page>
        <div className="row">
          <div className="column">
            <h2>Hello World</h2>
            <hr />
            <p>This is myapp by { this.props.data.name }:)</p>
          </div>
        </div>
      </Page>
    )
  }
}
