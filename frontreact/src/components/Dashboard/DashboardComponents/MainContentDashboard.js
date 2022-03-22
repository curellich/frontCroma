import React from 'react';
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import {Routes, Route} from "react-router-dom"
import Appointments from "../../../layouts/Appointments";
import Patients from "../../../layouts/Patients";
import Box from "@mui/material/Box";


const drawerWidth = 240;

//Modifico los estilos del main
const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        paddingTop: theme.spacing(2),
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

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const MainContentDashboard = (props) => {
    return (
        <Main open={props.open}>
            <DrawerHeader/>
            {/***************************************************************************************************/}
            <Routes>
                <Route exact path="/Login" element={<Appointments/>}> Login</Route>
                <Route exact path="/Register" element={<Appointments/>}> Register</Route>
                <Route exact path="/Appointments" element={<Appointments/>}> Citas</Route>
                <Route exact path="/Patients" element={<Patients/>}> Pacientes</Route>
            </Routes>
        </Main>

    );
};

export default MainContentDashboard;
