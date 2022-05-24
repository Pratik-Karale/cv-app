import React, { Component } from 'react'

export default function TextInput({st,className,placeholder,cols,rows,value,key}){
    let styleClass=""
    switch (st) {
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
        className={`${styleClass} ${className}`}
        placeholder={placeholder} 
        cols={cols}
        rows={rows}
        defaultValue={value}
        key={key}
      />
    )
}
