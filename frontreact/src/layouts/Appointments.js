import * as React from 'react';
import AppointmentHeader from "../components/AppointmentsComponents/AppointmentsWeekTable/AppointmentHeader";
import {Paper, Stack} from "@mui/material"
import AppointmentBody from "../components/AppointmentsComponents/AppointmentsWeekTable/AppointmentBody";
import NavWeekButtons from "../components/AppointmentsComponents/AppointmentsWeekTable/NavWeekButtons";
import {useState} from "react";
import {DateTime} from "luxon";
import {FirstWeekDay} from "../components/helpers/AppointmentsHelpers/AppointmentsHelpers";

const style = {
    appointmentHeder: {
        margin: 0,
        top: 80,
        right: 'auto',
        bottom: 'auto',
        left: 0,
        position: 'sticky',
        minWidth: 650,
    },
    appointmentBody: {
        paddingTop: '0px',
        marginTop: '0px',
        top: 140,
        right: 'auto',
        bottom: 'auto',
        left: 0,
        position: 'sticky',
        minWidth: 650,
    }
}

const Appointments = () => {
    const [weekNumber, setWeekNumber] = useState(DateTime.now().weekNumber);

    return (
        <Stack direction="column" spacing={0}>
            <Paper sx={{minWidth: 650}}>
                <AppointmentHeader weekNumber={weekNumber}/>
            </Paper>

            <Paper style={style.appointmentBody}>
                <AppointmentBody weekNumber={weekNumber}/>
            </Paper>

            <NavWeekButtons
                monthDisplay={FirstWeekDay(new Date().getFullYear(), weekNumber, 8).toLocaleDateString('es-us',{month:'short', year:'numeric'})}
                onNext={() => setWeekNumber(weekNumber + 1)}
                onBack={() => setWeekNumber(weekNumber - 1)}/>
        </Stack>


    )
};

export default Appointments;


