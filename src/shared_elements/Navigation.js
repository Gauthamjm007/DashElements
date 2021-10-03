import React from "react";
import { NavList } from "../shared_ui_components";

export default function Navigation() {
  return (
    <nav>
      <NavList
        routes={[
          { name: "Home", status: false },
          { name: "My Projects", status: false },
          { name: "Payments", status: false },
          { name: "Activity", status: false },
          { name: "Settings", status: false },
        ]}
      />
    </nav>
  );
}
