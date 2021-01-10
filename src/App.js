import React, { useState, useEffect } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';
import { Box, Heading, Container, Button } from "@chakra-ui/react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [places, setPlaces] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPlaces(data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <Container maxW="3xl" centerContent>
        <Heading as="h1" pt='2rem' >Our Tours</Heading>
        <Box bg="green.400" w="7rem" h='0.5rem' mb="5rem"></Box>
        <Button >Color Mode</Button>
        <Tours places={places} />
      </Container>
      <Loading places={places} />

    </>
  )
}

export default App;
