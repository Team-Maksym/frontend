import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const SmallTalentCard = ({talentName, position, avatar}) => {
	 return (
     <CardActionArea>
       <Card sx={{ alignItems: 'center', justifyContent: 'center', display: 'grid' }}>
         <Avatar
           alt={talentName} src={avatar} sx={{ bgcolor: 'secondary.main', width: '90px', height: '90px', m:'0 auto', mt:'10px', fontSize: '28px'}}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
             {talentName}
           </Typography>
           <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
             {position}
           </Typography>
         </CardContent>
       </Card>
     </CardActionArea>
   );
}
