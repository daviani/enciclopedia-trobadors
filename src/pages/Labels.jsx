import { Link } from 'react-router-dom';

const Labels = (labels) => {
	return (
		<>
			<h1>Labels</h1>
			{labels.labels.map((label) => (
				<div key={label._id}>
					<Link to={'/label/' + label._id}>{label.name}</Link>
				</div>
			))}
		</>
	);
};

export default Labels;
