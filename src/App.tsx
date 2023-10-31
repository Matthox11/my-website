import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/Navigation/Navigation';

function App() {

	return (

		<div className="app">

			<Router>

				<Navigation />

				<Routes>

					<Route path="/" element={<Home />} />

					<Route path="/projects" element={<Projects />} />

					<Route path="/about" element={<About />} />

					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>

		</div>
	);
}


export default App;
