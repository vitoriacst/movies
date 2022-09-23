import UseApi from "../hooks/useApi";

const Cart = () => {

  const {movies} = UseApi(`https://api.themoviedb.org/3/movie/popular?api_key=d90f0c5adbb7cb8e15dc685ed00cd306&language=en-US`)


  return (
    <>
      <div class="w-80 flex flex-col items-center justify-center h-full shadow-md bg-white border px-1 border-gray-100 absolute">
    {
      movies.map((movie, index)=>{
        <h1>{movie.tile}</h1>
      })
    }
        <h1>Meu Carrinho</h1>
        <ul class="relative">
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 1
            </a>
          </li>
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Cart;
