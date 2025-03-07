import GalaryCard from "../galary/GalaryCard"
import Galary from "../galary/GalaryCard"
import Footer from "../navbar/Footer"
import ProfileCards from "../Profiles/ProfileCards"
import RatingAll from "../rating/RatingAll"
import HomeBlogs from "./homeblogs/HomeBlogs"
import HomeServices from "./homeblogs/HomeServices"
import MakeCalls from "./MakeCalls"
import Maps from "./Maps"
import Rating from "./Rating"
import Slider from "./Slider"

function Home() {
  return (
    <>
    <h1>
      <Slider/>
      <MakeCalls/>
      <ProfileCards/>
      <Rating/>
      <HomeBlogs/>
      <HomeServices/>
      <GalaryCard/>
      <Maps/>
      <Footer/>
    </h1>
    </>
  )
}

export default Home