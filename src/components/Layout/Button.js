import React from "react";
import styles from "./Form.module.css";
const Button = (props) => {

    return (
         <button 
               onClick = {props.onClick}  
          className={styles.buttoon}
          type={`${props.type ? props.type : "button"}`}>
            {props.children}
            </button>
            );
};

export default Button;
