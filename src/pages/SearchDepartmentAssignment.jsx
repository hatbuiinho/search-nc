import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
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
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput";
import API from "../constants/API";
import useSearch from "../hooks/useSearch";
import Footer from "../components/Footer";

const SearchDepartmentAssignment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, error } = useSearch(
    API.SEARCH_DEPARTMENT_ASSIGNMENT,
    "get",
    searchValue
  );
  useEffect(() => {
    document.title = "Thông tin ban Đại lễ";
  }, []);
  return (
    <Container maxW={"5xl"}>
      <Box justifyContent="space-between" minH="82vh">
        <Text
          bgGradient="linear(to-l, blue.400, blue.400)"
          bgClip="text"
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
          fontWeight="extrabold"
          textAlign="center"
        >
          Tìm thông tin phân ban
        </Text>

        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
          placeholder="Nhập tên, số điện thoại hoặc CCCD/CMT"
        >
          <TableContainer minH="100vh">
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>Ban</Th>
                  <Th>Họ và tên</Th>
                  <Th>Pháp danh</Th>
                  <Th>Số điện thoại</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.length
                  ? data.map(({ data: res, row, editUrl }) => (
                      <Tr key={row}>
                        <Td title={res[29]}>{res[29]}</Td>
                        <Td title={res[0]}>{res[0]}</Td>
                        <Td title={res[1]}>{res[1]}</Td>
                        <Td title={res[4]}>{res[4]}</Td>
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
    </Container>
  );
};

export default SearchDepartmentAssignment;
