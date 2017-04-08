import React from 'react'

export default class URLsListBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {urls: []}
    this.addUrlsToState(this.props.set)
  }

  addUrlsToState(set) {
    const context = this
    if (set === 'topTrendingUrls') {

    }
    else if (set === 'topRequestedUrls') {
      const doRender = this.renderRow
      fetch(`${this.props.api}api/topRequestedUrls`, {
        method: 'get',
        credentials: 'include',
      })
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({urls: json})
      })
    }
  }

  renderRow(url, index) {
    return (
      <tr key={index}>
        <td className="trending-url-count-cell">{url.requests || url.visits}</td>
        <td className="trending-url-cell">{url.address}</td>
      </tr>
    )
  }

  render() {
    return (

      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        <table>
          <tbody>
            { this.state.urls.map(this.renderRow) }
          </tbody>
        </table>
      </div>

    )
  }
}
