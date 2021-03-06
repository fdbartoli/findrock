import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
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
    <div>
      <div className="row">
        <div className="col-md-2">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-barra" />
          </Link>
        </div>
        <div className="col-md-4">
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
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SearchBar;
