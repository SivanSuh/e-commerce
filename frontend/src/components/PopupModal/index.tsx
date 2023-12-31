import React, { FC } from "react";
import Style from "./style.module.css";
import PopupModalProps from "./props";
import { GrClose } from "react-icons/gr";

const PopupModal: FC<PopupModalProps> = ({ children, close, open }) => {
  return (
    <>
      {open && (
        <main className={Style.modal}>
          <div className={Style.container}>
            <div className={Style.flexStructure}>
              <p></p>
              <GrClose
                size={20}
                onClick={() => close?.(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <main>{children}</main>
          </div>
        </main>
      )}
    </>
  );
};

export default PopupModal;
