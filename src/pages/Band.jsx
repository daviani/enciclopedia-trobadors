import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBandById } from '../DataSource';

const Band = () => {
	const params = useParams();
	const [currentBand, setCurrentBand] = useState([]);

	useEffect(() => {
		let selectedBand = getBandById(params.id);
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
