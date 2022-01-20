import {  Button,  chakra,  FormControl,  FormLabel,  Heading,  HStack,  Input,  Stack,  useToast,} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import useMounted from '../Hooks/useMounted'

export default function Loginpage() {
  const history = useHistory()
  const location=useLocation()
  console.log(location)

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [isSubmitting, setIsSubmitting]=useState(false)
  const toast=useToast()

  const { login, SignInWithGoogle }=useAuth()
  const mounted=useMounted()
  
  

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Login
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            if (!email || !password){
              toast({
                description:"Creddential not valid",
                status:'error',
                duration:5000,
                isCloseable:true
              })
            }
            setIsSubmitting(true)
            login(email, password)
            .then((response)=> {
              history.push(location.state?.from ?? '/profile')
              console.log(response)})
            .catch((error)=>{console.log(error.message)
            toast({
                description: error.message,
                status:'error',
                duration:5000,
                isCloseable:true
              })
            }). finally(()=> mounted.current && setIsSubmitting(false))
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              name='email' 
              type='email' 
              autoComplete='email' 
              required 

              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                name='password'
                type='password'
                autoComplete='password'
                required
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button isLoading={isSubmitting} type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Sign in
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent='space-between' my={4}>
          <Button variant='link'>
            <Link to='/forgot-password'>Forgot password?</Link>
          </Button>
          <Button variant='link' onClick={() => history.push('/register')}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() => SignInWithGoogle()
          .then(user=>console.log(user))
          .catch(error=>{console.log(error)})
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  )
}
