import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ListaCompras from "./components/ListaCompras";
import { useState } from "react";
import Imagen from "./components/Imagen";

function App() {
  const [titulo, setTitulo] = useState("basado");
 

  return (
    <div className="App">
      <Header title={titulo} />
      <Imagen />
      <ListaCompras />


     
    </div>
  );
}

export default App;