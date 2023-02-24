import { atom } from "jotai";

export const toggle_filter = atom(false);
export const closeToggle = atom((get) => get(toggle_filter));

export const toggle_sidePanel = atom(false);
export const closeSidePanel = atom((get) => !get(toggle_sidePanel));