import React, { useState } from 'react';
import { MdMovieFilter } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { ImCart } from 'react-icons/im';
import Cart from './Cart';

const Header = () => {
  const [isOpenCart, SetIsOpenCart] = useState(false);
  const handleClick = () => {
    SetIsOpenCart(!isOpenCart);
  };

  console.log(isOpenCart);

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <header className="bg-green-100 p-4 w-full flex justify-around items-center h-24 gap-2">
          <section>
            <MdMovieFilter className="text-4xl" />
          </section>
          <section>
            <input
              type="search"
              name="search"
              id="search_input"
              className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Pesquisar um filme.."
            />
          </section>
          <section className="flex gap-2">
            <AiFillHeart className="text-2xl" />
            <button onClick={handleClick}>
              <ImCart className="text-2xl" />
            </button>
          </section>
        </header>
      </div>
      {
        isOpenCart ? <Cart/> : ''
      }
    </>
  );
};

export default Header;
