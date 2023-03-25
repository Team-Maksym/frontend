import { SmallTalentCard } from "../SmallTalentCard";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const TalentList = ({ data }) => {
	const items = data.map((item, index) => {
			return (
        <Grid item xs={1} key={index}>
          <SmallTalentCard talentName={item.full_name} position={item.position} avatar={item.url} />
        </Grid>
      ); 
	})

	return (
    <Box sx={{ flexGrow: 1, m: '25px auto', p: '0 25px'}}>
      <Grid container spacing={3} columns={5}>
			{items}
      </Grid>
    </Box>
  );
}