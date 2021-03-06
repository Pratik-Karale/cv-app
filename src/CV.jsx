import React, { Component } from 'react'
import Header from "./components/Header"
import Description from './components/Description'
import InfoSection from './components/InfoSection'
import ProfileImage from './components/ProfileImage'
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
              <Description st={this.state.mode} className="" placeholder="okokokookokooko"/>
              <InfoSection st={this.state.mode} title="Experience"/>
              <InfoSection st={this.state.mode} title="Education"/>
          </div>
          <div>
              <ProfileImage st={this.state.mode}/>
          </div>
      </div>
    )
  }
}
