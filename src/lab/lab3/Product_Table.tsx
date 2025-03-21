import { useState } from "react";
import ProductList from "./Product_list";

export default function ProducTable(){
    const [products, setProducts] = useState([
       {
      id: 1,
      name: "Sản phẩm 1",
      image: "https://cdn.shopify.com/s/files/1/0878/6457/4255/files/nhan-vat-trong-thanh-guom-diet-quy__1__2e57993d26c2455290e011dd7b11e0b1_grande_d70706e9-535b-46db-bc4c-e7f9e4c25df9.jpg?v=1716182196",
      quantity: 10,
      price: 100000,
      status:"còn hàng"
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      image: "https://image.tienphong.vn/600x315/Uploaded/2025/uug-onattvnat/2023_06_17/ava-23-8304.jpg",
      quantity: 0,
      price: 200000,
      status:"còn hàng"
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      image: "https://image.tienphong.vn/600x315/Uploaded/2025/uug-onattvnat/2023_06_17/ava-23-8304.jpg",
      quantity: 5,
      price: 300000,
      status:"còn hàng"
    },
    ]);
    const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Sản phẩm ${products.length + 1}`,
      image: "https://image.tienphong.vn/600x315/Uploaded/2025/uug-onattvnat/2023_06_17/ava-23-8304.jpg",
      quantity: Math.floor(Math.random() * 10),
      price: Math.floor(Math.random() * 500000),
      status: "Còn hàng",
    };
    setProducts([...products, newProduct]);
  };
    return (
     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold text-gray-800">Danh sách sản phẩm</h2>
    <button
      onClick={addProduct}
      className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
    >
      + Thêm sản phẩm
    </button>
  </div>
  <div className="overflow-x-auto">
    <ProductList products={products} />
  </div>
</div>
    )
}