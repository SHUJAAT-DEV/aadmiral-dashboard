import React from "react";
import { Link } from "react-router-dom";
import styles from "./StatusBtn.module.scss";

export const StatusBtn = ({ name, color, id, booking, refund }) => {
  return (
    <button disabled className={styles.btn} style={{ backgroundColor: color }}>
      <Link to={ booking ? `/detail/${id}` : `/refund-detail/${id}`}>{name}</Link>
    </button>
  );
};
