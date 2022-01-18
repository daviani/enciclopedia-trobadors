import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data.json';

const Band = () => {
	const allBands = data.bands;
	const params = useParams();
	const [currentBand, setCurrentBand] = useState([]);

	useEffect(() => {
		let selectedBand = allBands.find(({ _id }) => _id === params.id);
		setCurrentBand(selectedBand);
	}, []);

	return (
		<>
			<h1>Band</h1>
			{currentBand && <div>{currentBand.name}</div>}
		</>
	);
};

export default Band;
