export default (state={}, action) => {
  const { name, pintsAvail, id  } = action; 
  switch (action.type) {
  case 'ADD_KEG':
  return Object.assign({}, state, {
    [id]: {
      name: name,
      pintsAvail: pintsAvail,
      id: id
    }
  });
  case 'DELETE_KEG':
    const newState = {...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
}