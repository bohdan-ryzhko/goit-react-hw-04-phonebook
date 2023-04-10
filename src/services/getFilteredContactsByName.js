export const getFilteredContacts = (filteredValue, filteredArray) => {
		const normalizeFilter = filteredValue.toLowerCase();
		return filteredArray.filter(({ name }) =>
			name.toLowerCase().includes(normalizeFilter));
	}