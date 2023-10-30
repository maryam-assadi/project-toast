import React from "react";
import { useEscapeKey } from "../../hooks";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  const [textValue, setTextValue] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("notice");

  const clearToastList = () => {
    setToastList([]);
  };
  
  useEscapeKey(clearToastList);

  return (
    <ToastContext.Provider
      value={{
        textValue,
        setTextValue,
        radioValue,
        setRadioValue,
        toastList,
        setToastList,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
