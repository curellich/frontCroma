import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import {DateTime} from "luxon";
import {
    CompleteAppointmentsInArray,
    FirstWeekDay, InitMatrizValues, MatrizNxN,
    WeekRangeStringLabels
} from "../../helpers/AppointmentsHelpers/AppointmentsHelpers";
import AppointmentsWeekTableHeader from "./AppointmentsWeekTableHeader";
import AppointmentsWeekTableBody from "./AppointmentsWeekTableBody";


//Obtengo el numero de semana actual, emplea el objeto DateTime de Luxon
const weekNumber = DateTime.now().weekNumber;
console.log(`El numero de semana actual es: ${weekNumber}`);

//Declaro el primer dia de la semana indicando como hora de inicio las 8hs
const firstWeekDay = FirstWeekDay(new Date().getFullYear(), weekNumber, 8);
console.log(`El primer dia de la semana es: ${firstWeekDay}`);

//Declaro una lista para completar la cabecera de la table
const weekDays = WeekRangeStringLabels(firstWeekDay, 6);

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

// Completo el array con las citas recibidas por el servidor en formato JSON que se encuentran en DATA
CompleteAppointmentsInArray(firstWeekDay, appointmentsArray, data);


export default function StickyHeadTable() {
    // const classes = style();
    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: {xs: 480, md: 900}}}>
                <Table stickyHeader={true} aria-label="sticky table">
                    <AppointmentsWeekTableHeader weekDays={weekDays}/>
                    <AppointmentsWeekTableBody appointmentsArray={appointmentsArray}/>
                </Table>
            </TableContainer>
        </Paper>
    );
}
