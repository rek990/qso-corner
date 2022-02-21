import React, { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@chakra-ui/react";

const ErrorAlertQSO = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <AlertTitle>You've encountered an error.</AlertTitle>
          <AlertDescription>
            An error occurred when loading this page. Please try refreshing the page, and if you
            receive this message again, contact QSO Corner support for further assistance.
          </AlertDescription>
        </Alert>
      ) : null}
    </>
  );
};

export default ErrorAlertQSO;
