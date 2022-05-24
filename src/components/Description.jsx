import TextArea from './TextArea'
export default function Description({className,placeholder}){
    return (
      <TextArea className={className} placeholder={placeholder} cols="50" rows="5"/>
    )
}
