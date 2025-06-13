import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import { useTranslation } from 'react-i18next';

function App() {
	return (
		<BrowserRouter>
			<LanguageSetter />
			<Routes>
				<Route path="/:lang?" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

function LanguageSetter() {
	const { lang } = useParams();
	const { i18n } = useTranslation();

	useEffect(() => {
		if (lang && i18n.language !== lang) {
			i18n.changeLanguage(lang);
		} else if (!lang && i18n.language !== i18n.fallbackLng) {
			// Set fallbackLng if no language is present in the path
			i18n.changeLanguage(i18n.fallbackLng);
		}
	}, [lang, i18n]);

	return null;
}

export default App;