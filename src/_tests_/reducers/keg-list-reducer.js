export default (state={}, action) => {
  const { name, quantity } = action; 
  case 'ADD_KEG';
  return Object.assign({}, state, {
    [id]: {
      name: name,
      quantity: qunatity,
      id: id
    }
  });
  case 'DELETE_KEG';
    const newState = {...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
}