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
            <img className="svgLogo" src="/static/logo.svg" />
          </div>
          <div className="welcome">
            <h1>Nik.org is the eponymous online home of Nik Papic—designer, developer, marketer, perpetual entrepreneur, and aspiring polymath.</h1>
          </div>
        </div>
      </section>
      
      <section id="biography">
        <div className="gridContainer center">
          <div className="heading">
            <hr />
            <h2>Personal Account</h2>
          </div>
          <div className="subhead">A lifes work of embracing both the creative and the quantitative, developing thriving online businesses and enviable brands.</div>
          <div className="leftContent">
            <p>I have spent my entire adult life&mdash;and most of my (beleaguered) childhood&mdash;engrossed in internet business and the functions that drive it. As a somewhat atypical child&mdash;emigrating war-torn Yugoslavia for the United States at the age of ten&mdash;I found a virtual refuge in the online world, and quickly became enamored with design, development, and marketing on the (then new) medium.</p>
            <p>By high school, I founded Gamers.net, establishing the site as a preeminent gaming network that attracted millions of monthly visitors. The company was eventually acquired as my interest in gaming waned (along with inflated revenues of the dot-com boom), but a passion for online business &amp; design remained. Twenty years, countless projects, and numerous ups-and-downs later, Im still as obsessed as ever.</p>
          </div>
          <div className="rightContent">
            <p>Most recently, I spent four years at Squarespace, a SaaS website publishing platform based in NYC. As an early employee (the headcount grew 25x during my tenure), I instituted the companys marketing architecture and scaled the growth initiatives, culminating in paying subscriber growth of &gt;2000% and a valuation of over a billion dollars.</p>
            <p>Prior to Squarespace, I was an early employee at a Seattle-based education startup, where I built the flagship consumer website and grew it into a top-500 property (Alexa, 2007&ndash;2010). This helped the company become one of the most profitable (net margin) and fastest-growing private companies in the US, leading to a $160M acquisition.</p>
            <p>I currently reside in Manhattan and continue to work in tech, both professionally and as a hobby. I have a keen appreciation of good design, which plays a major role in every facet of my life, bordering on obsessive. I also teach Internet Marketing (DM435) at <a href="http://www.fitnyc.edu" target="_blank">FIT</a>; it allows me to impart my lifes positive influences onto a new generation, which is incredibly rewarding.</p>
          </div>
        </div>
      </section>
      
      <section id="instafeed">
        <div className="gridContainer center">
          <div className="photo item"></div>
          <div className="photo item"></div>
          <div className="photo item"></div>
          <div className="photo item"></div>
          <div className="photo item"></div>
          <div className="photo item"></div>
          <div className="photo item"></div>
          <div className="photo item"></div>
        </div>
      </section>
      
      <section id="contact">
        <div className="gridContainer center">
          <div className="heading">
            <hr />
            <h2>Get In Touch</h2>
          </div>
          <div className="subhead">A lifes work of embracing both the creative and the quantitative, developing thriving online businesses and enviable brands.</div>
          <div className="leftContent item">
            
          </div>
          <div className="rightContent">
            <img className="circle" src="/static/profile_sml.png" />
          </div>
        </div>
      </section>
      
      <footer>
        <hr className="f" />
        <div className="gridContainer center">
          <div className="facebookLogo"></div>
          <div className="instagramLogo"></div>
          <div className="details item">
          
          </div>
          <div className="footerLogo item"></div>
        </div>
      </footer>
        
      </Page>
    )
  }
}
