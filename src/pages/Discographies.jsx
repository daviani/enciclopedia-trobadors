import { Link } from 'react-router-dom';
import { getAllDiscographies } from '../DataSource';
import { useEffect, useState } from 'react';

const Discographies = () => {
	const [discographies, setDiscographies] = useState([]);

	useEffect(() => setDiscographies(getAllDiscographies()));

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
