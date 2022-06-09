import React from "react";
import FeatherIcon from "feather-icons-react";
import {
  Box,
  Menu,
  Typography,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";

import PlainLink from "../core/Link";
const ProfileDD = () => {
  const [anchorEl4, setAnchorEl4] = React.useState<any>(null);

  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <img
            src="https://sogangteam2bucket.s3.ap-northeast-2.amazonaws.com/logo/sogang.png"
            alt="logo"
            width="30"
            height="30"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              지갑 주소
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "230px",
          },
        }}
      >
        <PlainLink to="/create">
          <ListItemText
            style={{
              textAlign: "center",
            }}
            primary="계정 생성"
          />
        </PlainLink>
        <Divider />
        <PlainLink to="/verify">
          <Button fullWidth variant="contained" color="primary">
            지갑 연결 / 지갑 연결 해제
          </Button>
        </PlainLink>
      </Menu>
    </>
  );
};

export default ProfileDD;
