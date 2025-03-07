// function AllCardMain({storedata}) {
//   return (
//     <>
//         <div>
//             {
//                 storedata.map((item,index)=>(
//                     <div key={index}>
//                         <h1>{item.title}</h1>
//                     </div>

//                 ))
//             }
//         </div>
//     </>
//   )
// }

// export default AllCardMain






// function AllCardMain({ storedata }) {
//   // console.log("✅ AllCardMain Loaded. Received Data:", storedata); // Debugging

//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
//         <div className="relative flex flex-col sm:flex-row xl:flex-col items-start">
//             {storedata && storedata.length > 0 ? (
//             storedata.map((item, index) => (
//                 <div key={index} className="order-1 sm:ml-6 xl:ml-0">
//                      <img src={item.image} alt={item.name} className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full " />
//                      <h1 className="mb-1 text-slate-900 font-semibold">{item.title}</h1>
//                      <p className="prose prose-slate prose-sm text-slate-600" >{item.description}</p>
                     
//                 </div>
//             ))
//             ) : (
//             <p>❌ No data available</p>
//             )}
//         </div>
//     </div>
//   );
// }

// export default AllCardMain;


// function AllCardMain({ storedata }) {
//     return (
//       <div className="container mx-auto p-10 md:p-20 antialiased  ">
//         {storedata && storedata.length > 0 ? (
//           storedata.map((item, index) => (
//             <div key={index} className="flex flex-wrap
//               p-5 bg-green-500
//                md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full  h-40 rounded-lg
//                 object-cover md:w-52"
//                 />
//             <div className="" >
//                 <div className="p-5 pb-10" >
//                     <h1 className="text-2xl font-semibold text-gray-800 mt-4">{item.title}</h1>
//                      <p text-xl text-gray-400 mt-2 leading-relaxed>
//                          {item.description}
//                     </p>
//                 </div>
//             </div>
//             </div>
//           ))
//         ) : (
//           <p >❌ No data available</p>
//         )}
//       </div>
//     );
//   }
  
//   export default AllCardMain;
  



function AllCardMain({ storedata }) {
    return (
      <div className="container mx-auto p-6 md:p-10 antialiased">
        {storedata && storedata.length > 0 ? (
          <div className="space-y-4"> {/* Small gap between each card */}
            {storedata.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-wrap p-4  rounded-lg shadow-lg mx-auto w-full max-w-9xl 
                md:flex-nowrap group cursor-pointer transform duration-500 hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-lg object-cover md:w-52 "
                />
                <div className="p-4">
                  <h1 className="text-2xl font-semibold text-gray-800">{item.title}</h1>
                  <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">❌ No data available</p>
        )}
      </div>
    );
  }
  
  export default AllCardMain;
  