import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from '../../redux/appRedux';

import {
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
  Checkbox,
  Typography,
  Autocomplete,
  IconButton,

} from '@mui/material';
import { LocationOn as LocationOnIcon } from '@mui/icons-material';

 

const Cursado = () => {
  const dispatch = useDispatch();
  const cursos = useSelector(appSelector.cursos);
  const [text, setText] = useState('');

  const handleChange = (e, value) => {
    setText(value);
  };

  const handleChecked = (e, id) => {
    dispatch(appActions.setCompletedCursado({ id, completed: e.target.checked }));
  };

  const addTask = () => {
    if (text && !cursos.some(curso => curso.text === text)) {
      dispatch(appActions.addCursado({ text, id: uuid() }));
      setText('');
    }
  }
  const delTask = (id) => {
    dispatch(appActions.deleteCursado(id));

  };

  const handleLocation = (id) => {
    setShowImage(true);
    console.log(`Abrir mapa para el curso con ID ${id}`);
  };

  const [showImage, setShowImage] = useState(false);
  {showImage && (
    <img
      src="../../assets/images/unlar.png"
      alt="ubicación del cursado"
      style={{ width: '100%', height: 'auto', marginTop: '10px' }}
    />
  )}
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Card>
            <CardHeader title="Agrega un curso a realizar" />
            <CardContent>
              <Stack sx={{ justifyContent: 'space-around' }} direction="row">
                <Grid item md={6}>
                  <Autocomplete
                    options={["Fundamentos de Programación", "Diseño Web Profesional", "Inteligencia Artificial y Aprendizaje Automático",
                      "Estrategias Avanzadas de Marketing Digital", "Desarrollo Avanzado de Aplicaciones Móviles"]}
                    value={text}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} label="Cursos disponibles" variant="outlined" />
                    )}
                  />
                </Grid>
                <Grid item md={6}>
                  <Button sx={{ marginLeft: '30px', marginTop: '5px' }} variant="contained" onClick={addTask}>
                    Agregar
                  </Button>
                </Grid>
              </Stack>
            </CardContent>
          </Card>


          <Card>
            <CardHeader title="Cursos" />
            <CardContent>
              {cursos.map((t, index) => (
                <Stack key={t.id} sx={{ justifyContent: 'space-between' }} direction="row">
                  <Grid item md={1}>
                    <Checkbox checked={t.completed} onChange={(e) => handleChecked(e, t.id)} />
                  </Grid>
                  <Grid item md={9} sx={{ pt: 1 }}>
                    <Typography sx={{ fontSize: 18, fontWeight: 700 }}>{t.text}</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Stack direction="row" spacing={1}>

                      {/* boton gps */}
                      <IconButton
                        variant="contained"
                        onClick={() => handleLocation(t.id)}
                        size="small"
                        sx={{ color: 'info.main' }}>
                        <LocationOnIcon />


                      </IconButton>
                      <Button variant="contained" onClick={() => delTask(t.id)}>
                        Eliminar
                      </Button>
                    </Stack>
                  </Grid>
                </Stack>
              ))}
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Cursado;
