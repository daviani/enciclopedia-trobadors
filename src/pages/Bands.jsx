import { Link } from 'react-router-dom';
import { getAllBands } from '../DataSource';
import { useEffect, useState } from 'react';

const Bands = () => {
	const [bands, setBands] = useState([]);

	useEffect(() => setBands(getAllBands()));

	return (
		<>
			<h1>Bands : </h1>
			{bands.map((band) => (
				<div key={band._id}>
					<Link to={'/band/' + band._id}>{band.name}</Link>
				</div>
			))}
		</>
	);
};

export default Bands;
