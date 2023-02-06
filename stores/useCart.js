import {create} from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  // persist(
    (set, get) => ({
      items: [],
      totalAmount: 0,
      amountItems: 0,
      actions: {
        addItem: (item) =>
          set((state) => {
            const updatedTotalAmount =
              state.totalAmount + item.amount * Number(item.price.slice(1));

            const exisitingCartItemIndex = get().items.findIndex(
              (itemInCart) =>
                itemInCart.id === item.id && itemInCart.size === item.size
            );

            const exisitingCartItem = get().items[exisitingCartItemIndex];
            let updatedItems;
            if (exisitingCartItem) {
              const updatedItem = {
                ...exisitingCartItem,
                amount: exisitingCartItem.amount + item.amount,
                img: item.img,
              };
              updatedItems = [...state.items];
              updatedItems[exisitingCartItemIndex] = updatedItem;
            } else {
              updatedItems = state.items.concat(item);
            }
            return {
              id: item.id,
              items: updatedItems,
              totalAmount: updatedTotalAmount,
              amountItems: get().amountItems + 1,
            };
          }),
        deleteItem: (item) =>
          set((state) => {
            const indexDeleted = get().items.findIndex(
              (itemInCart) =>
                itemInCart.id === item.id && itemInCart.size === item.size
            );
            const updatedTotalAmount =
              state.totalAmount -
              get().items[indexDeleted].amount *
                Number(get().items[indexDeleted].price.slice(1));
            const updatedAmountItems =
              state.amountItems - get().items[indexDeleted].amount;

            let updatedItems = state.items.filter(
              (itemInCart) =>
                itemInCart.id !== item.id ||
                (itemInCart.id === item.id && itemInCart.size !== item.size)
            );

            return {
              items: updatedItems,
              totalAmount: updatedTotalAmount,
              amountItems: updatedAmountItems,
            };
          }),
        deleteAllItems: () =>
          set({ items: [], totalAmount: 0, amountItems: 0 }),
        changeAmountItems: ({ id, size, ammount }) =>
          set((state) => {
            const formattedNumber = (price) => {
              return Number(price.slice(1));
            };

            const indexChange = get().items.findIndex(
              (itemInCart) => itemInCart.id === id && itemInCart.size === size
            );

            const updatedTotalAmount =
              get().totalAmount -
              formattedNumber(get().items[indexChange].price) *
                get().items[indexChange].amount +
              formattedNumber(get().items[indexChange].price) * ammount;

            let updatedItems;
            const updatedItem = {
              ...get().items[indexChange],
              amount: ammount,
            };
            updatedItems = [...state.items];
            updatedItems[indexChange] = updatedItem;

            const updatedAmountItems =
              get().amountItems - get().items[indexChange].amount + ammount;

            return {
              items: updatedItems,
              totalAmount: updatedTotalAmount,
              amountItems: updatedAmountItems,
            };
          }),
      },
    }),
    // {
    //   name: "adidasStore", // unique name
    //   storage: () => localStorage, // (optional) by default, 'localStorage' is used
    // }
  )
// );
export const useCartItems = () => useCartStore((state) => state.items);
export const useCartTotalAmount = () => useCartStore((state) => state.totalAmount);
export const useCartAmountItems = () => useCartStore((state) => state.amountItems);
export const userCartActions = () => useCartStore((state) => state.actions);
export { useCartStore };

// interface Item {
//   id: number;
//   price: string;
//   size: string;
//   img: string;
//   amount: number;
// }

// interface CarState {
//   items: Item[];
//   totalAmount: number;
//   amountItems: number;
//   actions:{
//     addItem :(item:Item) => void;
//     deleteItem :(item:Item) => void;
//     deleteAllItems: () => void;
//     changeAmountAmount :(item:Item) => void;
//   }
// }