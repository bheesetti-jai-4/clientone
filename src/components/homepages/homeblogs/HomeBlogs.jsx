

import oneblog from "../../../Store/Blogs"
import HomeCardAll from "../homeallcard/HomeCardAll";

function HomeBlogs() {
  const data = oneblog.blogsmin;
  return <HomeCardAll datastore={data} passinglink={"/blog"} title={"Blogs"} />
}

export default HomeBlogs

