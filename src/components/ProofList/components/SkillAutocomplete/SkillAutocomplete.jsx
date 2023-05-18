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
  // const [skill, setSkill] = useState(query.get('skill') || '');
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSkills(skip, limit, filter)
      .then((response) => {
        setAllSkills && setAllSkills(response.data);
        const skills = response.data.map((item) => item.skill);
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
  const handleFilterChange = (event, newValue) => {
    setFilter(() => event.target.value);
    // let searchParams = new URLSearchParams(location.search);
    // searchParams.set('filter', filter);
    // navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const onChangeFunction = (event, newValue) => {
    if (handleAddSkill) {
      handleAddSkill(newValue);
    } else {
      handleSkillChange(event, newValue);
    }
  };

  return (
    <>
      <Autocomplete
        // multiple
        id="tags-outlined"
        options={data}
        size="small"
        getOptionLabel={(option) => option}
        value={skill}
        onChange={onChangeFunction}
        onClose={(event, reason) => {
          if (reason === 'clear') {
            setFilter(() => '');
          }
        }}
        sx={{ width: `${!!width ? width : '100%'}`, mr: `${!!width ? '16px' : null}` }}
        filterSelectedOptions
        renderInput={(params) => (
          <Paper>
            <TextField
              {...params}
              label="Filter"
              variant="filled"
              placeholder="Favorites"
              onChange={handleFilterChange}
            />
          </Paper>
        )}
      />
    </>
  );
};
