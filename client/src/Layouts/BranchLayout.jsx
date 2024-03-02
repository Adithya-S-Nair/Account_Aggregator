import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import UploadIcon from '@mui/icons-material/Upload';
import Collapse from '@mui/material/Collapse';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AppsIcon from '@mui/icons-material/Apps';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ListSubheader from '@mui/material/ListSubheader';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const BranchLayout = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const location = useLocation()
    const isSmallScreen = useMediaQuery('(max-width: 650px)');
    const [open, setOpen] = React.useState(true);
    const [listOpen, setListOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleClicked = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const newCustomerNavigate = () => {
        navigate('/newcustomer')
    }

    const newVaNavigate = () => {
        navigate('/newva')
    }

    const uploadNavigate = () => {
        navigate('/upload')
    }

    React.useEffect(() => {
        setOpen(!isSmallScreen);
    }, [isSmallScreen]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleClick = () => {
        setListOpen(!listOpen);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // const handleLogout = () => {
    //     makeRequest.get('/auth/logout')
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 // window.location.reload()
    //                 setUser(null)
    //                 return <Navigate to='/login' />
    //             }
    //         })
    // }

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ backgroundColor: '#1a73e8' }}>
                    <div className='flex justify-between items-center'>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                Branch Login
                            </Typography>
                        </Toolbar>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={menuOpen ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={menuOpen ? 'true' : undefined}
                            onClick={handleClicked}
                            className='text-light'
                        >
                            <i className="fa-regular fa-user pe-4" style={{ fontSize: '22px' }}></i>

                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={menuOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{ marginTop: '2em' }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </div>


                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,

                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#1a73e8',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <div className='flex items-center gap-2 text-neutral-50'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                            </svg>
                            <span>Account Aggregator</span>
                        </div>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon className='text-neutral-50' /> : <ChevronRightIcon className='text-neutral-50' />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={location.pathname === '/newcustomer'}
                                onClick={newCustomerNavigate}
                                sx={{
                                    "&:hover": { backgroundColor: "#0057c9", color: "#161245" },
                                    "&.Mui-selected": { backgroundColor: "#0057c9", color: "#161245" }
                                }}>
                                <ListItemIcon>
                                    <PersonAddAltIcon className='text-neutral-50' />
                                </ListItemIcon>
                                <ListItemText className='text-neutral-50' primary='New Customer' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={location.pathname === '/newva'}
                                onClick={newVaNavigate}
                                sx={{
                                    "&:hover": { backgroundColor: "#0057c9", color: "#161245" },
                                    "&.Mui-selected": { backgroundColor: "#0057c9", color: "#161245" }
                                }}>
                                <ListItemIcon>
                                    <AccountBalanceIcon className='text-neutral-50' />
                                </ListItemIcon>
                                <ListItemText className='text-neutral-50' primary='New VA' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={location.pathname === '/upload'}
                                onClick={uploadNavigate}
                                sx={{
                                    "&:hover": { backgroundColor: "#0057c9", color: "#161245" },
                                    "&.Mui-selected": { backgroundColor: "#0057c9", color: "#161245" }
                                }}>
                                <ListItemIcon>
                                    <UploadIcon className='text-neutral-50' />
                                </ListItemIcon>
                                <ListItemText className='text-neutral-50' primary='Upload' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: '#1a73e8' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">

                            </ListSubheader>
                        }
                    >

                        <ListItemButton onClick={handleClick} sx={{ "&:hover": { backgroundColor: "#0057c9", color: "#161245" } }}>
                            <ListItemIcon>
                                <InboxIcon className='text-neutral-50' />
                            </ListItemIcon>
                            <ListItemText className='text-neutral-50' primary="Reports" />
                            {listOpen ? <ExpandLess className='text-neutral-50' /> : <ExpandMore className='text-neutral-50' />}
                        </ListItemButton>
                        <Collapse in={listOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    onClick={() => navigate('/listva')}
                                    selected={location.pathname === '/listva'}
                                    sx={{
                                        "&:hover": { backgroundColor: "#0057c9", color: "#161245" },
                                        "&.Mui-selected": { backgroundColor: "#0057c9", color: "#161245" },
                                        pl: 4
                                    }}>
                                    <ListItemIcon>
                                        <RecentActorsIcon className='text-neutral-50' />
                                    </ListItemIcon>
                                    <ListItemText className='text-neutral-50' primary="List VA" />
                                </ListItemButton>
                                <ListItemButton sx={{ "&:hover": { backgroundColor: "#0057c9", color: "#161245" }, pl: 4 }}>
                                    <ListItemIcon>
                                        <ReceiptIcon className='text-neutral-50' />
                                    </ListItemIcon>
                                    <ListItemText className='text-neutral-50' primary="List Invoice" />
                                </ListItemButton>
                                <ListItemButton sx={{ "&:hover": { backgroundColor: "#0057c9", color: "#161245" }, pl: 4 }}>
                                    <ListItemIcon>
                                        <AppsIcon className='text-neutral-50' />
                                    </ListItemIcon>
                                    <ListItemText className='text-neutral-50' primary="Collection" />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => navigate('/logs')}
                                    selected={location.pathname === '/logs'}
                                    sx={{
                                        "&:hover": { backgroundColor: "#0057c9", color: "#161245" },
                                        "&.Mui-selected": { backgroundColor: "#0057c9", color: "#161245" },
                                        pl: 4
                                    }}>
                                    <ListItemIcon>
                                        <LibraryBooksIcon className='text-neutral-50' />
                                    </ListItemIcon>
                                    <ListItemText className='text-neutral-50' primary="User Logs" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    <Outlet />
                </Main>
            </Box>
        </div >
    )
}


export default BranchLayout