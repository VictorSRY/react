import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const submitHandler = event => {
    event.preventDefault();
    // ...
  };
  const [data,setData]= useState({name:'',amount:''}) 

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" value={data.name} 
            onChange={event=>{const temp=event.target.value;setData(prevState=>({...prevState,name:temp})) }} 
            id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" value={data.amount} 
            onChange={event=>{const temp=event.target.value;setData(prevState=>({...prevState,amount:temp})) }}
            id="amount" />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
