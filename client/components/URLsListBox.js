import React from 'react'

export default class URLsListBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {urls: []}
    this.addUrlsToState(this.props.setAddress)
  }

  addUrlsToState(setAddress) {
    fetch(`${process.env.API_URL}/api/${setAddress}`)
    .then((response) => {
      return response.json()
    }).then((json) => { // arrow function takes enclosing this, so this works
      this.setState({urls: json})
    })
    .catch((er) => console.log(er)) // start using this https://github.com/visionmedia/debug
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
