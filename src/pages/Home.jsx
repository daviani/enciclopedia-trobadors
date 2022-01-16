import { Link } from 'react-router-dom';

const Bands = () => {
	return (
		<>
			<h1>Home </h1>
			<div>
				<Link to="/bands">Bands </Link>
			</div>
			<div>
				<Link to="/Discographies">Discographies </Link>
			</div>
			<div>
				<Link to="/labels">Labels </Link>
			</div>
		</>
	);
};

export default Bands;
