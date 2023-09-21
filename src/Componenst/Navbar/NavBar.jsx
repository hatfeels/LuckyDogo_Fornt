import React from "react";
import { Link, useParams } from "react-router-dom";
import SearchBar from "./Searchbar/SearchBar";

import styles from "./navbar.module.css"

const NavBar = ({ onSearch }) => {
  const { path } = useParams();

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div>
          <h1>LUCKY DOGO</h1>
        </div>
      </Link>
      <div className={styles.buttons}>
        <Link to="/home">Inicio</Link>
        <Link to="/form">Crear</Link>
      </div>
      <div className={styles.search}>{path === "home" ? <SearchBar onSearch={onSearch} /> : <div className={styles.cont}></div>}</div>
    </div>
  );
};

export default NavBar;
