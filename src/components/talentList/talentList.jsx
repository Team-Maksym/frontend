import { SmallTalentCard } from "../smallTalentCard";

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
    <Box sx={{ flexGrow: 1, maxWidth: '1200px', m: '100px auto'}}>
      <Grid container spacing={4} columns={5}>
			{items}
      </Grid>
    </Box>
  );
}