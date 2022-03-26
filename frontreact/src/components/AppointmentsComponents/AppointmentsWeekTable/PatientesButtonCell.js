import Typography from "@mui/material/Typography";
import React from "react";
import Divider from "@mui/material/Divider";
import {Button, Grid} from "@mui/material";


const PatientesButtonCell = (props) => {
    return (
        <Button
            key={props.appointmentdate}
            id_appointment={props.id_appointment}
            id_patient={props.id_patient}
            id_professional={props.id_professional}
            appointmentaate={props.appointmentdate}
            nameofprofessional={props.nameofprofessional}
            details={props.details}
            patient={props.patient}
            variant={props.variant} fullWidth={true}
            color={props.color}

            sx={{
                textTransform: "none",
                minWidth: 130,
                maxWidth: 150,
                padding: '0rem 1rem',
                paddingLeft: '0px',
                paddingRight: '0px',
            }}>

            <Grid container spacing={0}>
                <Grid container justifyContent="space-between">
                    <Grid item xs={2}>
                        <Typography variant="caption">{props.hour}</Typography>
                    </Grid>
                    {/*ACA VA EL ICONO O EL BADGE PARA MOSTRAR QUE HAY SOBRETURNOS*/}
                    {/*{<Grid item xs={2}>*/}
                    {/*    <MoodBadIcon fontSize="small"/>*/}
                    {/*</Grid>*/}
                    {/*}*/}
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2">{props.patient}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                    <Typography variant="caption">{props.details}</Typography>
                </Grid>
            </Grid>
        </Button>
    );
};

export default PatientesButtonCell;

