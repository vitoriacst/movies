import { useContext, useEffect, useState } from 'react';
import AppContext from '../contexts/AppContext';

const Cart = () => {
  const { productCart } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const[totalPrice , setTotalPrice] = useState(0)

  useEffect(() => {
    const takeItems = JSON.parse(localStorage.getItem('moviesData')) || [];
    setCart(takeItems)
    let total = takeItems.reduce((acc , {value})=> value + acc,0)
    setTotalPrice(total)
  }, [productCart]);

  return (
    <>
      <h1>Meu Carrinho</h1>
        <div class="w-96 flex flex-col items-center justify-center h-full shadow-md bg-white border px-1 border-gray-100 absolute">
          <ul class="relative">
          {cart.map((element, index) => (
            <li class="relative flex"  key={index}>
                {element.name}
                {element.value}
            </li>
          ))}
          </ul>
          <div>
            <span className='text-red-900'>
              total: {totalPrice}
            </span>
          </div>
        </div>
    </>
  );
};

export default Cart;
