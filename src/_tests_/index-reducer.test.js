import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/keg-list-reducer';


let store = createStore(rootReducer);

test('Check that initial state of kegListReducer matches root reducer', () => {
  expect(store.getState().masterKegList).toEqual(ticketListReducer(undefined, { type: null }));
});

test('Check that initial state of formVisibleReducer matches root reducer', () => {
  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
});