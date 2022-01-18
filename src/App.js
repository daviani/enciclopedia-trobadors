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

const App = () => {
	return (
		<div className="AppEntry-scope">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/bands" element={<Bands />} />
					<Route path="/band/:id" element={<Band />} />
					<Route path="/discographies" element={<Discographies />} />
					<Route path="/discography/:id" element={<Discography />} />
					<Route path="/labels" element={<Labels />} />
					<Route path="/label/:id" element={<Label />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
