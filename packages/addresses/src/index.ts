import raw from './addresses.json';
export const ADDRESSES = raw as const;
export type AddressBook = typeof ADDRESSES;
