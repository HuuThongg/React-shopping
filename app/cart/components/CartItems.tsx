'use client'
import CartItem from "./CartItem";
import { v4 as uuidv4 } from 'uuid';

const CartItems = ({ data }) => {
  return (
    <div className="w-full px-0 ">
      <div className="flex w-full flex-wrap ">
        {/* each item */}
        {data.map((item) => (
          <CartItem key={uuidv4()} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
