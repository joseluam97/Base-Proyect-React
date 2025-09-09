import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Box, Typography } from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { useSnackbar } from 'src/components/snackbar/SnackbarProvider';


const AuthLogin = () => {
    const { showSnackbar } = useSnackbar();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/'); // Redirige al home
        } catch (err) {
            //alert(err.message);
            showSnackbar(err.message, 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box mb={2}>
                <Typography>Email</Typography>
                <CustomTextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
            </Box>
            <Box mb={2}>
                <Typography>Password</Typography>
                <CustomTextField
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />
            </Box>
            <Button type="submit" variant="contained" fullWidth>
                Sign In
            </Button>
        </form>
    );
};

export default AuthLogin;
