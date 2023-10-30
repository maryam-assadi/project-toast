import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  // const [textValue, setTextValue] = React.useState("");
  // const [radioValue, setRadioValue] = React.useState("notice");
  // const [toastList, setToastList] = React.useState([]);

  const {
    textValue,
    setTextValue,
    radioValue,
    setRadioValue,
    toastList,
    setToastList,
  } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <>
        <ToastShelf
          toastList={toastList}
          setToastList={setToastList}
          items={toastList}
        />
      </>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(event) => {
                setTextValue(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((item) => (
              <label key={`key-variant-${item}`} htmlFor={`variant-${item}`}>
                <input
                  id={`variant-${item}`}
                  type="radio"
                  name="variant"
                  value={item}
                  onChange={() => {
                    setRadioValue(item);
                  }}
                  checked={item === radioValue}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={() => {
                const newList = [
                  ...toastList,
                  {
                    toastKey: crypto.randomUUID(),
                    children: textValue,
                    variant: radioValue,
                  },
                ];
                setToastList(newList);
                setTextValue("");
                setRadioValue(VARIANT_OPTIONS[0]);
              }}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
