import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MovieList from "./movie/MovieList";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-[#39445a] text-white p-10 md:p-30">
        <Header />
        <MovieList />
      </div>
    </>
  );
};

export default App;
