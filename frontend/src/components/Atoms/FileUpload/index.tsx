import React, { useRef, useState } from "react";
import FileUploaderProp from "./props";

const FileUpload: React.FC<FileUploaderProp> = ({
  title = "Resim Yükleyiniz",
  // onFileSelect,
  id,
  name,
  register,
  setSelectedFile,
}) => {
  // const [selectedFile, setSelectedFile] = useState<null | any | File>(null);
  const [image, setImage] = useState<File | any>({ preview: "", raw: "" });

  const handleFileChange = (e: any) => {
    console.log("seçilen image", e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files?.length) {
  //     setImage({
  //       preview: URL.createObjectURL(event.target.files[0]),
  //       raw: event.target.files[0],
  //     });
  //   }
  // };
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
