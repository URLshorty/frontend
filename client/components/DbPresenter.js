import React from 'react'

export default class DbPresenter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tables: null, // {}
      tableNames: null, // []
      currentTable: "URLS",
    }
  }

  componentDidMount() {
    this.setData()
  }

  setData() {
    fetch(`${process.env.API_URL}/api/db`)
      .then((response) => {
        return response.json()
      })
      .then(json => {
        this.setState({
          ...this.state,
          tableNames: Object.keys(json),
          tables: json,
        })
      })
      .catch(er => {
        this.props.setCurrentModal({
          name: "messageModal",
          message: "There was a problem fetching the database.",
        })
      })
  }

  setCurrentTable(tableName){
    this.setState({
      ...this.state,
      currentTable: tableName,
    })
  }

  render() {
    return (
      <div className="db-page">

        <div className="tabs">

          {this.state.tableNames &&

            this.state.tableNames.map((name, index) => {
            return <button
                      key={index}
                      id={name}
                      className={name === this.state.currentTable ? "tab-active" : ""}
                      onClick={this.setCurrentTable.bind(this, name)}
                    >
                      {name}
                    </button>
            })}

        </div>

        <div className="tables">

          {this.state.tables && this.state.tableNames && (

              <table>

                <thead>
                  <tr>
                    {Object.keys(this.state.tables[this.state.currentTable][0]).map((label,index) => {
                      return <th key={index}>{label}</th>
                    })}
                  </tr>
                </thead>

                <tbody>
                  {this.state.tables[this.state.currentTable].map((row, index) => {

                    return <tr key={index}>

                              {Object.keys(row).map((column,index) => {

                                return <td key={index}>

                                        {row[column]}

                                       </td>

                              })}

                           </tr>

                  })}
                </tbody>

              </table>

            )
          }


        </div>

        <div className="note">A click on a long-form address on the homepage is added to
        that address's click total, therefor a URL's click total may be greater
        than the some of all that URL's shortened version's (USER_URL) click totals </div>
      </div>
    )
  }
}
