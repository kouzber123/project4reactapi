import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AllSports from "./components/AllSports";
import AddSport from "./components/Addsport";
import UpdateSport from "./components/UpdateSport";
import DeleteSport from "./components/DeleteSport";
import "../src/App.css";
function Main() {
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
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
