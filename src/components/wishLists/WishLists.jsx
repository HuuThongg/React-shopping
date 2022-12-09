import WishList from "./WishList";
import { useFavorite } from "../store/store";
const WishLists = () => {
  const favItems = useFavorite((state) => state.favItems);
  const amount = useFavorite((state) => state.amountItems);
  

  return (
    <section className="w-full bg-[#f8f8f9] pt-[15px]">
      <div className=" mx-auto w-full   screen960:w-[66.66667%] screen1280:w-[50%] screen1600:w-[40%] ">
        <div className=" mx-[10px] ">
          <h4 className="font-bold uppercase">My whishlist</h4>
          <p className="mt-2">{amount} items</p>

          {/* my wishlists view container */}
          <div className="mt-[10px]">
            {/* flex container */}
            <div className=" grid w-full   grid-cols-2 gap-x-2  screen600:flex screen600:flex-wrap">
              {/* each item */}
              {favItems.map((fav, index) => (
                <WishList key={index} product={fav} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishLists;
