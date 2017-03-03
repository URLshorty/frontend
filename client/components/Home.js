import React from 'react'
import { Link } from 'react-router';

import URLsListBox from './URLsListBox';
import ChatBox from './ChatBox';

export default class Home extends React.Component {

  render() {
    return (
      <div id="home">
        
        <h1 className="logo">
          <Link to="/"><span>URL</span>.shorty</Link>
        </h1>

        <div id="home-display-boxes">
          <URLsListBox 
            className="most-visited-list" 
            title="Most Visited Links"
            urls={this.props.topTrendingURLs}
            updateTopTrendingURLs={this.props.updateTopTrendingURLs}
          />

          <URLsListBox 
            className="most-shortened-list" 
            title="Most Shortened"
            urls={this.props.topRequestedURLs}
            updateTopRequestedURLs={this.props.updateTopRequestedURLs}
          />

          <ChatBox {...this.props} />
        </div>

      </div>
    );
  }
}
