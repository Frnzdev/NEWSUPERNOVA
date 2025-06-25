import React from "react";

import MobileSideBar from "./SiderBars/MobileBar";
import DesktopBar from "./SiderBars/DesktopBar";

export default function Header() {
  return (
    <div>
      <DesktopBar />
      <MobileSideBar />
    </div>
  );
}
