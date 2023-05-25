import React from "react";
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'

import './assets/app.css'

const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Pages.HomePage/>} />
        </Routes>
        </>
    )
}

export default App
