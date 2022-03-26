import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {FirstWeekDay, InitMatrizValues} from "../../helpers/AppointmentsHelpers/AppointmentsHelpers";
import PatientesButtonCell from "./PatientesButtonCell";


const emptyDataStructure = {
    id_appointment: '',
    appointmentDate: '',
    id_professional: '',
    id_patient: '',
    details: '',
    patientsName: '',
    professionalsName: ''
}

const sx = {
    tableCell: {
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
    }
}

const externalData = [
    {
        "id_appointment": 1,
        "appointmentDate": "2022-03-22T11:00:00.000Z",
        "id_professional": 1,
        "id_patient": 1,
        "details": 'A este lo hago percha por hdp y porque le tengo que hacer muchisimas cosas',
        "patientsName": 'Jorge Gonzales',
        "professionalsName": 'Jime'
    },
    {
        "id_appointment": 2,
        "appointmentDate": "2022-03-22T10:30:00.000Z",
        "id_professional": 2,
        "id_patient": 2,
        "details": 'Extraccion 25',
        "patientsName": 'Marito perez',
        "professionalsName": 'Euge'
    },
    {
        "id_appointment": 3,
        "appointmentDate": "2022-03-22T15:00:00.000Z",
        "id_professional": 1,
        "id_patient": 1,
        "details": 'Impresion',
        "patientsName": 'Jorge Gonzales',
        "professionalsName": 'Jime'
    },
    {
        "id_appointment": 4,
        "appointmentDate": "2022-03-23T16:00:00.000Z",
        "id_professional": 1,
        "id_patient": 3,
        "details": 'Limpieza',
        "patientsName": 'Ricardo Rojas',
        "professionalsName": 'Jime'
    },
    {
        "id_appointment": 5,
        "appointmentDate": "2022-03-23T09:00:00.000Z",
        "id_professional": 2,
        "id_patient": 4,
        "details": 'Limpueza',
        "patientsName": 'Pamela Chu',
        "professionalsName": 'Euge'
    },
    {
        "id_appointment": 6,
        "appointmentDate": "2022-03-24T10:00:00.000Z",
        "id_professional": 2,
        "id_patient": 4,
        "details": 'Primer Visita',
        "patientsName": 'Pamela Chu',
        "professionalsName": 'Euge'
    },
    {
        "id_appointment": 7,
        "appointmentDate": "2022-03-21T10:30:00.000Z",
        "id_professional": 2,
        "id_patient": 5,
        "details": 'Implante',
        "patientsName": 'Estaban Quito',
        "professionalsName": 'Euge'
    },
    {
        "id_appointment": 8,
        "appointmentDate": "2022-03-25T10:45:00.000Z",
        "id_professional": 2,
        "id_patient": 2,
        "details": 'Cementado',
        "patientsName": 'Marito Perez',
        "professionalsName": 'Euge'
    }
]
const AppointmentBody = (weekNumber) => {
    const sxTableCell = sx.tableCell;
    const [data, setData] = useState(externalData);
    const [appointmentsArray, setAppointmentsArray] = useState([])
    const [datesRange, setDatesRange] = useState('');


    useEffect(() => {
        setAppointmentsArray(InitMatrizValues(FirstWeekDay(new Date().getFullYear(), weekNumber.weekNumber, 8), emptyDataStructure, externalData));
    }, [weekNumber.weekNumber]);


    return (
        <TableContainer sx={{maxHeight: {xs: 480, md: 900}}}>
            <Table>
                <TableBody>
                    {appointmentsArray.map((hour, index) => (
                        <TableRow key={index}>
                            {hour.map(appointment => {
                                if (appointment.id_patient !== '') {
                                    return (
                                        <TableCell align="center" sx={{sxTableCell}} key={appointment.appointmentDate}>
                                            <PatientesButtonCell
                                                key={appointment.appointmentDate + " 1 "}
                                                id_appointment={appointment.id_appointment}
                                                id_patient={appointment.id_patient}
                                                id_professional={appointment.id_professional}
                                                appointmentdate={appointment.appointmentDate}
                                                nameofprofessional={appointment.professionalsName}
                                                details={appointment.details}
                                                patient={appointment.patientsName}
                                                hour={appointment.appointmentDate.toLocaleTimeString().split(' ')[0].slice(0, -3)}
                                                variant='contained'/>
                                        </TableCell>
                                    )
                                } else {
                                    return (
                                        <TableCell align="center" sx={{sxTableCell}} key={appointment.appointmentDate}>
                                            <PatientesButtonCell
                                                key={appointment.appointmentDate + " 2 "}
                                                id_appointment={''}
                                                id_patient={''}
                                                id_professional={''}
                                                appointmentdate={appointment.appointmentDate}
                                                nameofprofessional={'appointment.professionalsName'}
                                                details={''}
                                                patient={'LIBRE'}
                                                hour={appointment.appointmentDate.toLocaleTimeString().split(' ')[0].slice(0, -3)}
                                                variant='outlined'/>
                                        </TableCell>
                                    )
                                }
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AppointmentBody;
