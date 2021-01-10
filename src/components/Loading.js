import React from 'react'
import { Box, Skeleton, SkeletonText, Center, Container } from "@chakra-ui/react";
const Loading = ({ places }) => {
    return (
        <>
            { places.map((place) => {
                const { name } = place;
                return (
                    <>
                        <Box key={name}>
                            <Container maxW="3xl" pb='5rem'>
                                <Box border="3px" borderColor="gray.300" borderRadius='0.2rem' boxShadow="md" pb={2}>
                                    <Skeleton pb={3} width='100%' height='30rem' />
                                    <SkeletonText p={2} pt={2} pb={2} noOfLines={5} spacing={2} />
                                    <Center><Skeleton height='20px' ></Skeleton></Center>
                                </Box>
                            </Container>
                        </Box>
                    </>

                )
            })
            }
        </>
    )
}

export default Loading;
