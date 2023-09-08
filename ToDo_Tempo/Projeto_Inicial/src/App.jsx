import "./App.css";

// 2- reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

// 4 - Criando barra de navegação
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <h1>ReactRouter</h1>
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
