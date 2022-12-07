import create from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      // items: [id, amount, price,size]
      items: [],
      totalAmount: 0,
      amountItems: 0,
      addItem: (item) =>
        set((state) => {
          // console.log(item);
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
            items:updatedItems,
            totalAmount: updatedTotalAmount,
            amountItems:updatedAmountItems
          };
        }),
      deleteAllItems: ()=>set({items:[], totalAmount:0, amountItems:0})
    }),
    {
      name: "adidasStore", // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);

export const useFavorite = create(
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
      deleteFav: ({id}) =>
        set((state) => {

            let updatedItems = state.favItems.filter(e => e.id !==id)
          return {
            favItems: updatedItems,
            amountItems: get().amountItems - 1
          };
        }),
      deleteAllFav: () => set({ itemsFav: [], totalAmount: 0, amountItems: 0 }),
      
    }),
    {
      name: "favoriteProducts",
      getStorage: () => sessionStorage,
    }
  )
);

// export const useBearStore = create(
//   persist(
//   (set, get) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     action: () => {
//       c;
//     },
//   }),
//   {
//     name: "bear", // unique name
//     getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
//   }
// )
// );

// export const useFishScore = create((set) => ({
//   fishes: {},
//   fetch: async (pond) => {
//     const response = await fetch(pond);
//     set({ fishies: await response.json() });
//   },
//   }));

// import create from "zustand";

// export const useFishStore = create(
// persist(
//   (set, get) => ({
//     fishes: 0,
//     addAFish: () => set({ fishes: get().fishes + 1 }),
//   }),

//   {
//     name: "food-storage", // unique name
//     getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
//   }
// )
// );

// const useStores = createStore(
// persist(
//   {
//   key: 'auth', // required, child key of storage
//   allowlist: ['isAuthenticated', 'user'], // optional, will save everything if allowlist is undefined
//   denylist: [], // optional, if allowlist set, denylist will be ignored
// },
// (set) => ({
//   isAuthenticating: false,
//   isAuthenticated: false,
//   user: undefined,
//   login: async (username, password) =>{
//     set((state) => ({ isAuthenticating: true }))
//     const { user } = await webLogin(username, password)
//     set((state) => ({
//       isAuthenticated: true,
//       isAuthenticating: false,
//       user,
//     }))
//   }

//   })
//   )
// )
// const useStore = create<StateProps>((set, get) => ({
//   user: null,
//   list: [],
//   loading: false,
//   editItem: undefined,
//   login: async (val) => {
//     // const res = await sleep(1000);
//     const res = await login(val);
//     if (res.code === 0) {
//       set({ user: res.data });
//       localStorage.setItem('vite-react-ts-antd-token', res.data.token);
//       console.log('res', res);
//       window.location.href = '/sys/home';
//     }
//   },
//   setUser: async (val) => {
//     await sleep(1000);
//     window.location.href = '/';
//     // set({ user:  });
//   },
//   setLoading: (val) => set({ loading: val }),
//   setEditItem: (params: any) => set({ editItem: params }),
//   // 获取列表
//   getList: async () => {
//     await sleep(1000);
//     set({ list: dataSource });
//   },
//   // 删除
//   removeList: async (val) => {
//     dataSource = dataSource.filter((n) => n.key !== val);
//     get().getList();
//   },
//   // 修改
//   editList: async (params: any) => {
//     dataSource = dataSource.map((n) => {
//       if (n.key === params.key) {
//         return { ...n, ...params };
//       }
//       return n;
//     });
//     get().getList();
//   },
//   // 添加
//   addList: async (params: any) => {
//     dataSource = [{ ...params, key: `${dataSource.length + 1}` }, ...dataSource];
//     get().getList();
//   },
// }));

// import { useBearStore, useFishStore } from "./api/store";
// const useDogStore = create(() => ({ paw: true, snout: true, fur: true }));

// Getting non-reactive fresh state
// const paw = useDogStore.getState().paw;
// Listening to all changes, fires synchronously on every change
// const unsub1 = useDogStore.subscribe(console.log);
// Updating state, will trigger listeners
// useDogStore.setState({ paw: false });
// Unsubscribe listeners
// unsub1();
// Destroying the store (removing all listeners)
// useDogStore.destroy();
// import create from "zustand";
// const useStore = create((set, get) => ({
//  count: 0,
//  inc2: () => set((state) => ({ count: state.count + 1 })),
// }));
// // feshState is always equal to the initial value of count (0)
// const freshState = useStore.getState().count;
// const a = useStore.subscribe(() => {
//  console.log("print whenever state changes");
// });
// // unsubscribe listeners
// // a();
// useStore.destroy();

// function App() {
//  console.log(freshState);
//  const store = useStore((state) => state.count);
//  const inc2 = useStore((state) => state.inc2);
//  console.log(store);
//  // store.subscribe(() => {
//  //   console.log("new count", store.getState().count);
//  // });
//  // console.log(paw);
//  // console.log(unsub1);
//   const inc = useBearStore((state) => state.increasePopulation);

//   const count = useBearStore((state) => state.bears);
//   const fishes = useFishStore((state) => state.fishes);
//   return (
//     <div className="App">
//       <div className="card">
//         <button onClick={inc}>
//           count is {count} : {fishes}
//         </button>
//         <button onClick={inc2}>count is {store} :</button>
//         <p>adasdsa</p>
//       </div>
//     </div>
//   );
//   }

//   export default App;
