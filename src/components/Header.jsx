import React, { Component } from 'react'
import TextInput from './TextInput'
export default class Header extends Component {
  render() {
    return (
      <div>
          <TextInput st={this.props.st} className="full-name-input" placeholder="Full Name"/>
          <TextInput st={this.props.st} className="title-input" placeholder="Title"/>
      </div>
    )
  }
}
