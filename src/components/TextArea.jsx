import React from "react"
export default function TextArea({st,className,placeholder,cols,rows}){
    let styleClass=""
    switch (st) {
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
      <textarea className={`${styleClass} ${className}`} placeholder={placeholder} cols={cols} rows={rows} />
    )
}

