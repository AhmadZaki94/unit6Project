import { Box, Grid, Stack } from '@chakra-ui/react';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../Redux/products/action";
import { ProductSample } from '../components/ProductSample';
import { Link, useSearchParams } from 'react-router-dom';
import { FilterComponent } from '../components/FilterComponent';

export const Products = () => {

    const products = useSelector((store) => store.ecommerceData.products);
    console.log("Products: ", products);

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    
    useEffect(() => {
        if(products?.length === 0)
        {
            let params = {
                type: searchParams.getAll('type')
            }
            console.log("params:", params)
            dispatch(fetchData(params));
        }
    },[dispatch,products?.length, searchParams]);

    // console.log("after Useffect: ", products);

    return (
        <Box marginTop='25px'>
            <Stack fontFamily="Trade Gothic W01 Light, Arial,sans-serif" display={{md: 'flex'}} flexDirection={{md: 'row'}} gap={6}>
                <Box border={'1px solid blue'} width='250px' height='350px' marginTop='7px' marginLeft='25px'>
                    <FilterComponent/>
                </Box>
                <Box w='1250px'  border={'1px solid red'} margin='auto'>
                    { /* Product Mappin Part*/}
                    <Box>
                        <Grid templateColumns='repeat(3, 1fr)' gap={2}>
                            {products.map((e) => {
                                return (
                            <Link key={e._id} to={`/products/${e._id}`}>
                                <ProductSample 
                                    key={e._id} 
                                    image={e.image} 
                                    name={e.name} 
                                    price={e.price}
                                    type={e.type} 
                                />
                            </Link>
                                )
                            })}
                        </Grid>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}