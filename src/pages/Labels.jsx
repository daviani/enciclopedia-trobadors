import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllLabels } from '../DataSource';

const Labels = () => {
	const [labels, setLabels] = useState([]);

	useEffect(() => setLabels(getAllLabels()));

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
