import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import PromotionsPage from "./pages/PromotionsPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen bg-gray-900">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/:category" element={<GamesPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;