import { Chip, Stack } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TranslateIcon from '@mui/icons-material/Translate';
import PaletteIcon from '@mui/icons-material/Palette';
import SpeakerIcon from '@mui/icons-material/Speaker';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import PanToolIcon from '@mui/icons-material/PanTool';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

export const SkillList = ({ proofItem }) => {
  const categoryItem = (category) => {
    switch (category) {
      case 'cook':
        return <LocalDiningIcon color="neutral" />;
      case 'business':
        return <WorkIcon color="neutral" />;
      case 'crypto':
        return <CurrencyBitcoinIcon color="neutral" />;
      case 'it':
        return <LaptopChromebookIcon color="neutral" />;
      case 'music':
        return <MusicNoteIcon color="neutral" />;
      case 'write':
        return <DriveFileRenameOutlineIcon color="neutral" />;
      case 'blogging':
        return <CameraEnhanceIcon color="neutral" />;
      case 'microsoft':
        return <AttachFileIcon color="neutral" />;
      case 'language':
        return <TranslateIcon color="neutral" />;
      case 'paint':
        return <PaletteIcon color="neutral" />;
      case 'paint':
        return <PaletteIcon color="neutral" />;
      case 'dance':
        return <SpeakerIcon color="neutral" />;
      case 'handmade':
        return <PanToolIcon color="neutral" />;
      case 'sport':
        return <SportsBaseballIcon color="neutral" />;
      case 'boardGame':
        return <SportsScoreIcon color="neutral" />;
      default:
        return <LocalDiningIcon />;
    }
  };

  return (
    <Stack display="flex" flexDirection="row" flexWrap="wrap" mb="15px">
      {proofItem.map((item, i) => (
        <Chip
          icon={categoryItem(item.category)}
          key={i}
          label={item.skill}
          variant="outlined"
          sx={{
            mb: '10px',
            mr: '15px',
            p: '4px',
            bgcolor: 'secondary.main',
            borderColor: 'secondary.main',
            color: 'neutral.white',
          }}
        />
      ))}
    </Stack>
  );
};
