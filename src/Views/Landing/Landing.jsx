import React from 'react'
import { Link } from "react-router-dom"

import styles from "./landing.module.css"

const Landing = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.wellcome}>
        <Link to="/home">Bienvenido</Link>
      </div>
    </div>
  )
}

export default Landing