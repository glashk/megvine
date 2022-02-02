
import { Box, Typography, Button} from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTankHandler } from '../store/addNewTank-http-action'
import LoadingSpinner from "../UI/LoadingSpinner"
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  btnsContainer: {
    width: 300,
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around'
  },
  submitBtn: {
    background: '#00807E',
    '&:hover': {
      background: '#31877E'
    }
  },
  closeBtn: {
    background: '#b04535',
    '&:hover': {
      background: '#f7614a'
    }
  },
  detileContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  detileItemBox: {
    background: '#ededed',
    overflow:'scroll',
    textAlign: 'center',
    borderRadius: '4px',
    height: '110px',
    width: '300px',
    margin: '0.4px',
    border: '1px solid #c9c9c9',
    padding: '20px 30px 30px 30px',
    color: '#495867'
  },

  detileVale: {
    fontSize: '1.4rem',
    color: '#7FB069',
   
  }

}))

const TankInfo = () => {
  const classes = useStyle()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const showTankInfo = useSelector(state => state.addNewTank.showTankInfo);
  const clickedTankId = useSelector(state => state.addNewTank.clickedTankId);
  const clickedTank = useSelector(state => state.addNewTank.clickedTankInfo);
  const isSubmitting = useSelector(state => state.addNewTank.isSubmitting);

  const deletTankHandler = () => {
    dispatch(deleteTankHandler(clickedTankId))
    navigate(-1)
  }

  const handleClose = () => {
    navigate(-1)
  }

  return (

    <Box sx={{ background: '#f5f5f5', height: '100vh' }} >
      {isSubmitting && <LoadingSpinner />}
    
      <div className={classes.detileContainer}>
        <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.tankCode ? clickedTank.tankCode : '---'}
          </Typography>
          <Typography>ჭურჭლის ნომერი</Typography>
        </Box>

        <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.tankType ? clickedTank.tankType : '---'}
          </Typography>
          <Typography>ჭურჭლის ტიპი</Typography>
        </Box>

        <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.capacity ? clickedTank.capacity + ' ლ' : '---'}
          </Typography>
          <Typography>მოცულობა</Typography>
        </Box>

        <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.description ? clickedTank.description : '--'}
          </Typography>
          <Typography>დახასიათება</Typography>
        </Box>

        <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.wineColor ? clickedTank.wineColor : '---'}
          </Typography>
          <Typography>ღვინის ტიპი</Typography>
        </Box>

        <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.wineColorr ? clickedTank.wineColorr : '---'}
          </Typography>
          <Typography>დუღილის პროცესი</Typography>
        </Box>
        <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.howManyWineType ? clickedTank.howManyWineType : '---'}
          </Typography>
          <Typography>რამდენი ჯიშისგან შედგება ღვინო?</Typography>
        </Box>

        <Box className={classes.detileItemBox} >
        <Typography className={classes.detileVale} >{clickedTank.wineType ?  (clickedTank.wineType + ' ' + (clickedTank.firstWyneComposition && clickedTank.firstWyneComposition)): '---'}
          </Typography>

          <Typography>{clickedTank.seccondWyneType ? 'პირველი ყურძნის ჯიში' : 'ღვინის ჯიში'} </Typography>
        </Box>

       {clickedTank.seccondWyneType && <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.seccondWyneType ? clickedTank.seccondWyneType + ' ' + (clickedTank.seccondWyneComposition) : '---'}
          </Typography>
          <Typography>მეორე ყურძნის ჯიში</Typography>
        </Box>
       }

        {clickedTank.thirdWineType&& <Box className={classes.detileItemBox} >
          <Typography className={classes.detileVale} >{clickedTank.thirdWineType ? clickedTank.thirdWineType + ' ' + (clickedTank.thirdWineComposition) : '---'}
          </Typography>
          <Typography>მესამე ყურძნის ჯიში</Typography>
        </Box>
       }
      </div >

      <Box className={classes.btnsContainer} >
        <Button onClick={deletTankHandler} className={classes.closeBtn} variant="contained">
          ჭურჭლის წაშლა
                </Button>

        <Button onClick={handleClose} className={classes.submitBtn} variant="contained"  >
          გამოსვლა
                 </Button>
      </Box>
    </Box>
  )
}

export default TankInfo
