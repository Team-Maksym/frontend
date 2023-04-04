import { useContext } from 'react';
import { TalentContext } from '../../../shared/context/TalentContext';
import { Card, CardContent, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Email, Cake, School, WorkHistory } from '@mui/icons-material';

export const BigTalentCard = () => {
  const { talent } = useContext(TalentContext);

  if (!talent) {
    return null;
  }

  const icons = { email: <Email />, birthday: <Cake />, education: <School />, experience: <WorkHistory /> };

  return (
    <Card sx={{ maxWidth: 360, textAlign: 'center', p: 2, borderRadius: 3, bgcolor: 'primary.main', color: '#fff' }}>
      <Avatar
        alt={talent.full_name}
        src={talent.avatar}
        sx={{
          bgcolor: 'secondary.main',
          width: '150px',
          height: '150px',
          m: '15px auto',
          fontSize: '28px',
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {talent.full_name}
        </Typography>
        <List>
          {Object.keys(icons).map((item) => (
            <ListItem disablePadding sx={{ m: '7px auto' }} key={item}>
              <ListItemIcon
                sx={{
                  justifyContent: 'center',
                }}
              >
                {icons[item]}
              </ListItemIcon>
              <ListItemText primary={talent[item] || '-'} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body2" color="text.secondary">
          {talent.positions || '-'}
        </Typography>
      </CardContent>
    </Card>
  );
};

