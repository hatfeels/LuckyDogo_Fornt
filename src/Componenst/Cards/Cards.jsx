import React from "react";
import Card from "./Card/Card";

import styles from "./cards.module.css";

const Cards = ({ dogs }) => {


  return (
    <div className={styles.cards}>
      {dogs?.map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          image={dog.image}
          name={dog.name}
          temperaments={dog.temperaments}
          weight={dog.weight}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
