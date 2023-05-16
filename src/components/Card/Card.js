import React from "react";
import styles from "./card.module.css";

const Card = ({id , name , age , adress , phone , type , deleteHandler}) => {
    return ( 
        <div
         className={styles.cardWrapper} style={{backgroundColor: type === "Male" ? "#A0C3D2" : "#EAC7C7"}}>
       <div>Name : {name}</div>
       <div>Age : {age}</div>
       <div>Adress : {adress}</div>
       <div>Phone : {phone}</div>
       <div className={styles.deleteBtn} onClick={ (e) => deleteHandler(e,id)}>X</div>

       </div> );
}

export default Card;


