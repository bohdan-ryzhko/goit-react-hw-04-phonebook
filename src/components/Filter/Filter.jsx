import PropTypes from 'prop-types';

export const Filter = ({ handlerFilter, value }) => {
	return (
		<>
			<p>Find contacts by name</p>
			<input
				type="text"
				value={value}
				onChange={handlerFilter}
			/>
		</>
	)
}

Filter.propTypes = {
	handlerFilter: PropTypes.func.isRequired,
	value: PropTypes.string,
}