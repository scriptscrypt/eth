import React, { useState, useRef} from 'react'
import { Modal, Alert, Skeleton, Card, Input } from '@mantine/core'
import { useVarsContext } from '../../contexts/VarsContext'
import Cards from '../Cards'


export default function Signers() {
  const {provider, signer} = useVarsContext()
  const [err, setErr] = useState()
  const [opened, setOpened] = useState()
  const ipRef = useRef()

  const [signature, setSignature] = useState("")

  const fetchSignature = () =>{
    try{
     signer.signMessage(ipRef.current.value)
    }
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }

  return (
    <>  
    <Card>
      <Input ref={ipRef} placeholder="write your signature message"/>
       <Cards btnName="Sign a message"
        data={signature}
        stateVar="signature"
        func={fetchSignature}
        code={`signer.signMessage( message )`}
        offLink="https://docs.ethers.io/v5/api/signer/#Signer-signMessage" />
      </Card>


    {/* Error Modal */}
    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
        <Alert title="Please check the developer console for more details" color="red">
        {err}
        </Alert>
    </Modal>
    </>
  )
}
