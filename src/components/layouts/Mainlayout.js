import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Group, Box, NavLink} from '@mantine/core'
import Navbar from '../Navbar'

export default function Mainlayout() {
    const [active, setActive] = useState(false)

  return (
    <>  
        <div className="rfw ">
          
                <Box className="leftDash" sx={{ width: 240 }} >
                    <NavLink label="Provider Events" variant="light">
                        <Link to="/providers"><NavLink label="Provider" variant="light"/></Link>
                        <Link to="/ens"><NavLink label="ENS methods" variant="light"/></Link>
                    </NavLink>       
                        <Link to="/contract"><NavLink label="Contract Events" variant="light" /></Link>
                        <Link to="/signers"><NavLink label="Signer Events" variant="light" /></Link>
                    {/* <Link to="/signer"><NavLink label="Signer Events" variant="light" 
                    active={active}
                onClick={() => setActive(true)}/></Link>  */}
                </Box>

      
                <Outlet/>
       
        </div>
    </>
  )
}
