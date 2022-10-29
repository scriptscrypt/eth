import React, { useState } from 'react'

export default function CardTest(props) {

    const [props.stateVariable, props.stateVariable] = useState("")
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
     <Cards btnName="Connect wallet"
        data={accAdd}
        stateVar="address"
        func={conWal}
        code={`await provider.send("eth_requestAccounts", [])`}
        offLink="https://docs.ethers.io/v5/getting-started/#getting-started--connecting" />      
    </>
  )
}
