import React from 'react'

export default class ContactForm extends React.Component {
    
    state = {
        firstName: '',
        lastName: ''
    }

    // event handling
    updateFirstName = (event) => {
      this.setState({
        firstName: event.target.value
      })
    }
  
    updateLastName = (event) => {
        this.setState({
          lastName: event.target.value
        })
      }
  
  
    render() {
    return (
    // Input
    <div>
      <div>
        <label>First Name</label>
        <input type='text'
          value={this.state.firstName}
          onChange={this.updateEnquiry}
        />
      </div>

      <div>
        <label>Last Name</label>
        <input type='text'
          value={this.state.lastName}
          onChange={this.updateEnquiry}
        />
      </div>


    </div>

    )
  }

}