import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import { getAllSkills } from '../../../../shared/service/SkillService';
import { useLocation, useNavigate } from 'react-router-dom';

export const SkillAutocomplete = ({ width, handleAddSkill, setAllSkills, skill, setSkill }) => {
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
    setSkill(() => newValue ? newValue.skill : '');
    let searchParams = new URLSearchParams(location.search);
    searchParams.set('skill', newValue ? newValue.skill : '');
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleFilterChange = (event) => {
    setFilter(() => event.target.value);
  };

  const onChangeFunction = (event, newValue, reason) => {
    if (handleAddSkill) {
      handleAddSkill(newValue.skill);
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




// export const SkillAutocomplete = ({ width, handleAddSkill, setAllSkills }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   let query = new URLSearchParams(location.search);
//   const skip = 0;
//   const limit = 1000;
//   const [filter, setFilter] = useState(query.get('filter') || '');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getAllSkills(skip, limit, filter)
//       .then((response) => {
//         setAllSkills && setAllSkills(response.data);
//         const skills = response.data.map((item) => item.skill);
//         setData(skills);
//       })
//       .catch(function (error) {
//         console.log(error);
//         navigate('/404', { replace: true });
//       });
//   }, [filter]);

//   const handleFilterChange = (event) => {
//     setFilter(() => event.target.value);
//     let searchParams = new URLSearchParams(location.search);
//     searchParams.set('filter', filter);
//     console.log(`${location.pathname}?${searchParams.toString()}`);
//     navigate(`${location.pathname}?${searchParams.toString()}`);
//   };

//   return (
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={data}
//       size="small"
//       getOptionLabel={(option) => option}
//       onChange={(event, newValue) => handleAddSkill && handleAddSkill(newValue)}
//       sx={{ width: `${!!width ? width : '100%'}`, mr: `${!!width ? '16px' : null}` }}
//       renderInput={(params) => (
//         <Paper>
//           <TextField
//             {...params}
//             sx={!!handleAddSkill && { bgcolor: 'neutral.white' }}
//             label="Filter"
//             variant={!!handleAddSkill ? 'outlined' : 'filled'}
//             onChange={handleFilterChange}
//           />
//         </Paper>
//       )}
//     />
//   );
// };