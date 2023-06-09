import Card from "../UI/Card";
import classes from "./ProductForm.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const ProductForm = props => {
    const[enteredProductID, setEnteredProductID] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredName, setEnteredName] = useState('');

    const updateID = (e) =>{
        setEnteredProductID(e.target.value);

    }
    const updatePrice = (e) =>{
        setEnteredPrice(e.target.value);
        
    }
    const updateName = (e) =>{
        setEnteredName(e.target.value);
        
    }
    const addProduct = (event) => {
        event.preventDefault();
        
        props.onAddProduct(enteredProductID,enteredPrice,enteredName);
        setEnteredProductID('');
        setEnteredName('');
        setEnteredPrice('')
    }
   
    return (
      
        <Card className={classes.input}>
        <form onSubmit={addProduct}>
            <label htmlFor="productID">Product ID</label>
            <input type="number" id="productID" value={enteredProductID} onChange={updateID} />
            <label htmlFor="price">Selling Price</label>
            <input type="number" id="age" value={enteredPrice} onChange={updatePrice}  />
            <label htmlFor="productName">Product Name</label>
            <input type="text" id="productName" value={enteredName} onChange={updateName}  />
            <Button type="submit">Add Product</Button>
        </form>
        </Card>
       
    )
};

export default ProductForm;