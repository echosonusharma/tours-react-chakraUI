import React from 'react';
import { Box, Image, Text, Grid, Button, Center } from "@chakra-ui/react";

const toursContainer = ({ places }) => {
    return (
        <>
            {places.map((place) => {
                const { id, image, name, price, info } = place;
                return (
                    <Box key={id} pb='5rem' onClick={() => console.log('click')} >
                        <Box border="3px" borderColor="gray.300" borderRadius='0.2rem' boxShadow="md" pb={2}>
                            <Image src={image} alt={name} pb={3} width='100%' height='30rem' objectFit='cover' />
                            <Grid templateColumns="repeat(2, 1fr)" >
                                <Box fontWeight="semibold" as="h4" textAlign='start' pl={2}> {name} </Box>
                                <Box textAlign='end' pr={2} color='green.400' > ${price}</Box>
                            </Grid>
                            <Text fontSize="ml" p={2} pt={2} pb={2}>{info}</Text>
                            <Center><Button color='red.400' >Not Interested</Button></Center>
                        </Box>
                    </Box>
                );
            })}
        </>
    )
}

export default toursContainer;
