import React from 'react';
import Box from "@mui/material/Box";
import NavBarComponentDashboard from "./DashboardComponents/NavBarComponentDashboard";
import CssBaseline from "@mui/material/CssBaseline";
import MainContentDashboard from "./DashboardComponents/MainContentDashboard";
import MenuComponentDashboard from "./DashboardComponents/MenuComponentDashboard";


const DashboardComponent = () => {
    //Comportamiento del DashboardComponents al hacer clic en el icono de abrir el menu
    const [openMenu, setOpenMenu] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpenMenu(true);
    };
    const handleDrawerClose = () => {
        setOpenMenu(false);
    };


    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <NavBarComponentDashboard
                open={openMenu}
                onClick={handleDrawerOpen}
                //ACA TENGO QUE PONER EN VEZ DE MENU UN ESTADO QUE ME INDIQUE QUE VENTANA SE ENTA RENDERIZANDO EN EL MainContentDashboard
                menuItem="Menu"
            />
            <MenuComponentDashboard open={openMenu} onClick={handleDrawerClose}/>
            <MainContentDashboard open={openMenu}/>
        </Box>
    );
};

export default DashboardComponent;
