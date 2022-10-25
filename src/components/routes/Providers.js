import { Group, Modal, Alert } from "@mantine/core";
import { useContext, useRef, useState } from "react";
import Cards from "../Cards"
import {useVarsContext} from "../../contexts/VarsContext"

export default function Provider() {
  
  const [accAdd, setAccAdd] = useState([])
  const [opened, setOpened] = useState(false)
  const [err, setErr] = useState()
  const [code, setCode] = useState()
  // const [evt, setEvt] = useState({storage:"" })
  const [tCount, setTCount] = useState()
  const [storage, setStorage] = useState()
  // const [vars, setVars] = useState({storage:""})
    
  const {provider, connAcc} = useVarsContext();
  // console.log(connAcc)
  const conWal = async () =>{
    try{
      setAccAdd(await provider.send("eth_requestAccounts", []))
      console.log(accAdd)
    }
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }
  const getContractCode = async () =>{
    try{
      setCode(await provider.getCode(accAdd[0]))
    } 
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }
  const getTCount = async () =>{
    try{
      setTCount(await provider.getTransactionCount(accAdd[0]))
    }
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }
  const getStorage = async () =>{
    try{
      setStorage(await provider.getStorageAt(accAdd[0], 0))
    }
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }
  const [accBalance, setAccBalance] = useState("")
  const fetchBalance = async () =>{
    try{
      setAccBalance(await provider.getBalance(accAdd[0]))
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
    
      <Cards btnName="Connect wallet"
        data={accAdd}
        stateVar="address"
        func={conWal}
        code={`await provider.send("eth_requestAccounts", [])`}
        offLink="https://docs.ethers.io/v5/getting-started/#getting-started--connecting" />

      <Cards btnName="Get Contract code"
        data = {code}
        stateVar="contractCode"
        func={getContractCode}
        code={`await provider.getCode(<account address>)`}
        offLink="https://docs.ethers.io/v5/api/providers/provider/#Provider-getCode" />

      <Cards btnName="Get transaction count"
        data = {tCount}
        stateVar = "tCount"
        func={getTCount}
        code={`await provider.getTransactionCount(<account address>)`}
        offLink="https://docs.ethers.io/v5/api/providers/provider/#Provider-getTransactionCount" />
    
      <Cards btnName="Get Storage at"
        data = {storage}
        stateVar = "storageAt"
        func={getStorage}
        code={`await provider.getStorageAt(<account address>, pos)`}
        offLink="https://docs.ethers.io/v5/api/providers/provider/#Provider-getStorageAt" /> 

      <Cards btnName="Get Balance"
        data = {accBalance._hex}
        stateVar = "accBalance"
        func={fetchBalance}
        code={`await provider.getBalance(<account address>);`}
        offLink="https://docs.ethers.io/v5/api/providers/provider/#Provider-getBalance" /> 

    </Group>
    
    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
        <Alert title="Please check the developer console for more details" color="red">
        {err}
        </Alert>
    </Modal>
    </>
  )
}
