import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homepages/Home";
import DoctorProfile from "./components/Profiles/DoctorProfile";
import Galary from "./components/galary/GalaryCard";
import AllCardMain from "./components/handlingAllCardswithdetails/AllCardMain";
import ParCardPass from "./components/galary/ParCardPass";
import Blogs from "./components/blogsAndservice/Blogs";
import Services from "./components/blogsAndservice/Services";
import RatingAll from "./components/rating/RatingAll";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        {/* <Link to="/home">home</Link>
        <Link to="/navbar">Navbar</Link> */}
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Profile" element={<DoctorProfile/>} />
          <Route path="/service" element={<Services />} />
          
          {/* home links */}
          <Route path="/blog" element={<Blogs />} />
          <Route path="/rating" element={<RatingAll />} />


          {/* galary data all images */}
          <Route path="/galary" element={<ParCardPass/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
