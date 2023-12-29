import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/system/Box';

const CompletedTasksCard = ({ completedTasks }) => {
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
            Cursos finalizados: {completedTasks.length}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CompletedTasksCard;
