import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import LogoSvg from "../../assets/svg/logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.shopSlice);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto w-[90%]">
        <nav className="flex items-center justify-between py-5 mb-14">
          <div className="navbar_logo">
            <LogoSvg />
          </div>
          <div className="flex items-center gap-5">
            <div className="text-[20px] cursor-pointer flex items-center">
              <HeartOutlined className="text-[20px] mr-2" />
              Saralanganlar
            </div>
            <div
              className="text-[20px] cursor-pointer flex items-center"
              onClick={() => navigate("/shop")}
            >
              <ShoppingOutlined className="text-[20px] mr-2" />
              Savat
              <span className="ml-1 bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs">
                {data.length}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
