import { Box, Heading, Button, useColorModeValue,  Stack, Text, Image } from '@chakra-ui/react';
import { useSelector, useDispatch} from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';
import { deleteProductCart } from '../Redux/products/action';

export const Cart = () => {

    const cart = useSelector((store) => store.ecommerceData.cart);
    const dispatch = useDispatch();
    const removeProduct = (id) => {
        console.log("Remove the product: ", id);
        dispatch(deleteProductCart(id));
    }
    
    return (
        <Box w='680px' m='auto' mt='50px' border='1px solid black' fontFamily='"Trade Gothic W01 Light", Arial, sans-serif'>
        {/* <Heading mt='35px' as='h1' fontWeight='200' fontSize='24px' p='0px 0px 15px'>
            Shopping Bag
        </Heading>
        <Box border='1px solid black'></Box> */}
        {cart.length && cart.map((e) => {
            return (
                 <CartItem 
                    key={e._id} 
                    name={e.name} 
                    id={e._id}
                    price={e.price} 
                    image={e.image}
                    description={e.description}
                    removeProduct={removeProduct}
                 />
            );
        })}
        {/* <Checkout cart={cart} checkoutHandler={checkoutHandler}/> */}
    </Box>
)};


function CartItem({ name, image, price,description, removeProduct, id}) {
return (
    <Box key={id} border={'1px solid blue'} m='auto' boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"  width={'fit-content'} margin='auto' marginBottom='2rem'>
        <Stack direction={{base: 'column', md: 'row'}} justifyContent='center' alignItems='center'>
            <Box 
                height={'350px'} 
                width={'350px'}
                
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
                // backgroundImage: `url(${image})`,
                filter: 'blur(15px)',
                zIndex: -1,
            }}>
                <Image
                    // rounded={'lg'}
                    height={300}
                    width={300}
                    objectFit={'contain'}
                    src={image}
                />
            </Box>
            <Box height={'300px'} width='300px'>
                <Stack p={2}>
                    <Heading as='h3' size='lg'>{name}</Heading>
                    
                    <Text 
                        color={useColorModeValue('gray.500', 'gray.400')}
                        fontSize={'2xl'}
                        fontWeight={'300'}
                    >
                        ${price}
                    </Text>
                    <Button variant={'solid'} 
                        leftIcon={<DeleteIcon/>} 
                        colorScheme='teal'
                        onClick={() => {
                            removeProduct(id);
                            console.log(id);
                            }
                        }
                        >
                            Remove
                    </Button>
                </Stack>
            </Box>
        </Stack>
    </Box>
);
};
