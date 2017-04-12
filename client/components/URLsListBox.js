import React from 'react'

export default class URLsListBox extends React.Component {

  // poll if most visited box is mounted
  // refactor with conditional or update to WebSockets
  componentDidMount() {
    if (this.props.className === 'most-visited-list') {
      this.interval = setInterval(()=>{this.pollVisits()}, 2000)
    }
  }
  componentWillUnmount() {
    if (this.props.className === 'most-visited-list') {
      clearInterval(this.interval)
    }
  }
  pollVisits() {
    this.props.fetchUrlsList('most-visited')
  }

  renderRow(url, index) {
    let address = url.address
    if (address.slice(0,7) === "http://") {
      address = address.slice(7)
    }
    return (
      <tr key={index}>
        <td className="trending-url-count-cell">{url.requests || url.visits}</td>
        <td className="trending-url-cell"><a href={"http://" + address} target="_blank">{address}</a></td>
      </tr>
    )
  }

  render() {
    return (

      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        <table>
          <tbody>
            { this.props.urlsList.map(this.renderRow) }
          </tbody>
        </table>
      </div>

    )
  }
}
