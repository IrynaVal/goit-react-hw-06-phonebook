import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  // console.log(contacts);
  const filterValue = useSelector(state => state.filter.value);
  console.log(filterValue);
  const lowerCaseFilter = filterValue.toLowerCase();

  const showFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );

  const filteredContacts = showFilteredContacts();

  return (
    contacts.length !== 0 && (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    )
  );
};

// ContactList.propTypes = {

//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
