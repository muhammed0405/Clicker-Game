/** @format */

import React, { useEffect } from "react"

import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Boost from "./components/Boost"
import Home from "./components/Home"
import DarkMode from "./components/Home/DarkMode/DarkMode"
import Info from "./components/Info"
import Skins from "./components/Skins/Skins"
function App() {
	const darkMode = useSelector(state => state.darkMode)

	const body = () => {
		document.body.style.background = darkMode ? "#222" : "white"
		document.body.style.transition = "1s"
	}

	useEffect(() => {
		body()
	}, [darkMode])

	return (
		<div className="App">
			<DarkMode />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/boost" element={<Boost />} />
				<Route path="/info" element={<Info />} />
				<Route path="/skins" element={<Skins />} />
			</Routes>
		</div>
	)
}

export default App
