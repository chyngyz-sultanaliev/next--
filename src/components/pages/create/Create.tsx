"use client";
import React, { useState } from "react";
import sass from "./Create.module.scss";
import axios from "axios";
interface Data {
  name: string;
  url: string;
  price: string;
}
const Create = () => {
  const [data, setData] = useState<Data>({
    name: "",
    url: "",
    price: "",
  });
  const { name, url, price } = data;
  async function CreateProduct() {
    if (!url || !name || !price) {
      alert("ЗАПОЛНИТЕ");
    } else {
      alert("ДОБАВЛЕН");
      await axios.post(
        "https://api-crud.elcho.dev/api/v1/58e55-17839-ed4d2/todos?per_page=1000",
        data
      );
    }
    setData({
      name: "",
      url: "",
      price: "",
    });
  }
  return (
    <div className="container">
      <form onSubmit={CreateProduct} className={sass.create}>
        <h1>Create Product</h1>
        <input
          onChange={(e) => setData({ ...data, name: e.currentTarget.value })}
          type="text"
          value={name}
          placeholder="name"
        />
        <input
          onChange={(e) => setData({ ...data, url: e.currentTarget.value })}
          type="text"
          value={url}
          placeholder="yrl"
        />
        <input
          onChange={(e) => setData({ ...data, price: e.currentTarget.value })}
          type="text"
          value={price}
          placeholder="price"
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default Create;
