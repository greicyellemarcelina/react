import { Flex } from '@chakra-ui/react';
import React from 'react';
import useSexoColor from '../hooks/useSexoColor';

export default function Card({ children, item, defaultColor }) {
    const sexoColor = useSexoColor(item?.sexo)
    const color = defaultColor ?? sexoColor
    return <Flex direction="column" bg={`${color}.200`} rounded="md" shadow="base" mb={4}>{children}</Flex>
}