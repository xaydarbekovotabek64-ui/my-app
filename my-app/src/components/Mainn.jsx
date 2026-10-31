import products from "../data/products.js";
import Card from "./Card";

const Mainn = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      
      <div className="flex items-center gap-4 mb-6">
      </div>
     

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
      
    </div>
    
  );
};

export default Mainn;