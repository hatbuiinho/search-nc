import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  VStack,
  Tr,
  Td,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "~/components/Footer";
import SearchInput from "~/components/SearchInput";
import API from "~/constants/API";
import useSearch from "~/hooks/useSearch";

const MoralClass = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, loading, error } = useSearch(API.MORAL_API, "get", searchValue);
  return (
    <Box p={4} justifyContent="space-between" minH="82vh">
      <Text
        bgGradient="linear(to-l, blue.400, blue.400)"
        bgClip="text"
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        fontWeight="extrabold"
        textAlign="center"
      >
        Tìm thông tin đăng ký lớp học đạo đức
      </Text>

      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
        placeholder="Nhập tên, pháp danh học sinh, SDT hoặc tên phụ huynh"
      >
        <TableContainer minH="100vh">
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Họ và tên</Th>
                <Th>Số điện thoại</Th>
                <Th>Phụ huynh</Th>
                <Th>Pháp danh</Th>
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
                      <Td
                        maxW={30}
                        textOverflow="ellipsis"
                        overflow="hidden"
                        title={res[0]}
                      >
                        {res[0]}
                      </Td>

                      <Td
                        maxW={30}
                        textOverflow="ellipsis"
                        overflow="hidden"
                        title={res[6]}
                      >
                        {res[6]}
                      </Td>
                      <Td
                        maxW={30}
                        textOverflow="ellipsis"
                        overflow="hidden"
                        title={res[5]}
                      >
                        {res[5]}
                      </Td>
                      <Td
                        maxW={30}
                        textOverflow="ellipsis"
                        overflow="hidden"
                        title={res[2]}
                      >
                        {res[2]}
                      </Td>
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
  );
};

export default MoralClass;
