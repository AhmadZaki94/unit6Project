import {
    Box,
    Stack,
    Text,
    Image,
    // Heading,
    Button,
    Center 
  } from '@chakra-ui/react';

  import "../components/Styles/home.css";
  
  export const ProductSample = ({image, name, price, type})  => {
    return (
        <Center py={12}>
        <Box className='prdBox' border={'1px solid white'} height={450} width={290}  fontFamily={'"TradeGothicLTW05-BoldNo.2", Arial, sans-serif'}>
          <Box>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={image} />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text className='textWrap' as='h6' fontFamily={'"TradeGothicLTW05-BoldNo.2", Arial, sans-serif'}>
              {name}
            </Text>
            <Text lineHeight='14px' as='h4'>{type}</Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontSize={'xl'} color='red' lineHeight='17px'>
              ${price}
              </Text>
            </Stack>
            <Button colorScheme='teal' w='245px' h='35px' borderRadius='none'>ADD TO BAG</Button>
          </Stack>
        </Box>
      </Center>
    );
} 
