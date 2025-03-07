import { useNavigate } from "react-router-dom";

function Footer() {
  const menu = [
    { name: "Home", alllinks:"/home" },
    { name: "Profiles", alllinks:"/Profile" },
    { name: "blogs", alllinks:"/blog" },
    { name: "service", alllinks:"/service" },
    { name: "Galary", alllinks:"/galary" },
    { name: "Rating", alllinks:"/rating" },
  ];
  
  const navagate = useNavigate();
  const number=  9381235807

    return (
      <>
        <footer className="bg-gray-800 text-white py-8" >
          <div className="container mx-auto px-4" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
              <div className="">
                  <h4 className="text-lg font-bold mb-4" >Your Apps</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate obcaecati, tempora fuga vero.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Quick lines</h4>
                {menu.map((item, index) => (
                  <ul key={index} className="space-y-2"
                  onClick={()=>navagate(item.alllinks)}
                  >
                    <li className="hover:text-red-500 cursor-pointer  ">{item.name}</li>
                  </ul>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact us</h4>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:text-red-500  " >Support@gamil.com</li>
                  <li className="cursor-pointer hover:text-red-500  " 
          onClick={()=>window.location.href = `tel:${number}`}
                  >Call : +91 {number} </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Follow us</h4>
                <div>
                  <a className="hover:text-blue-400" ><i className="fab fa-facebook fa-lg"></i> </a>
                  <a ><i className="fab fa-facebook fa-lg"></i> </a>
                  <a ><i className="fab fa-facebook fa-lg"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  