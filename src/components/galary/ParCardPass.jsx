

import data from "../../Store/CardlogyTopics";
import AllCardMain from "../handlingAllCardswithdetails/AllCardMain";

function ParCardPass() {
    console.log("Gallery Page Data:", data); // Debugging
  return<AllCardMain storedata={data} />
}

export default ParCardPass