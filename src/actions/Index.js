import { createStore } from 'redux';
import reducer from '../reducers/keg-list-reducer';
import { Provider } from 'react-redux';
import React from 'react';

export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, pintsAvail, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    pintsAvail: pintsAvail,
    id: id
  }
}

const store =  createStore(reducer);

store.subscribe(() => 
  console.log(store.getState())  
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

