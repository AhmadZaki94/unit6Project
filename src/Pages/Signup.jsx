import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
  
  export const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_no: ""
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData([...data, userData]);

        axios.post('https://firstauth.herokuapp.com/register', userData)
        .then(() => {
            alert('Signup Successfully');
            navigate('/login');

            setUserData({
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                phone_no: ""
            });
        });
    };

    const getData = () => {
        axios.get('https://firstauth.herokuapp.com/register')
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };

    useEffect(() => {
        getData();
    },[]);


    return (
      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} >
              Sign up
            </Heading>
          </Stack>
          <Box
            // border={'1px solid red'}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input name='first_name' onChange={handleChange} value={userData.first_name} type="text" placeholder='Enter First Name'/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input name='last_name' onChange={handleChange} value={userData.last_name} type="text" placeholder='Enter Last Name' />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input name='email' onChange={handleChange} value={userData.email} type="email" placeholder='Enter Email' />
              </FormControl>
              <FormControl id="phone_no" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input name='phone_no' onChange={handleChange} value={userData.phone_no} type="number" placeholder='Enter Phone Number' />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input name='password' onChange={handleChange} value={userData.password} type={showPassword ? 'text' : 'password'} placeholder="Enter password" />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} fontWeight='600'>
                  Already a user? 
                  <span style={{ color: 'blue', marginLeft: "5px"}}>
                      <Link to={'/login'}>
                        Login
                      </Link>  
                  </span>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }