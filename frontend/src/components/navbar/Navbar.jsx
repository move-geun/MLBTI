import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { deleteToken} from "../../api/JWT";

let pages = [
  { MLB: "https://www.mlb.com/" },
  { 시뮬레이션: "/customsimultaion" },
];

const settings = ["프로필", "나만의 팀 만들기", "로그아웃"];

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
 
  function logout () {
    deleteToken();
    navigate("/")
  } 
   
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const logoutHandle = () => {
    logout()
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ background: "white" }} position="static">
      <Container maxWidth='0'>
        <Toolbar disableGutters>
          {/* 로고 이미지  */}
          <LogoImgDesk src={"/assets/cap.png"}></LogoImgDesk>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

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
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu}>
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
            {pages.map((page) => (
              <Button
                component="a"
                href={Object.values(page)}
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
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Logout">
              <IconButton onClick={logoutHandle} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" /> */}
                <LogoutIcon sx={{ fontSize: 40, color: 'pink[500]' }}></LogoutIcon>
              </IconButton>
            </Tooltip>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
