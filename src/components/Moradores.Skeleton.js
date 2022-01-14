import { Flex, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';

const items = [1, 2, 3, 4, 5]

export default function MoradoresSkeleton() {

    return items.map(() => (
        <Card defaultColor="gray">
            <Flex p={4}>
                <SkeletonCircle />
                <Flex direction="column" mx={4} flex={1}>
                    <SkeletonText my={2} noOfLines={1}>
                        <Text fontSize="xl" fontWeight="bold">Carregando</Text>
                    </SkeletonText>
                    <SkeletonText my={2} noOfLines={1}>
                        <Text fontSize="sm" color="blackAlpha.600">Apto</Text>
                    </SkeletonText>
                </Flex>
            </Flex>
            <Flex bg="blackAlpha.200" alignItems="center">
                <Flex flex={1} p={2}>
                    <SkeletonText noOfLines={1} />
                </Flex>
            </Flex>
        </Card>
    ))
}
