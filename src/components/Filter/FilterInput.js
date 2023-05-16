import React, { useState } from "react";
import styles from './FilterInput.module.css'
const Filter = ({filteration}) => {
    const [filter , setFilter] = useState("");
    const filterHandler = (e) => {
        const name = e.target.value;
        setFilter(name);
        filteration(name); 
        if (name.length > 10){
            alert("حاسب ي محمد")
        }};
     
    return (
        <div className={styles.mp}>

     <input className={styles.innput} type="text" placeholder="Find the person ...." value={filter} onChange={filterHandler}/>

     </div>

        ); 
};
export default Filter;
 