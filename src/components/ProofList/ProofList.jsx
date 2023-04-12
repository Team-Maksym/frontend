import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Wrapper } from '../Wrapper';
import { ProofItem } from '../../shared/components/ProofItem';
import { ProofDescription } from '../../shared/components/ProofDescription';
import { PaginationCustom } from '../Home/components/TalentList/components/PaginationCustom';
import { getAllProofs } from '../../shared/service/ProofService';
import { format } from 'date-fns';
export const ProofList = () => {
  const [proofs, setProofs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    if (open === false) {
      setExpanded(isExpanded ? panel : false);
    }
  };

  const items = proofs.map((item, i) => {
    return (
      <Box key={item.id} borderRadius={2} sx={{ bgcolor: 'primary.main' }}>
        <Typography variant="h5" sx={{ p: '10px', color: 'neutral.white' }}>
          {item.title}
          <Typography variant="subtitle1" sx={{ mt: '10px', color: 'secondary.main' }}>
            {format(new Date(item.date_created), 'dd.MM.yyyy HH:mm')}
          </Typography>
        </Typography>
        <Accordion
          expanded={expanded === `panel${i}`}
          onChange={handleChangeAccordion(`panel${i}`)}
          sx={{ mb: '30px', mx: '5px', py: '5px', bgcolor: 'neutral.whiteGrey' }}
        >
          <AccordionSummary
            sx={{ bgcolor: 'neutral.whiteGrey', color: 'neutral.white' }}
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls={`panel${i}bh-content`}
            id={`panel${i}bh-header`}
          >
            <ProofItem description={item.description} />
          </AccordionSummary>
          <ProofDescription description={item.description} />
        </Accordion>
      </Box>
    );
  });

  return (
    <Wrapper>
      <Box sx={{ mt: '56px' }}>
        {items}
        <PaginationCustom size={8} setHook={setProofs} queryFunction={getAllProofs} setLoading={setLoading} />
      </Box>
    </Wrapper>
  );
};
