import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Wrapper } from '../Wrapper';
import { ProofItem } from '../../shared/components/ProofItem';
import { ProofDescription } from '../../shared/components/ProofDescription';
import { PaginationCustom } from '../Home/components/TalentList/components/PaginationCustom';
import { getAllProofs } from '../../shared/service/ProofService';
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
      <Box key={i}>
        <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
          {item.title}
        </Typography>
        <Accordion
          expanded={expanded === `panel${i}`}
          onChange={handleChangeAccordion(`panel${i}`)}
          sx={{ mb: '30px' }}
        >
          <AccordionSummary
            sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls={`panel${i}bh-content`}
            id={`panel${i}bh-header`}
          >
            <ProofItem description={item.desc} />
          </AccordionSummary>
          <ProofDescription description={item.desc} />
        </Accordion>
      </Box>
    );
  });

  return (
    <Wrapper>
      <Box sx={{ mt: '56px' }}>
        {items}
        <PaginationCustom setHook={setProofs} queryFunction={getAllProofs} setLoading={setLoading} />
      </Box>
    </Wrapper>
  );
};
