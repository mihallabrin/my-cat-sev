import { writable, type Writable } from 'svelte/store';

export const data: Writable<string> = writable("");