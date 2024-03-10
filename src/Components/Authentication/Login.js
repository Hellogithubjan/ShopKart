/* eslint-disable jsx-a11y/alt-text */
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import BackgroundLogin from '../../Assets/images/BackgroundLogin.jpg'
import LoginHero from '../../Assets/images/LoginHero.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', background: `url(${BackgroundLogin})` }}>
                <Grid container spacing={2} height='100vh' padding={2}>
                    <Grid item xs={12} sm={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                                ml: 19,
                                mt: 6,
                                width: '120%',
                                height: '80%',
                                bgcolor: '#fff',
                                borderRadius:'15px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', mt: 8, gap: 4 ,zIndex:1,}}>
                                <Typography
                                    variant="h1" fontFamily='Poppins' fontSize={30} fontWeight='bold' textAlign='center'>
                                    Login
                                </Typography>

                                <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
                                    <TextField
                                        {
                                        ...register('email', {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                        variant='outlined'
                                        label='Email'
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : ''}
                                        sx={{ width: '70%', mb: 4 }}
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
                                        variant='outlined'
                                        label='Password'
                                        type='password'
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ''}
                                        sx={{ width: '70%', mb: 2 }}
                                    />
                                    <Typography
                                        align="center"
                                        mt={2}
                                        fontFamily='Poppins'
                                    >
                                        <span style={{ color: 'grey' }} >Don't have an account? </span><Link to='/Signup'><span style={{ color: '#5067E3', textDecoration: 'none', fontWeight: 'bold' }}>Register</span></Link>
                                    </Typography>
                                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Button
                                            type='button'
                                            variant='contained'
                                            onClick={handleSubmit(onSubmit)}
                                            sx={{
                                                background: 'rgb(222, 233, 255)',
                                                backgroundImage: 'linear-gradient(225deg, rgba(222, 233, 255, 0.8) 0%, rgba(80, 103, 227, 0.8) 0%, rgba(80, 156, 227, 0.8) 21%, rgba(156, 98, 227, 0.8) 55%, rgba(180, 80, 227, 0.8) 88%)',
                                                mt: 4,
                                                width: '50%',
                                                '&:hover': {
                                                    background: 'rgb(222, 233, 255)',
                                                    backgroundImage: 'linear-gradient(225deg, rgba(222, 233, 255, 1) 0%, rgba(80, 103, 227, 1) 0%, rgba(80, 156, 227, 1) 21%, rgba(156, 98, 227, 1) 55%, rgba(180, 80, 227, 1) 88%)',
                                                    color: '#000000',
                                                },
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={8} sx={{overflowX:'clip'}}>
                        <img src={LoginHero} style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            position:'relative',
                            left:'15%'
                        }} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Login;