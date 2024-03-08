import React from 'react'
import Grid from '@mui/material/Grid'
import { useForm } from 'react-hook-form'
import { Box, Button, TextField, Typography } from '@mui/material';
import SignupSlider from '../../Assets/images/SignupSlider.jpg'
import {Link} from 'react-router-dom'



const onSubmit = (data) => {
    try {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            throw new Error('Passwords do not match');
        }
    } catch (error) {
        alert('Signup failed')
    }
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex'}}>
                <Grid container spacing={2} height='100vh' padding={2}>
                    <Grid item xs={14} sm={6} sx={{
                        background: `url(${SignupSlider})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                        borderRadius: '8px' 
                    }}>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{}} >
                        <Box sx={{ flexGrow: 1 }} ml={8} mt={11}>
                            <Typography fontFamily='Poppins' fontSize={30} fontWeight='bold'>
                                Create an Account
                            </Typography>
                            <Typography fontFamily='Poppins' fontSize={17} sx={{ color: '#949191', mt: 1 }}>
                                Empowering your online shopping experience
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} mt={3} component='form' width='70%'>
                                <form onSubmit={handleSubmit(onSubmit)} method="post">
                                    <TextField
                                        {
                                        ...register('username', {
                                            required: "Username is required",
                                        })}
                                        variant='standard'
                                        fullWidth
                                        label='Username'
                                        error={!!errors.username}
                                        helperText={errors.username ? errors.username.message : ''}
                                        sx={{ mb: 2 }}
                                    />
                                    <TextField
                                        {
                                        ...register('email', {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                        variant='standard'
                                        fullWidth
                                        label='Email'
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : ''}
                                        sx={{ mb: 2 }}
                                    />
                                    <TextField
                                        {...register('password', {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters"
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and must be at least 8 characters long",
                                            },
                                        })}
                                        variant='standard'
                                        fullWidth
                                        label='Password'
                                        type='password'
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ''}
                                        sx={{ mb: 2 }}
                                    />
                                    <TextField
                                        {
                                        ...register('confirmPassword', {
                                            required: "Please confirm your password",
                                            validate: (value) => value === watch("password") || "The passwords do not match",
                                        })
                                        }
                                        variant='standard'
                                        fullWidth
                                        label='Confirm Password'
                                        type='password'
                                        error={!!errors.confirmPassword}
                                        helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                                        sx={{ mb: 2 }}
                                    />
                                    <Typography
                                        align="center"
                                        mt={2}
                                        fontFamily='Poppins'
                                    >
                                    <span style={{color:'grey'}} >Already  have an account? </span><Link to='/login'><span style={{color:'#5067E3', textDecoration:'none', fontWeight:'bold'}}>Login</span></Link>
                                    </Typography>
                                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Button
                                            type='button'
                                            variant='contained'
                                            onClick={handleSubmit(onSubmit)}
                                            sx={{
                                                background: 'rgb(222, 233, 255)',
                                                backgroundImage: 'linear-gradient(225deg, rgba(222, 233, 255, 0.8) 0%, rgba(80, 103, 227, 0.8) 0%, rgba(80, 156, 227, 0.8) 21%, rgba(156, 98, 227, 0.8) 55%, rgba(180, 80, 227, 0.8) 88%)',
                                                mt:2,
                                                '&:hover': {
                                                    background: 'rgb(222, 233, 255)',
                                                    backgroundImage: 'linear-gradient(225deg, rgba(222, 233, 255, 1) 0%, rgba(80, 103, 227, 1) 0%, rgba(80, 156, 227, 1) 21%, rgba(156, 98, 227, 1) 55%, rgba(180, 80, 227, 1) 88%)',
                                                    color: '#000000',
                                                },
                                            }}
                                        >
                                            Create Account
                                        </Button>
                                    </Box>

                                </form>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Signup;