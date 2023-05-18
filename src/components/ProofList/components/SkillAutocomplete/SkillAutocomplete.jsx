import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import { getAllSkills } from '../../../../shared/service/SkillService';
import { useLocation, useNavigate } from 'react-router-dom';

export const SkillAutocomplete = ({ width, handleAddSkill, setAllSkills, skill, setSkill }) => {
  const location = useLocation();
  const navigate = useNavigate();
  let query = new URLSearchParams(location.search);
  const skip = 0;
  const limit = 1000;
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSkills(skip, limit, filter)
      .then((response) => {
        setAllSkills && setAllSkills(response.data);
        const skills = response.data.sort((a, b) => {
          if (a.category < b.category) {
            return -1;
          }
          if (a.category > b.category) {
            return 1;
          }
          return 0;
        });
        setData(skills);
      })
      .catch(function (error) {
        console.log(error);
        navigate('/404', { replace: true });
      });
  }, [filter, skill]);

  const handleSkillChange = (event, newValue) => {
    setSkill(() => newValue);
    let searchParams = new URLSearchParams(location.search);
    searchParams.set('skill', newValue);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleFilterChange = (event) => {
    setFilter(() => event.target.value);
  };

  const onChangeFunction = (event, newValue, reason) => {
    if (handleAddSkill) {
      handleAddSkill(newValue);
    } else {
      handleSkillChange(event, newValue);
    }
    if (reason === 'clear') {
      setFilter(() => '');
    }
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data}
        groupBy={(option) => option.category}
        size="small"
        getOptionLabel={(option) => option.skill}
        value={skill}
        onChange={onChangeFunction}
        sx={{ width: `${!!width ? width : '100%'}`, mr: `${!!width ? '16px' : null}` }}
        filterSelectedOptions
        renderInput={(params) => (
          <Paper>
            <TextField
              {...params}
              sx={!!handleAddSkill && { bgcolor: 'neutral.white' }}
              label="Skills"
              variant={!!handleAddSkill ? 'outlined' : 'filled'}
              placeholder={`${data[Math.floor(Math.random() * data.length)].skill}`}
              onChange={handleFilterChange}
            />
          </Paper>
        )}
      />
    </>
  );
};
