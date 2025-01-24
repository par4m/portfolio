import React from "react";
import styles from "./Reading.module.css"; // Import CSS Module

function Uses() {
  return (
    <div className={styles.usesContainer}>
      <br />
      <p>
        I use this page to track my reading. I have obviously read more than
        this, but I cannot remember beyond 2020.{" "}
      </p>
      <br />
    </div>
  );
}

export default Uses;
