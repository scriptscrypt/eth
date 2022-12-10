import React from 'react'
import { Badge, Tooltip } from '@mantine/core'

export default function GlobalVariables(props) {
    //Copy to clipboard
    function copy(){
      navigator.clipboard.writeText(
       `${props.code}`
      )
    }

  return (
    <>
    <div className="rf jusL">
    
    <Badge variant='filled' m="lg" outlined size='lg' radius={2}>{props.name}</Badge>
    
    <Tooltip label="Click to copy" events={{ hover: true,}}>
     <Badge onClick={copy} variant='light' size='lg' radius={2}>{props.code}</Badge>
    </Tooltip>

    
    </div>

    </>
  )
}
