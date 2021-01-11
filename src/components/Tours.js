import React from 'react';
import { Box, Image, Text, Flex, Button, Center, useToast } from "@chakra-ui/react";
import { WarningIcon } from '@chakra-ui/icons';

const toursContainer = ({ places, removeTour }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toast = useToast()
    return (
        <>
            {places.map((place) => {
                const { id, image, name, price, info } = place;
                return (
                    <Box key={id} pb='5rem' onClick={() => console.log('click')} >
                        <Box border="3px" borderColor="gray.300" borderRadius='0.2rem' boxShadow="md" pb={2}>
                            <Image src={image} alt={name} pb={3} width='100%' height='30rem' objectFit='cover' />
                            <Flex direction="row" justifyContent="space-between">
                                <Box fontWeight="semibold" as="h4" textAlign='start' pl={2}> {name} </Box>
                                <Box textAlign='end' pr={2} color='green.400' > ${price}</Box>
                            </Flex>
                            <Text fontSize="ml" p={2} pt={2} pb={2}>{info}</Text>
                            <Center><Button
                                color='red.400'
                                onClick={() => {
                                    removeTour(id);
                                    toast({
                                        position: "top",
                                        duration: 2000,
                                        render: () => (
                                            <Box color="white" p={4} bg="red.400" borderRadius='md'>
                                                <Flex direction="row" justifyContent="space-between" >
                                                    <WarningIcon w={6} h={6} />
                                                    <Box pl={3}>{name} has been removed !</Box>
                                                </Flex>
                                            </Box>
                                        ),
                                    })
                                }
                                } >Not Interested</Button></Center>
                        </Box>
                    </Box>
                );
            })}
        </>
    )
}

export default toursContainer;
