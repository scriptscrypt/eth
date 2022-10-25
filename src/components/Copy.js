import React from 'react'

export default function Copy(props) {
 
  //Copy to clipboard
  function copy(){
    navigator.clipboard.writeText(
      props.code
    )
}
    
  return (
    <>
      
    </>
  )
}
