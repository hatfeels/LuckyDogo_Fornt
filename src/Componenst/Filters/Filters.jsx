import React from "react";
import { useSelector } from "react-redux";

import styles from "./filters.module.css"

const Filters = ({ handleFilter, handleOrder}) => {
  const temperaments = useSelector((state) => state.temperaments);
  return (
    <div className={styles.cont}>
      <div className={styles.filter}>
        <label>Filtrar: </label>
        <select name="filter" id="filter" onChange={handleFilter} >
          {temperaments.map((temp) => (
            <option key={temp.id} value={temp.name}>
              {temp.name}
            </option>
          ))}
        </select>
        <button value="clear" onClick={handleFilter}>
          Limpiar filtro
        </button>
      </div>
      <div>
        <label>Ordenar: </label>
        <select name="order" id="order" onChange={handleOrder}>
          <option value="a:z">Nombre A:Z</option>
          <option value="z:a">Nombre Z:A</option>
          <option value="mayor">Menor peso</option>
          <option value="menor">Mayor peos</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
