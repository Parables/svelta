import { writable } from 'svelte/store'

export const APP_WIDTH = writable(0); 
export const MENU_WIDTH = writable('70'); 
export const MARGIN_LEFT = writable('70'); 
export const MINI_MENU = writable(false); 
export const TOGGLE_ICON = writable('disc')
export const APPBAR_POSITION = writable('sticky')
export const CRUMBS= writable({})
export const ACTIVE_PATH = writable('/')
