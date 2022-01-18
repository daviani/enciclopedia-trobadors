import data from './assets/data.json';

const getAllBands = () => {
	return data.bands;
};

const getBandById = (id) => {
	return data.bands.find(({ _id }) => _id === id);
};

const getAllDiscographies = () => {
	return data.discographies;
};

const getDiscographyById = (id) => {
	console.log('dataSource', id);
	return data.discographies.find(({ _id }) => _id === id);
};

export { getAllBands, getBandById, getAllDiscographies, getDiscographyById };
