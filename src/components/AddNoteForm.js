import { Box, Button, colors, Modal, TextField, Typography } from "@mui/material"
import {useSelector, useDispatch} from 'react-redux'
import {addNoteAction} from '../store/addNewNote-slice'
import { makeStyles } from '@mui/styles'
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const useStyle = makeStyles({
mainContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'white',
    border: '1px solid #000',
    boxShadow: 24,
},
topPart: {
    background:'#F3EFE0',
    display:'flex',
    justifyContent:'space-between'
},
inputBox:{
    width:'90%',
    margin:'13px !important',
    color:'red'
},
form: {
    display:'flex',
    justifyContent:'center'

}

})


const AddNoteForm = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const closeHandler = () => {

    dispatch(addNoteAction.toogleAddNewNote())
    }

    const shownoteForm = useSelector(state => state.notes.showNoteForm)
    const clickedTank = useSelector(state => state.addNewTank.clickedTankInfo);

    return (
        <Modal
        sx={{borderRadius:'10px'}}
      open={shownoteForm}
      onClose={closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
          <Box className={classes.mainContainer}>
             <Box className={classes.topPart}>
            <Typography>შენიშვნის დამატება</Typography> 
            <CloseIcon onClick={closeHandler}/>
            </Box>
            <Box>
                {clickedTank.tankType + ' - ' + clickedTank.tankCode}
            </Box>
            <form className={classes.form}>
                <TextField
                className={classes.inputBox}
                id="outlined-multiline-flexible"
                placeholder='დაწერე ახალი ჩანიშვნა აქ..'
                multiline
                
                rows={10}
               
                />
            </form>
            <Box className={classes.topPart}>
           <Button 
           type={'submit'}
            variant="outlined" 
            startIcon={<AddCircleOutlineIcon />
            }
           >
               დამატება
           </Button>

           <Button
            variant="outlined" 
            startIcon={<CloseIcon 
            />
            }
            onClick={closeHandler}
           >
               გამოსვლა
           </Button>
            </Box>
          </Box>
            
        </Modal>
    )
}

export default AddNoteForm
