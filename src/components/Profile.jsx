import { Menu,Button, MenuItem, Avatar, Flex, MenuButton, MenuList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'
export const Profile = () => {

    return (
        <Flex>
            <Menu>
                <MenuButton as={Button} rounded='full' variant='link' cursor='pointer' minW={0}>
                    <Avatar bg='red.500' color={'black'} icon={<AiOutlineUser fontSize='1.5rem' />} />
                </MenuButton>
                <MenuList zIndex={10000}>
                    <MenuItem>Cart</MenuItem>
                    <MenuItem>Your Orders</MenuItem>
                    <Link to={'/login'}>
                        <MenuItem>Login</MenuItem>
                    </Link>
                    <Link to={'/signup'}>
                        <MenuItem>Sign Up</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Flex>
    )
}