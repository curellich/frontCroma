/**
 * Funcion que permite calcular el primer dia de una semana determinada, emplea el año, el numero de semana y la hora
 * de inicio del dia.
 * @param year
 * @param weekNumber
 * @param startHour
 * @returns {Date}
 */
export const FirstWeekDay = (year, weekNumber, startHour) => {
    // obtenemos el primer dia del año
    let primerdia = new Date(year, 0, 1);

    // obtenemos la corrección necesaria
    let correccion = 6 - primerdia.getDay();

    // añadimos validación a la semana
    try {
        // validación para la semana
        if (weekNumber * 7 + correccion > 365) {
            throw 'El numero de semana ingresado es incorrecto'
        } else {
            // obtenemos el lunes
            let firstWeekDay = new Date(year, 0, (weekNumber - 1) * 7 + 3 + correccion);
            firstWeekDay.setHours(startHour);
            return firstWeekDay;
        }
    } catch (e) {
        console.log(e);
    }
};

/**
 * Funcion que me retorna un objeto con el primer y ultimo dia de una semana laboral
 * @param year
 * @param weekNumber
 * @param startHour
 * @returns {{firstWeekDay: Date, lastWeekDay: Date}}
 */
export const datesRangesString = (year, weekNumber, startHour) => {
    // obtenemos el primer dia del año
    let primerdia = new Date(year, 0, 1);

    // obtenemos la corrección necesaria
    let correccion = 6 - primerdia.getDay();

    // añadimos validación a la semana
    try {
        // validación para la semana
        if (weekNumber * 7 + correccion > 365) {
            throw 'El numero de semana ingresado es incorrecto'
        } else {
            // obtenemos el lunes
            let firstWeekDay = new Date(year, 0, (weekNumber - 1) * 7 + 3 + correccion);
            let lastWeekDay = new Date(year, 0, (weekNumber - 1) * 7 + 8 + correccion)
            firstWeekDay.setHours(startHour);
            return {firstWeekDay: firstWeekDay, lastWeekDay: lastWeekDay};
        }
    } catch (e) {
        console.log(e);
    }
};

/**
 * Funcion que va a recibir el primer dia de la semana, y la cantidad de dias que quiere representar y retorna una lista
 * @param firstWeekDay
 * @param daysToRender
 * @returns {*[]}
 * @constructor
 */
export const WeekRangeStringLabels = (firstWeekDay, daysToRender) => {
    let daysLabels = []
    const auxiliaryDate = new Date(firstWeekDay);
    const firstDay = auxiliaryDate.getDate();
    //Defino el nombre de los dias de la semana en las columnas
    for (let i = 0; i < daysToRender; i++) {
        auxiliaryDate.setDate(firstDay + i);
        const dateString = auxiliaryDate.toLocaleString('en-us', {
            weekday: 'short',
            day: 'numeric',
        })
        daysLabels.push(
            {
                date: dateString.split(' ')[0],
                weekday: dateString.split(' ')[1],
                completeDate: auxiliaryDate.toLocaleString().split(' ')[0]
            }
        )
    }
    return daysLabels;
};

/**
 * Funcion para calcular la cantidad de filas que va a tener la agenda, recibe un dato entero que indica la primera y
 * ultima hora del día y cantidad la cantidad de minutos en los que se quiere subdividir la hora.
 * @param startHour
 * @param endHour
 * @param minutes
 * @returns {number}
 */
export const TotalColumnsAgenda = (startHour, endHour, minutes) => {
    return ((endHour - startHour) * minutes);
}


/**
 * Funcion para incrementar una fecha en determinados minutos, modifica el objeto Date.
 * @param date
 * @param minutes
 */
export const IncrementMinutes = (date, minutes) => {
    date.setMinutes(date.getMinutes() + minutes);
}

/**
 * Funcion para incrementar una fecha en determinados dias, modifica al objeto Date.
 * @param date
 * @param days
 */
export const IncrementDay = (date, days) => {
    date.setDate(date.getDate() + days);
}

