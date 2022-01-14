import { Flex, Tag } from '@chakra-ui/react';
import React from 'react';
import useSexoColor from '../hooks/useSexoColor';
  
export default function Placas({ placas, sexo }) {
    const color = useSexoColor(sexo)

    return (
      <Flex flex={1} p={2}>
        {placas.map(placa => (
          <Tag colorScheme={color} size="sm" mr={2}>
            {placa}
          </Tag>
        ))}
      </Flex>
    )
  }