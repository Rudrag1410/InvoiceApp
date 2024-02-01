import { useIsMobile } from "hooks/isMobile";

import MobileSidebar from "./components/mobileSidebar";
import DesktopSidebar from "./components/desktopSidebar";

const Sidebar = (): JSX.Element => {
  const isMobile = useIsMobile();

  return <>{isMobile ? <MobileSidebar /> : <DesktopSidebar />}</>;
};

export default Sidebar;
