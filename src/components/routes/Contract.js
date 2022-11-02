import { Group, Input, Textarea, Select, Button} from "@mantine/core";
import { useContext, useRef, useState } from "react";
import {useVarsContext} from "../../contexts/VarsContext"
import {ethers} from "ethers"
export default function Contract() {
  const {provider, signer} = useVarsContext()

  const [contractAddr, setContractAddr] = useState("")
  const [contractAbi, setContractAbi] = useState([])
  const [radioValue, setRadioValue] = useState(provider);

  console.log(radioValue)
  
  const pay = async () =>{ 
    try{
      const tx = await signer.sendTransaction({
        to: contractAddr,
        value: ethers.utils.parseEther("0.00001")
  })}
  catch(err){
    console.log(err)
    
  }

  }

  return (
    <>
    <Group align className="" >

      <Input className="w300" required onChange={(e) => setContractAddr(e.target.value)} placeholder="Enter the contract address" />
      <Textarea className="w300" required onChange={(e) => setContractAbi(e.target.value)} placeholder="Enter the  contract ABI" />
      <Select value={radioValue} onChange={setRadioValue}
       data={[{ value: provider, label: 'Provider' }, { value: signer, label: 'Signer' }]} />

      <Button onClick={pay}>Pay 1eth</Button>

    </Group>
    </>
  )
}