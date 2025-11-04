import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Add from "./Components/Add";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Read}> </Route>
          <Route path="/add" Component={Add}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
