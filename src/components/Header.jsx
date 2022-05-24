import React, { Component } from 'react'
import TextInput from './TextInput'
export default function Header({st}) {
  
    return (
      <div>
          <TextInput st={st} className="full-name-input" placeholder="Full Name"/>
          <TextInput st={st} className="title-input" placeholder="Title"/>
      </div>
    )
  
}
