import React from 'react';
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import Drawer from "@mui/material/Drawer";
import {styled, useTheme} from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {ListItemButton, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";


const drawerWidth = 240;



//Modifico los estilos del DrawerHeader
const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const MenuComponentDashboard = (props) => {
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <DrawerHeader>
                <IconButton onClick={props.onClick}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="Appointments" >
                        <ListItemIcon>
                            <CalendarMonthIcon/>
                        </ListItemIcon>
                        <ListItemText>Turnos</ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="Patients">
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText>Pacientes</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
        </Drawer>
    );
};

export default MenuComponentDashboard;
