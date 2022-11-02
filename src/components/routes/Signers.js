import React, { useState, useRef} from 'react'
import { Modal, Alert, Skeleton, Card, Input, Group } from '@mantine/core'
import { useVarsContext } from '../../contexts/VarsContext'
import Cards from '../Cards'


export default function Signers() {
  const {provider, signer} = useVarsContext()
  const [err, setErr] = useState()
  const [opened, setOpened] = useState()
  const ipRef = useRef("message")

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

  const [signAddr, setSignAddr] = useState("")
  const getSignAddr = async () =>{
    try{
      setSignAddr(await signer.getAddress())
    }
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }

  const [signedTrans, setSignedTrans] = useState("")
  const fetchSignedTrans = async () =>{
    try{
      setSignedTrans(await signer.signTransaction() )
    }
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }


  return (
    <>  
    <Group>

    <Card>
      <Input ref={ipRef} placeholder="write your signature message"/>
       <Cards btnName="Sign a message"
        data={signature}
        stateVar="signature"
        func={fetchSignature}
        code={`signer.signMessage(< your message >)`}
        offLink="https://docs.ethers.io/v5/api/signer/#Signer-signMessage" />
      </Card>

       <Cards btnName="Get address from Signer"
        data={signAddr}
        stateVar="signAddr"
        func={getSignAddr}
        code={`signer.getAddress()`}
        offLink="https://docs.ethers.io/v5/api/signer/#Signer-getaddress" />
          
       <Cards btnName="Send signed transaction"
        data={signedTrans}
        stateVar="signedTrans"
        func={fetchSignedTrans}
        code={`signer.signTransaction( < transactionRequest >) `}
        offLink="https://docs.ethers.io/v5/api/signer/#Signer-signTransaction" />
  


      </Group>

    {/* Error Modal */}
    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
        <Alert title="Please check the developer console for more details" color="red">
        {err}
        </Alert>
    </Modal>
    </>
  )
}
