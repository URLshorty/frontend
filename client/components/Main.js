import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="nav-bar">
          <NavLink to="/#" className="nav-link" activeClassName="active">navlink</NavLink>
          <NavLink to="/#" className="nav-link" activeClassName="active">navlink</NavLink>
        </div>

        <h1 id="logo">
          <Link to="/"><span>URL</span>.shorty</Link>
        </h1>

        {/* because just this.props.childen doesn't get you access to the children's props  */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
