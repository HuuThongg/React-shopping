import {create} from "zustand";
import { persist } from "zustand/middleware";

const useOrderStore = create(
  // persist(
    (set, get) => ({
      orders: [],
      amountItems: 0,
      totalAmount: 0,
      orderTime: [],
      orderID: "",
      actions: {
        addOrder: ({ totalAmount, amountItems, storedItems }) =>
          set((state) => {
            const order_id =
              (Math.random() + 1).toString(36).substring(10).toUpperCase() +
              Math.floor(Math.random() * 1000000000);

            const mL = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const today = new Date();
            const month = mL[today.getMonth() - 1];
            const year = today.getFullYear();
            const date = today.getDate();
            const updatedOrderTime = { year, month, date };

            return {
              orders: storedItems,
              amountItems: amountItems,
              totalAmount: totalAmount,
              orderTime: updatedOrderTime,
              orderID: order_id,
            };
          }),
      },
    }),
    // {
    //   name: "order", // unique name
    //   storage: () => localStorage, // (optional) by default, 'localStorage' is used
    // }
  )
// );

export const useOrders = () => useOrderStore((state) => state.orders);
export const useOrderTotalAmount = () => useOrderStore((state) => state.totalAmount);
export const useOrderAmountItems = () =>
  useOrderStore((state) => state.amountItems);
export const useOrderOrderTime = () => useOrderStore((state) => state.orderTime);
export const useOrderID = () => useOrderStore((state) => state.orderID);
export const useOrderActions = () => useOrderStore((state) => state.actions);
export { useOrderStore };