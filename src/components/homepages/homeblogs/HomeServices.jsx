

import oneblog from "../../../Store/Service"
import HomeCardAll from "../homeallcard/HomeCardAll";

function HomeServices() {
  const data = oneblog.servicemin;
  return <HomeCardAll datastore={data} passinglink={"/service"} title={"Services"} />
}

export default HomeServices

