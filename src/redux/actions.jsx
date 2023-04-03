import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };
export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);
console.log(addContact('dina', '23456788'));

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
export const deleteContact = createAction('contacts/deleteContact');
console.log(deleteContact(123));

// export const changeFilter = value => {
//   return {
//     type: 'filter/changeFilter',
//     payload: value,
//   };
// };
export const changeFilter = createAction('filter/changeFilter');
console.log(changeFilter('b'));
