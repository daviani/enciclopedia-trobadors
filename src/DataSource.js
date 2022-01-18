import data from './assets/data.json';

const getAllBands = () => {
	return data.bands;
};

const getBandById = ({ id }) => {
	return data.bands.find(({ _id }) => _id === id);
};

export { getAllBands, getBandById };
