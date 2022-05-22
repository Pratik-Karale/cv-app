import React, { Component } from 'react'
import Header from "./components/Header"
import Description from './components/Description'

export default class CV extends Component {
    constructor(props){
      super(props)
        this.state={
            mode:"edit"
        }
    }
  render() {
    return (
      <div className="CV">
          <div>
              <Header st={this.state.mode}/>
              <Description className="" placeholder="okokokookokooko"/>
          </div>
      </div>
    )
  }
}
