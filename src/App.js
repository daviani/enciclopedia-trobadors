import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Bands from './pages/Bands';
import Band from './pages/Band';
import Discographies from './pages/Discographies';
import Discography from './pages/Discography';
import Labels from './pages/Labels';
import Label from './pages/Label';
import NotFound from './pages/NotFound';
import datas from './assets/data.json';

const App = () => {
	const bands = datas.bands;
	const discographies = datas.discographies;
	const labels = datas.labels;
	return (
		<div className="AppEntry-scope">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/bands" element={<Bands bands={bands} />} />
					<Route path="/band/:id" element={<Band />} />
					<Route
						path="/discographies"
						element={<Discographies discographies={discographies} />}
					/>
					<Route path="/discography/:id" element={<Discography />} />
					<Route path="/labels" element={<Labels labels={labels} />} />
					<Route path="/label/:id" element={<Label />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
