import React from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


const AppointmentsWeekTableHeader = (props) => {
    //Declaro la lista que va a contener los datos de la cabacera
    const columns = [];

    //Completo los valores de la semana para las columnas
    {
        (props.weekDays).map((day) => {
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

    return (
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
                            },
                            bgcolor: 'text.disabled',
                            color: 'background.paper'
                        }}
                    >
                        {`${column.labelDay}`}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default AppointmentsWeekTableHeader;
