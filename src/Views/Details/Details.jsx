import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import styles from "./details.module.css";


const Details = () => {

  const { id } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
      if (data.name) {
        setDog(data);
      } else {
        window.alert("No hay Perro con ese ID");
      }
    });
    return setDog({});
  }, [id]);

  

  return (
    <div className={styles.cont}>
      <div className={styles.card}>
      <div className={styles.image}>
        <img src={dog?.image} alt={dog.name} />
      </div>
      <div>
        <h1>{dog.name && dog.name}</h1>
      </div>
      <div>
        <h3>peso: {dog.weight?.join(' - ')} kilos</h3>
      </div>
      <div>
        <h3>altura: {dog.height?.join(' - ')} centimetros</h3>
      </div>
      <div>
        <h3>actitudes:</h3>
        {dog.temperaments?.map((t) => <span>{t.name} </span>) }
      </div>
      <div>
        <h2>Esperansa de vida: {dog.lifeSpan?.join(' - ')} años</h2>
      </div>
      <Link to="/home">Volver</Link>
      </div>
    </div>
  )
}

export default Details