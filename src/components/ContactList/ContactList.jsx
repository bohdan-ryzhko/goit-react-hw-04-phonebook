import css from "./ContactList.module.css";
import PropTypes from 'prop-types';
import { LOCAL_KEY } from "constants/localKey";
import { useEffect } from "react";

export const ContactList = ({ list, removeContact }) => {

	useEffect(() => {
		setLocalStorage(list);
		return () => {
			setLocalStorage([]);
		}
	}, [list]);

	const setLocalStorage = value => {
		localStorage.setItem(LOCAL_KEY, JSON.stringify(value));
	}

	return (
		<ul className={css.contacts__list}>
			{list.map(({ name, id, number }) =>
				<li className={css.contact} key={id}>
					<span>{name}: {number}</span>
					<button
						id={id}
						onClick={removeContact(id)}
						className={css.removeBtn}
						type="button">
						Delete
					</button>
				</li>
			)}
		</ul>
	)
}

ContactList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
	})),
	removeContact: PropTypes.func.isRequired,
}