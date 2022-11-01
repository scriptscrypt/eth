import { Group, Modal, Alert, Button } from "@mantine/core";
import { useContext, useRef, useState } from "react";
import Cards from "./Cards"
import {useVarsContext} from "../contexts/VarsContext"

export default function ProviderTest() {
  
  const [accAdd, setAccAdd] = useState("")
  const [opened, setOpened] = useState(false)
  const [err, setErr] = useState()
  const [code, setCode] = useState()
  // const [evt, setEvt] = useState({storage:"" })
  const [tCount, setTCount] = useState()
  const [storage, setStorage] = useState()
  // const [vars, setVars] = useState({storage:""})
    
  const {provider, connAcc} = useVarsContext();

 
   const conWal = async () => {
      setAccAdd(await provider.send("eth_requestAccounts", [])
      ).then(console.log("Connected"))
      .catch((err) =>{
        console.log(err)
        setErr(err.message)
        setOpened(true)
      })
    }

  return (
    <>
    <Group position="center">
    
      {/* <Cards btnName="Connect wallet"
        data={accAdd}
        func={conWal}
        code={`await provider.send("eth_requestAccounts", [])`}
        offLink="https://docs.ethers.io/v5/getting-started/#getting-started--connecting" /> */}
    </Group>
    
    <Button onClick={conWal}>Connect wallet</Button>
    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
        <Alert title="Please check the developer console for more details" color="red">
        {err}
        </Alert>
    </Modal>
    </>
  )
}
