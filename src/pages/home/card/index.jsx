
import { ShoppingOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../../redux/shop-slice";
import { notification } from "antd";

const Card = (value) => {
  const dispatch = useDispatch();
  const getDataProduct = () => {
    dispatch(getData(value));
    notification.success({ message: "Add to Cart !" });
  };

  return (
    <div className="bg-white">
      <div className="mb-4">
        <img src={value.img} alt="" className="w-full" />
      </div>
      <div>
        <h3 className="text-base font-normal text-gray-900">{value.title.slice(0, 40)}...</h3>
        <div className="flex justify-between items-center py-2">
          <h2 className="text-lg font-medium text-gray-900">{value.price} so'm</h2>
          <div onClick={getDataProduct} className="cursor-pointer">
            <ShoppingOutlined className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
