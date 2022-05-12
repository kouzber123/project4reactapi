import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AllSports from "./components/AllSports";
import AddSport from "./components/Addsport";
import UpdateSport from "./components/UpdateSport";
import DeleteSport from "./components/DeleteSport";
import Footer from "./components/Footer";
import "../src/App.css";
function Main() {
  //Create routes and create paths and render react components to the end points
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allSports" element={<AllSports />} />
        <Route path="/addsport" element={<AddSport />} />
        <Route path="/sportId" element={<AddSport />} />
        <Route path="/updateSport" element={<UpdateSport />} />
        <Route path="/deleteSport" element={<DeleteSport />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
//render the application
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main tab="home" />);
