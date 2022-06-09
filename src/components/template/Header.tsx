import FeatherIcon from "feather-icons-react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import ProfileDD from "./ProfileDD";

const Header = ({ sx, toggleMobileSidebar }) => {
  return (
    <AppBar sx={sx} elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <FeatherIcon icon="menu" width="20" height="20" />
        </IconButton>
        <Box flexGrow={1} />
        <ProfileDD />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
