import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, currency } from 'home/products';
import placeAddToCart from 'addtocart/placeAddToCart';

const PDPContent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useRef(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => {
        setProduct(product);
      });
    } else {
      setProduct(null);
    }
  }, [id]);

  useEffect(() => {
    if(addToCart.current) {
      placeAddToCart(addToCart.current, product.id)
    }
  }, [product])

  if (!product) return null;
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-grow">
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPContent;
