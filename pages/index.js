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
        
      <section id="intro">
        <div className="gridContainer center">
          <div className="logo">
            <img class="svgLogo" src="/static/logo.svg" />
          </div>
          <div className="welcome">
            <h1>Nik.org is the eponymous online home of Nik Papic—designer, developer, marketer, perpetual entrepreneur, and aspiring polymath.</h1>
          </div>
        </div>
      </section>
      
      <section id="biography">
        <div className="gridContainer center">
          <div className="heading item">
          
          </div>
          <div className="leftContent item">
          
          </div>
          <div className="rightContent item">
          
          </div>
        </div>
      </section>
      
      <section id="instafeed">
        <div className="gridContainer center">
          <div class="photo item"></div>
          <div class="photo item"></div>
          <div class="photo item"></div>
          <div class="photo item"></div>
          <div class="photo item"></div>
          <div class="photo item"></div>
          <div class="photo item"></div>
          <div class="photo item"></div>
        </div>
      </section>
      
      <section id="contact">
        <div className="gridContainer center">
          <div className="heading item">
        
          </div>
          <div className="leftContent item">
          
          </div>
          <div className="rightContent item">
          
          </div>
        </div>
      </section>
      
      <footer>
        <div className="gridContainer center">
          <div className="facebookLogo item"></div>
          <div className="instagramLogo item"></div>
          <div className="details item">
          
          </div>
          <div className="footerLogo item"></div>
        </div>
      </footer>
        
      </Page>
    )
  }
}
