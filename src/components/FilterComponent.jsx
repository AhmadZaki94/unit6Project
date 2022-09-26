import { Box, CheckboxGroup, VStack, Checkbox } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../Redux/products/action";

export const FilterComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("SearchParams:", searchParams);

    const dispatch = useDispatch();

    const [typesValues, setTypesValues] = useState(searchParams.getAll('type') || []);
    const typeHandler = (values) => {
        console.log("InTypeHandler",values);
        setTypesValues(values);
    };

    useEffect(() => {
        if(typesValues)
        {
            setSearchParams({ type: typesValues});
            let params = {
                type: searchParams.getAll('type')
            }
            dispatch(fetchData(params));
        }
    },[typesValues, searchParams, dispatch, setSearchParams]);

    return (
        <Box>
            <CheckboxGroup defaultValue={typesValues} onChange={typeHandler}>
                        <VStack width='250px' alignItems={'baseline'}>
                            <Checkbox value="Apparel">Apparel</Checkbox>
                            <Checkbox value="Electronics">Electronics</Checkbox>
                            <Checkbox value="Beauty Product">Beauty Products</Checkbox>
                            <Checkbox value="Groceries">Groceries</Checkbox>
                            <Checkbox value="Appliances">Appliances</Checkbox>
                            <Checkbox value="Casual wear">Casual Shoes</Checkbox>
                            <Checkbox value="Sports wear">Sports Wear</Checkbox>
                        </VStack>
            </CheckboxGroup>
        </Box>    
    )
}