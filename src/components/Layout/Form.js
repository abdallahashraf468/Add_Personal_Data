import React from "react";
import styles from "./Form.module.css"
const Form = (props) => {
    return <form onreset={props.myFunction} onSubmit={props.onSubmit}>{props.children}</form>

}
const Controller = (props) => {
    // console.log(props)
    return <div className={styles.Controller}>{props.children}</div>
}
Form.Controller = Controller
export default Form;
