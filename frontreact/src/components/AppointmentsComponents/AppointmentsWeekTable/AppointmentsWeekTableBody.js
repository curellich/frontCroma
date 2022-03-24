import React from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import PatientesButtonCell from "./PatientesButtonCell";
import TableBody from "@mui/material/TableBody";


const AppointmentsWeekTableBody = (props) => {
    return (
        <TableBody>
            {
                (props.appointmentsArray).map((hour, index) => {
                    return (
                        <TableRow key={index}>
                            {hour.map((appointment, index) => {
                                if (appointment.id_patient !== '') {
                                    return (
                                        <TableCell align='center' sx={{
                                            paddingLeft: {
                                                xs: '2px'
                                            },
                                            paddingRight: {
                                                xs: '2px'
                                            },
                                            paddingTop: {
                                                xs: '5px'
                                            },
                                            paddingBottom: {
                                                xs: '5px'
                                            },

                                        }} key={index}>
                                            <PatientesButtonCell
                                                key={appointment.id_appointment}
                                                id_appointment={appointment.id_appointment}
                                                id_patient={appointment.id_patient}
                                                id_professional={appointment.id_professional}
                                                appointmentdate={appointment.appointmentDate}
                                                nameofprofessional={appointment.professionalsName}
                                                details={appointment.details}
                                                patient={appointment.patientsName}
                                                hour={appointment.appointmentDate.toLocaleTimeString().split(' ')[0].slice(0, -3)}

                                                // color={classes.confirmedAppointmentButton}
                                                // variant={classes.confirmedAppointmentButton}
                                                variant='contained'
                                            />
                                        </TableCell>
                                    )
                                } else {
                                    return (
                                        <TableCell align='center' sx={{
                                            paddingLeft: {
                                                xs: '2px'
                                            },
                                            paddingRight: {
                                                xs: '2px'
                                            },
                                            paddingTop: {
                                                xs: '5px'
                                            },
                                            paddingBottom: {
                                                xs: '5px'
                                            },

                                        }} key={index}>
                                            <PatientesButtonCell
                                                key={appointment.appointmentDate}
                                                id_appointment={''}
                                                id_patient={''}
                                                id_professional={''}
                                                appointmentdate={appointment.appointmentDate}
                                                nameofprofessional={''}
                                                details={''}
                                                patient={'LIBRE'}
                                                hour={appointment.appointmentDate.toLocaleTimeString().split(' ')[0].slice(0, -3)}
                                                // color={classes.emptyAppointmentButton}
                                                // variant={classes.emptyAppointmentButton}
                                                variant='outlined'

                                                color='secondary'
                                            />
                                        </TableCell>)
                                }
                            })}
                        </TableRow>
                    )
                })
            }
        </TableBody>
    );
};

export default AppointmentsWeekTableBody;
