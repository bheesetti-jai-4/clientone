
function DoctorProfile() {
    return (
      <>
  
  <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img src="/doctor.jpg" alt="name" className="rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 lg:pr-32">
              <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">Dr. John Doe, MD.</h2>
  
              <h1 className=" text-green-500 font-bold mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed" >Eductation : MBBS, MD (Cardiology) – Harvard Medical School
              </h1>
  
  
  
              <h3
                  className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                  
                  "Passionate about heart health and patient care, Dr. John Doe specializes in minimally invasive procedures for heart disease. With over 15 years of experience, he has successfully treated thousands of patients, helping them live healthier lives. He believes in combining advanced medical technology with compassionate care to achieve the best results."
              </h3>
              
          </div>
      </div>
  </div>
  
      </>
    )
  }
  
  export default DoctorProfile