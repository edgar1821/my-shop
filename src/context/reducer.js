function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      // const { listaProductos = [] } = state
      // const lista = [...listaProductos, action.payload]
      return { ...state, listaProductos: action.payload }
    default:
      return state
  }
}

export default reducer
