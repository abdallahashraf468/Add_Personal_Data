import React from "react";
import Card from "../Card/Card";

const CardList = ({nameHandler , deleteHandler}) => {
    const cards = nameHandler.map(({id, ...otherProps}) => (
      <Card key={id} {...otherProps} id={id} deleteHandler={deleteHandler}/>
     ));
     
    return <div> {cards} </div>;
};

export default CardList;
