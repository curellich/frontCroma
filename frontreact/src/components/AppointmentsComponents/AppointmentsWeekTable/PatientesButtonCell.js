import Typography from "@mui/material/Typography";
import React from "react";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";


const PatientesButtonCell = (props) => {
    return (
        <Button
                key={props.id_appointment}
                id_appointment={props.id_appointment}
                id_patient={props.id_patient}
                id_professional={props.id_professional}
                appointmentaate={props.appointmentdate}
                nameofprofessional={props.nameofprofessional}
                details={props.details}
                patient={props.patient}
                variant="contained" fullWidth={true}
                color={props.color}

                sx={{
                    textTransform: "none",
                    minWidth: 130,
                    maxWidth:150,
                    padding: '0rem 1rem',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                padding: '0px 0px',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Box sx={{padding: '0px 0px', bgcolor: 'red'}} key={`${props.id_appointment} ${props.hour}`}>{props.hour}</Box>
                <Box sx={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap'}}>
                    <Typography variant="body2" >{props.patient}</Typography>
                    <Typography variant='caption'>{props.details}</Typography>
                </Box>
            </Box>
        </Button>
    );
};

export default PatientesButtonCell;

