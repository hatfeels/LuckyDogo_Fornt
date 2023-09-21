import React from "react";
import { Link } from "react-router-dom";

import style from "./card.module.css";

const Card = ({ id, image, name, temperaments, weight,  }) => {
  return (
    <div className={style.card}>
        <Link to={`/details/${id}`}>
      <div>
          <img src={image} alt={name} />
          <p>{name}</p>
          <div className="attitudes">

          {temperaments?.map((t) => (
            <span key={t.id} >{t.name} </span>
            ))}
          <p className={style.weight}>peso: {weight?.join(" - ")} Kg</p>
            </div>
      </div>
        </Link>
    </div>
  );
};

export default Card;
