import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="details" className={`${this.props.article === 'details' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <div align="center">
            <h2 className="major">Ceremony & Reception</h2>
            <h4>Four in the afternoon</h4>
            <h3>Bernardus Lodge & Spa</h3>
            <h4>415 W Carmel Valley Rd <br />Carmel Valley, CA 93924</h4>
            <h5><i>Reception to follow</i></h5>
          </div>
          {close}
        </article>

        <article id="accommodations" className={`${this.props.article === 'accommodations' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div align="center">
          <h2 className="major">Accommodations</h2>
          <h3>Bernardus Lodge & Spa</h3>
          <span className="image main"><img src="https://www.bernarduslodge.com/assets/images/home-spa.jpg" alt="" /></span>
          <p>The serene character of Bernardus Lodge & Spa echoes an authentic Wine Country retreat. Bernardus  nurtures a relaxing escape from the bustle of life—to calm and revitalize all of the senses, providing the finest resort experience of all Carmel Valley.</p>
          <p>
          Room block pricing available by phone, mention Zarin/Barrett-Wilsdon Wedding.</p>
          <a href="https://www.bernarduslodge.com">Website</a> | P: (831) 658-3400
          <p></p>
          <h3>Carmel Mission Inn</h3>
          <span className="image main"><img src="https://www.carmelmissioninn.com/wp-content/themes/connected/dist/images/home/cmi-home-blend-1-sm.jpg" alt="" /></span>
          <p>The Carmel Mission Inn combines convenient Carmel Valley lodging with approachable service, thoughtful amenities and value. The Mission Inn has a charmingly stylish setting with an array of amenities that include a heated pool, a spacious hot tub, a fitness room, and spa services.</p>
          <p>
          Discounted rate available by phone, mention Zarin/Barrett-Wilsdon Wedding.</p>
          <a href="https://www.carmelmissioninn.com">Website</a> | P: (800) 348-9090
          {close}
          </div>
        </article>

        <article id="registry" className={`${this.props.article === 'registry' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Registry</h2>
          <input type="password"></input>
          <p>Registry is coming soon!</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
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