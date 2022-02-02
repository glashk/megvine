import {useState} from 'react';
import { styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useSideBarData} from '../hooks'
import { NavLink,  useLocation } from 'react-router-dom';
import { Button, Input } from '@mui/material';
import { makeStyles } from '@mui/styles'
import {useNavigate} from 'react-router-dom'

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const useStyle = makeStyles({
logoutBtn:{
   color: 'white !important',
   background:'#7EBDC2 !important',
   position: 'absolute !important',
   right: '30px !Important'
}

})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({ 
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({children}) {
  const [open, setOpen] = useState();
  const theme = useTheme();
const navigate = useNavigate()
  const {pathname} = useLocation()
  const disableMenu = pathname === '/sign-in'

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutHandler = (event) => {
    event.preventDefault()
    return navigate('/sign-in')
}

  const {sideBar, sideBarBottom} = useSideBarData()
const classes = useStyle()
  if(disableMenu){
   
    return children; 
  } else {
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{background:'#587B7F'}}>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Input color='primary' placeholder='ეძებე ღვინო' type="search" />
          <Button onClick={logoutHandler} variant="outlined" className={classes.logoutBtn}>გამოსვლა</Button>
        </Toolbar>
      </AppBar>
      <Drawer  variant="permanent" open={open}>
        <DrawerHeader sx={{background:'#587B7F'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List  sx={{background:'#587B7F'}}>
          {sideBar.map((side, key) => {
  
            return (
              <>
          <NavLink style={{all:"unset"}} key={key} to={side.link}>
            <ListItem button key={side.title}>
              <ListItemIcon>
                {side.icon}
              </ListItemIcon>
              <ListItemText primary={side.title} />
            </ListItem>
            </NavLink>
       </>
            )}
          )}
        </List>
        
        <List sx={{background:'#587B7F', height: '100vh'}} >
          { sideBarBottom.map((side, key) => (
              <>
              <NavLink style={{all:"unset"}} key={key} to={side.link}>
                <ListItem button key={side.title}>
                  <ListItemIcon>
                    {side.icon}
                  </ListItemIcon>
                  <ListItemText primary={side.title} />
                </ListItem>
                </NavLink>
           </>
          ))}
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, marginTop:8}}>
        {children}
      </Box>


     
    </Box>
  );
          }
}
