import React from "react";
import { useDispatch } from "react-redux";
import { seachDogs } from "../../../Redux/Acctions/Index";

import styles from "./searchbar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(seachDogs(event.target.value));
  };

  return (
    <div className={styles.cont}>
      <input type="search" onChange={handleChange} placeholder="Buscar" />
      <img src="https://cdn-icons-png.flaticon.com/512/324/324654.png" alt="busqueda" />
    </div>
  );
};

export default SearchBar;
