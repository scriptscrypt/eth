import React, { useState, useRef} from 'react'
import { Modal, Alert, Skeleton, Card, Input, Group } from '@mantine/core'
import { useVarsContext } from '../../contexts/VarsContext'
import Cards from '../Cards'
import {ethers} from "ethers"

export default function Signers() {
  const {provider, signer} = useVarsContext()
  const [err, setErr] = useState()
  const [opened, setOpened] = useState()
  const ipRef = useRef("message")
  const [signature, setSignature] = useState("") 
  const [toAddr, setToAddr] = useState("")
  const [amount, setAmount] = useState("")
  const [tx, setTx] = useState("")

    const pay = async () =>{ 
        try{
            setTx(await signer.sendTransaction({
            to: toAddr,
            value: ethers.utils.parseEther(amount)
        }))
        console.log(tx)
      }
        catch(err){
            console.log(err)
            setErr(err)
            setOpened(true)
        }
    }

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
    <Group position="center">

    <Group className="cf">
        <Input className="wFull" required onChange={(e)=> setToAddr(e.target.value)} placeholder="Enter the wallet address" />
        <Input className="wFull" required onChange={(e)=> setAmount(e.target.value)} placeholder="Enter the amount of Ethers" />

        <Cards btnName="Send Ethers"
          data={tx.hash}
          stateVar="tx"
          func={pay}
          code={`await signer.sendTransaction({
                  to: toAddr,
                  value: ethers.utils.parseEther(amount)`}
          offLink="https://docs.ethers.io/v5/getting-started/#getting-started--sending" />
    </Group>
   
    <Card className='m0'>
      <Input className="wFull" ref={ipRef} placeholder="write your signature message"/>
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
