import pic from "../images/2222.avif";
import { useNavigate } from "react-router-dom";
import { stockData } from "../Data";

export const Navbar = () => {
  const navigator = useNavigate();
  const onClickHandler = () => {
    navigator("/register");
  };

  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("mobile-menu");
    console.log(" i m clicked", element);
    element.classList.toggle("hidden");
  };

  return (
    <>
      <div className="overlay flex-wrap">
        {stockData.Navbar.map((data, key) => {
          return (
            <div key={key}>
              <nav className=" text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-2">
                  <a href="#" className="flex">
                    <span className="self-center text-lg font-semibold whitespace-nowrap sm:text-2xl dark:text-white">
                      {data.itemOne}
                    </span>
                  </a>

                  <span className="text-3xl cursor-pointer md:hidden block ">
                    <ion-icon
                      name="menu-outline"
                      onClick={handleClick}
                    ></ion-icon>
                  </span>
                  <div
                    className=" w-full hidden md:block md:w-auto"
                    id="mobile-menu"
                  >
                    <div></div>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                        >
                          {data.itemTwo}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                        >
                          {data.itemThree}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                        >
                          {data.itemFour}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                        >
                          {data.itemFive}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black "
                        >
                          {data.itemSix}
                        </a>
                      </li>
                      <div className="flex flex-col  text-sm font-medium text-white md:flex-row md:space-x-8 mt-2">
                        <button
                          onClick={onClickHandler}
                          className="bg-red-600  md:w-18 h-8 w-24 rounded-xl hover:text-black"
                        >
                          {" "}
                          <a href="#">Log In</a>{" "}
                        </button>
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          );
        })}

        <div className="flex justify-center flex-wrap md:m-28 sm:m-0  ">
          <div className="text-right mr-8 mt-10">
            <h2 className="text-yellow-600 text-4xl">{stockData.Navbar[0].itemSeven}</h2>
            
            <h3 className="text-white text-6xl">{stockData.Navbar[0].itemEight}</h3>
            <span className="text-white text-7xl">{stockData.Navbar[0].itemNine}</span>
            <p className="text-xl text-white mt-8">
            {stockData.Navbar[0].itemTen} {" "}
            </p>
            <button className="w-48 p-3 mt-8 font-medium md:ml-10 text-2xl capitalize rounded-full bg-yellow-400">
            {stockData.Navbar[0].itemEleven}
            </button>
          </div>
          <div className="my-10">
            <img src={pic} alt="" className="hidden md:block" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
