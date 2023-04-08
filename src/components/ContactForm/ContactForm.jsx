import css from "./ContactForm.module.css";
import { useState } from "react";
import { nanoid } from 'nanoid/non-secure';
import PropTypes from 'prop-types';

export const ContactForm = ({ getContacts }) => {

	const [name, setName] = useState("");
	const [number, setNumber] = useState("");

	const submitForm = event => {
		event.preventDefault();

		getContacts({
			name,
			number,
			id: nanoid(),
		});

		resetForm();
	}

	const resetForm = () => {
		setName("");
		setNumber("");
	}

	const handleInput = ({ target: { name, value } }) => {
		switch (name) {
			case "name":
				setName(value);
				break;
			case "number":
				setNumber(value);
				break;
			default:
				console.warn("This case not support");
		}
	}

	return (
		<form className={css.form} onSubmit={submitForm}>
				<label className={css.label} htmlFor="name-id">
					Name
					<input
						value={name}
						onChange={handleInput}
						className={css.input}
						id="name-id"
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</label>
				<label className={css.label} htmlFor="number-id">
					<input
						value={number}
						onChange={handleInput}
						className={css.input}
						id="number-id"
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
				</label>
			<button className={css.btnSubmit} type="submit">Add contact</button>
		</form>
	)
}

ContactForm.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
}