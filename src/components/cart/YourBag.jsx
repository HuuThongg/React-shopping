import CartItems from './CartItems';
import HeaderBag from './HeaderBag';
import { useCart } from "../store/store";




const YourBag = () => {
  const storedItems = useCart((state) => state.items);
  const totalAmount = useCart((state) => state.totalAmount);
  const amountItems = useCart((state) => state.amountItems)

  return (
    <div className="ml-0 w-full bg-[##f8f9f9] px-4  screen960:w-[58.33333%]  screen1280:ml-[4.16667%] screen1280:w-[58.33333%]">
      <HeaderBag amountItems={amountItems} totalAmount={totalAmount} />

      {/* glass cart item list */}
      <CartItems data={storedItems} />
    </div>
  );
}

export default YourBag