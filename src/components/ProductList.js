import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="product-list">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {status === 'failed' && <p>Failed to load products.</p>}
    </div>
  );
};

export default ProductList;
