import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLabelById } from '../DataSource';

const Label = () => {
	const params = useParams();
	const [currentLabel, setCurrentLabel] = useState([]);

	useEffect(() => {
		let selectedLabel = getLabelById(params.id);
		setCurrentLabel(selectedLabel);
	}, []);

	return (
		<>
			<h1>Label</h1>
			{currentLabel && <div>{currentLabel.name}</div>}
		</>
	);
};

export default Label;
