import { Box } from "@mui/material";
import { NavList } from "../shared_ui_components";

export default function Navigation() {
  return (
    <nav>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <NavList
          routes={[
            { name: "Home", status: false },
            { name: "My Projects", status: false },
            { name: "Payments", status: false },
            { name: "Activity", status: false },
            { name: "Settings", status: false },
          ]}
        />
      </Box>
    </nav>
  );
}
