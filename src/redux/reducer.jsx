// const initialState = {
//   contacts: [],
//   filter: '',
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case 'filter/changeFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const contactsInitialState = [];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };
export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    // return [...state, action.payload];
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    // return state.filter(contact => contact.id !== action.payload);
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filterInitialState = {
  value: '',
};

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case changeFilter.type:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };
export const filterReducer = createReducer(filterInitialState, {
  [changeFilter]: (state, action) => {
    state.value = action.payload;
  },
});
