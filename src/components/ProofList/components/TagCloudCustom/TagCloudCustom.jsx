import { useEffect, useRef } from 'react';
import { getAllSkills } from '../../../../shared/service/SkillService';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import TagCloud from 'TagCloud';
import { useContext } from 'react';
import { PersonContext } from '../../../../shared/context';

export const TagCloudCustom = () => {
  const { open } = useContext(PersonContext);

  const sphereRef = useRef(null);
  const skip = 0;
  const limit = 1000;
  let location = useLocation();


  useEffect(() => {
    getAllSkills(skip, limit, '')
      .then((response) => {
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [location, open]);

  const Box = styled('div')(() => ({
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
