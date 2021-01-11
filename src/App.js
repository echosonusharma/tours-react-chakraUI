import React, { useState, useEffect } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';
import { Box, Heading, Container, Center, Button } from "@chakra-ui/react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [places, setPlaces] = useState([]);

  const removeTour = (id) => {
    const newTourPlaces = places.filter((tour) => tour.id !== id)
    setPlaces(newTourPlaces)
  }

  const fetchTourData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false)
    setPlaces(data);
  }

  useEffect(() => {
    fetchTourData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading places={places} pt='10rem' />
      </main>
    )
  }
  if (places.length === 0) {
    return (
      <main>
        <Box>
          <Center><Heading mb={4} pt={36} >No tours left</Heading></Center>
          <Center><Button size="lg" colorScheme="green" mt="24px"
            onClick={() => fetchTourData()}>Refresh</Button></Center>
        </Box>
      </main>
    )
  }
  return (
    <>
      <Container maxW="3xl" centerContent>
        <Heading as="h1" pt='2rem' >Our Tours</Heading>
        <Box bg="green.400" w="7rem" h='0.5rem' mb="5rem"></Box>
        <Tours places={places} removeTour={removeTour} />
      </Container>
    </>
  )
}

export default App;
