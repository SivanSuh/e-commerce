import React from "react";

export default interface PopupModalProps {
    open:boolean;
    close:(exit:boolean) => void
    children:React.ReactNode 
}