import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import AppContext from "../contexts/AppContext";

const FinalCart = () => {
  const { productCart } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const alert = () => {
    Swal.fire(
      "Compra efetuada com sucesso!",
      "Agora prepare a pipoca e bom filme!",
      "success"
    );
  };

  useEffect(() => {
    const takeItems = JSON.parse(localStorage.getItem("moviesData")) || [];
    setCart(takeItems);
    let total = takeItems.reduce((acc, { value }) => value + acc, 0);
    setTotalPrice(total);
  }, [productCart]);

  return (
    <div>
      <div class="flex flex-col items-center justify-center rounded-md p-4 bg-white w-96">
        <h1 className="font-normal text-green-700">MEUS FILMES</h1>
        <div class="relative">
          {cart.map((element, index) => (
            <div className="flex items-center justify-between gap-6">
              <section class="relative flex font-bold" key={index}>
                {element.name}
              </section>
              <section class="relative flex font-bold">{element.value}</section>
            </div>
          ))}
        </div>
        <div className="p-2 font-bold">
          <span className="text-red-900">TOTAL: R$ {totalPrice}</span>
        </div>
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded mb-4"
          onClick={alert}
        >
          Finalizar a compra
        </button>
      </div>
    </div>
  );
};

export default FinalCart;
