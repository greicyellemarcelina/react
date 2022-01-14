import {
    Avatar, Button, Flex, IconButton, Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import Card from './Card';
import Placas from './Placas';
import useSexoColor from '../hooks/useSexoColor';
import { BsChevronUp } from 'react-icons/bs';
import MoradorLine from './MoradorLine';

export default function Morador({ item }) {
    const color = useSexoColor(item.sexo)
    const [open, setOpen] = useState(true)
    if (!open) {
        return <MoradorLine item={item} onOpen={() => setOpen(true)} />
    }
    return (
        <Card item={item}>
            <Flex p={4}>
                <Avatar src={item.picture} />
                <Flex direction="column" mx={4} flex={1}>
                    <Text fontSize="xl" fontWeight="bold">{item.name}</Text>
                    <Text fontSize="sm" color="blackAlpha.600">Apto {item.apto}</Text>
                </Flex>
                <IconButton
                    onClick={() => setOpen(false)}
                    colorScheme={color}
                    aria-label="menu"
                    variant="ghost"
                    isRound
                    icon={<BsChevronUp />}
                />
            </Flex>
            <Flex bg="blackAlpha.200" alignItems="center">
                <Placas placas={item.placas} sexo={item.sexo} />
                <Button size="xs" variant="ghost" colorScheme={color} mr={2}>+</Button>
            </Flex>
        </Card>
    )
}
