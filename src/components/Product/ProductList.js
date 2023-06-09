import classes from './ProductList.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Fragment } from 'react';

const ProductList = props => {
   const deleteHandler = (id) => {
        // console.log("product id", id);
        props.onDelete(id);
        localStorage.removeItem(id);
    }
    let sum = 0;
    sum += props.products.map(prd => +prd.price).reduce((a, b) => a + b, 0)
    return(
        <Fragment>
        <h2>Products</h2>
        <Card className={classes.products} >
        
        {props.products.map((product => (
            <li key={product.id}>
                {product.name} {product.price}
                 <Button type="submit" onClick={() => deleteHandler(product.id)}>Delete</Button>
            </li>
            
        )))}
        
        
    </Card>
    <h2>Total Value Worth of Products: Rs {sum}</h2>
    </Fragment>
    )
}

export default ProductList;