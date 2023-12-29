import React, { useEffect } from "react";
import { Grid, Paper, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { appSelector } from '../../redux/appRedux';
import CompletedTasksCard from './CompletedTasksCard';
import PendingTasksCard from './PendingTasksCard';

const Dashboard = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [open, onClose]);

  const tasks = useSelector(appSelector.cursos);

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Paper sx={{
          p: 4,
          borderRadius: '80px',
          transition: 'transform 0.3s, background-color 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: '#28DC2F'
          },
        }} >

          <Box sx={{ fontSize: '20px' }}>
            Cursos inscriptos
          </Box>
        </Paper>
      </Grid>


      <Grid item xs={8}>
        <CompletedTasksCard completedTasks={completedTasks} />
      </Grid>
      <Grid item xs={8}>
        <PendingTasksCard pendingTasks={pendingTasks} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;