import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PatientesButtonCell from "./PatientesButtonCell";
import {DateTime} from "luxon";
import InitMatrizValues, {
    CompleteAppointmentsInArray,
    FirstWeekDay, MatrizNxN,
    WeekRangeStringLabels
} from "../../helpers/AppointmentsHelpers/AppointmentsHelpers";

//Obtengo el numero de semana actual, emplea el objeto DateTime de Luxon
const weekNumber = DateTime.now().weekNumber;
console.log(`El numero de semana actual es: ${weekNumber}`);

//Declaro el primer dia de la semana indicando como hora de inicio las 8hs
const firstWeekDay = FirstWeekDay(new Date().getFullYear(), weekNumber, 8);
console.log(`El primer dia de la semana es: ${firstWeekDay}`);

//Declaro una lista para completar la cabecera de la table
const weekDays = WeekRangeStringLabels(firstWeekDay, 6);

//Declaro la lista que va a contener los datos de la cabacera
const columns = [];

//Completo los valores de la semana para las columnas
{
    weekDays.map((day) => {
        columns.push(
            {
                field: `${day.date}`,
                labelDay: `${day.date} ${day.dayOfWeek}`,
                align: 'center',
                border: '1px solid black',
                minWidth: 130,
            },
        )
    })
}

//aca tengo que meter el JSON de la base de datos
const data = [
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

//Creo la estructura de datos que va a contener un boton/ celda de citas
const emptyDataStructure = {
    id_appointment: '',
    appointmentDate: '',
    id_professional: '',
    id_patient: '',
    details: '',
    patientsName: '',
    professionalsName: ''
}

//Creo la matriz que va a contener las fechas de las citas asignadas, las horas van en las columnas y las fechas en
// las filas para poder hacer el mapeo despues
const appointmentsArray = MatrizNxN(24, 6);

//Inicializo el array con los horarios por defecto
InitMatrizValues(appointmentsArray, firstWeekDay, emptyDataStructure);


// Completo el array con las citas recibidas por el servidor en formato JSON
CompleteAppointmentsInArray(firstWeekDay, appointmentsArray, data);
// console.log(appointmentsArray);

export default function StickyHeadTable() {

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: {xs: 480, md: 900}}}>
                <Table stickyHeader={true} aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.field}
                                    align={column.align}
                                    style={{border: column.border}}
                                    sx={{
                                        minWidth: {
                                            xs: column.minWidth
                                        },
                                        paddingLeft: {
                                            xs: '0px'
                                        },
                                        paddingRight: {
                                            xs: '0px'
                                        },
                                        paddingTop: {
                                            xs: '0px'
                                        },
                                        paddingBottom: {
                                            xs: '0px'
                                        }

                                    }}
                                >
                                    {`${column.labelDay}`}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            appointmentsArray.map((hour, index) => {
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
                                                        }
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
                                                            color='secondary'
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
                                                            patient={'__LIBRE__'}
                                                            hour={appointment.appointmentDate.toLocaleTimeString().split(' ')[0].slice(0, -3)}
                                                        />
                                                    </TableCell>)
                                            }
                                        })}
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
