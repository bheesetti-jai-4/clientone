import { Link } from "react-router-dom"


function Rating() {
    return (
      <>
        <div>
            <h2 className="text-center font-bold text-xl" >Top Rated Reviews</h2>
            <Link to={"/rating"}>
          <div className="my-10 flex items-center justify-center gap-x-6  ">
              <div className="hidden sm:block -space-x-2 overflow-hidden cursor-pointer">
                  <img src="/doctor.jpg" alt="one" className="inline-block h-20 w-20 rounded-full ring-2 ring-white" />
                  <img src="/doctor.jpg" alt="one" className="inline-block h-20 w-20 rounded-full ring-2 ring-white"/>
                  <img src="/doctor.jpg" alt="one" className="inline-block h-20 w-20 rounded-full ring-2 ring-white" />
                  <img src="/doctor.jpg" alt="one" className="inline-block h-20 w-20 rounded-full ring-2 ring-white" />
                  
              </div>
              <div className="boder-none sm:border-l-2 border-black sm:pl-8 cursor-pointer">
                  <div className="flex justify-center sm:justify-start">
                      <h3 className="text-2xl font-semibold mr-2">4.9</h3>
                      <img  src="/star.svg" alt="star" className="w-5"/>
                  </div>
                  <div>
                      <h3 className="text-lg">Rated by 999+ on google.</h3>
                  </div>
              </div>
          </div>
              </Link>
          </div>
      </>
    )
  }
  
  export default Rating