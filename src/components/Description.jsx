import React, { Component } from 'react'
import TextArea from './TextArea'
export default class Description extends Component {
  render() {
    return (
      <TextArea className={this.props.className} placeholder={this.props.placeholder} cols="50" rows="5"/>
    )
  }
}
