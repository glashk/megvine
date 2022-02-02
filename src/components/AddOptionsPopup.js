import './AddOptionsPopup.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTankAction } from '../store/addRefilOption-slice'
import { Box } from '@mui/material';

const AddOptionsPopup = () => {

    const tanksData = useSelector(state => state.tanks.tanks)
    const noTans = tanksData.length === 0
    const dispatch = useDispatch();

    const showTankAddInputHandler = () => {
        dispatch(addTankAction.toogleAddNewTank())
    }

    const showTankRefilInputHandler = () => {
        dispatch(addTankAction.toogleRefilTank())
    }

    return (
        <Box className='option-popap-container'>
            <span onClick={showTankAddInputHandler}>ჭურჭლის დამატება</span>
          {!noTans &&  <span onClick={showTankRefilInputHandler}>ჭურჭლის შევსება ღვინით</span>}
        </Box>
    )
}

export default AddOptionsPopup
