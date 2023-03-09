import React from "react";
import styles from "./style.module.css";

export default function index() {
  return (
    <div className={styles.join}>
      <div className={styles.join__container}>
        <h2>Join our newsletter</h2>
        <p>
          Join our newsletter to receive tutorials, articles and podcasts on web
          design and programming.
        </p>
        <div className={styles.join_subscribe}>
          <input type="text" placeholder="Enter your email address" />
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}
