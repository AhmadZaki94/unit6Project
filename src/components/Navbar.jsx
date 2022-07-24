import {
    Box,
    Flex,
    // Text,
    IconButton,
    Link,
    Icon,
    Stack,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Heading,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    // ChevronDownIcon,
    // ChevronRightIcon,
  } from '@chakra-ui/icons';
import { BsCart3 } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';
import { Profile } from './Profile';
import { CartCounter } from './CartCounter';
export const Navbar = () => {

    const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('teal.500')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Heading
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            All Mart
          </Heading>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {/* <DesktopNav /> */}
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Link as={RouterLink} to='/cart'>
            <Box position='relative' padding='0 0.5rem 0 0'>
              <CartCounter/>
              <Icon as={BsCart3} boxSize='2rem' />
            </Box>
          </Link> 
          <Link as={RouterLink} to='/products'>
              <Box>Products</Box>
          </Link>
            <Profile/>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
    </Box>
  );
}