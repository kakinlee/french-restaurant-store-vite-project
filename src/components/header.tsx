import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/img/logo.jpg';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const pages = ['餐廳菜單', '法式餐包', '歐式雜貨', '購物車'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff', // 自訂背景色
          boxShadow: 'none',
        },
      },
    },
  },
});
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          > 
                    <img src={logo} alt="menu" onClick={handleOpenNavMenu} style={{width: '50px', height: '40px'}} />
           
                    <Link  style={{ textDecoration: 'none', color: 'inherit' ,    display: 'flex',
              flexDirection: 'column',    justifyContent: 'center'}} to="/">法國料理</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='default'
            >
              <MenuIcon />
            </IconButton>
           
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{  display: { xs: 'block', md: 'none' } }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}> 
 

           <Link  style={{ textDecoration: 'none', color: 'inherit' ,display: 'flex',
    flexDirection: 'column'}} to="/restaurant">餐廳菜單</Link> 
           <Link  style={{ textDecoration: 'none', color: 'inherit' ,display: 'flex',
    flexDirection: 'column'}}  to="/restaurant">法式餐包</Link> 
           <Link   style={{ textDecoration: 'none', color: 'inherit' ,display: 'flex',
    flexDirection: 'column'}}  to="/restaurant">歐式雜貨</Link> 
           <Link   style={{ textDecoration: 'none', color: 'inherit' ,display: 'flex',
    flexDirection: 'column'}}  to="/restaurant">購物車</Link> 
         
                
                  </Typography>
                 
                </MenuItem>
            </Menu>
          </Box>
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
                <img src={logo} alt="menu"  style={{width: '50px', height: '40px'}} />
            <Link  style={{ textDecoration: 'none', color: 'inherit' ,    display: 'flex',
              flexDirection: 'column',    justifyContent: 'center'}} to="/">法國料理</Link>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button sx={{ my: 2, color: 'black', display: 'block' }}>  <Link  style={{ textDecoration: 'none', color: 'inherit' }} to="/restaurant">餐廳菜單</Link> </Button>
          <Button sx={{ my: 2, color: 'black', display: 'block' }}>  <Link  style={{ textDecoration: 'none', color: 'inherit' }} to="/restaurant">法式餐包</Link> </Button>
          <Button sx={{ my: 2, color: 'black', display: 'block' }}>  <Link  style={{ textDecoration: 'none', color: 'inherit' }} to="/restaurant">歐式雜貨</Link> </Button>
          <Button sx={{ my: 2, color: 'black', display: 'block' }}>  <Link  style={{ textDecoration: 'none', color: 'inherit' }} to="/restaurant">購物車</Link> </Button>
         
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default Header;