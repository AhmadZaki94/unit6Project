import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Text,
    // Link,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Context/Auth';

export const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const [user] = useState('');

   const handleEmail = (e) => {
      setEmail(e.target.value);
   }

   const handlePassword = (e) => {
      setPassword(e.target.value);
   }

   const handleLogin = (email, password) => {
      auth.login(!user);
      axios.post("https://firstauth.herokuapp.com/email",{
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("response", res.data);
        alert("Login Successfully");
        navigate('/cart');
      })
      .catch((err) => {
        navigate('/signup');
        console.log("Message:", err);
      });
   }

    return (
      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={handleEmail} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={handlePassword} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                </Stack>
                <Button
                  bg={'#319795'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type='submit'
                  onClick={() => {
                    handleLogin(email, password)
                  }}
                  >
                  Sign in
                </Button>
              </Stack>
          </Stack>
          <Text mt='5px'>
            If you don't have an account?
            <Link to='/signup'>
              <span style={{ color: "#4299e1", marginLeft: '5px'}}>signup Here</span>
            </Link> 
          </Text>
        </Box>
      </Stack>
    </Flex>
    );
  }