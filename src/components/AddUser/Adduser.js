import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button"; 
import styles from "./AddUser.module.css"

const AddUser = ({addNewUserHandler , closeModal}) => {

    const inputHandler = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setInput({...input ,[key]:value});
    }

    const [input, setInput] = useState ({
        name:'',
        age:'',
        adress:'',
        phone:'',
        type:'',
    }); 
   

const onSubmitHandler = (e) => {
    e.preventDefault();

    addNewUserHandler({
       ...input,
        id: Math.round(Math.random() * 10),
    }); 
       setInput({
        name:'',
        age:'',
        adress:'',
        phone:'',
        type:'', 
        });
        closeModal();
}

 const myFunction = () => {
    return ( 
           alert("The form was reset !"),

        setInput({
            name:'',
            age:'',
            adress:'',
            phone:'',
            type:'', 
        }
    ));
 };

return (    
         <Form className={styles.forms} onSubmit={onSubmitHandler} onreset={() => myFunction}>
    <Form.Controller>
        <label htmlFor ="name">Name:</label>
        <input type="text" id="name" placeholder="Enter Email" value={input.name} onChange={inputHandler}/>
    </Form.Controller>
    <Form.Controller>
        <label htmlFor ="age">Age :</label>
        <input type="text" id="age" placeholder="Enter age" value={input.age} onChange={inputHandler} />
    </Form.Controller>
    <Form.Controller>
        <label htmlFor ="adress">Adress:</label>
        <input type="text" id="adress" placeholder="Enter adress" value={input.adress} onChange={inputHandler} />
    </Form.Controller>
    <Form.Controller>
        <label htmlFor ="phone">Phone:</label>
        <input type="text" id="phone" placeholder="Enter phone" value={input.phone} onChange={inputHandler} />
         </Form.Controller>
    <Form.Controller>
        <label htmlFor ="type">Type :</label>
        <input type="text" id="type" placeholder="Enter type" value={input.type} onChange={inputHandler} />
         </Form.Controller>

         <div className={styles.buttonn}>
        <Button type="submit"> Save </Button>
        <Button onClick={myFunction} type="reset" value="Reset"> reset </Button>
        </div>
</Form>
  );
}

export default AddUser;
