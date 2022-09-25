import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImCart } from 'react-icons/im';
import { useLocation } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  const [isOpenCart, SetIsOpenCart] = useState(false);
  const handleClick = () => {
    SetIsOpenCart(!isOpenCart);
  };
  const location = useLocation();
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <header className="bg-green-500 p-4 w-full flex justify-around items-center h-10 gap-2">
          <section className="flex justify-start items-start flex-wrap">
            <a href="/">
              <h1 className="text-black text-2xl">Meus Filmes</h1>
            </a>
          </section>

          <section className="flex gap-2">
            <a href="/search">
              <AiOutlineSearch className="text-2xl" />
            </a>
            {location.pathname === '/checkout' ? (
              ''
            ) : (
              <button onClick={handleClick}>
                <ImCart className="text-2xl" />
              </button>
            )}
          </section>
        </header>
      </div>
      {isOpenCart ? <Cart /> : ''}
    </>
  );
};

export default Header;
