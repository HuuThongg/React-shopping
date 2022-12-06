import CartItem from "./CartItem";

const CartItems = ({data}) => {
  
  return (
    <div className="w-full px-0 ">
      <div className="flex w-full flex-wrap">
        {/* each item */}
        {data.map(item =>(
          <CartItem key={Math.random()} item={item} />
        ))}

      </div>
    </div>
  );
};

export default CartItems;
