import ProductForm from './components/Product/ProductForm';
import { Fragment, useState } from 'react';
import ProductList from './components/Product/ProductList';

const App = () => {
  const [productList, setProductList] = useState([]);

  const addProductListHandler = (pId, pPrice, pName) => {
    setProductList((prevProdcutList) => {
      return [...prevProdcutList,{id:pId,price:pPrice,name:pName}]
    })
  }
  console.log(productList)
  return (
    <Fragment>
   <ProductForm onAddProduct={addProductListHandler}/>
   <ProductList products={productList} />
    </Fragment>
  )
  
};

export default App;
