import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Tag,
  TagLabel,
  TagLeftIcon,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SearchInput from "~/components/SearchInput";
import API from "~/constants/API";
import useSearch from "~/hooks/useSearch";
import { generateSubmitUrl } from "~/utils/function";
import { nanoid } from "nanoid";
import { confirmPopup } from "primereact/confirmpopup";
import { ConfirmPopup } from "primereact/confirmpopup";
import WebViewDialog from "~/components/WebviewDialog";
import { NEW_MORAL_REGISTER_URL } from "~/constants/googleForm";
import { InfoIcon } from "@chakra-ui/icons";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const MoralClass = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, loading, error } = useSearch(API.MORAL_API, "get", searchValue);
  const [openWebView, setOpenWebView] = useState(false);
  const [webViewSrc, setWebViewSrc] = useState("");
  const [webViewLabel, setWebViewLabel] = useState("");
  const history = useHistory();
  useEffect(() => {
    document.title = "Lớp học đạo đức";
  }, []);
  return (
    <>
      <Box justifyContent="space-between" minH="82vh">
        <Text
          bgGradient="linear(to-l, blue.400, blue.400)"
          bgClip="text"
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
          fontWeight="extrabold"
          textAlign="center"
        >
          Đăng ký lớp học đạo đức
        </Text>
        <Box mt={5}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Button
              leftIcon={<FaPlus />}
              onClick={() => {
                setOpenWebView(true);
                setWebViewSrc(NEW_MORAL_REGISTER_URL);
                setWebViewLabel("Đăng ký mới");
              }}
            >
              Đăng ký mới
            </Button>
            <Tag colorScheme="green">
              <TagLeftIcon boxSize="12px" as={InfoIcon} />
              <TagLabel
                title="Nếu cô bác, huynh đệ không tìm thấy thông tin có thể đăng ký mới
                ạ"
              >
                Nếu cô bác, huynh đệ không tìm thấy thông tin có thể đăng ký mới
                ạ
              </TagLabel>
            </Tag>
          </Stack>
        </Box>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
          placeholder="Nhập tên học sinh"
        >
          <TableContainer minH="100vh">
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Họ và tên</Th>
                  <Th>Số điện thoại</Th>
                  <Th>Phụ huynh</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.length
                  ? data.map(({ data: student }) => (
                      <Tr key={nanoid()}>
                        <Td>
                          <Button
                            onClick={(e) => {
                              const submitUrl = generateSubmitUrl(...student);
                              confirmPopup({
                                target: e.currentTarget,
                                message: "Bạn có chắc chắn muốn ghi danh?",
                                icon: "pi pi-exclamation-triangle",
                                accept: () => {
                                  setOpenWebView(true);
                                  setWebViewSrc(submitUrl);
                                  setWebViewLabel("Ghi danh thành công");
                                },
                                reject: () => {},
                              });
                            }}
                          >
                            Ghi danh
                          </Button>
                        </Td>
                        <Td title={student[0]}>{student[0]}</Td>

                        <Td title={student[5]}>{student[5]}</Td>
                        <Td title={student[4]}>{student[4]}</Td>
                      </Tr>
                    ))
                  : searchValue &&
                    !loading && (
                      <Tr>
                        <Td textAlign="center" colSpan={5}>
                          <Text>
                            Không tìm thấy thông tin đăng ký cũ, mời cô bác,
                            huynh đệ đăng ký mới{" "}
                          </Text>
                          <Button
                            mt={3}
                            onClick={() => {
                              window.open(
                                "https://docs.google.com/forms/d/e/1FAIpQLSeqB-Vm4X5TrSp0YAzM9Dw7ITqZf8_zCsmEePVImipOxZU6iw/viewform?usp=sf_link"
                              );
                            }}
                          >
                            tại đây
                          </Button>
                        </Td>
                      </Tr>
                    )}
              </Tbody>
            </Table>
          </TableContainer>
        </SearchInput>
        <ConfirmPopup />
      </Box>
      <WebViewDialog
        label={webViewLabel}
        src={webViewSrc}
        visible={openWebView}
        onHide={() => setOpenWebView(false)}
      />
    </>
  );
};

export default MoralClass;
