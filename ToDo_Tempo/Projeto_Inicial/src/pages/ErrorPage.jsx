import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <p>Página Não Encontrada!</p>
      <Link to="/">Home</Link>
    </>
  );
};
export default ErrorPage;
