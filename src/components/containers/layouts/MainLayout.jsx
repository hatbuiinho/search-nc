import { Box } from "@chakra-ui/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
const MainLayout = ({ children }) => {
  return (
    <Box maxW={"full"}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
