import React, { useCallback, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcum from '../components/Breadcums/Breadcum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
const Product  = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id===Number(productId));
  return (
    <div>
      <Breadcum product = {product}></Breadcum>
      <ProductDisplay product = {product}></ProductDisplay>
      <DescriptionBox/>
      <RelatedProducts></RelatedProducts>
    </div>
  )
}

export default Product; 
