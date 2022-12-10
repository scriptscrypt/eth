import React from 'react'

import GlobalVariables from "../GlobalVariables"
export default function Landing() {
  return (
    <>
     <GlobalVariables name="Provider" code="const provider = new ethers.providers.Web3Provider(window.ethereum)" />
     <GlobalVariables name="Signer" code="const signer = provider.getSigner()" />

    </>
  )
}
