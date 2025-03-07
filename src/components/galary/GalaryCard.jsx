

import { Link } from "react-router-dom";
import data from "../../Store/CardlogyTopics";
import AllCardMain from "../handlingAllCardswithdetails/AllCardMain";

function GalaryCard() {
  return (
    <>

    <div className="container mx-auto p-6" > 
       {/* additiona ga matram may add chesam div and h2 */}
      <h2 className="text-4xl font-bold text-center mb-12 transition-transform duration-500 cursor-pointer transform hover:scale-105" >Galary</h2>
    

    <Link to="/galary" >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((item, index) => (
        <div key={index} className="group cursor-pointer relative">
          <img src={item.image} alt={item.name}  className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />

        </div>
      ))}
    </div>

    </Link>
    </div>
      {/* passing data to another components */}
      {/* <AllCardMain storedata={data} /> */}
    </>
  );
}

export default GalaryCard;
