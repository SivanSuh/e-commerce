import React, { useState } from "react";
import FileUploaderProp from "./props";

const FileUpload: React.FC<FileUploaderProp> = ({
  title = "Resim Yükleyiniz",
  onFileSelect,
  id,
  name,
  register,
}) => {
  const [selectedFile, setSelectedFile] = useState<null | any | File>(null);
  //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files) {
  //       setFile(e.target.files[0]);
  //     }
  //     console.log("e.target.files", e.target.files);
  //   };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };
  return (
    <>
      <input
        type="file"
        id={id}
        {...register(name)}
        name={name}
        placeholder={title}
        onChange={handleFileChange}
      />
    </>
  );
};

export default FileUpload;
