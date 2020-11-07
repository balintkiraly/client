import React from 'react'
import {
  Box,
  Flex,
  Link,
  Spinner,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Icon,
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { useListWarehousesQuery } from '@modules/warehouse/graphql/warehouse/list.generated'

export const Layout = ({ children }) => {
  const { data, loading, error } = useListWarehousesQuery()
  return (
    <>
      <Flex
        justifyContent="space-between"
        p={4}
        borderBottom="1px"
        borderColor="gray.200"
        h="100%"
        w="100%"
      >
        <Box fontWeight="bold">
          <NextLink href="/">
            <Link m={4}>GUINVENTORY</Link>
          </NextLink>
        </Box>
        <Box>
          {loading && <Spinner />}
          {data && (
            <Menu>
              <MenuButton>
                Warehouses <Icon name="chevron-down" />
              </MenuButton>
              <MenuList>
                {data.warehouses.map((warehouse) => (
                  <MenuItem>
                    <NextLink href={`/warehouse/${warehouse.id}`}>
                      <Link m={4}>{warehouse.name}</Link>
                    </NextLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          )}
        </Box>
      </Flex>
      <Box w="100%" h="100%" maxW={1200} mt={8} mx="auto">
        {children}
      </Box>
    </>
  )
}
