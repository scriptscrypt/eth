import { Card, Text, Badge, Button, Group, Modal, Image, Tabs, Code, Alert} from '@mantine/core';
import { useState } from 'react';
import iconExtLink from "../assets/svgs/iconExternalLink.svg"
import iconCopy from "../assets/svgs/iconCopy.svg"
import { ethers } from 'ethers';
import {useVarsContext} from "../contexts/VarsContext"

export default function Cards(props) {
    
    const [opened, setOpened] = useState(false);
    const [opened2, setOpened2] = useState(false);
    const {provider} = useVarsContext()
  //Copy to clipboard
  function copy(){
      navigator.clipboard.writeText(
       props.code
      )
  }
  //Function to handle click
  // const handleClick = () =>{
  //   try{
  //     props.code
  //     console.log(props.code)
  //     }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  return (
    <>
  <Group className="box">
    <Card shadow="xs" p="lg" radius="md"  withBorder>
      <Group>
      <Text variant=''>{props.data}</Text>
      <Button onClick={props.func}  color="blue" fullWidth mt="md" radius="md">
        {props.btnName}
      </Button>
      <Group position="apart" mt="md" mb="xs">  
          <Button onClick={() => setOpened(true)} variant="light" color="blue"  mt="md" radius="md">
            {`<> Get code`}
          </Button>
          <Text variant="link" target="_blank" mt="md" radius="md" component="a" href={props.offLink}>
          <Group> Documentation <Image src={iconExtLink} width="24px"/></Group>
          </Text>
        </Group>
      </Group>
    </Card>
  </Group>

        <Modal opened={opened} onClose={() => setOpened(false)} title="Click on code to copy">
          
        <Group position='' >
          <Tabs defaultValue="Vanillajs">
            <Tabs.List>
              <Tabs.Tab value="Vanillajs" >Vanillajs</Tabs.Tab>
              <Tabs.Tab value="React" >React</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Vanillajs" pt="xs">
              <Code onClick={copy}>  
                {props.code}
              </Code>
            </Tabs.Panel>

            <Tabs.Panel value="React" pt="xs">

              <Group>
                <Badge radius="xs">Javascript</Badge>
                <Code>
                    {`const ${props.btnName.replace(/ /g,'')} = async () =>{
                      try{
                        ${props.code}
                      }
                      catch(err){
                        console.log(err)
                        //Catch Errors or add other features
                      }
                    }`}
                </Code>

              <Badge radius="xs" >Html</Badge>
                <Code>
                    {`
                      <Button onClick={${props.btnName.replace(/ /g,'')}}>${props.btnName}</Button>
                    `}
                </Code>
              </Group>

            </Tabs.Panel>
          </Tabs>
          
          {/* <Button variant='light' fullWidth onClick={copy}>
            <Group> Copy to clipboard 
              <Image src={iconCopy} width="16px" height="16px"/>
            </Group>
          </Button> */}
        </Group>
    </Modal>
 

    </>
  )
}
