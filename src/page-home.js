import React from "react";
import "./page-home.css";
import { useState } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function PageHome() {
  const [busqueda, setBusqueda] = useState("");
  const buscar = () => {
    setBusqueda(busqueda);
  };

  const handleChange = (e) => {
    console.log("soy el input", e.target.value);
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(busqueda);
  };
  return (
    <div className="container">
      <div className="row centrado">
        <div className="col-md-6 centrar">
          <Link to="/">
            <img src={logo} alt="logo" id="logo" />
          </Link>
          <form className="form-inline" name="Form" onSubmit={handleSubmit}>
            <div className="busqueda">
              <input
                name="busqueda"
                type="text"
                id="buscar"
                //value={props.busqueda}
                placeholder="Busca una banda"
                onChange={handleChange}
              />
            </div>
            <div className="actions">
              <button className="btng">search similar artist</button>
              <button className="btng">search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageHome;
