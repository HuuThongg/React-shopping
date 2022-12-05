import { atom } from "jotai";

export const toggle_filter = atom(false);
export const closeToggle = atom((get) => get(toggle_filter));

