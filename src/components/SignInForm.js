import { useState } from 'react'
import { Box, Button, Card, FormControl } from "@mui/material"
import { makeStyles } from '@mui/styles'
import { NavLink, useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const useStyle = makeStyles({
    passwordInput: {
        width: '100%'
    },
    passwordShowIcon: {
        position: 'absolute',
        top: '12px',
        right: '0px',
    },
    formContainer: {
        boxSizing: 'border-box',
        height: '310px',
        width: '100%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    formControlContainer: {
        height: '250px',
        width: '90%',
        display: 'flex',

        justifyContent: 'space-evenly',
    },
    submitBtn: {
        background: '#00807E !important',
        width:'70%',
        '&:hover': {
            background: '#31877E !important'
        }
    },
    forgotPass: {
        marginTop:'-25px !important',
        textAlign: 'left !important',
        textDecoration: 'unset !important',
        color: '#465656 !important'

    }
   
})


const SignInForm = () => {
    const [loginValue, setLoginValue] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const navigate = useNavigate()

    const classes = useStyle()

    const handleChange =(event) => {
        const id = event.target.id
        setLoginValue({ ...loginValue, [id]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setLoginValue({
            ...loginValue,
            showPassword: !loginValue.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitHandler = (event) => {
        event.preventDefault()
        return navigate('/dashboard')
    }

    return (
        <form 
        onSubmit={submitHandler} 
        className={classes.formContainer}>
         <FormControl 
         className={classes.formControlContainer} 
         variant="standard">
                <TextField
                    className={classes.userNameInput}
                    id="email"
                    label="ელ-ფოსტა"
                    value={loginValue.email}
                    onChange={handleChange}
                   
                    
                    />

                <Box sx={{ width: '100%' }}>
                    <TextField
                        className={classes.passwordInput}
                        id="password"
                        label="პაროლი"
                        value={loginValue.password}
                        onChange={handleChange}
                    
                        type={loginValue.showPassword ? 'text' : 'password'}
                    />
                    <Box className={classes.passwordShowIcon} >
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {loginValue.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </Box>
                </Box>

                <NavLink to={'/dashboard'} className={classes.forgotPass}>დაგავიწყდა პაროლი?</NavLink>
            </FormControl> 
            <Button 
            type='submit' 
            className={classes.submitBtn} 
            variant="contained">
               შესვლა
            </Button>
        </form>
    )
}

export default SignInForm
