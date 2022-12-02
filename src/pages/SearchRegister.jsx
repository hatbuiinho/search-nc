import {
  Box,
  Button,
  Table,
  TableContainer,
  Tag,
  TagLabel,
  TagLeftIcon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FcPlanner } from "react-icons/fc";
import WebViewDialog from "~/components/WebviewDialog";
import { GREAT_CEREMONY_REGISTER_URL } from "~/constants/googleForm";
import SearchInput from "../components/SearchInput";
import API from "../constants/API";
import useSearch from "../hooks/useSearch";

const SearchRegister = () => {
  const [searchValue, setSearchValue] = useState("");
  const [webView, setWebView] = useState({
    label: "",
    src: "",
    visible: false,
  });

  const { data, loading, error } = useSearch(
    API.SEARCH_REGISTER,
    "get",
    searchValue
  );
  useEffect(() => {
    document.title = "Thông tin đăng ký Đại lễ";
  }, []);
  return (
    <Box>
      <Box justifyContent="space-between" minH="82vh">
        <Text
          bgGradient="linear(to-l, blue.400, blue.400)"
          bgClip="text"
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
          fontWeight="extrabold"
          textAlign="center"
        >
          Công quả Đại Lễ Phật Thành Đạo
        </Text>
        <Tag
          onClick={() => {
            setWebView({
              visible: true,
              label:
                "Tổng Kết Đại Lễ Phật Thành Đạo 2020 - Thiền Tôn Phật Quang",
              src: "https://www.youtube.com/embed/53SgJTVgVhE",
              allow:
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: true,
            });
          }}
          cursor="pointer"
          userSelect="none"
          size="lg"
          colorScheme={"green"}
        >
          <TagLeftIcon>
            <FcPlanner size="lg" />
          </TagLeftIcon>
          <TagLabel>PL.2566 - DL.2023</TagLabel>
        </Tag>
        <Box mt={5}>
          <Button
            leftIcon={<FaPlus />}
            onClick={() => {
              window.open(GREAT_CEREMONY_REGISTER_URL);
            }}
          >
            Đăng ký mới
          </Button>
        </Box>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
          placeholder="Nhập tên, Pháp danh hoặc số điện thoại"
        >
          <TableContainer minH="100vh">
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Họ và tên</Th>
                  <Th>Phân ban</Th>
                  <Th>Vai trò</Th>
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
                        <Td title={res[0]}>{res[0]}</Td>
                        <Td title={res[3]}>{res[3] && <Tag>{res[3]}</Tag>}</Td>
                        <Td title={res[4]}>{res[4] && <Tag>{res[4]}</Tag>}</Td>
                        <Td title={res[1]}>{res[1]}</Td>
                        <Td title={res[2]}>{res[2]}</Td>
                      </Tr>
                    ))
                  : searchValue &&
                    !loading && (
                      <Tr>
                        <Td textAlign="center" colSpan={6}>
                          Không tìm thấy kết quả
                        </Td>
                      </Tr>
                    )}
              </Tbody>
            </Table>
          </TableContainer>
        </SearchInput>
      </Box>
      <WebViewDialog
        {...webView}
        onHide={() => setWebView({ visible: false })}
      />
    </Box>
  );
};

export default SearchRegister;
