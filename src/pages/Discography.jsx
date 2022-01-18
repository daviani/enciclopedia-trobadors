import { useParams } from 'react-router-dom';
import { getDiscographyById } from '../DataSource';
import { useEffect, useState } from 'react';

const Discography = () => {
	const params = useParams();
	const [currentDiscography, setCurrentDiscography] = useState([]);

	useEffect(() => {
		let selectedDiscography = getDiscographyById(params.id);
		setCurrentDiscography(selectedDiscography);
	}, []);

	return (
		<>
			<h1>Discography</h1>
			{currentDiscography && <div>{currentDiscography.name}</div>}
		</>
	);
};

export default Discography;
