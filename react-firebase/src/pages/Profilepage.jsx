import React from 'react'
import { Layout } from '../components/Layout'
import { Badge, chakra, Container, Heading } from '@chakra-ui/react'
import { useAuth } from '../contexts/AuthContext'

export default function Profilepage() {
  const {currentUser}=useAuth()
  return (
    <Layout>
      <Heading>
        Here it will show
        <Badge colorScheme='green' fontSize='lg' mx={4}>
          Profile info
        </Badge>
      </Heading>

      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre>
          {JSON.stringify(currentUser,null,2)}
        </chakra.pre>

      </Container>
    </Layout>
  )
}
