import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { addProductCart, getSingleProduct } from '../Redux/products/action';
import { MdLocalShipping } from 'react-icons/md';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';



export const Product = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const currentProduct = useSelector((store) => store.ecommerceData.currentProduct);
    useEffect(() => {
        if(id){
            dispatch(getSingleProduct(id));
        };
    },[dispatch, id]);

    const addToCartHandler = () => {
        currentProduct && dispatch(addProductCart(currentProduct));
    }



    return (
        <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={currentProduct.image}
              fit={'contain'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {currentProduct.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ${currentProduct.price}
              </Text>
            </Box>
              <Box>
                {Rating({ rating: Number(currentProduct?.rating)})}
              </Box>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {currentProduct.description}
                </Text>
                {/* <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text> */}
              </VStack>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
            //   bg={useColorModeValue('gray.900', 'gray.50')}
              bg='#319795'
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={addToCartHandler}
              >
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    )
};


function Rating({ rating }) {
    return (
      <Box display='flex'>
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                //   style={{ marginLeft: '1' }}
                  color={'#319795'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf color='#319795' key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar color='#319795' key={i} style={{ marginLeft: '1' }} />;
          })}
      </Box>
    );
  }