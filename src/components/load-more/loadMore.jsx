import { useEffect, useState, useCallback } from "react";
import "./load-more.css";

function LoadMore() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length) {
        setProducts((prev) => [...prev, ...data.products]);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }, [count]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabled(true);
    }
  }, [products]);

  if (isLoading) return <div className="container">Loading...</div>;

  return (
    <div className="load-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product, index) => {
              return (
                <div key={index} className="product">
                  <img src={product.thumbnail} alt={product.title} />
                  <div className="product-info">
                    <h3>{product.title} -</h3>
                    <p>${product.price}</p>
                  </div>
                  <p>{product.description}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disabled && <p>You have reached the end of the list</p>}
      </div>
    </div>
  );
}

export default LoadMore;
