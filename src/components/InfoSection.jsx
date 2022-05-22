import React, { Component } from 'react'
import TextInput from './TextInput'
export default class InfoSection extends Component {
    constructor(props){
        super(props)
        this.state={bulletPoints:["edrfwerwer"]}
        this.addBulletPoint=this.addBulletPoint.bind(this)
        this.editBulletPoint=this.editBulletPoint.bind(this)
    }
    addBulletPoint(){
        this.setState({bulletPoints:[...this.state.bulletPoints,""]})
    }
    editBulletPoint(e){
        console.log(this)
        const bulletPointIndex=e.target.key
        this.state.bulletPoints[bulletPointIndex]=e.target.value
        this.setState({bulletPoints:[...this.state.bulletPoints,"ok"]})
    }
  render() {
    //   console.log(this.editBulletPoint)
    return (
      <div className="Info-section">
          <TextInput value={this.props.title} st="preview"/>
          <ul>
            {this.state.bulletPoints.map((bulletPoint,i)=>{
                return <li><TextInput st={this.props.st} editInput={this.editBulletPoint} value={bulletPoint}/></li>
            })}
          </ul>
          <button onClick={this.addBulletPoint}>Add</button>
      </div>
    )
  }
}
