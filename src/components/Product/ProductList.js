import classes from './ProductList.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Fragment, useState } from 'react';

const ProductList = props => {
   
    const [productlist, setList] = useState(props);
    console.log("list",productlist);
    const deleteHandler = (id) => {
       const newList = Object.values(productlist).filter((item) => item.id !== id);
       
       setList(newList);
    }
    
    return(
        <Fragment>
        <h2>Products</h2>
    <Card className={classes.products} >
        
        {props.products.map(product => (
            <li key={product.id}>
                {product.price} {product.name}
                 <Button type="submit" onClick={() => deleteHandler(product.id)}>Delete</Button>
            </li>
            
        ))}
        
    </Card>
    </Fragment>
    )
}

export default ProductList;