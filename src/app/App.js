import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Ecommerce from '../routes/dashboard/Ecommerce'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from "react-icons/fi"
import './App.css'
const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Ecommerce />} />
			</Routes>
		</div>
	)
}

export default App