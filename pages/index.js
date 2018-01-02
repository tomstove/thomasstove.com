import Page from '../components/page'
import React from 'react'
import Instagram from 'node-instagram'

const instagram = new Instagram({
  clientId: '4f857ddae3d04110abe43e533b820fc3',
  clientSecret: 'a55c4c1d377b4fe6a0e943ce889c86d3',
  accessToken: '1749449.1677ed0.90fddba0077949e4ab00c4296b9c0369'
})


export default class extends React.Component {
  static async getInitialProps() {
    const rawData = await instagram.get('users/self/media/recent', { count: 21 });
    let data = [];
    rawData.data.forEach(function(item) {
      if(item.carousel_media) {
        item.carousel_media.forEach(function(image) {
          data.push({
            url: image.images.standard_resolution.url,
            link: item.link
          })
        })
      } else {
        data.push({
          url: item.images.standard_resolution.url,
          link: item.link
        })
      }
    })

    let newArr = [];

    while(data.length > 0) {
      let i = Math.floor(Math.random() * data.length);
      newArr.push(data[i]);
      data.splice(i, 1);
    }
    return { data: newArr };
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
            <h1>Hi, I'm Tom Stove. I design and build furniture and cabinets to suit your space and needs. I use a variety of materials and techniques and am based in Hobart, Tasmania.</h1>
          </div>
        </div>
      </section>

      <section id="biography">
        <div className="gridContainer center">
          <div className="heading">
            <hr />
            <h2>My Story</h2>
          </div>
          <div className="leftContent">
            <p>My adventures in furniture design began in 2009 when my life took on a new direction. I found working with my hands in a creative fashion therapeutic and akin to simpler times. I was captivated with Italian minimalism and the sleek, clean lines representative of the early 21st century. Inspired by the works of designers <a href="http://www.aisslinger.de/" target="_blank">Werner Aisslinger</a> and <a href="https://www.rknl.com/" target="_blank">Ronald Knol</a>, and of furniture studios <a href="https://www.cappellini.it/en" target="_blank">Cappellini</a> and <a href="https://www.vitra.com/en-au/home" target="_blank">Vitra</a>, I set to work creating my own designs.</p>
            <p>In 2012, I took the next step in my education and began working with solid timber. I joined <a href="https://www.dot.org.au/" target="_blank">Designed Objects Tasmania</a>, a cooperative studio and workshop to advance my craft. I learnt how to use machinery and discovered the beauty of working with timber.</p>
            <p>Inspired by the robust designs of <a href="http://www.marktuckey.com.au/" target="_blank">Mark Tuckey</a>, I designed and created cabinets using thick timber slabs whilst integrating elements from Scandinavian modern. The minimalist nature of the mid-century modern movement provided the next step in my journey.</p>
          </div>
          <div className="rightContent">
            <p>Upon my completion of a Bachelor of Science from UTAS (that's another story) I decided to have a go at making furniture on a full-time basis. So it was that I discovered Shaker style furniture. I was drawn in by the stark minimalism which encapsulates the style where truly less is more. I honed my hand tool skills and learnt to construct furniture using traditional joinery techniques. I learnt the subtleties of wood movement (and the not so subtle effects of getting it wrong) and created small and large pieces with traditional timber drawers and doors. Inspired by the work of <a href="http://www.sebastiancox.co.uk/" target="_blank">Sebastian Cox</a>, I introduced woven timber elements into my designs.</p>
            <p>In early 2017, I decided it was time to take the next step in my indefinite eduction and accepted a cabinet making apprenticeship through a prominent joinery firm in Hobart. Working in a professional workshop and using new materials and techniques has changed the way I think about, design and construct furniture and cabinets for the better.</p>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="gridContainer center">
          <div className="heading">
            <hr />
            <h2>What I Offer</h2>
          </div>
          <div className="statement">
            <h3>Being commission based, I specialise in offering custom furniture and cabinet solutions. I provide expertise with free-standing and built-in furniture in a range of styles and materials. Feel free to browse my works below and please get in contact to discuss your ideas.</h3>
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
            {
              this.props.data.map((item) => (
                <div className="photo">
                  <a href={item.link} target="_blank"><img src={item.url} /></a>
                </div>
              ))
            }
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
            <h1>You can get in contact with me at <a href="mailto:tom@thomasstove.com">tom@thomasstove.com</a> or on 0457 001 345. I'm also on <a href="https://www.facebook.com/thomasstovefurniture/" target="_blank">facebook</a> and <a href="https://www.instagram.com/tomstove/" target="_blank">instagram</a> if you'd prefer.</h1>
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
