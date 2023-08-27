import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Style from "./style.module.css";

const Profile = () => {
  const { formData } = useSelector((state: RootState) => state.auth);

  const { user } = formData;
  return (
    <main className={Style.main}>
      <div>
        <img src={user.image} alt={user.userName} />
      </div>
      <b>{user.userName}</b>
      <p className={Style.company}>{user.company}</p>
    </main>
  );
};

export default Profile;
