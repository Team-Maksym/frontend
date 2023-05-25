import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import { getAllSkills } from '../../../../shared/service/SkillService';
import { useLocation, useNavigate } from 'react-router-dom';

export const SkillAutocomplete = ({ width, handleAddSkill, usedSkills, setAllSkills, skill, setSkill }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const skip = 0;
  const limit = 1000;
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSkills(skip, limit, filter)
      .then((response) => {
        setAllSkills && setAllSkills(response.data);
        let skills = response.data.sort((a, b) => {
          if (a.category < b.category) {
            return -1;
          }
          if (a.category > b.category) {
            return 1;
          }
          return 0;
        });

        skills = dataValidator(skills);
        setData(skills);
      })
      .catch(function (error) {
        console.log(error);
        navigate('/404', { replace: true });
      });
  }, [filter, skill]);

  useEffect(() => {
    const skills = dataValidator(data);
    setData(skills);
  }, [usedSkills?.length]);

  const handleSkillChange = (event, newValue) => {
    setSkill(() => (newValue ? newValue.skill : ''));
    let searchParams = new URLSearchParams(location.search);
    newValue ? searchParams.set('skill', newValue.skill) : searchParams.delete('skill');
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleFilterChange = (event) => {
    setFilter(() => event.target.value);
  };

  const onChangeFunction = (event, newValue, reason) => {
    if (handleAddSkill) {
      handleAddSkill(newValue?.skill);
    } else {
      handleSkillChange(event, newValue);
    }
    if (reason === 'clear') {
      setFilter(() => '');
    }
  };

  const dataValidator = (data) => {
    if (!!usedSkills && usedSkills.length > 0) {
      const skillNames = usedSkills.map((usedSkill) => {
        return !!usedSkill.skill ? usedSkill.skill : usedSkill;
      });

      const skills = data.filter((item) => {
        if (!skillNames.includes(item.skill)) {
        }
        return !skillNames.includes(item.skill);
      });
      return skills;
    } else {
      return data;
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
        getOptionLabel={(option) => option.skill ?? option}
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
              placeholder="Any skill"
              onChange={handleFilterChange}
            />
          </Paper>
        )}
      />
    </>
  );
};

