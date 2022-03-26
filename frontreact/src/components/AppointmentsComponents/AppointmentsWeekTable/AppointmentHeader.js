import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import Divider from "@mui/material/Divider";
import {FirstWeekDay, WeekRangeStringLabels} from "../../helpers/AppointmentsHelpers/AppointmentsHelpers";


const AppointmentHeader = ({weekNumber}) => {
    const [weekdays, setWeekdays] = useState(WeekRangeStringLabels(FirstWeekDay(2022, weekNumber, 8), 6));

    useEffect(() => {
        setWeekdays(WeekRangeStringLabels(FirstWeekDay(2022, weekNumber, 8), 6));
    }, [weekNumber]);

    return (
        <Grid container spacing={1} columns={12} direction="row" wrap="nowrap">
            {weekdays.map((day) => (
                <Grid item xs={2} justifyItems="center" key={day.completeDate}>
                    <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', border: '1px solid'}}>
                        <Typography variant="subtitle2" textAlign="center">{day.date}</Typography>
                        <Divider orientation="vertical" sx={{marginLeft: '5px', marginRight: '5px'}}/>
                        <Typography variant="subtitle2" textAlign="center">{day.weekday}</Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default AppointmentHeader;
