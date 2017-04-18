import React from 'react'

export default class SingleFieldForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      updateEnabled: false,
      submitEnabled: false,
      value: '',
    }
  }

  nameToVar() {
    let varParser = (function() {
      let afterSpace = 0
      return function(memo,el) {
        if ( el === " " ) {
          afterSpace = 1
          return memo
        }
        else if ( afterSpace === 1 ) {
          afterSpace = 0
          return memo + el.toUpperCase()
        }
        return memo + el.toLowerCase()
      }
    })()

    let nameVarArr = this.props.name.split('')
    let nameVar = nameVarArr
      .slice(1,nameVarArr.length)
      .reduce(varParser, nameVarArr[0].toLowerCase())

    return nameVar
  }

  nameToClassName() {
    let className = this.props.name.toLowerCase().replace(/\s/g,"-")
    return className
  }

  toggleUpdateField() {
    this.setState({
      submitEnabled: false,
      updateEnabled: !this.state.updateEnabled,
    })
  }

  enableSubmitButton() {
    if (this.refs[this.nameToVar()].value.length > 0) {
      this.setState({
        ...this.state,
        submitEnabled: true,
      })
    } else {
      this.setState({
        ...this.state,
        submitEnabled: false,
      })
    }
  }

  render() {
    return (
      <div>
        { !this.state.updateEnabled ? (

          <div>
            <div id={this.nameToClassName()}>
              <span>{this.props.name}</span><br />
              <span>{this.state.value || this.props.value}</span>
            </div>

            { this.props.currentUser.id === this.props.profileId &&
              <button
                onClick={this.toggleUpdateField.bind(this)}>
                EDIT
              </button>
            }

          </div>

        ) : (

          <div>

            <form
              id={`${this.nameToClassName()}-update`}
              onSubmit={this.props.submit.bind(this)}>
              <input
                autoFocus
                required
                id={`${this.nameToVar()}UpdateField`}
                type="text"
                ref={this.nameToVar()}
                placeholder={this.props.value}
                onChange={this.enableSubmitButton.bind(this, this.state.nameToVar)}
              />
            <input type="submit" hidden />

            </form>

            <button onClick={this.toggleUpdateField.bind(this)}>
              Cancel
            </button>

            <button
              disabled={!this.state.submitEnabled}
              onClick={this.props.submit.bind(this)}>
              Update
            </button>


          </div>

        )}
      </div>
    )
  }
}

// SingleFieldForm.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   value: React.PropTypes.string.isRequired,
//   currentUser: React.PropTypes.object.isRequired,
//   submit: React.PropTypes.function.isRequired,
//   profileId: React.PropTypes.number,
// }
