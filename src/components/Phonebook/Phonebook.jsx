import PropTypes from 'prop-types';
import { usePhonebook } from 'components/PhonebookContext/PhonebookContext';
import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const Phonebook = () => {
	const { contacts, filter } = usePhonebook();
	
	const [contactsList, setContactsList] = useState(contacts);
	const [filtered, setFiltered] = useState(filter);

	const handlerFilter = ({ target: { value } }) => {
		setFiltered(value);
	}

	const getContacts = data => {
		const { name } = data;

		const isRepeat = contactsList.some(
			contact => contact.name === name
		);

		if (isRepeat) {
			notificationAlready(name);
			return;
		}

		setContactsList(prev => [...prev, data]);
	};


	const notificationAlready = name => {
		alert(`${name} is already in contacts`);
	}

	const getFilteredContacts = () => {
		const normalizeFilter = filtered.toLowerCase();
		return contactsList.filter(({ name }) =>
			name.toLowerCase().includes(normalizeFilter));
	}

	const removeContact = id => () => {
		setContactsList(prevContactsList => {
			return prevContactsList.filter(contact => contact.id !== id)
		})
	}

	const filteredContacts = getFilteredContacts();

	return (
			<>
				<h1>Phonebook</h1>
				<ContactForm getContacts={getContacts} />
				{
					filteredContacts.length > 0
					&&
					<>
						<h2>Contacts</h2>
						<Filter value={filtered} handlerFilter={handlerFilter} />
						<ContactList list={filteredContacts} removeContact={removeContact} />
					</>
				}
			</>
		)
}

Phonebook.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	})),
	contactsList: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	})),
	filtered: PropTypes.string,
}