import { Button, Group, Text, Alert, Modal, Image} from "@mantine/core";
import { useEffect, useState } from "react";
import logo from "../assets/svgs/logo.svg"
import { Link } from "react-router-dom";
import { useVarsContext } from "../contexts/VarsContext";

export default function Navbar(){
    const [walAddress, setWalAddress] = useState("");
    const [opened, setOpened] = useState(false);
    const [btnVisibility, setBtnVisibility] = useState(false);
    const [errMsg, setErrMsg] = useState("")
    const {provider} = useVarsContext()

    const conWal = async () =>{
      try{
      setWalAddress(await provider.send("eth_requestAccounts", []))
      setBtnVisibility(true)
     
      }
      catch(err){
        if(err.code){
          setOpened(true)
          setErrMsg(err.message)
        }
      } 

    }
    // useEffect(()=>{
    //   setWalAddress(provider.send("eth_requestAccounts", []))
    //   setBtnVisibility(true)
    // },[])

  return (
    <>
    <Group position="apart" m="16px"> 
        <Link to="/" >
            <Image src={logo} height="32px" className="pointer"/>
        </Link>

        <Group>
            {walAddress}
            <Button disabled={btnVisibility} onClick={conWal}>Connect wallet</Button>
        </Group>

    </Group> 

    <Modal opened={opened} onClose={() => setOpened(false)} title="Metamask - RPC error">
        
      <Alert title="Please check your wallet" color="red">
        {errMsg}
      </Alert>

    </Modal>
    </>
  )
}
