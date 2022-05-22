import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    let styleClass=""
    switch (this.props.st) {
        case "preview":
            styleClass="textarea-preview"
            break;
        case "edit":
            styleClass="textarea-edit"
            break;
        default:
            break;
    }
    return (
      <textarea className={`${styleClass} ${this.props.className}`} placeholder={this.props.placeholder} cols={this.props.cols} rows={this.props.rows} />
    )
  }
}
