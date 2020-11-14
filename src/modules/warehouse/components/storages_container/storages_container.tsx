import React from 'react'
import {
  Box,
  Flex,
  Link,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'

type StoragesContainerProps = { storages: { id: string; name: string }[] }

export const StoragesContainer = ({ storages }: StoragesContainerProps) => (
  <Flex mb={3}>
    {storages.map((storage) => (
      <NextLink href={`/warehouse/storage/${storage.id}`}>
        <Link p={1}>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Box
                rounded="lg"
                backgroundColor="orange.400"
                _hover={{ backgroundColor: 'orange.300' }}
              >
                <Box w="48px" h="48px"></Box>
              </Box>
            </PopoverTrigger>

            <PopoverContent
              border="0"
              bg="gray.700"
              color="white"
              zIndex={4}
              width="300px"
              opacity={0.8}
            >
              <Box p={5}>
                <Text fontWeight="bold">{storage.name}</Text>
              </Box>
            </PopoverContent>
          </Popover>
        </Link>
      </NextLink>
    ))}
  </Flex>
)
