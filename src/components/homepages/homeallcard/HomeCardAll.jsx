
// function HomeBlogs() {
//   return (
//     <>
        
//     </>
//   )
// }

// export default HomeBlogs






import { Link } from "react-router-dom";

function HomeCardAll({datastore,passinglink ,title }) {
  return (
    <>

    <div className="container mx-auto p-6" > 
       {/* additiona ga matram may add chesam div and h2 */}
      <h2 className="text-3xl font-bold text-center mb-5 transition-transform duration-500 cursor-pointer transform hover:scale-115" >{title}</h2>
    

    <Link to={passinglink} >
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 p-4">
      {datastore.map((item, index) => (
        <div key={index}  className="group cursor-pointer relative">
          <img src={item.image} alt={item.name}  className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />

        </div>
      ))}
    </div>

    </Link>
    </div>
    </>
  );
}

export default HomeCardAll;
