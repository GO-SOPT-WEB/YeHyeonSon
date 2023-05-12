import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Day from './pages/Day';
import Week from './pages/Week';
import Daycard from './components/Daycard';
import Weekcard from './components/Weekcard';


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/day" element={<Day/>}>
                <Route path=":area" element={<Daycard/>} />
            </Route>
            <Route path="/week" element={<Week/>}>
                <Route path=":area" element={<Weekcard/>} />
            </Route>
            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router