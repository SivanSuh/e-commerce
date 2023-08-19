import { FieldValues, UseFormRegister } from "react-hook-form";

export default interface SelectBoxProps {
    register:UseFormRegister<FieldValues>;
    data:Array<string>
    id:string;
    required?:boolean
    placeholder?:string;
    name?:string;
    watch?:any
}