import React from 'react';
import {Fab} from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Box from "@mui/material/Box";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 10,
    left: 'auto',
    position: 'fixed',

};

const NavWeekButtons = ({monthDisplay,onNext,onBack}) => {
    return (
        <Box display='flex' style={style} >
            <Fab variant="extended" size="medium" color="secondary" aria-label="add" sx={{marginRight: '0.5rem'}} onClick={onBack} >
                <SkipPreviousIcon sx={{mr: 0}} />
            </Fab>
            <Fab variant="extended" size="medium" color="secondary" aria-label="add" sx={{marginRight: '0.5rem'}} >
                {monthDisplay}
            </Fab>
            <Fab variant="extended" size="medium" color="secondary" aria-label="add" sx={{marginLeft: '0.5rem'}} onClick={onNext} >
                <SkipNextIcon sx={{mr: 0}} />
            </Fab>
        </Box>
    );
};

export default NavWeekButtons;






