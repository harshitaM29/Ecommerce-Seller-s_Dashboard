import classes from './ProductList.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Fragment } from 'react';

const ProductList = props => {
    return(
        <Fragment>
        <h2>Products</h2>
    <Card className={classes.products} >
        
        {props.products.map(product => (
            <li key={product.id}>
                {product.price} {product.name}
                 <Button type="submit">Delete</Button>
            </li>
            
        ))}
        
    </Card>
    </Fragment>
    )
}

export default ProductList;