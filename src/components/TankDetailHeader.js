import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import {useLocation} from 'react-router-dom'
import { useParams } from 'react-router-dom';
const useStyle = makeStyles({
    mainContainer: {
        padding: '30px',
        display: 'flex',
        justifyContent:'space-between',     
    
    },

    titles:{
        fontSize: '1.8rem',
    }
})
const TankDetailHeader = () => {

    const classes = useStyle()
    const clickedTank = useSelector(state => state.addNewTank.clickedTankInfo);
    return (
     
        <Box className={classes.mainContainer}>
            <Box>
             <Typography className={(classes.titles)}>  {clickedTank.tankCode} - {clickedTank.tankType}</Typography>
             <Typography  className={classes.titles}>{clickedTank.wineColor}</Typography>
             </Box>

            <Typography className={classes.titles}> {clickedTank.capacity} ლ</Typography>
        
        </Box>
  
    )
}

export default TankDetailHeader
