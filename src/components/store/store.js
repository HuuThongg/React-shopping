import {atom} from "jotai"

export const translate_X= atom("full")
export const  openMenu = atom(null, (get,set,_arg)=>{set(translate_X,get("0"))})

export const closeMenu = atom(null, (get, set, _arg) => {
  set(translate_X, get("full"));
});
