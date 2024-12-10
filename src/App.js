import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import EditInfo from './pages/EditInfo';
import UploadRequirements from './pages/UploadRequirements';
import GenerateLetter from './pages/GenerateLetter';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/loginpage"/>}/>
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/mainpage" element={
                    <div>
                        <Navbar/>
                        <MainPage />
                    </div>} />
                <Route path="/editinfo" element={
                    <div>
                        <Navbar/>
                        <EditInfo/>
                    </div>}/>
                <Route path="/uploadrequirements" element={
                    <div>
                        <Navbar/>
                        <UploadRequirements/>
                    </div>}/>
                <Route path="/generateletter" element={
                    <div>
                        <Navbar/>
                        <GenerateLetter/>
                    </div>}/>
            </Routes>
        </Router>
    );
};

export default App;
