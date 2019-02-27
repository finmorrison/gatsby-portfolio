import React from 'react'
import PropTypes from 'prop-types'
// import '../assets/scss/layout/_main.scss'
import pic01 from '../images/SLCPano.png'
import pic02 from '../images/background.png'
// import pic03 from '../images/pic03.jpg'
import cart from '../images/cart.png'
import productPage from '../images/productPage.png'
import stringOptions from '../images/StringOptions.png'
import frontPage from '../images/FrontPage.png'
import kanooLanding from '../images/kanoo-landing.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )
    const settings = {
      dots: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      pauseOnHover: false,
      initialSlide: 8,
      fade: true,
      left: 0,
    }

    const images = [frontPage, stringOptions, productPage, cart]

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>

          <p>
            I'm Findlay Morrison, a web developer from Salt Lake City,
            Utah. I started web development at a DevMountain boot-camp. I love
            problem solving and learning new techniques to accomplish tasks in
            the apps I make. By the way, check out my{' '}
            <a href="#work">awesome work</a>.
          </p>
          <p>
            Coming from Utah I grew up spending most of my free time in the
            mountains and deserts. I've skied, climbed, and hiked all over Utah.
            I played lacrosse since I was young and had the opportunity to play
            college lacrosse. I turned that opportunity down to pursue a career
            as early as possible because I figured that was more important. I
            served a two year church-service mission in Russia and speak
            conversational Russian as well.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          
          <div
          
            style={{
              // position: 'absolute',
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              zIndex: 4,
              // background: 'white'
            }}
          >
            <div id="icon-containers">
              <i id="icons" class="devicon-javascript-plain" />
              <p>Javascript</p>
            </div>
            <div id="icon-containers">
              <i id="icons" class="devicon-html5-plain" />
              <p>HTML5</p>
            </div>{' '}
            <div id="icon-containers">
              <i id="icons" class="devicon-css3-plain" />
              <p>CSS3</p>
            </div>{' '}
            <div id="icon-containers">
              <i id="icons" class="devicon-postgresql-plain" />
              <p>PostgreSQL</p>
            </div>
            <div id="icon-containers">
              <i id="icons" class="devicon-nodejs-plain" />
              <p>NodeJS</p>
            </div>{' '}
            <div id="icon-containers">
              <i id="icons" class="devicon-react-plain" />
              <p>ReactJS</p>
            </div>{' '}
            {/* <i  id="icons" class="devicon-express-original" /> */}
          </div>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>Lacrosse Project</h3>
          <div>
            <img src={frontPage} style={{ width: '100%' }} />
          </div>
          <div className="container-of-icons">
          <p>
            Personal project made as an e-commerce web application for lacrosse
            equipment. Built using Javascript, ReactJS, NodeJS, ExpressJS, SCSS,
            and PostgreSQL. Payment system built using Stripe checkout. Allows
            users to select products and add to cart, also make custom
            selections to add to the cart. This is done using a RESTful API with
            Axios and PostgreSQL database. Users have access to their cart when
            logged in using Redux React Session. All user data is held in React
            Redux. User password is stored using bcrypt.
          </p>
            <a id="" href="https://lacrosseproject.com" target="_blank">
              Live Site
            </a>
            <a
              id=""
              href="https://github.com/finmorrison/lacrosse-personal-project"
              target="_blank"
            >
              GitHub repository
            </a>
          </div>
          <h3>Kanoo (Travel App)</h3>
          <img src={kanooLanding} style={{width: '100%'}}/>
          <p>Group project made to organize travel notes and plans on a single site. Built using Javascript, ReactJS, NodeJS, ExpressJS, SCSS,
            and PostgreSQL. Allows users to add trips to their plans and write details on those trips. Trips can have friends added to them and planned together as well as individually. Trips that are identified as "public" will be shown to all users on the dashboard page. Users may also add to, update, and delete from a bucket list. This application uses a RESTful API with Axios and PostgreSQL for the database. User session information is stored using React Sessions and password is stored using bcrypt. </p>
          <div className="container-of-icons">
            <a id="" href="https://kanoo.fun/#/" target="_blank">
              Live Site
            </a>
            <a
              id=""
              href="https://github.com/wpr-45-studentdevs/travel-app"
              target="_blank"
            >
              GitHub repository
            </a>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>Email: fin.morrison@gmail.com</p>
          <a href />
          <form
            action="https://formspree.io/fin.morrison@gmail.com"
            method="POST"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/fimorrison"
                target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/fin.morrison"
                target="_blank"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/finmorrison/"
                target="_blank"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/finmorrison"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fin-morrison/"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
