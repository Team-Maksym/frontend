import { SmallTalentCard } from '../SmallTalentCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { GetAllUsers } from '../../service';
import * as React from 'react';


export const TalentList = () => {
  
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    GetAllUsers()
      .then((response) => {
        setTalents(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  
  const items = talents.map((item, index) => {
    return (
      <Grid item xs={1} key={index}>
        <SmallTalentCard
          talentName={item.firstName + ' ' + item.lastName}
          position={item.university}
          avatar={item.image}
        />
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1, m: '25px auto', p: '0 25px' }}>
      <Grid container spacing={3} columns={5} sx={{alignItems: 'stretch'}}>
        {items}
      </Grid>
    </Box>
  );
};
