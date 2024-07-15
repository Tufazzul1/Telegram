import { useContext, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, InputBase, Typography, Menu, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Search as SearchIcon, MoreVert as MoreIcon, Call as CallIcon, Menu as MenuIcon, Home as HomeIcon, Mail as MailIcon } from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';
import { ChatContext } from '../../ChatContext/ChatContext';

function Navbar() {

    const { selectedChat, messages } = useContext(ChatContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isMenuOpen = Boolean(anchorEl);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} className="w-64">
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className="bg-[#071e26]">
      <Toolbar>
        <IconButton edge="start" className="mr-2" color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Box className="relative flex items-center w-1/2">
          <IconButton type="submit" className="p-2 text-gray-500">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search"
            classes={{
              root: 'ml-2 text-gray-400',
              input: 'w-full bg-gray-800 text-white rounded-full px-3 py-1',
            }}
          />
        </Box>
        <Box className="flex items-center ml-auto">
          {!isMobile && (
            <>
              <div className='flex flex-col'>
              <Typography variant="h6" noWrap className="text-white">
                Telegram
              </Typography>
              <Typography variant="body2" noWrap className="ml-2 text-gray-400">
                service notifications
              </Typography>
              </div>
              <IconButton className="ml-2" color="inherit">
                <CallIcon />
              </IconButton>
            </>
          )}
          <IconButton className="ml-2" color="inherit" onClick={handleMenuOpen}>
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMenu}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;



