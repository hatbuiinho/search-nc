import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import WebViewDialog from "~/components/WebviewDialog";
import {
  GREAT_CEREMONY_REGISTER_URL,
  NEW_MORAL_REGISTER_URL,
} from "~/constants/googleForm";
import SearchInput from "../components/SearchInput";
import API from "../constants/API";
import useSearch from "../hooks/useSearch";

const SearchRegister = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openWebView, setOpenWebView] = useState(false);
  const [webViewSrc, setWebViewSrc] = useState("");
  const [webViewLabel, setWebViewLabel] = useState("");

  const { data, loading, error } = useSearch(
    API.SEARCH_REGISTER,
    "post",
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
          Tìm thông tin đăng ký Đại lễ
        </Text>
        <Box mt={5}>
          <Button
            leftIcon={<FaPlus />}
            onClick={() => {
              setOpenWebView(true);
              setWebViewSrc(GREAT_CEREMONY_REGISTER_URL);
              setWebViewLabel("Đăng ký mới");
            }}
          >
            Đăng ký mới
          </Button>
        </Box>
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
      <WebViewDialog
        label={webViewLabel}
        src={webViewSrc}
        visible={openWebView}
        onHide={() => setOpenWebView(false)}
      />
    </Box>
  );
};

export default SearchRegister;
