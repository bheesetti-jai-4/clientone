

import seconddata from "../../Store/Blogs";
import AllCardMain from "../handlingAllCardswithdetails/AllCardMain";

function Blogs() {
    const data = seconddata.blogsmax
    // console.log("Gallery Page Data:", data); // Debugging
  return<AllCardMain storedata={data} />
}

export default Blogs