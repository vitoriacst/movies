import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";

const Cart = () => {
  const { productCart } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const takeItems = JSON.parse(localStorage.getItem("moviesData")) || [];
    setCart(takeItems);
    let total = takeItems.reduce((acc, { value }) => value + acc, 0);
    setTotalPrice(total);
  }, [productCart]);

  return (
    <div className="mockup-window border border-base-300 bg-white">
      <div className="flex justify-center  border-t border-base-300">
        <div class="relative">
          {cart.map((element, index) => (
            <div className="flex items-center justify-between gap-6 bg-white">
              <section class="relative flex font-bold" key={index}>
                {element.name}
              </section>
              <section class="relative flex font-bold">{element.value}</section>
              <ul></ul>
            </div>
          ))}
          <div className="mt-6 font-bold">
            <span className="text-red-900">total: R$ {totalPrice}</span>
          </div>
          <a href="/checkout">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded mb-4">
              Finalizar a compra
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
