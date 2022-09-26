import { Menu,Button, MenuItem, Text, Avatar, Flex, MenuButton, MenuList } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'
import { useAuth } from './Context/Auth';
export const Profile = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };
    return (
        <Flex>
            <Menu>
                <MenuButton as={Button} rounded='full' variant='link' cursor='pointer' minW={0}>
                    <Avatar bg='red.500' color={'black'} icon={<AiOutlineUser fontSize='1.5rem' />} />
                </MenuButton>
                <MenuList zIndex={10000}>
                    <Link to='/cart'>
                        <MenuItem>Cart</MenuItem>
                    </Link>
                    <MenuItem>Your Orders</MenuItem>
                    {!auth.user ? (
                        <Link to='/login'>
                            <MenuItem>Login</MenuItem>
                        </Link>
                    ): (
                        <MenuItem>
                            <Text onClick={handleLogout}>Logout</Text>
                        </MenuItem>
                    )}
                    <Link to={'/signup'}>
                        <MenuItem>Sign Up</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Flex>
    )
}