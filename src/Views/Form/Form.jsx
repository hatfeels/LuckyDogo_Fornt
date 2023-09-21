import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTemperaments, postDog } from "../../Redux/Acctions/Index";

import styles from "./form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    image: "",
    height_min: 0,
    height_max: 0,
    weight_min: 0,
    weight_max: 0,
    lifeSpan_min: 0,
    lifeSpan_max: 0,
    temperaments: [],
  });

  const [errors, setErrors] = useState({
    name: "*",
    image: "",
    height_min: "*",
    height_max: "*",
    weight_min: "*",
    weight_max: "*",
    lifeSpan_min: "*",
    lifeSpan_max: "*",
    temperaments: "*",
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const validations = (input, name) => {
    const regexURL =
      /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/i;
    const regexName = /^[a-zA-Z\s]+$/;

    switch (name) {
      case "name":
        if (input.name === "")
          setErrors({ ...errors, name: "Nobre es obligatorio" });
        else if (input.name.length > 20)
          setErrors({ ...errors, name: "longitud entre 1 y 20 caracteres" });
        else if (!regexName.test(input.name))
          setErrors({
            ...errors,
            name: "solo puede contener letras",
          });
        else setErrors({ ...errors, name: "" });
        break;

      case "image":
        if (input.image !== "") {
          if (regexURL.test(input.image)) setErrors({ ...errors, image: "" });
          else setErrors({ ...errors, image: "Debe ser una URL valida" });
        } else setErrors({ ...errors, image: "" });
        break;

      case "height_min":
        if (Number(input.height_min)) {
          if (Number(input.height_min) < 0)
            setErrors({
              ...errors,
              height_min: "La altura minima debe ser mayor a 0",
            });
          else setErrors({ ...errors, height_min: "" });
        } else
          setErrors({
            ...errors,
            height_min: "La altura minima debe ser un numero",
          });
        break;

      case "height_max":
        if (Number(input.height_max)) {
          if (Number(input.height_max) < 0)
            setErrors({
              ...errors,
              height_max: "La altura maxima debe ser mayor a 0",
            });
          else setErrors({ ...errors, height_max: "" });
        } else
          setErrors({
            ...errors,
            height_max: "La altura minima debe ser un numero",
          });
        break;

      case "weight_min":
        if (Number(input.weight_min)) {
          if (Number(input.weight_min) < 0)
            setErrors({
              ...errors,
              weight_min: "El peso minimo debe ser mayor a 0",
            });
          else setErrors({ ...errors, weight_min: "" });
        } else
          setErrors({
            ...errors,
            weight_min: "El peso minimo debe ser un numero",
          });
        break;

      case "weight_max":
        if (Number(input.weight_max)) {
          if (Number(input.weight_max) < 0)
            setErrors({
              ...errors,
              weight_max: "El peso maximo debe ser mayor a 0",
            });
          else setErrors({ ...errors, weight_max: "" });
        } else
          setErrors({
            ...errors,
            weight_max: "El peso maximo debe ser un numero",
          });
        break;

      case "lifeSpan_min":
        if (Number(input.lifeSpan_min)) {
          if (Number(input.lifeSpan_min) < 0)
            setErrors({
              ...errors,
              lifeSpan_min: "La esperaza de vida minima debe ser mayor a 0",
            });
          else setErrors({ ...errors, lifeSpan_min: "" });
        } else
          setErrors({
            ...errors,
            lifeSpan_min: "La esperaza de vida minima debe ser un numero",
          });
        break;

      case "lifeSpan_max":
        if (Number(input.lifeSpan_max)) {
          if (Number(input.lifeSpan_max) < 0)
            setErrors({
              ...errors,
              lifeSpan_max: "La La esperaza de vida maxima debe ser mayor a 0",
            });
          else setErrors({ ...errors, lifeSpan_max: "" });
        } else
          setErrors({
            ...errors,
            lifeSpan_max: "La La esperaza de vida maxima debe ser un numero",
          });
        break;

      case "temperaments":
        if (input.temperaments.length > 0)
          setErrors({ ...errors, temperaments: "" });
        else
          setErrors({
            ...errors,
            temperaments: "Debe seleccionar almenos una actitud",
          });
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    validations(
      {
        ...input,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const handleSelect = (event) => {
    setInput({
      ...input,
      [event.target.name]: [
        ...input[event.target.name].filter((id) => id !== event.target.value),
        event.target.value,
      ],
    });
    validations(
      {
        ...input,
        [event.target.name]: [
          ...input[event.target.name],
          ...event.target.value,
        ],
      },
      event.target.name
    );
  };

  const buttonDisable = () => {
    let disable = true;
    for (let error in errors) {
      if (errors[error] === "") disable = false;
      else {
        disable = true;
        break;
      }
    }
    return disable;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDog(input));
    console.log(input);
  };

  return (
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>
      <h5>*: campos obligatorios</h5>
        <div>
          <div>
            <div>
              <img src={input.image} alt="DOGO" />
            </div>
            <label>Nombre </label>
            <span>{errors.name}</span>
            <br />
            <input name="name" onChange={handleChange} type="text" />
            <div>
            </div>
          </div>
          <div>
            <label>Imagen (URL) </label>
            <br />
            <input name="image" onChange={handleChange} type="text" />
            <span>{errors.image}</span>
          </div>
          <div>
            <label>Peso </label>
            <br />
            <input name="weight_min" onChange={handleChange} type="number" />
            <label>min</label>
            <span>{errors.weight_min}</span>
            <br />

            <input name="weight_max" onChange={handleChange} type="number" />
            <label>max</label>
            <span>{errors.weight_max}</span>
          </div>
          <div>
            <label>Altura </label>
            <br />
            <input name="height_min" onChange={handleChange} type="number" />
            <label>min</label>
            <span>{errors.height_min}</span>
            <br />
            <input name="height_max" onChange={handleChange} type="number" />
            <label>max</label>
            <span>{errors.height_max}</span>
          </div>
          <div>
            <label>Esperansa de vida </label>
            <br />
            <input name="lifeSpan_min" onChange={handleChange} type="number" />
            <label>min</label>
            <span>{errors.lifeSpan_min}</span>
            <br />
            <input name="lifeSpan_max" onChange={handleChange} type="number" />
            <label>max</label>
            <span>{errors.lifeSpan_max}</span>
          </div>
          <div>
            <label>Actitudes </label>
            <span>{errors.temperaments}</span>
            {input.temperaments.map((t) => (
              <span>{temperaments[t - 1].name} </span>
            ))}
            <br />
            <select
              name="temperaments"
              id="temperaments"
              onChange={handleSelect}
            >
              {temperaments.map((temp) => (
                <option key={temp.id} value={temp.id}>
                  {temp.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <input disabled={buttonDisable()} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
