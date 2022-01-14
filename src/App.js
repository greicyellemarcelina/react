import { Button, ChakraProvider, Flex, theme } from '@chakra-ui/react';
import React from 'react';
import { BsPersonPlus } from 'react-icons/bs';
import useSWR from 'swr';
import Container from './components/Container';
import Content from './components/Content';
import Morador from './components/Morador';
import MoradoresSkeleton from './components/Moradores.Skeleton';
import MoradorSelect from './components/MoradorSelect';

const fetcher = url => fetch(url).then(res => res.json());

function App() {
  const { data, error } = useSWR('http://localhost:5000/moradores', fetcher)
  console.log(data)
  return (
    <ChakraProvider theme={theme}>
      <Container>
      {/* <MoradorSelect items={data}/> */}
        <Flex maxW={900} w="100%" justifyContent="flex-end">
          <Button leftIcon={<BsPersonPlus />} colorScheme="purple" variant="solid">
            Adicionar
          </Button>
        </Flex>
        <Content>
          {!data ?
            <MoradoresSkeleton />
            :
            <>
              {data?.map(item => (
                <Morador item={item} />
              ))}
            </>
          }
        </Content>
      </Container>
    </ChakraProvider>
  );
}

export default App;
