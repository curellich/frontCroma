import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//Opciones del icono de usuario
const settings = ['Cuenta','Cerrar sesión'];

const UserIconComponentDashboard = (props) => {

    return (
        <Box >
            <Tooltip title="Open settings">
                <IconButton onClick={props.onClickOpen} sx={{ p: 0, mr:0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={props.anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(props.anchorEl)}
                onClose={props.onClickClose}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={props.onClickClose}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default UserIconComponentDashboard;
