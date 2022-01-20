import { chakra,  Heading,  ListItem,  OrderedList, } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function Homepage() {
   return (
    <Layout >  
      <Heading>
        Firebase Authentication by
        <chakra.span
          fontWeight='black'
          fontSize='5xl'
          mx={2}
        >
         Rasel
        </chakra.span>
        
      </Heading>
      <Heading>
         <chakra.span
          fontWeight='black'
          fontSize='5xl'
          mx={2}
          
        >
         Learn Soo far
        </chakra.span>
        
      </Heading>
      <OrderedList fontSize='3xl' my={4}>
              
        <ListItem>Email password authentication (Register/Login)</ListItem>
        <ListItem>Google Sign in</ListItem>
        <ListItem>Forgot Password</ListItem>
        <ListItem>Custom Reset password page</ListItem>
        <ListItem>Protected routes</ListItem>
        <ListItem> Redirect TO or Back (keeping the state)</ListItem>
        <ListItem> custom Auth Hook/ useAuth() </ListItem>
        <ListItem>Loading indicators while sign-in/up</ListItem>
        <ListItem> Dark Mode enabled template using Chakra UI </ListItem>
      </OrderedList>
     
            
    </Layout>
  )
}
