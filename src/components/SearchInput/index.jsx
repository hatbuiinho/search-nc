import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import API from "../../constants/API";
import useSearch from "../../hooks/useSearch";

const SearchInput = ({
  placeholder,
  children,
  searchValue,
  setSearchValue,
  loading,
  tooltip,
}) => {
  return (
    <Box mt={5}>
      <InputGroup size="md">
        <Input
          placeholder={placeholder}
          colorScheme={"red"}
          pr="2.5rem"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <InputRightElement width="2.5rem">
          {loading ? (
            <Spinner color="blue.500" />
          ) : (
            <IconButton
              size="sm"
              aria-label="Copy Link"
              icon={<SearchIcon />}
            />
          )}
        </InputRightElement>
      </InputGroup>

      <Box
        mt={5}
        p={5}
        borderRadius="5px"
        borderWidth="1px"
        maxH="50vh"
        overflow="scroll"
      >
        {children}
      </Box>
    </Box>
  );
};

export default SearchInput;
