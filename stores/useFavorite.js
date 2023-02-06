import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// const useFavoriteStore = create(
//   persist(
//     (set, get) => ({
//       favItems: [],
//       amountItems: 0,
//       actions: {
//         addFav: (item) =>
//           set((state) => {
//             let updatedItems = state.favItems.concat(item);

//             return {
//               favItems: updatedItems,
//               amountItems: get().amountItems + 1,
//             };
//           }),
//         deleteFav: ({ id }) =>
//           set((state) => {
//             let updatedItems = state.favItems.filter((e) => e.id !== id);
//             return {
//               favItems: updatedItems,
//               amountItems: get().amountItems - 1,
//             };
//           }),
//         deleteAllFav: () =>
//           set({ itemsFav: [], totalAmount: 0, amountItems: 0 }),
//       },
//     }),
//     {
//       name: "favoriteProducts",
//       storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//     }
//   )
// );
// export const useFavItems = () => useFavoriteStore((state) => state.favItems);
// export const useFavAmountItems = () => useFavoriteStore((state) => state.amountItems);
// export const useFavActions = () => useFavoriteStore((state) => state.actions);
// export {
//   useFavoriteStore
// }
const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favItems: [],
      amountItems: 0,
      addFav: (item) =>
        set((state) => {
          let updatedItems = state.favItems.concat(item);

          return {
            favItems: updatedItems,
            amountItems: get().amountItems + 1,
          };
        }),
      deleteFav: ({ id }) =>
        set((state) => {
          let updatedItems = state.favItems.filter((e) => e.id !== id);
          return {
            favItems: updatedItems,
            amountItems: get().amountItems - 1,
          };
        }),
      deleteAllFav: () => set({ itemsFav: [], totalAmount: 0, amountItems: 0 
      }),
      // actions:{
      // }
    }),
    {
      name: "favoriteProducts",
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export const useFavItems = () => useFavoriteStore((state) => state.favItems);
export const useFavAmountItems = () => useFavoriteStore((state) => state.amountItems);
export { useFavoriteStore };