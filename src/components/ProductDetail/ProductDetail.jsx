import Content from "./Content";
import Sidebar from "./Sidebar";

const ProductDetail = () => {
  return (
    <section className="pt-[105px] md:pt-[120px] relative w-full   z-10">
      <div className="flex flex-auto overflow-visible w-full maxvw relative">
        <Content />
        <Sidebar />
      </div>
    </section>
  );
}

export default ProductDetail