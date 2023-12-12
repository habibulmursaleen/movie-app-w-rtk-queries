import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import SingleMovieDetails from "./components/movie/SingleMovieDetails";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<SingleMovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
