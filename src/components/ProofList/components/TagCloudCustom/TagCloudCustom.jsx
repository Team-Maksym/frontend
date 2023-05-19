import { useEffect, useRef, useState } from 'react';
import { getAllSkills } from '../../../../shared/service/SkillService';
import { useNavigate } from 'react-router-dom';
import TagCloud from 'TagCloud'
import { Box, display } from '@mui/system';

export const TagCloudCustom = () => {
  const sphereRef = useRef(null);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  const skip = 0;
  const limit = 1000;

  useEffect(() => {
    getAllSkills(skip, limit, filter)
      .then((response) => {
        if (sphereRef.current) {
          sphereRef.current.innerHTML = '';
          TagCloud(
            sphereRef.current,
            response.data.map((item) => item.skill),
            {
              radius: 1000,
              maxSpeed: 'fast',
              initSpeed: 'fast',
              direction: 135,
              keep: true,
            },
          );
        }
      })
      .catch(function (error) {
        console.log(error);
        navigate('/404', { replace: true });
      });
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box sx={{ transform: 'translate(-11%, -25%)' }}>
      <style>
        {`
        .tagcloud {
          font-family: 'Poppins', sans-serif;
          font-size: 26px;
          margin: auto;
          width: 50%;
          color: #f5f0e8;
        }

        .tagcloud--item:hover {
          color: #ff5722;
        }
        `}
      </style>
      {/* <input type="text" value={filter} onChange={handleFilterChange} /> */}
      <span className="tagcloud sphere" ref={sphereRef} />
    </Box>
  );
};
