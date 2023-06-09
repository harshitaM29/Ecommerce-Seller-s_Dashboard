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

  const deleteProductHandler = (pId) => {
    console.log("ID from app", pId)
    const newList = productList.filter((product) => product.id !== pId);
    setProductList(newList)
   

  }
  console.log("from app",productList)
  return (
    <Fragment>
   <ProductForm onAddProduct={addProductListHandler}/>
   <ProductList products={productList} onDelete={deleteProductHandler} />
    </Fragment>
  )
  
};

export default App;
