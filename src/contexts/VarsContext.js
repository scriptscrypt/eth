import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const myContext = createContext();

//Provider function - Wrap the whole component tree Ex: in index.js

export function VarsProvider({ children }) {

    const [provider, setProvider] = useState(new ethers.providers.Web3Provider(window.ethereum))
    const [signer, setsigner] = useState(provider.getSigner())
    const [connAcc, setConnAcc] = useState()

    // setProv(new ethers.providers.Web3Provider(window.ethereum))
    useEffect(()=>{
      try{
      setConnAcc(provider.send("eth_requestAccounts", []))
      }
      catch(err){
        alert(err)
      }
    },[])
    return (
      <myContext.Provider value={ { provider, signer, connAcc:[connAcc, setConnAcc] }}>{children}</myContext.Provider>
    );
  }
  
//Consumer function - Use this to extract data from context 
  export function useVarsContext() {
    return useContext(myContext);
  }
