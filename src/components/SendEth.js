import React,{useState} from 'react'
import {ethers} from "ethers"
import { useVarsContext } from '../contexts/VarsContext'
import { Button, Modal, Alert, Input, Group, Card} from '@mantine/core'
import Cards from "../components/Cards"

export default function SendEth() {
  
  const {signer} = useVarsContext()
  const [err, setErr] = useState("")
  const [opened, setOpened] = useState(false)
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

  return (
    <>
    
    <Card>
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
    </Card>
    

    {/* Error Modal */}
    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
        <Alert title="Please check the developer console for more details" color="red">
            {err.message}
        </Alert>
    </Modal>

    </>
  )
}
