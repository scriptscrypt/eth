import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
const myContext = createContext();

//Provider function - Wrap the whole component tree Ex: in index.js

export function VarsProvider({ children }) {

    const [provider, setProvider] = useState(new ethers.providers.Web3Provider(window.ethereum))
    const [signer, setSigner] = useState(provider.getSigner())
    // const conAddr = useRef("")
    const [addr, setAddr] = useState("")

    useEffect( ()=>{
      if(!window.ethereum){
        console.log("No wallet detected")
        alert("Please install metamask to continue")
        setProvider("")
        setSigner("")
      }
      else{
        console.log("Wallet detected") 
        // conAddr.current =  provider.send("eth_requestAccounts", [])
        setAddr(provider.send("eth_requestAccounts", []))
      }
    }, [])

    
    return ( 
    <>
    <myContext.Provider value={ { provider, signer, addr}}>{children}</myContext.Provider>
    </>
    );
  }
  
//Consumer function - Use this to extract data from context 
  export function useVarsContext() {
    return useContext(myContext);
  }