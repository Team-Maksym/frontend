import { useEffect, useRef, useState } from 'react';
import { getAllSkills } from '../../../../shared/service/SkillService';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TagCloud from 'TagCloud';

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

  const Box = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '.tagcloud': {
      fontFamily: ` 'Poppins', sans-serif`,
      fontSize: '26px',
      margin: 'auto',
      width: '50%',
      color: '#f5f0e8',
    },
    '.tagcloud--item:hover': {
      color: '#ff5722',
    },
  }));

  return (
    <Box>
      <span className="tagcloud sphere" ref={sphereRef} />
    </Box>
  );
};
