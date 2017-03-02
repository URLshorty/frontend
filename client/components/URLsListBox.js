import React from 'react'

export default class URLsListBox extends React.Component {

  renderRow(url, index) {
    return (
      <tr key={index}>
        <td className="trending-url-cell">{url.url}</td>
        <td className="trending-url-count-cell">{url.visits}</td>
      </tr>
    )
  }

  render() {
    return (

      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        <table>
          <tbody>
            { this.props.urls.map(this.renderRow.bind(this)) }
          </tbody>
        </table>
      </div>
      
    );
  }
}
