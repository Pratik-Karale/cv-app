import React, { Component } from 'react'

export default class TextInput extends Component {
  render() {
    let styleClass=""
    switch (this.props.st) {
        case "preview":
            styleClass="input-preview"
            break;
        case "edit":
            styleClass="input-edit"
            break;
        default:
            break;
    }
    return (
      <input type="text" 
        className={`${styleClass} ${this.props.className}`}
        placeholder={this.props.placeholder} 
        cols={this.props.cols}
        rows={this.props.rows}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}
