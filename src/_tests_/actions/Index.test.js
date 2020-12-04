import { Item } from 'react-bootstrap/lib/Breadcrumb';
import * as actions from '../../actions/Index.js';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1).toEqual({
      type: 'DELETE_KEG',
      id:1
    }))
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_TICKER action', () => {
    expect.addTicket({name: 'Winter Ale', price: 5, brand: 'test', pintsAvail: 125, alcoholContent: 3, id: 1}).toEqual({
      type: 'ADD_KEG',
      name: 'Winter Ale',
      price: 5,
      brand: 'test',
      pintsAvail: 125,
      alcoholContent: 3,
      id: 1
    });
  });
});