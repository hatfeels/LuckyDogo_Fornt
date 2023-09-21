import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  filterDogs,
  getDogs,
  getTemperaments,
  sortDogs,
} from "../../Redux/Acctions/Index";
import Cards from "../../Componenst/Cards/Cards";

import styles from "./home.module.css";
import Pagination from "../../Componenst/Pagination/Pagination";
import Filters from "../../Componenst/Filters/Filters";

const Home = () => {
  const dispatch = useDispatch();

  const dogs = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogPerPage] = useState(8);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, []);


  const indexOfLastDog = currentPage * dogPerPage;
  const indexOfFirstDog = indexOfLastDog - dogPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const handleFilter = (event) => {
    dispatch(filterDogs(event.target.value));
    console.log(event.target.value);
  };

  const handleOrder = (event) => {
    dispatch(sortDogs(event.target.value));
  };

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.cont}>
      <div>
        <Filters handleFilter={handleFilter} handleOrder={handleOrder} />
      </div>
      <Cards dogs={currentDogs}/>
      <div>
        <Pagination
          currentPage={currentPage}
          page={navigate}
          dogsPerPage={dogPerPage}
          total={dogs.length}
        ></Pagination>
      </div>
    </div>
  );
};

export default Home;