/**
 * Funcion que permite crear una matriz de n x n, especificando las columnas y las filas, retorna un array inicializando
 * todos los valores del array con un objeto vacio.
 * @param rows
 * @param columns
 * @returns {any[]}
 */
export const MatrizNxN = (columns, rows) => {
    let array = new Array(columns);
    for (let i = 0; i < columns; i++) {
        array[i] = new Array(rows)
    }
    return array;
}

/**
 * Funcion que me devuelve la columna del dia y a la fila del turno, dandole el primer dia de la semana y una fecha en
 * formato JSON recibida del servidor.
 * @param firstDayofWeek
 * @param JSONDate
 * @returns {{column: number, row: number}}
 */
export function PositionInArray(firstDayofWeek, UTCDate) {
    let column;
    let row = UTCDate.getDate() - firstDayofWeek.getDate();
    if (UTCDate.getMinutes() !== 30) {
        column = (UTCDate.getHours() - firstDayofWeek.getHours()) * 2;
    } else {
        column = (UTCDate.getHours() - firstDayofWeek.getHours()) * 2 + 1;
    }
    return {column: column, row: row};
}

/**
 * Funcion que devuelve un array con las fechas de las las citas en la columna y fila correspondiente, y deja
 * @param firstDayOfWeek
 * @param array
 * @param data
 * @returns {*}
 */
export const CompleteAppointmentsInArray = (firstDayOfWeek, array, data) => {
    data.map((day) => {
        const JSONDate = new Date(day.appointmentDate);
        const UTCDate = new Date(JSONDate.getUTCFullYear(), JSONDate.getUTCMonth(), JSONDate.getUTCDate(),
            JSONDate.getUTCHours(), JSONDate.getUTCMinutes(), JSONDate.getUTCSeconds());

        const position = PositionInArray(firstDayOfWeek, UTCDate);
        const auxDay = new Date(array[position.column][position.row].appointmentDate)
        if (auxDay.getDate() === UTCDate.getDate() &&
            auxDay.getMonth() === UTCDate.getMonth() &&
            auxDay.getHours() === UTCDate.getHours() &&
            auxDay.getMinutes() === UTCDate.getMinutes() &&
            auxDay.getSeconds() === UTCDate.getSeconds()) {
            array[position.column][position.row].id_appointment = day.id_appointment;
            array[position.column][position.row].appointmentDate = new Date(UTCDate);
            array[position.column][position.row].id_professional = day.id_professional;
            array[position.column][position.row].id_patient = day.id_patient;
            array[position.column][position.row].details = day.details;
            array[position.column][position.row].patientsName = day.patientsName;
            array[position.column][position.row].professionalsName = day.professionalsName;
        } else {
            array[position.column][position.row].id_appointment = '';
            array[position.column][position.row].appointmentDate = new Date(UTCDate);
            array[position.column][position.row].id_professional = '';
            array[position.column][position.row].id_patient = '';
            array[position.column][position.row].details = '';
            array[position.column][position.row].patientsName = '';
            array[position.column][position.row].professionalsName = '';
        }
    })
}


/**
 * Funcion que inicializa los valores de fecha y hora de la matriz, con valores por defecto.
 * @param matriz
 * @param firstWeekDay
 * @param initDataStructureValues
 * @constructor
 */
export const InitMatrizValues = (firstWeekDay, initDataStructureValues, data) => {
    const matriz = MatrizNxN(24, 6);
    let auxDataStructure = JSON.parse(JSON.stringify(initDataStructureValues));
    auxDataStructure.appointmentDate = new Date(firstWeekDay);

    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 6; j++) {
            matriz[i][j] = JSON.parse(JSON.stringify(auxDataStructure));
            matriz[i][j].appointmentDate = new Date(auxDataStructure.appointmentDate);
            IncrementDay(auxDataStructure.appointmentDate, 1);

        }
        IncrementMinutes(auxDataStructure.appointmentDate, 30);
        auxDataStructure.appointmentDate.setDate(firstWeekDay.getUTCDate());
    }

    if (data.length > 0) {
        CompleteAppointmentsInArray(firstWeekDay, matriz, data);
    }

    return matriz;
}

