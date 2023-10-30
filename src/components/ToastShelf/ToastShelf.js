import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList, setToastList, items }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {items.map((item) => (
        <li className={styles.toastWrapper}>
          <Toast
            toastList={toastList}
            setToastList={setToastList}
            toastKey={item.toastKey}
            type={item.variant}
            variant={item.variant}
          >
            {item.children}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
