import { Flex } from '@chakra-ui/react';
import React from 'react';

export default function Container({ children }) {
    return <Flex alignItems="center" p={2} flex={1} direction="column">{children}</Flex>
}