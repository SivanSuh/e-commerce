import ProductDetailProp from "./props";
import Style from "./style.module.css";

const ProductDetail: React.FC<ProductDetailProp> = ({ detail }) => {
  console.log("detail sayfase", detail);
  return (
    <main>
      <div className={Style.image}>
        <img src={detail.image} alt={detail.title} className="w-full" />
      </div>
      <h2>{detail.title}</h2>
    </main>
  );
};

export default ProductDetail;
