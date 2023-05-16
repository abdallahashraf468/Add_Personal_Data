import React,{ useState , Fragment} from "react";
import CardList from "../components/CardList/CardList";
import apps from "./app.module.css";
import FilterInput from "../components/Filter/FilterInput";
import Modal from "../components/Modal/Modal"
import Button  from "../components/Layout/Button";
import AddUser from "../components/AddUser/Adduser";
const App = () => {
    const [cardToggle,setCardToggle] = useState(true);
    const [filter , setFilter] = useState("");
    const [showModal , setShowModal] = useState(false);
    const [state,setState] = useState([
    {id:1000,name:"abdallah" ,age:"22" , adress:"eldraksa" , phone:"01011956044",type:"Male" },
    {id:2000,name:"mariam" ,age:"22" , adress:"eldraksa" , phone:"01011956044",type:"Female" },
    {id:3000,name:"ali" ,age:"27" , adress:"eldraksa" , phone:"01075860447",type:"Male" },
    {id:4000,name:"mona" ,age:"72" , adress:"eldraksa" , phone:"0101795444",type:"Female" }]);

 
    const addNewUserHandler = (data) => {
        //  setState((prevState) => setState([prevState,{...data}]))
         setState((prevState) => [...prevState , data]);

    };


    const deleteHandler = (e,selectId) => {
        setState((state) => {  
            //  prevState دي تحل مكان الل state القديمه لكن الل setState دي تعتبر الجديده
            return state.filter(el => el.id !== selectId );
        });
                 console.log(state);
    };
     const HandToggele  = () => {
      setCardToggle (!cardToggle);
    };
    // const testHandler = () => {
    //     console.log(inputEl.current);
    // }
    const filterNames = (name) => {
        setFilter(name);
    };
    const nameHandler = () => { 
        if (filter.length !== 0){
            return state.filter((el) => el.name.includes(filter));
        }
        return state;
    };

    // ///////////////// ................./////////////////

    return (
        <Fragment>

    <div className={apps.maincontianer} > 
       
    <h1>list of data</h1>
    
    <div className={apps.oom}>
        <Button onClick = {() => HandToggele()}> 
        {cardToggle ? "Hide Names" : "Show Names"} </Button>  
      <Button onClick={() => setShowModal(true)}>New Record </Button>
    </div>
    <div className={cardToggle ? apps.show : apps.hide}>

         <FilterInput filteration={filterNames} /> 
            <CardList nameHandler = {nameHandler()} deleteHandler ={deleteHandler} />
               </div>
                    </div> 
                      <Modal show={showModal} closeModal = {() => setShowModal(false)}> 
                      <AddUser addNewUserHandler={addNewUserHandler} closeModal = {() => setShowModal(false)}/>

                      </Modal>
                      </Fragment>
     )};  
export default App ;


