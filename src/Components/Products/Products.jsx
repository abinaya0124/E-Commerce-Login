import axios from "axios";
import "./Product.css";
import { useEffect } from "react";
import { useState } from "react";

const Products = ({ handleCount }) => {
  const [values, setValues] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setValues(res.data.products);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <input
        type="text"
        className="border-2 p-2"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap gap-3 justify-center">
        {values
          ?.filter((item) => item.price?.toString().includes(search.toString()))
          .map((pro, id) => (
            <div className="products__subcontainer" key={id}>
              <div className="img__toy__container">
                <img src={pro.images[0]} alt="toy" className="img__toy" />
              </div>
              <div>
                <h2 className="flex justify-center bg-slate-400 rounded-full">
                  {pro.title}
                </h2>
                <div className="price__rating__toyContainer flex">
                  <h3 className="price__toy">Price:{pro.price}</h3>
                  <h3 className="rating__toy">{pro.rating}</h3>
                </div>
                <p className="description__toy">{pro.description}</p>
                <div className="button__toy__container">
                  <button className="button__toy" onClick={handleCount}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
