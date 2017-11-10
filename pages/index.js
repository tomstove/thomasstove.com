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
        
      <div className="container">
      <div className="row">
        <div className="logo" title="Nik.org">
        </div>
      </div>
      
      <div className="row headline">
        <div className="nine columns">
          <h1>Nik.org is the eponymous online home of Nik Papic&mdash;designer, developer, marketer, perpetual entrepreneur, and aspiring polymath.</h1>
        </div>
      </div>
      <div className="row"><hr /></div>
      
      <div className="row">
      <div className="six columns">
        <div className="row">
        <h2>BIOGRAPHY</h2>
        <div className="six columns subhead">A life's work of embracing both the creative and the quantitative, developing thriving online businesses and enviable brands.</div>
        </div>
        <p>I have spent my entire adult life&mdash;and most of my (beleaguered) childhood&mdash;engrossed in internet business and the functions that drive it. As a somewhat atypical child&mdash;emigrating war-torn Yugoslavia for the United States at the age of ten&mdash;I found a virtual refuge in the online world, and quickly became enamored with design, development, and marketing on the (then new) medium.</p>

        <p>By high school, I founded Gamers.net, establishing the site as a preeminent gaming network that attracted millions of monthly visitors. The company was eventually acquired as my interest in gaming waned (along with inflated revenues of the dot-com boom), but a passion for online business &amp; design remained. Twenty years, countless projects, and numerous ups-and-downs later, I'm still as obsessed as ever.</p>
      </div>

      <div className="six columns">

        <p>Most recently, I spent four years at Squarespace, a SaaS website publishing platform based in NYC. As an early employee (the headcount grew 25x during my tenure), I instituted the company's marketing architecture and scaled the growth initiatives, culminating in paying subscriber growth of &gt;2000% and a valuation of over a billion dollars.</p>

        <p>Prior to Squarespace, I was an early employee at a Seattle-based education startup, where I built the flagship consumer website and grew it into a top-500 property (Alexa, 2007&ndash;2010). This helped the company become one of the most profitable (net margin) and fastest-growing private companies in the US, leading to a $160M acquisition.</p>

        <p>I currently reside in Manhattan and continue to work in tech, both professionally and as a hobby. I have a keen appreciation of good design, which plays a major role in every facet of my life, bordering on obsessive. I also teach Internet Marketing (DM435) at <a href="http://www.fitnyc.edu" target="_blank">FIT</a>; it allows me to impart my life's positive influences onto a new generation, which is incredibly rewarding.</p>
      </div>
      </div>
      
      <div className="row logocontainer" title="Brands with which I've worked.">
          <div className="three columns">
            <div className="nyu"></div>
            <div className="pond5"></div>
          </div>
          <div className="three columns">
            <div className="squarespace"></div>
            <div className="horizon"></div>
          </div>
          <div className="three columns">
            <div className="fit"></div>
            <div className="skillshare"></div>
          </div>
          <div className="three columns">
            <div className="kipling"></div>
            <div className="carmax"></div>
          </div>
      </div>
      
      <div className="row"><hr /></div>
      <div className="row">

      <div className="four columns">
        <h2>Expertise</h2>
        <div className="eight columns subhead">Two decades of hands-on experience and hundreds of millions in spend have yielded a diverse skillset that touches on most every function. This is a partial list.</div>
        <a href="nik-papic-resume.pdf"><div className="button">Résumé</div></a>    
      </div>
      <div className="four columns">
        <ul>
          <li>Brand Development &amp; Advertising</li>
          <li>Direct-Response Marketing</li>
          <li>Search Marketing: SEO &amp; PPC</li>
          <li>Digital Video &amp; TV, including Super Bowl</li>
          <li>Streaming &amp; Radio</li>
          <li>Out-of-Home</li>
          <li>Influencer Marketing: Podcast &amp; YouTube</li>
          <li>Email Marketing, Design &amp; Dev</li>
          <li>Social Media (Paid &amp; Organic)</li>
        </ul>
      </div>
      <div className="four columns">
        <ul>
          <li>Website Design &amp; Development</li>
          <li>Advertising Creative (All Mediums)</li>
          <li>Identity Design</li>
          <li>Conversion Rate Optimization</li>
          <li>Copywriting (Ad, Web, &amp; Product)</li>
          <li>Media Planning &amp; Buying (up to $100M)</li>
          <li>Content Strategy &amp; Execution</li>
          <li>Business Development: Platform &amp; Revshare</li>
          <li>Creative Sponsorships &amp; New Media</li>
        </ul>
      </div>
      </div>
      
      <div className="row" style={{marginTop:10+'rem'}}>
        <hr />  
        <h3>To get in touch, write to <a href="mailto:hi@nik.org">hi@nik.org</a>.</h3>
      </div>

      <div className="row">
        <hr className="f" />
      <div className="footer">
          
          <a href="https://www.linkedin.com/in/nikolapapic" title="LinkedIn @nikolapapic" target="_blank"><div className="linkedin social"></div></a>
          <a href="https://twitter.com/nikpapic" title="twitter @nikpapic" target="_blank"><div className="twitter social"></div></a>
          
          &copy; 2017 <a href="mailto:hi@nik.org">Nik Papic</a>. Made in NYC.
          
        </div>
      </div>
      
      </div>
        
      </Page>
    )
  }
}
