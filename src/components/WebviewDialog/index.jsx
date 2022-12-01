import { Box, Spinner } from "@chakra-ui/react";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import "./index.css";

const WebViewDialog = ({ src, label, visible, onHide }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Dialog
      maximizable
      modal
      header={label}
      onHide={onHide}
      visible={visible}
      style={{ width: "90vw", height: "90vh" }}
      className="web-view-dialog"
    >
      {loading && (
        <Box width="full" height="full" pos="relative">
          <Spinner translate="-50% -50%" pos="absolute" top="50%" left="50%" />
        </Box>
      )}
      <iframe
        width="100%"
        height="100%"
        style={{ display: loading ? "none" : "unset" }}
        src={src}
        onLoad={() => {
          setLoading(false);
        }}
      ></iframe>
    </Dialog>
  );
};

export default WebViewDialog;
