import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../../api/JWT";
import isAuthenticated from "../../api/isAuthenticated";

let loginPages = [
  { MLB: "https://www.mlb.com/" },
  { 시뮬레이션: "/customsimultaion" },
  { "팀 커스텀": "/teamcustom" },
  { 마이페이지: "/myprofile" },
];
let notLoginPages = [
  { MLB: "https://www.mlb.com/" },
  { 시뮬레이션: "/customsimultaion" },
];

const LogoImgDesk = styled.img`
  width: 40px;
  @media screen and (max-width: 830px) {
    display: none;
  }
`;
const LogoImgMoblie = styled.img`
  width: 40px;
  @media screen and (min-width: 830px) {
    display: none;
  }
`;

const Navbar = () => {
  function logout() {
    deleteToken();
    navigate("/");
  }

  function login() {
    navigate("/login");
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const logoutHandle = () => {
    logout();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ background: "white" }} position="static">
      <Container maxWidth="0">
        <Toolbar disableGutters>
          {/* 로고 이미지  */}
          <LogoImgDesk src={"/assets/cap.png"}></LogoImgDesk>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontSize: "30px",
              "@media screen and (max-width: 830px)": {
                display: "none",
              },
              fontWeight: 1000,
              letterSpacing: ".3rem",
              color: "#2565d0",
              textDecoration: "none",
            }}
          >
            MLBTI
          </Typography>

          {/* 모바일 일 때 메뉴 */}
          <Box
            sx={{
              flexGrow: 1,

              "@media screen and (min-width: 830px)": {
                display: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {isAuthenticated()
                ? loginPages.map((page,idx) => (
                    <MenuItem key={idx} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        {Object.keys(page)}
                      </Typography>
                    </MenuItem>
                  ))
                : notLoginPages.map((page,idx) => (
                    <MenuItem key={idx} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        {Object.keys(page)}
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>

          {/* 모바일 일 때 보임 */}
          <LogoImgMoblie src={"/assets/cap.png"}></LogoImgMoblie>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              "@media screen and (min-width: 830px)": {
                display: "none",
              },
              flexGrow: 1,
              fontWeight: 1000,
              fontSize: "30px",
              letterSpacing: ".3rem",
              color: "#2565d0",
              textDecoration: "none",
            }}
          >
            MLBTI
          </Typography>

          {/* 데스크탑 일 때 보이는 메뉴 */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              "@media screen and (max-width: 830px)": {
                display: "none",
              },
            }}
          >
            {/* ------------------------------------- */}
            <>
              {isAuthenticated()
                ? loginPages.map((page, idx) => (
                    <Button
                      component="a"
                      key={idx}
                      href={String(Object.values(page))}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        fontFamily: "MICEGothic Bold",
                      }}
                    >
                      {Object.keys(page)}
                    </Button>
                  ))
                : notLoginPages.map((page, idx) => (
                    <Button
                      component="a"
                      key={idx}
                      href={String(Object.values(page))}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        fontFamily: "MICEGothic Bold",
                      }}
                    >
                      {Object.keys(page)}
                    </Button>
                  ))}
            </>
            {/* ------------------------------------- */}
          </Box>
          <>
            {isAuthenticated() ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Logout">
                  <IconButton onClick={logoutHandle} sx={{ p: 0 }}>
                    <LogoutIcon
                      sx={{ fontSize: 40, color: "pink[500]" }}
                    ></LogoutIcon>
                  </IconButton>
                </Tooltip>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Login">
                  <IconButton onClick={login} sx={{ p: 0 }}>
                    <LoginIcon
                      sx={{ fontSize: 40, color: "pink[500]" }}
                    ></LoginIcon>
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
