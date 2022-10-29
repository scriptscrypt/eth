import React, { useState } from 'react'
import { useVarsContext } from '../../contexts/VarsContext'
import Cards from '../Cards'
import { Modal, Alert, Group} from '@mantine/core'
export default function Block() {
    const {provider}  = useVarsContext()

    const [err, setErr] = useState("")
    const [opened, setOpened] = useState("")

    const [block, setBlock] = useState("")
    const fetchBlock = async () =>{
      try{
        setBlock(await provider.getBlock(1000))
      }
      catch(err){
        console.log(err)
        setErr(err.message)
        setOpened(true)
      }
    }
    const[blockTrans, setBlockTrans] = useState("")
    const fetchBlockWithTransactions = async () =>{
      try{
        setBlockTrans(await provider.getBlockWithTransactions(1000))
      }
      catch(err){
        console.log(err)
        setErr(err.message)
        setOpened(true)
      }
    }
  
  return (
    <>
    <Group position='center'>

    <Cards btnName="Get Block"
          data={block.hash}
          stateVar="block"
          stateVarObj ="block.methods"
          func={fetchBlock}
          code={`await provider.getBlock(<block number>)`}
          offLink="https://docs.ethers.io/v5/api/providers/provider/#Provider-getBlock" />

    <Cards btnName="Get Block with transactions"
          data={blockTrans.parentHash}
          stateVar="blockTrans"
          stateVarObj ="block.methods"
          func={fetchBlockWithTransactions}
          code={`await provider.getBlockWithTransactions(<block number>)`}
          offLink="https://docs.ethers.io/v5/api/providers/provider/#Provider-getBlockWithTransactions" />

    </Group>

    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
        <Alert title="Please check the developer console for more details" color="red">
        {err}
        </Alert>
    </Modal>
    </>
  )
}
