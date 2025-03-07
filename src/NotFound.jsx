import { useNavigate } from "react-router-dom"

function NotFound() {
    const navagate = useNavigate()
  return (
    <div className="flex flex-col mt-30 justify-center items-center ">
        <div className="flex flex-col items-center">
            <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
            <p className="text-2xl font-medium text-gray-600 mb-6">Page Not Found</p>
            <h2 className="px-4 py-2 font-medium text-white 
            cursor-pointer bg-gray-800 rounded-md hover:bg-red-500 transition-all duration-200 ease-in-out" 
            onClick={()=>navagate("/")}
            >Go Home </h2>
        </div>
    </div>
  )
}

export default NotFound