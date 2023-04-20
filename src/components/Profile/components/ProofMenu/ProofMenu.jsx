import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TabPanel } from './TabPanel/TabPanel';
import { Accordion, AccordionSummary, Box, Typography, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProofDescription } from '../../../../shared/components/ProofDescription';
import { ProofItemProfile } from './ProofItemProfile';
import { ProofItem } from '../../../../shared/components/ProofItem';
import { getOneTalentProofs } from '../../../../shared/service/ProfileService';
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const ProofMenu = ({ actionsAccess, publish, talent }) => {
  const [published, setPublished] = useState();
  const [drafted, setDrafted] = useState();
  const [hiddened, setHiddened] = useState();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChangeAcordion = (panel) => (event, isExpanded) => {
    if (open === false) {
      setExpanded(isExpanded ? panel : false);
    }
  };
  // const [hidden, setHidden] = useState(null);
  // const [draft, setDraft] = useState(null);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    const items = ['PUBLISHED', 'DRAFT', 'HIDDEN'];

    getOneTalentProofs(talent, items[newValue]).then((proofs) => {
      switch (items[newValue]) {
        case 'PUBLISHED':
          setPublished(() => proofs.data);
          break;
        case 'DRAFT':
          setDrafted(() => proofs.data);
          break;
        case 'HIDDEN':
          setHiddened(() => proofs.data);

          break;
      }
    });
    console.log(items[newValue]);
    setExpanded(false);
    setValue(newValue);
  };
  useEffect(() => {
    setPublished(publish);
  });
  return (
    <Box sx={{ maxWidth: '850px', mt: '56px' }}>
      <Box sx={{ pl: '25px' }}>
        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
          <Tab label="Published" sx={{ color: 'neutral.white' }} />
          {actionsAccess && <Tab label="Drafts" sx={{ color: 'neutral.white' }} />}
          {actionsAccess && <Tab label="Hidden" sx={{ color: 'neutral.white' }} />}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {published &&
          published.map((item, i) => {
            return (
              <Box key={i}>
                <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
                  {item.title}
                </Typography>
                <Accordion
                  expanded={expanded === `panel${i}`}
                  onChange={handleChangeAcordion(`panel${i}`)}
                  sx={{ mb: '10px' }}
                >
                  <AccordionSummary
                    sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls={`panel${i}bh-content`}
                    id={`panel${i}bh-header`}
                  >
                    <ProofItem
                      description={item.description}
                      children={actionsAccess && <ProofItemProfile val={value} talent={talent} id={item.id} />}
                    />
                  </AccordionSummary>
                  <ProofDescription description={item.description} link={item.link} />
                </Accordion>
              </Box>
            );
          })}
      </TabPanel>
      {actionsAccess && (
        <>
          <TabPanel value={value} index={1}>
            {drafted &&
              drafted.map((item, i) => {
                return (
                  <Box key={i}>
                    <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
                      {item.title}
                    </Typography>
                    <Accordion
                      expanded={expanded === `panel${i}`}
                      onChange={handleChangeAcordion(`panel${i}`)}
                      sx={{ mb: '10px' }}
                    >
                      <AccordionSummary
                        sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls={`panel${i}bh-content`}
                        id={`panel${i}bh-header`}
                      >
                        <ProofItem
                          description={item.description}
                          children={<ProofItemProfile val={value} talent={talent} id={item.id} />}
                        />
                      </AccordionSummary>
                      <ProofDescription description={item.description} link={item.link} />
                    </Accordion>
                  </Box>
                );
              })}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {hiddened &&
              hiddened.map((item, i) => {
                return (
                  <Box key={i}>
                    <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
                      {item.title}
                    </Typography>
                    <Accordion
                      expanded={expanded === `panel${i}`}
                      onChange={handleChangeAcordion(`panel${i}`)}
                      sx={{ mb: '10px' }}
                    >
                      <AccordionSummary
                        sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls={`panel${i}bh-content`}
                        id={`panel${i}bh-header`}
                      >
                        <ProofItem
                          description={item.description}
                          children={<ProofItemProfile val={value} talent={talent} id={item.id} />}
                        />
                      </AccordionSummary>
                      <ProofDescription description={item.description} link={item.link} />
                    </Accordion>
                  </Box>
                );
              })}
          </TabPanel>
        </>
      )}
    </Box>
  );
};
