import Style from "./style.module.css";

const Loading = () => {
  return (
    <div className={Style.loading}>
      <div className={Style.loadingContainer}>Loading</div>
    </div>
  );
};

export default Loading;
