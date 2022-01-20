import { Heading, Container, Badge } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function ProtectedPage() {
  return (
    <Layout>
      <Heading>
        here it will show
        <Badge colorScheme='green' fontSize='lg' mx={4}>
          ticket/ qr code
        </Badge>
      </Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}></Container>
    </Layout>
  )
}
