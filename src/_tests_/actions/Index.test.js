import { Item } from 'react-bootstrap/lib/Breadcrumb';
import * as actions from '../../actions/Index.js';

describe('tap room actions', () => {
  Item('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1).toEqual({
      type: 'DELETE_KEG',
      id:1
    }))
  });



});