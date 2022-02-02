import { useState } from 'react'
import { Box, Button, Card, FormControl, Link, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'

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
        height: '370px',
        width: '100%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    formControlContainer: {
        height: '370px',
        width: '90%',
        display: 'flex',
        justifyContent: 'space-evenly',
    },

    submitBtn: {
        background: '#00807E !important',
        '&:hover': {
            background: '#31877E !important'
        }
    },
})

const RegistrationForm = () => {
    const [registrationValue, setRegistrationValue] = useState({
       userFirstName: '',
        userLastName: '',
         email: '',
         password: '',
        showPassword: false,
    });

    const classes = useStyle()
    
    const handleChange = (event) => {
        const id = event.target.id
        setRegistrationValue({ ...registrationValue, [id]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setRegistrationValue({
            ...registrationValue,
            showPassword: !registrationValue.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form
            onSubmit={submitHandler}
            className={classes.formContainer}
            >
            <FormControl className={classes.formControlContainer} variant="standard">
                <TextField
                    className={classes.userNameInput}
                    id="userFirstName"
                    label="სახელი"
                    value={registrationValue.userFirstName}
                    onChange={handleChange}
                    />

                     <TextField
                    className={classes.userNameInput}
                    id="userLastName"
                    label="გვარი"
                    value={registrationValue.userLastName}
                    onChange={handleChange}
                    />

                <TextField
                    className={classes.userNameInput}
                    id="email"
                    label="Email"
                    value={registrationValue.email}
                    onChange={handleChange}
                    />

                <Box sx={{ width: '100%' }}>
                    <TextField
                        className={classes.passwordInput}
                        id="password"
                        label="გაიმეორეთ პაროლი"
                        value={registrationValue.password}
                        onChange={handleChange}
                        type={registrationValue.showPassword ? 'text' : 'password'}
                    />
                    <Box className={classes.passwordShowIcon} >
                        <IconButton

                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {registrationValue.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </Box>
                </Box>

            </FormControl>
            <Button
                type='submit'
                className={classes.submitBtn}
                variant="contained">
                რეგისტრაცია
            </Button>
        </form>
    )
}

export default RegistrationForm
