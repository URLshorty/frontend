import React from 'react'
import { Link } from 'react-router'

export default class NewURLsList extends React.Component {

  renderInputURLs(inputURL, index) {
    let shortUrl = `${process.env.API_URL}/${inputURL.shortened}`

    return (
      <tr className="input-url-row" key={index}>
        <td><a href={shortUrl} target="_blank">{shortUrl}</a></td>
        <td>{inputURL.address}</td>
        <td>{inputURL.timesShortened}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        { this.props.inputURLs.urls.length > 0 &&
          <table id="new-urls-list-table">
            <tbody id="new-urls-list-body">
              <tr className="input-url-table-header">
                <td className="header-cell">Short URL</td>
                <td className="header-cell">Destination</td>
                <td className="header-cell">Times Shortened</td>
              </tr>

                {this.props.inputURLs.urls.map(this.renderInputURLs.bind(this))}

            </tbody>
          </table>
        }
      </div>
    );
  }
}

