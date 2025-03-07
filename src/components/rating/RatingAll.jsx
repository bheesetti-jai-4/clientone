
// import data from "../../Store/Ratingdata"

// function RatingAll() {
//   return (
//     <>
//       <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
//           <div className="mb-10 space-y-4 px-6 md:px-0">
//             <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">patient give some reviews</h2>
//           </div>

//           <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
//             <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
//               {
//                 data.map((item,index) => (
//                   <div key={index} className="flex gap-4" >
//                     <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full" 
                    
//                     // width="400" height="400" loading="lazy"

//                      />
//                     <div>
//                       <h6 className="text-lg font-medium text-gray-700 dark:text-white">{item.name}</h6>
//                       <p className="text-sm text-gray-500 dark:text-gray-300">{item.proficiency}</p>
//                     </div>
//                     <p className="mt-8">{item.feedback}</p>
//                   </div>

//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default RatingAll


import data from "../../Store/Ratingdata";

function RatingAll() {
  return (
    <div className="text-gray-600  pt-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800  md:text-4xl">
            Patient Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-red-500 dark:border-gray-700 rounded-3xl  bg-gray-800 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">{item.name}</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{item.proficiency}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RatingAll;
