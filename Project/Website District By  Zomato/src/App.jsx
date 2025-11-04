import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Moviecard from "./Components/Moviecard";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Artist from "./Components/Artist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
