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
     `const ${props.stateVar} = ${props.code}`
    )
  }
  //Copy js to clipboard
  function copyJs(){
    navigator.clipboard.writeText(
    `const [${props.stateVar}, set${capitalizeFirstLetter(`${props.stateVar}`)}] = useState("")
      const ${props.func.name.replace(/ /g,'')} = async () =>{
        try{
          set${capitalizeFirstLetter(`${props.stateVar}`)}(${props.code})
        }
        catch(err){
          console.log(err)
          //Catch Errors or add other features
        }
      }`
    )
  }
//Copy Html to clipboard
  function copyHtml(){
    navigator.clipboard.writeText(`<button onClick={${props.func.name}}>${props.btnName}</button>`)
  }
//Copy Value to clipboard
  function copyStateVar(){
    navigator.clipboard.writeText(`{${props.stateVar}}`)
  }

  const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('')

  return (
    <>
  <Group className="box">
    <Card shadow="xs" p="lg" radius="md" withBorder>
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

    <Modal className='noScrollBar' overflow="inside" opened={opened} onClose={() => setOpened(false)} title="Click on code to copy">
      
<Group>
  <Tabs defaultValue="React">
    <Tabs.List>
      <Tabs.Tab value="Vanillajs" >Vanillajs</Tabs.Tab>
      <Tabs.Tab value="React" >React</Tabs.Tab>
      <Tabs.Tab value="Vue" >Vue</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="Vanillajs" pt="xs">
      <Code onClick={copy}>  
        const {props.stateVar} = {props.code}
      </Code>
    </Tabs.Panel>

    <Tabs.Panel value="React" pt="xs">
        

<Badge radius="xs">Javascript</Badge>
{/* Javascript function code */}
  <Code block="false" className='wFit m80' onClick={copyJs}>         
    {`const [${props.stateVar}, set${capitalizeFirstLetter(`${props.stateVar}`)}] = useState("")
    const ${props.func.name.replace(/ /g,'')} = async () =>{
      try{
        set${capitalizeFirstLetter(`${props.stateVar}`)}(${props.code})
      }
      catch(err){
        console.log(err)
        //Catch Errors or add other features
      }
    }`}
  </Code>

<Badge radius="xs">Html</Badge>
{/*Html component code*/}
  <Code block="false" className='wFit m80' onClick={copyHtml}>
      {`<button onClick={${props.func.name}}>${props.btnName}</button>`}
  </Code>

<Badge radius="xs">State variable</Badge>
{/*State variable name*/}
  <Code block="false" className='wFit m80'  onClick={copyStateVar}>
      {(props.stateVar === undefined) ?
      `//Use console for key value pairs
      {${props.stateVarObj}}`
     :
      `{${props.stateVar}}`
      }
  </Code>


    </Tabs.Panel>
    
    <Tabs.Panel value="Vue" pt="xs">
      Under development
    </Tabs.Panel>
  </Tabs>

</Group>
</Modal>


    </>
  )
}
