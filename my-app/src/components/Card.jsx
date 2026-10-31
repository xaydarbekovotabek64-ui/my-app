import { CiShoppingCart } from "react-icons/ci";
import travelBagImage from "../assets/Frame 609.png";

const Card = ({ product }) => {
  return (
    <div className="relative  rounded-md p-4 flex flex-col items-start group hover:shadow-lg transition-shadow bg-white">
      
      
      {product.aksiya && (
        <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded ">
          -{product.aksiya}
        </span>
      )}

     
      <div className="w-full h-48 bg-gray-100 flex justify-center items-center rounded-md mb-4 overflow-hidden relative">
        <img 
          src={product.img} 
          alt={product.name} 
          className="max-h-full object-contain mix-blend-multiply" 
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = travelBagImage;
          }}
        />
        <button className="absolute bottom-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center gap-2">
          <CiShoppingCart size={20} /> Add To Cart
        </button>
      </div>

      <h3 className="text-sm font-medium text-gray-900 truncate w-full mb-1">{product.name}</h3>
      <div className="flex items-center gap-3">
        <span className="text-red-500 font-semibold">${product.price}</span>
      </div>
      
      <div className="flex items-center gap-1 mt-1 text-yellow-400 text-sm">
        <span>⭐ {product.reting}</span>
      </div>
    </div>
  );
};

export default Card;