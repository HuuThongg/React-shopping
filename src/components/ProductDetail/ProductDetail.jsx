import Content from "./Content";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
const ProductDetail = ({ product }) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <section
      className={`relative z-10 w-full ${
        pathname !== "/" ? "" : "pt-[105px]   md:pt-[120px] "
      }`}
    >
      <div className="maxvw relative flex w-full flex-auto overflow-visible">
        <Content product={product} />
        <Sidebar product={product} />
      </div>
    </section>
  );
};

export default ProductDetail;
