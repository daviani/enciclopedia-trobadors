import { Link } from 'react-router-dom';
import data from '../assets/data.json';

const Labels = () => {
	const labels = data.labels;
	return (
		<>
			<h1>Labels</h1>
			{labels.map((label) => (
				<div key={label._id}>
					<Link to={'/label/' + label._id}>{label.name}</Link>
				</div>
			))}
		</>
	);
};

export default Labels;
