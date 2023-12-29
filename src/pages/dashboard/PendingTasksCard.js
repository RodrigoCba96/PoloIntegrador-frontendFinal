import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const PendingTasksCard = ({ pendingTasks }) => {
  return (
    <Box justifyContent="center" alignItems="center" marginLeft="50%">
    <Card sx={{ 
      borderRadius: '80px',
      transition: 'transform 0.3s, background-color 0.3s',
      '&:hover': {
        transform: 'scale(1.1)',
      }
    }}>
      <CardContent>

        <Typography variant="h6">
          Cursos pendientes: {pendingTasks.length}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
};

export default PendingTasksCard;
