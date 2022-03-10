import React from 'react';
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";

const drawerWidth = 240;

//Modifico los estilos del main
const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
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
        <div>
            <Main open={props.open}>
                <DrawerHeader/>
                {/***************************************************************************************************/}
                {/*ACA ES DONDE SE INSERTAN LOS COMPONENTES QUE SE VAN A IR RENDERIZANDO*/}
                {/*LA VISTA DE AGENDA DE CITAS*/}
                {/*LA VISTA DE ACCESO A PACIENTES*/}
                <Typography paragraph>
                    Aca yhay texto
                </Typography>

            </Main>
        </div>
    );
};

export default MainContentDashboard;
