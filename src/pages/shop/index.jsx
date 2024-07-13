
import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import CardItem from "./card";

const Shop = () => {
  const { data } = useSelector((state) => state.shopSlice);
  const price = data.reduce((acc, value) => (acc += value.userPrice), 0);
  
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {data.map((value) => (
            <CardItem key={value.id} {...value} />
          ))}
        </div>
        <Card className="p-4 sticky-right">
          <h3 className="text-xl font-semibold">Buyurtmangiz</h3>
          <h4 className="text-lg">Mahsulotlar ({data.length})</h4>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-700">Jami</p>
            <h2 className="text-2xl font-bold text-gray-900">{price} so'm</h2>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Rasmiylashtrishga o'tish
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Shop;
