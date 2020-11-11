const initialState =
  [{
    id: 1,
    email: 'aleks@mail.ru',
    firstname: 'Aleks',
    lastname: 'Ksander',
  }, 
  {
    id: 2,
    email: 'Denis@mail.ru',
    firstname: 'Denis',
    lastname: 'Ksanox'
  }]


const tab_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, {
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email
      }]
    case 'DELETE_ITEM':
      return state.filter((user) => user.id !== action.id)
    default:
      return state;
  }
}



export { tab_reducer };