import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import useSexoColor from '../hooks/useSexoColor';
import Placas from './Placas';
import { BsChevronDown } from 'react-icons/bs';

export default function MoradorLine({ item, onOpen }) {
    const color = useSexoColor(item.sexo)
    return (
        <Flex my={4} alignItems="center" px={4} rounded="lg" bg={`${color}.200`} >
            <Text fontSize="lg">{item.name}</Text>
            <Placas placas={item.placas} sexo={item.sexo} />

            <IconButton
                onClick={onOpen}
                colorScheme={color}
                aria-label="menu"
                variant="ghost"
                size="sm"
                isRound
                icon={<BsChevronDown />}
            />
        </Flex>
    )
}
