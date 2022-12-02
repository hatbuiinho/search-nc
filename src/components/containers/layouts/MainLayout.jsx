import { Box, Container } from "@chakra-ui/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
const MainLayout = ({ children }) => {
  return (
    <Box maxW={"full"}>
      <Header />
      <Container maxW="5xl">{children}</Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
