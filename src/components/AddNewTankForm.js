import { useEffect, useState } from 'react'
import PopupContainer from '../UI/PopupContainer'
import './AddNewTankForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTankAction } from '../store/addRefilOption-slice'
import LoadingSpinner from '../UI/LoadingSpinner'
import { sendNewTankData } from '../store/addNewTank-http-action'
import { useFetchTanks } from '../services/tanks'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, Modal, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';


const AddNewTankForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [submitedSuccesfully, setSubmitedSuccesfully] = useState(false);
  const [optionValue, setOptionValue] = useState('')
  const [tankData, setTankData] = useState({
    tankCode: '',
    capacity: '',
    tankType: ''
  });

  const dispatch = useDispatch()
  const addNewTank = useSelector(state => state.addNewTank.addNewTank);
  const isSubmitting = useSelector(state => state.addNewTank.isSubmitting);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const formStyle = {
    margin: " 5px 5px 5px 5px ",
  }

  const inputStyles = {
    marginBottom: " 30px ",
  }

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  const titleStyle = {
    textAlign: 'center',
    marginBottom: 3
  }

  const submitBtnStyle = {
    background: '#2592c4'
  }
  const closeBtnStyle = {
    background: '#b04535',
    '&:hover': {
      background: '#f7614a'
    }
  }

  const changeOptionHandler = (event) => {
    setOptionValue(event.target.value)
    setTankData({
      tankCode: '',
      capacity: '',
      tankType: event.target.value
    })
  }

  const changeHandler = (event) => {
    const value = event.target.value;

    setTankData({
      ...tankData,
      [event.target.id]: value,
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(sendNewTankData(tankData))
  }


  const closeHandler = () => {
    dispatch(addTankAction.closeinputHandler())
  }

  return (
    <>
      {submitedSuccesfully && <p>submited succesfully</p>}

      <Modal
        open={addNewTank}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isSubmitting && <LoadingSpinner />}
          <Typography sx={titleStyle} variant="h5">ჭურჭლის ამატება</Typography>

          <form onSubmit={submitHandler}>
            <FormControl sx={formStyle} fullWidth>

              <InputLabel>ჭურჭლის ტიპი</InputLabel>
              <Select
                sx={inputStyles}
                labelId="tankSelectorLabel"
                id="tankSelector"
                value={optionValue}
                label="ჭურჭლის ტიპი"
                onChange={changeOptionHandler}
              >
                <MenuItem id='tank' value={'ცისტერნა'}>ცისტერნა</MenuItem>
                <MenuItem id='pitcher' value={'ქვევრი'}>ქვევრი</MenuItem>
                <MenuItem id='barrel' value={'ხის კასრი'}>ხის კასრი</MenuItem>
                <MenuItem id='kegs' value={'რკინის კასრი'}>რკინის კასრი</MenuItem>
                <MenuItem id='carBoys' value={'ბოცა'}>ბოცა</MenuItem>
                <MenuItem id='bottle' value={'ბო'}>ბოთლი</MenuItem>
              </Select>



              <TextField sx={inputStyles} labelId="tankCodeLabel" label='ჭურჭლის კოდი' id='tankCode' value={tankData.tankCode} onChange={changeHandler} placeholder='აკრიფე კოდი' />

              <TextField sx={inputStyles} labelId="tankCapacityLabel" label='მოცულობა(ლ)' id='capacity' type='number' value={tankData.capacity} onChange={changeHandler} placeholder='რამდენიანი' />


              <Box sx={buttonStyle} >
                <Button type="submit" sx={submitBtnStyle} variant="contained">
                  დამატება
                </Button>
                <Button onClick={closeHandler} sx={closeBtnStyle} variant="contained"  >
                  გაუქმება
                 </Button>
              </Box>
            </FormControl>
          </form>

    
        </Box>
      </Modal>
    </>)
}

export default AddNewTankForm
