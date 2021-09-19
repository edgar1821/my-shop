import { createContext } from 'react'

export const initialState = {
  listaProductos: [],
}
export const Context = createContext(null)

export function AppProvider({ children }) {
  return <Context.Provider value={initialState}>{children}</Context.Provider>
}
