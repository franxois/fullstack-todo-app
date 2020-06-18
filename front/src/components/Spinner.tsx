import React from "react";

import styles from "./Spinner.module.scss";

const Spinner = ({ show }: { show: boolean }) =>
  show ? (
    <svg className={styles.spinner} viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </svg>
  ) : null;

export default Spinner;
