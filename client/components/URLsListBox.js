import React from 'react'

import MDSpinner from "react-md-spinner"

export default class URLsListBox extends React.Component {

  // put a poll limit on here

  // poll if most visited box is mounted
  componentDidMount() {
    if (this.props.className === 'most-visited-list') {
      this.interval = setInterval(()=>{this.pollVisits()}, 1000)
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
    if (address.slice(0,8) === "https://") {
      address = address.slice(8)
    }
    // here long-form addresses will be visited directly
    // refactor this method out of JSX
    return (
      <tr key={index}>
        <td className="trending-url-count-cell">{url.requests || url.visits}</td>
        <td className="trending-url-cell">
          <a
            href={"http://" + address}
            target="_blank"
            onClick={() => {
                fetch(`${process.env.API_URL}/api/increment?address=${url.address}`, {method: 'post'})
              }
            }
          >{address}</a></td>
      </tr>
    )
  }

  render() {
    return (

      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        <table>
          <tbody>

            { this.props.urlsList.length === 0 &&
              <MDSpinner style={{"top":"4rem"}}/>
            }

            { this.props.urlsList.map(this.renderRow) }
          </tbody>
        </table>
      </div>

    )
  }
}
