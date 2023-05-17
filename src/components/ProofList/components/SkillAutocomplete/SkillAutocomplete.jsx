import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import { getAllSkills } from '../../../../shared/service/SkillService';
import { useNavigate } from 'react-router-dom';

export const SkillAutocomplete = () => {
  const navigate = useNavigate();
  const skip = 0;
  const limit = 1000;
  const filter = '';
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSkills(skip, limit, filter)
      .then((response) => {
        const skills = response.data.map((item) => item.skill);
        setData(skills);
      })
      .catch(function (error) {
        console.log(error);
        navigate('/404', { replace: true });
      });
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      size="small"
      getOptionLabel={(option) => option}
      sx={{ width: 300, mr: '16px' }}
      renderInput={(params) => (
        <Paper>
          <TextField {...params} label="Filter" variant="filled" />
        </Paper>
      )}
    />
  );
};
//серый фон и белый текст