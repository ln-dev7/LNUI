import React from "react";
import styles from "./style.module.css";

export default function index() {
  return (
    <div className={styles.card}>
      <h3>
        #CaParleDev
        <span>Tech</span>
      </h3>
      <p>
        CaParleDev est une communauté de développeurs et designers passionnés
        par l’open source.
      </p>
      <button>S'abonner</button>
    </div>
  );
}
