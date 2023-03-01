'use client'
// import { useFavoriteStore } from "@/stores/useFavorite";
import WishList from "./WishList";
import OperationFavorite from "@/graphql/operations/favorites";
import { useQuery } from "@apollo/client";
import { FavoritesData } from "@/utils/types"
const WishLists = () => {
  const { data, error, loading } = useQuery<FavoritesData>(OperationFavorite.Queries.favorite);
  
  // const favItems = useFavoriteStore((state) => state.favItems);
  // const amount = useFavoriteStore((state) => state.amountItems);

  // if (loading) return <div className="pt-[20%]">Loading...</div>;
  // if (error) return <div>Error</div>;
  if (!data?.favorite || loading || error) return null;


  const favorite =data?.favorite || [];

  return (
    <section className="w-full bg-[#f8f8f9] pt-[15px]">
      <div className=" mx-auto w-full   screen960:w-[66.66667%] screen1280:w-[50%] screen1600:w-[40%] ">
        <div className=" mx-[10px] ">
          <h4 className="font-bold uppercase">My whishlist</h4>
          <p className="mt-2">{favorite.length} items</p>

          {/* my wishlists view container */}
          <div className="mt-[10px]">
            {/* flex container */}
            <div className=" grid w-full   grid-cols-2 gap-x-2  screen600:flex screen600:flex-wrap">
              {/* each item */}
              {favorite.map((fav) => (
                <WishList key={fav.id} faV={fav} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishLists;
