import { useState } from 'react'
import { Box, Link, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'
import RegistrationForm from '../components/RegistrationForm';
import SignInForm from '../components/SignInForm';

const useStyle = makeStyles({


    signInBody: {
        background: '#617073',
        padding: '30px',
        width: '100wh',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    container: {
        width: 'fit-content',
        display: "flex",
        flexWrap: 'wrap',

    },
    leftContainer: {
        borderRadius: '8px 0px 0px 8px',
        textAlign: 'center',
        height: '555px',
        width: '370px',
        background: '#efefef'

    },
    rightContainer: {
        width: '370px',
        borderRadius: '4px'
    },
    wineImage: {
        width: '100%',
        borderRadius: '0px 8px 8px 0px',
    },
    toogleBtn: {
        all: 'unset',
        position: 'absolute',
        color: '#465656',
        padding: '8px',
        borderRadius: '4px',
    
        left: '26%',
        right: '24%',
        bottom: '10px'
    }
})

const SigninPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const classes = useStyle()
    return (
        <Box className={classes.signInBody}>  
            <Box className={classes.container} >

                <Box className={classes.leftContainer}>

                    <Typography sx={{ mt: 3, mb: 1, color: '#465656' }} variant="h3">Megvine</Typography>
                    <Typography sx={{ color: '#7FB069', mb: 2 }} variant="h5">მარანში შესვლა</Typography>

                      {isLogin ? 
                      <SignInForm/> 
                      : 
                      <RegistrationForm/>
                      }   

                    <button
                        className={classes.toogleBtn}
                        onClick={switchAuthModeHandler}
                    >{isLogin ? 'რეგისტრაციის გავლა' : 'უკვე მაქვს ანგარიში'}</button>

                </Box>
                <Box className={classes.rightContainer}>
                    <img className={classes.wineImage} src={'https://images.pexels.com/photos/5272997/pexels-photo-5272997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} />
                </Box>
            </Box>
        </Box>
    )
}

export default SigninPage
