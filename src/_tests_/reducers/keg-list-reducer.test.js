import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

  const currentState = {
    1: {name: 'Blue Ale',
    price: 4,
    brand: 'Rtest',
    pintsAvail: 124,
    alcoholContent: 5,
    id: 1 },
    2: {name: 'Red Ale',
    price: 4,
    brand: 'Best',
    pintsAvail: 124,
    alcoholContent: 6,
    id: 2 },
  }

  const kegData = {name: 'Blue Ale',
  price: 4,
  brand: 'Rtest',
  pintsAvail: 124,
  alcoholContent: 5,
  id: 1 };

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, pintsAvail, id } = KegData;
    action = {
      type: 'ADD_TICKET',
      name: name,
      pintsAvail: pintsAvail,
      issue: issue,
      id: id }
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        pintsAvail: pintsAvail,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {name: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });

});