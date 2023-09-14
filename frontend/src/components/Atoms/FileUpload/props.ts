import { FieldValues, UseFormRegister } from "react-hook-form";

export default interface FileUploaderProp {
    title:string
    // file:null;
    // setFile:(e:any) => void
   // onFileSelect:any
    name:string;
    id:string
    register: UseFormRegister<FieldValues>;
    setSelectedFile:any
}