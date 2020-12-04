export default (state={}, action) => {
  const { name, quantity } = action; 
  case 'ADD_KEG';
  return Object.assign({}, state, {
    [id]: {
      name: name,
      quantity: qunatity,
      id: id
    }
  }
    )
}