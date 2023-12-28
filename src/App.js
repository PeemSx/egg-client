// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SigninPage } from './pages/SiginPage';
import { LoginPage } from './pages/LoginPage';
import { BlogPages } from './pages/BlogPages';
import './App.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/blogs" element={<BlogPages />} />
    </Routes>
  );
}

export default App;
