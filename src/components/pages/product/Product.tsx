"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import sass from "./Product.module.scss";
import Image from "next/image";
interface Data {
  _id: string;
  name: string;
  url: string;
  price: string;
}
const Product = () => {
  const [data, setData] = useState<Data[]>([]);
  async function getProduct() {
    let res = await axios.get(
      "https://api-crud.elcho.dev/api/v1/58e55-17839-ed4d2/todos?per_page=1000"
    );

    setData(res.data.data);
  }
  async function deleteProduct(id: string, name: string) {
    await axios.delete(
      `https://api-crud.elcho.dev/api/v1/58e55-17839-ed4d2/todos/${id}?per_page=1000`
    );
    getProduct();
    alert(`Продукт удален ${name}`);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      <div className={sass.product}>
        {data?.map((el) => (
          <div className={sass.product_card}>
            <Image src={el.url} alt={el.name} />
            <div className={sass.product_card_item}>
              <h1>{el.name}</h1>
              <h2>{el.price}</h2>
            </div>
            <button onClick={() => deleteProduct(el._id, el.name)}>
              {" "}
              Delete product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
