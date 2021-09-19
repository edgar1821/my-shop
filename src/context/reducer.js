function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, listaProductos: action.payload }
    default:
      return state
  }
}

export default reducer
