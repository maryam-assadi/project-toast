import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const iconVariant = (variant) => {
  switch (variant) {
    case "notice":
      return <Info size={24} />;
    case "warning":
      return <AlertTriangle size={24} />;
    case "success":
      return <CheckCircle size={24} />;
    case "error":
      return <AlertOctagon size={24} />;
    default:
      return <Info size={24} />;
  }
};

function Toast({ toastList, setToastList, toastKey, type, variant, children }) {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>{iconVariant(variant)}</div>
      <p className={styles.content}>
        <VisuallyHidden >{variant}</VisuallyHidden>
        {children}
      </p>

      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => {
          const newList = toastList.filter(
            (toast) => toast.toastKey !== toastKey
          );
          setToastList(newList);
        }}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
