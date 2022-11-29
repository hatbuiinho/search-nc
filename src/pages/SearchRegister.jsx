import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';
import API from '../constants/API';
import useSearch from '../hooks/useSearch';

const SearchRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState('');

  const { data, loading, error } = useSearch(
    API.SEARCH_REGISTER,
    'post',
    searchValue
  );
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} maxH="100vh">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Text
                // color="blue.500"
                textTransform="uppercase"
                fontSize="xl"
                fontWeight="extrabold"
                bgGradient="linear(to-r, blue.400, blue.500)"
                bgClip="text"
              >
                Chúng thanh niên Phật tử Phật Quang Miền Bắc
              </Text>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <Text
          bgGradient="linear(to-l, blue.400, blue.400)"
          bgClip="text"
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          fontWeight="extrabold"
          textAlign="center"
        >
          Tìm thông tin đăng ký Đại lễ
        </Text>

        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
          placeholder="Nhập tên, số điện thoại hoặc CCCD/CMT"
        >
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Họ và tên</Th>
                  <Th>Pháp danh</Th>
                  <Th>Số điện thoại</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.length
                  ? data.map(({ data: res, row, editUrl }) => (
                      <Tr key={row}>
                        <Td>
                          <Button
                            onClick={(e) => {
                              window.open(editUrl);
                            }}
                          >
                            Sửa
                          </Button>
                        </Td>
                        <Td>{res[0]}</Td>
                        <Td>{res[1]}</Td>
                        <Td>{res[4]}</Td>
                      </Tr>
                    ))
                  : searchValue &&
                    !loading && (
                      <Tr>
                        <Td textAlign="center" colSpan={4}>
                          Không tìm thấy kết quả
                        </Td>
                      </Tr>
                    )}
              </Tbody>
            </Table>
          </TableContainer>
        </SearchInput>
      </Box>
    </>
  );
};

export default SearchRegister;