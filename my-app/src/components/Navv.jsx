import { IoHeartSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";




const Navv = () => {
  return (
    <div>
      <nav className='bg-white shadow-md flex flex-col sm:flex-row justify-around items-center gap- p-4'>
        <div className='flex flex-col sm:flex-row justify-center items-center p-2 sm:p-4 gap-4 sm:gap-10'>
          <h1 className='text-3xl font-bold '>
          Exclusive
        </h1>
        <div className='flex flex-wrap justify-center gap-34'>
          <a href='#' className='text-gray-600 hover:text-gray-900 text-base'>
            Home
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-900 text-base'>
            Contact
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-900 text-base'>
            About
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-900 text-base'>
            Sign Up
          </a>

        </div>
        </div>
               
              <div className='flex flex-wrap justify-center items-center p-2 sm:p-4 gap-3'>
          <input type="search" aria-label="Search products" placeholder='Search' className='w-36 sm:w-auto border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' />
        <a href="#"><IoHeartSharp className='text-gray-500 text-xl ' /></a>
        <a href="#"><SlBasket className='text-gray-500 text-xl' /></a>
        <a href="#"><CiUser className='text-gray-500 text-xl' /></a>
        </div>

      </nav>

      <div className='flex justify-around mt-10 items-center p-4'>
        <h1 className='text-2xl font-bold '>Products</h1>
        <button className='border border-gray-300 rounded-sm px-8 py-3 text-sm font-semibold text-black bg-white hover:bg-gray-100 transition duration-200'>
          Move All To Bag
          </button>
      </div>
    </div>
  )
}

export default Navv