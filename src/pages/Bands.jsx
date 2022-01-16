import { Link } from 'react-router-dom';

const Bands = (bands) => {
	return (
		<>
			<h1>Bands : </h1>
			{bands.bands.map((band) => (
				<div key={band._id}>
					<Link to={'/band/' + band._id}>{band.name}</Link>
				</div>
			))}
		</>
	);
};

export default Bands;
