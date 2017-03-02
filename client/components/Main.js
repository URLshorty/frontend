import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import MostVisitedList from './MostVisitedList';
import MostShortenedList from './MostShortenedList';
import ChatBox from './ChatBox';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <div id="nav-bar">
          {/*<Link to="/" className="logo"><span>URL</span>.shorty</Link>*/}
          <NavLink to="/#" className="nav-link" activeClassName="active">Login</NavLink>
        </div>

        <h1 className="logo">
          <Link to="/"><span>URL</span>.shorty</Link>
        </h1>

        {/* because just this.props.childen doesn't get you access to the children's props  */}
        {React.cloneElement(this.props.children, this.props)}

        <div id="home-display-boxes">
          <MostVisitedList {...this.props} />
          <MostShortenedList {...this.props} />
          <ChatBox {...this.props} />
        </div>

        <div id="footer"><div>Thanks for visiting!</div></div>
      </div>
    );
  }
}
