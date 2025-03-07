
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const slides = [
    {  image: "/banner1.jpg", background: "bg-red-500" },
    {  image: "/banner2.webp", background: "bg-teal-400" },
    {  image: "/banner3.jpeg", background: "bg-blue-400" },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        const isLastSlide = prev === slides.length - 1;
        setShouldAnimate(!isLastSlide);
        return isLastSlide ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => {
      setShouldAnimate(true);
      return prev === 0 ? slides.length - 1 : prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentSlide((prev) => {
      setShouldAnimate(prev !== slides.length - 1);
      return prev === slides.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="relative  h-[70vh] overflow-hidden  ">
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out  "
       style={{
         transform: `translateX(-${currentSlide * 100}%)`
       }}>
     
        {slides.map((slide, index) => (
          <div
          key={index}
          className={`flex flex-col items-center justify-center min-w-full h-full relative  ${slide.background}`}>

            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover   z-0"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-4 text-2xl z-10"
        onClick={goToPrevious}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-4 text-2xl z-10"
        onClick={goToNext}
      >
        ❯
      </button>

      <div className="absolute bottom-5 w-full text-center z-10">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 mx-2 rounded-full inline-block cursor-pointer transition-all duration-300 ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => {
              setShouldAnimate(true);
              setCurrentSlide(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;















// import React, { useState, useEffect } from 'react';
// import './Slider.css';
// // Note: We don't need to import the image here if it's in the public folder

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [shouldAnimate, setShouldAnimate] = useState(true);
  
//   const slides = [
//     {
//       id: 1,
//       image: "/banner.webp", // Path relative to public folder
//       background: "#ff6b6b"
//     },
//     {
//       id: 2,
//       image: "/clinic2.jpeg",
//       background: "#4ecdc4"
//     },
//     {
//       id: 3,
//       image: "/clinic3.jpeg",
//       background: "#45b7d1"
//     }
//   ];

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prev) => {
//         const isLastSlide = prev === slides.length - 1;
//         if (isLastSlide) {
//           setShouldAnimate(false);
//           return 0;
//         } else {
//           setShouldAnimate(true);
//           return prev + 1;
//         }
//       });
//     }, 3000);

//     return () => clearInterval(slideInterval);
//   }, [slides.length]);

//   const goToPrevious = () => {
//     setCurrentSlide((prev) => {
//       if (prev === 0) {
//         setShouldAnimate(true);
//         return slides.length - 1;
//       }
//       setShouldAnimate(true);
//       return prev - 1;
//     });
//   };

//   const goToNext = () => {
//     setCurrentSlide((prev) => {
//       if (prev === slides.length - 1) {
//         setShouldAnimate(false);
//         return 0;
//       }
//       setShouldAnimate(true);
//       return prev + 1;
//     });
//   };

//   return (
//     <div className="slider-container">
//       <div 
//         className="slides-wrapper"
//         style={{
//           transform: `translateX(-${currentSlide * 100}%)`,
//           transition: shouldAnimate ? 'transform 0.5s ease-in-out' : 'none'
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div 
//             key={slide.id}
//             className="slide"
//             style={{ backgroundColor: slide.background }}
//           >
//             <img 
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="slide-image  "
//             />
//             {/* <h2>
//               Slide {index + 1}
//               <br />
//               ({index + 1} of {slides.length})
//             </h2> */}
//           </div>
//         ))}
//       </div>

//       <button className="prev-btn" onClick={goToPrevious}>
//         ❮
//       </button>
//       <button className="next-btn" onClick={goToNext}>
//         ❯
//       </button>

//       <div className="dots">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${currentSlide === index ? 'active' : ''}`}
//             onClick={() => {
//               setShouldAnimate(true);
//               setCurrentSlide(index);
//             }}
//           ></span>
//         ))}
//       </div>

//       {/* <div className="slide-indicator">
//         Slide {currentSlide + 1} of {slides.length}
//       </div> */}
//     </div>
//   );
// };

// export default Slider;