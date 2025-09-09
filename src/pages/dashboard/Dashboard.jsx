import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import Typography from '@mui/material/Typography';

const Dashboard = () => {
  const navigate = useNavigate();

  const [listRecipes, setListRecipes] = useState([]);

  useEffect(() => {
  }, []);


  const handleClick = (recipe) => {
    // Redirigir a la URL específica del recipeo
    navigate(`/recipes/${recipe._id}`);
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          Dashboard
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
