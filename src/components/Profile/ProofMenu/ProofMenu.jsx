import React from 'react';
import PropTypes from 'prop-types';
import { TabPanel } from './TabPanel/TabPanel';
import { Accordion, AccordionSummary, Box, Typography, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProofItem } from '../../../shared/components/ProofItem';
import { ProofItemProfile } from './ProofItemProfile';
import { ProofDescription } from '../../../shared/components/ProofDescription';
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const ProofMenu = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleChangeAcordion = (panel) => (isExpanded) => {
    if (open === false) {
      setExpanded(isExpanded ? panel : false);
    }
  };

  const publishedLength = [1, 2, 3, 4];
  const draftsLength = [1, 2, 3];
  const hiddenLength = [1, 2];

  return (
    <Box sx={{ maxWidth: '920px', mt: '56px' }}>
      <Box sx={{ pl: '25px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor=""
        >
          <Tab
            label="Published"
            sx={{ p: '10px', borderRadius: '10px', bgcolor: 'primary.main', color: 'neutral.white', mr: '10px' }}
          />
          <Tab
            label="Drafts"
            sx={{ p: '10px', borderRadius: '10px', bgcolor: 'primary.main', color: 'neutral.white', mr: '10px' }}
          />
          <Tab
            label="Hidden"
            sx={{ p: '10px', borderRadius: '10px', bgcolor: 'primary.main', color: 'neutral.white', mr: '10px' }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {publishedLength.map((item) => {
          return (
            <Box>
              <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
                Proof {item}
              </Typography>
              <Accordion
                expanded={expanded === `panel${item}`}
                onChange={handleChangeAcordion(`panel${item}`)}
                sx={{ mb: '10px' }}
              >
                <AccordionSummary
                  sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls={`panel${item}bh-content`}
                  id={`panel${item}bh-header`}
                >
                  <ProofItem children={<ProofItemProfile />} />
                </AccordionSummary>
                <ProofDescription />
              </Accordion>
            </Box>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {draftsLength.map((item) => {
          return (
            <Box>
              <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
                Proof {item}
              </Typography>
              <Accordion
                expanded={expanded === `panel${item}`}
                onChange={handleChangeAcordion(`panel${item}`)}
                sx={{ mb: '10px' }}
              >
                <AccordionSummary
                  sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls={`panel${item}bh-content`}
                  id={`panel${item}bh-header`}
                >
                  <ProofItem children={<ProofItemProfile />} />
                </AccordionSummary>
                <ProofDescription />
              </Accordion>
            </Box>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {hiddenLength.map((item) => {
          return (
            <Box>
              <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
                Proof {item}
              </Typography>
              <Accordion
                expanded={expanded === `panel${item}`}
                onChange={handleChangeAcordion(`panel${item}`)}
                sx={{ mb: '10px' }}
              >
                <AccordionSummary
                  sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls={`panel${item}bh-content`}
                  id={`panel${item}bh-header`}
                >
                  <ProofItem children={<ProofItemProfile />} />
                </AccordionSummary>
                <ProofDescription />
              </Accordion>
            </Box>
          );
        })}
      </TabPanel>
    </Box>
  );
};
