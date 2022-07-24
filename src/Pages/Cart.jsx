import { Box, Heading, Button, useColorModeValue,  Stack, Text, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux/es/exports';
import { DeleteIcon } from '@chakra-ui/icons';

export const Cart = () => {

    const cart = useSelector((store) => store.ecommerceData.cart);

    // const dispatch = useDispatch();

    
    return (
        <Box m='auto' w='500px' h='100px' border='1px solid red' fontFamily='"Trade Gothic W01 Light", Arial, sans-serif'>
        <Heading mt='35px' as='h1' fontWeight='200' fontSize='24px' p='0px 0px 15px'>
            Shopping Bag
        </Heading>
        <Box border='1px solid black'></Box>
        {cart.length && cart.map((e) => {
            return (
                 <CartItem 
                 key={e.id} 
                 name={e.name} 
                 id={e.id}
                 price={e.price} 
                 image={e.image}
                //  removeProduct={removeProduct}
                 />
            );
        })}
        {/* <Checkout cart={cart} checkoutHandler={checkoutHandler}/> */}
    </Box>

)
}


function CartItem({ name, image, price, id}) {
return (
    <Box border={'1px solid red'} rounded='lg' width={'fit-content'} margin='auto' marginBottom='2rem'>
        <Stack direction={{base: 'column', md: 'row'}} justifyContent='center' alignItems='center'>
            <Box 
          height={'300px'} 
          width='300px' 
          
          position='relative'
          padding='0 1rem'
          _after={{
          transition: 'all .3s ease',
          content: '""',
          w: '80%',
          h: '80%',
          pos: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`,
          backgroundImage: `url(${image})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}>
            <Image
          rounded={'lg'}
          height={300}
          width={300}
          objectFit={'contain'}
          src={image}
        />
            </Box>
            <Box height={'300px'} width='300px'>
                <Stack p={2}>
                    <Heading as='h3' size='lg'>{}</Heading>
                    <Box overflow={'hidden'} whiteSpace='nowrap'>
                    </Box>
                    <Text 
                    color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                        {price}
                    </Text>
                    <Button variant={'solid'} 
                    leftIcon={<DeleteIcon/>
                    } colorScheme='teal' >Remove</Button>
                </Stack>
            </Box>
        </Stack>
    </Box>
);
};


// onClick={() => removeProduct(id)}