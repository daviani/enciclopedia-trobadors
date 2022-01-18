import { Link } from 'react-router-dom';
import data from '../assets/data.json';

const Discographies = () => {
	const discographies = data.discographies;

	return (
		<>
			<h1>Discographies</h1>
			{discographies.map((discography) => (
				<div key={discography._id}>
					<Link to={'/discography/' + discography._id}>{discography.name}</Link>
				</div>
			))}
		</>
	);
};

export default Discographies;
