import Page from '../components/page'
import React from 'react'


export default class extends React.Component {
  static async getInitialProps() {
    return {};
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
            <h1>Hi, I'm a furniture/cabinet maker/designer residing in Hobart, Tasmania. I specialise in designing and constructing pieces to suit your space and needs.</h1>
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
            <p>My adventures in furniture design began in 2009 when my life took on a new direction. I found working with my hands in a creative fashion therapeutic and akin to simpler times. I was captivated with Italian minimalism and the sleek, clean lines representative of the early 21st century. Inspired by the works of designers Werner Aisslinger and Roland Knoll, and of furniture studios Cappellini and Vitra, I set to work creating my own designs.</p>
            <p>In 2012, I took the next step in my education and began working with solid timber. I joined Designed Objects Tasmania, a cooperative studio and workshop to advance my craft. I learnt how to use machinery and discovered the beauty of working with timber.</p>
          </div>
          <div className="rightContent">
            <p>Inspired by the robust designs of Mark Tuckey, I designed and created cabinets using thick timber slabs whilst integrating elements from Scandinavian modern. The minimalist nature of the mid-century modern movement provided the next step in my journey.</p>
            <p>Upon my completion of a Bachelor of Science from UTAS (that's a story for another time) I decided to have a go at making furniture on a full-time basis. So it was that I discovered Shaker style furniture. I was drawn in by the stark minimalism which encapsulates the style where truly less is more. I honed my hand tool skills and learnt to construct furniture using traditional joinery techniques. I learnt the subtleties of wood movement (and the not so subtle effects of getting it wrong) and created small and large pieces with traditional timber drawers and doors. Inspired by the work of Sebastian Cox, I introduced woven timber elements into my designs.</p>
            <p>In early 2017, I decided it was time to take the next step in my indefinite eduction and accepted a cabinet making apprenticeship through a prominent joinery firm in Hobart. Working in a professional workshop and using new materials and techniques has changed the way I think about, design and construct furniture and cabinets for the better.</p>
          </div>
        </div>
      </section>

      <section id="works">
        <div className="gridContainer center">
          <div className="heading">
            <hr />
            <h2>Works and Sketches</h2>
          </div>
          <div className="worksContainer">
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="gridContainer center">
          <div className="heading">
            <hr />
            <h2>Get in touch</h2>
          </div>
          <div className="leftContent">
            <h1>You can get in contact with me at <a href="mailto:tom@thomasstove.com">tom@thomasstove.com</a> or on 0457 001 345. I'm also on <a href="https://www.facebook.com/thomasstovefurniture/" target="_blank">facebook</a> and <a href="https://www.instagram.com/tomstove/" target="_blank">instagram</a> if that suits you too.</h1>
          </div>
          <div className="rightContent">
            <img className="circle" src="/static/profile_sml.png" />
          </div>
        </div>
      </section>

      <footer>
        <hr className="f" />
        <div className="gridContainer center">
          <div className="facebookLogo">
            <a href="https://www.facebook.com/thomasstovefurniture/" target="_blank"><img src="/static/Facebook.svg" /></a>
          </div>
          <div className="instagramLogo">
            <a href="https://www.instagram.com/tomstove/" target="_blank"><img src="/static/Instagram.svg" /></a>
          </div>
          <div className="details">
            <p className="small">Made with &#9825; by Tom Stove, 2017</p>
          </div>
          <div className="footerLogo">
            <a href="http://thomasstove.com"><img src="/static/logo.svg" /></a>
          </div>
        </div>
      </footer>

      </Page>
    )
  }
}
