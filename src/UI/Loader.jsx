import React from "react";
import styles from "./Loader.module.css";
import Logo from "../assets/images/logo.png";
import Meta from "../assets/images/meta.png";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div>
        <img className={styles.logo} src={Logo} alt="" />
      </div>
      <div className={styles.footer}>
        <img className={styles.meta} src={Meta} alt="" />
      </div>
    </div>
  );
};

export default Loader;
