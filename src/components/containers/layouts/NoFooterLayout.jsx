import { Box } from '@chakra-ui/react';
import Header from '../../Header';
const NoFooterLayout = ({ children }) => {
  return (
    <Box maxW={'full'}>
      <Header />
      {children}
    </Box>
  );
};

export default NoFooterLayout;
