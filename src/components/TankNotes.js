
import { Box, Button, Card, Divider, Input } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Autocomplete from '@mui/material/Autocomplete';
import AddNoteForm from './AddNoteForm';
import {addNoteAction} from '../store/addNewNote-slice'

const top100Films = [
   
    { title: 'ლევან გვალია', year: 1994 },
    { title: 'ლევან'},
  ];

  
 function CalendarsDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>

        <DateRangePicker
          calendars={2}
          value={value}
          startText={'საიდან'}
          endText={'სანამდე'}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}>-</Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />

      </div>
    </LocalizationProvider>
  );
}


const useStyle = makeStyles({
    mainContainer: {
        width: '70%',
        padding: '10px'
    }
})

function TankNotes() {
    const classes = useStyle()
    const dispatch = useDispatch()
    const shownoteForm = useSelector(state => state.notes.showNoteForm)

    const showNoteForemHandler = () => {
          dispatch(addNoteAction.toogleAddNewNote())
    }
    console.log(shownoteForm)
    return (
        <Box>
            <Box sx={{display:'flex', width:'100%', justifyContent:'space-around' , flexWrap:'wrap'}}>
                <Button
                onClick={showNoteForemHandler}
                variant="outlined" 
                startIcon={<AddIcon />}>
                    დამატება
                   </Button>

                   <Divider orientation="vertical" flexItem />
                   {CalendarsDateRangePicker()}

                   <Autocomplete
      id="highlights-demo"
      sx={{ width: 250 }}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="ვის მიერ?" />
      )}
     
    />

    <Input 
    type="search" 
    placeholder='რას შეიცავს?'
    />
            </Box>

            {shownoteForm && <AddNoteForm/>}
        </Box>
    )
}

export default TankNotes
