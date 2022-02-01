import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';




  
 const pages = ['Cursos', 'Eventos', 'Contacto'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
                        ///// APP BAR //////
       <AppBar position="static" className="appBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
              <Link
                to='/'
                style={{textDecoration: 'none', color: 'white'}}>
                Neuma
              </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { 
                  xs: 'flex', md: 'none',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                key={ page } 
                onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> 
                    <Link 
                      to={`/${ page }`}
                      style={{textDecoration: 'none', color: 'black'}}
                    > 
                      { page } 
                    </Link>  
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Mobile AppBar */}
          <Typography
            variant="h4"
            noWrap
            component="div" m={0}
            sx={{ flexGrow: 1 , display: { xs: 'flex', md: 'none' } }}
          >
              <Link
              to='/' 
              style={{textDecoration: 'none', color: 'white'}}>
                Neuma
              </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { xs: 'none', md: 'flex-end' }  }}>
            {pages.map((page) => (
              <Button
                key={page} 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link 
               to= {`/${page}`}
               style={{textDecoration: 'none', color: 'white'}}> 
               { page } 
               </Link> 
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > */}
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            {/* </Menu> */}
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};