import seconddata from "../../Store/Service";
import AllCardMain from "../handlingAllCardswithdetails/AllCardMain";

function Services() {
    const data = seconddata.servicemax
    // console.log("Gallery Page Data:", data); // Debugging
  return<AllCardMain storedata={data} />
}

export default Services