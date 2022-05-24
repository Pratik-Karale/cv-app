import { useState } from 'react'
import TextInput from './TextInput'
export default function InfoSection({st,title}){
    const [bulletPoints,setBulletPoints]=useState(["edrfwerwer"])
    const addBulletPoint=()=>{
        this.setState({bulletPoints:[...this.state.bulletPoints,""]})
    }
    const editBulletPoint=(e)=>{
        const bulletPointIndex=e.target.key
        bulletPoints[bulletPointIndex]=e.target.value
        setBulletPoints([...bulletPoints,"ok"])
    }
    return (
      <div className="Info-section">
          <TextInput value={title} st="preview"/>
          <ul>
            {bulletPoints.map((bulletPoint,i)=>{
                return <li key={i}><TextInput st={st} editInput={editBulletPoint} value={bulletPoint}/></li>
            })}
          </ul>
          <button onClick={addBulletPoint}>Add</button>
      </div>
    )
}
