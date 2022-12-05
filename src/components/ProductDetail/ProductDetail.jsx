import Content from "./Content";
import Sidebar from "./Sidebar";

const ProductDetail = ({ product }) => {
  return (
    <section className="relative z-10 w-full pt-[105px]   md:pt-[120px]">
      <div className="maxvw relative flex w-full flex-auto overflow-visible">
        <Content product={product}/>
        <Sidebar product={product}/>
      </div>
    </section>
  );
};

export default ProductDetail;
