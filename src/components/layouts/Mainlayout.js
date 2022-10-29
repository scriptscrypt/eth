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
                        <Link to="/providers"><NavLink label="Accounts Methods" variant="light"/></Link>
                        <Link to="/block"><NavLink label="Block methods" variant="light"/></Link>
                    </NavLink>       
                        <Link to="/signers"><NavLink label="Signer Events" variant="light" /></Link>
                        <Link to="/contract"><NavLink label="Contract Events" variant="light" /></Link>

                        {/* For contributors: */}
                        {/* <Link to="/< route name >"><NavLink label="< Navlink label >" variant="light" /></Link> */}
                </Box>

      
                <Outlet/>
       
        </div>
    </>
  )
}
