import { Box } from '@chakra-ui/react';
import React from 'react';
export default function Content({ children }) {
    return <Box maxW={900} bg="white" w="100%" flex={1} p={4} m={2} rounded="lg" shadow="base">{children}</Box>
}