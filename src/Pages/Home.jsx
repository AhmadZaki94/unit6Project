import { Box, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../components/Styles/home.css";

export const Home = () => {
    return (
        <Box className="bg">
            <Center>
                <Box mt='280px'>
                    <Link to='/products'>
                        <Button colorScheme='green' variant='solid' height='50px'>
                            Go to Product Page
                        </Button>
                    </Link>
                </Box>
            </Center>
        </Box>
    )
}