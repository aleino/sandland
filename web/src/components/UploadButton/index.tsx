import React, { useRef } from "react";
import { Button, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { useStoreActions } from "../../store";
import { useStoreState } from "../../store";

const UploadButton = () => {
  const uploadCollection = useStoreActions(
    (actions) => actions.measurements.uploadCollection
  );
  const setUploadError = useStoreActions(
    (actions) => actions.measurements.setUploadError
  );
  const { uploadError } = useStoreState((state) => state.measurements);

  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!target.files?.length) return;
    const file = target.files[0];

    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onloadend = () => {
      try {
        console.debug(reader.result);
        const measurements = JSON.parse(reader.result as string);
        uploadCollection(measurements);
        setUploadError(null);
      } catch (e) {
        setUploadError("Not a valid JSON file");
        throw e;
      }
    };
  };

  return (
    <>
      <input
        ref={fileRef}
        onChange={handleChange}
        multiple={false}
        type="file"
        hidden
      />
      <Button
        size="lg"
        mb={8}
        variant="outline"
        leftIcon={<AiOutlineCloudUpload />}
        onClick={() => fileRef.current!.click()}
      >
        Upload File
      </Button>
      {uploadError && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{uploadError}</AlertTitle>
        </Alert>
      )}
    </>
  );
};

export default UploadButton;
