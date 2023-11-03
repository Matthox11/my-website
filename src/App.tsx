import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

interface Link {

	label: string;
	path: string;
	component: JSX.Element;
}

function App() {

	const links: Link[] = [

		{
			label: 'Home',
			path: '/',
			component: <Home />
		},

		{
			label: 'Projects',
			path: '/projects',
			component: <Projects />
		},

		{
			label: 'About',
			path: '/about',
			component: <About />
		},

		{
			label: 'Contact',
			path: '/contact',
			component: <Contact />
		}
	];

	return (

		<div className="app">

			<Router>

				<Navigation links={links} />

				<Routes>

					{links.map((link: Link, item: number) => (

						<Route path={link.path} element={link.component} />
					))}

				</Routes>
			</Router>

		</div>
	);
}


export default App;
