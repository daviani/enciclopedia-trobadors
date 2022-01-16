import { Link } from 'react-router-dom';

const Discographies = (discographies) => {
	return (
		<>
			<h1>Discographies</h1>
			{discographies.discographies.map((discography) => (
				<div key={discography._id}>
					<Link to={'/discography/' + discography._id}>{discography.name}</Link>
				</div>
			))}
		</>
	);
};

export default Discographies;
