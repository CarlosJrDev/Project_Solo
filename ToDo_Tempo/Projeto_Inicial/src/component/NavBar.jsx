import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo-List</Link>
      <Link to="/previsao">Previsão Do Tempo</Link>
    </nav>
  );
};
export default NavBar;
