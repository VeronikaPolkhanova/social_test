import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import ProfilePage from "./pages/Profile";
import NewsPage from "./pages/News";
import MainPage from './pages/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
