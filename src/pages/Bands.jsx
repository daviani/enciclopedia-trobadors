import { Link } from 'react-router-dom';
import data from '../assets/data.json';

const Bands = () => {
	const bands = data.bands;

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
