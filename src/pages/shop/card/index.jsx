import { DeleteOutlined } from "@ant-design/icons";
import { Card, notification } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { decrement, deleteData, increment } from "../../../redux/shop-slice";

const CardItem = (props) => {
  const dispatch = useDispatch();
  const { id, img, title, count, userPrice } = props;

  return (
    <Card className="w-[100%] h-[200px] rounded overflow-hidden shadow-lg mb-5">
      <div className="flex items-center space-x-4">
        <img className="w-40 h-40 object-cover" src={img} alt={title} />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold w-[70%]">{title}</h3>
            <div
              onClick={() => {
                dispatch(deleteData(id));
                notification.success({ message: "Delete product !" });
              }}
              className="cursor-pointer text-red-500 hover:text-red-700"
            >
              <DeleteOutlined />
              <span className="ml-2">Yo'q qilish</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(decrement(id))}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
              >
                -
              </button>
              <p className="text-lg">{count}</p>
              <button
                onClick={() => dispatch(increment(id))}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
              >
                +
              </button>
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {userPrice} so'm
            </h2>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
