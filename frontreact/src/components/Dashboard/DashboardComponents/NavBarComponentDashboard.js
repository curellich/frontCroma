import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import UserIconComponentDashboard from "./UserIconComponentDashboard";


const drawerWidth = 240;

//Modifico los estilos de AppBar
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
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


const NavBarComponentDashboard = (props) => {
    //Comportamiento del DashboardComponents al hacer clic en el icono usuario

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="fixed" open={props.open}>
            <Toolbar sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',

            }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.onClick}
                    edge="start"
                    sx={{mr: 2, ...(props.open && {display: 'none'})}}
                >
                    <MenuIcon/>
                </IconButton>
                {/*Aqui inserto el nombre de croma*/}
                <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                    {props.menuItem}
                </Typography>
                <UserIconComponentDashboard
                    anchorEl={anchorElUser}
                    onClickOpen={handleOpenUserMenu}
                    onClickClose={handleCloseUserMenu}

                />

            </Toolbar>
        </AppBar>
    );
};

export default NavBarComponentDashboard;
