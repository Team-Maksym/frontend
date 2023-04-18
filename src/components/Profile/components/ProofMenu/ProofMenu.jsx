import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TabPanel } from './TabPanel/TabPanel';
import { Accordion, AccordionSummary, Box, Typography, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProofDescription } from '../../../../shared/components/ProofDescription';
import { ProofItemProfile } from './ProofItemProfile';
import { ProofItem } from '../../../../shared/components/ProofItem';
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const ProofMenu = ({ actionsAccess, published, hidden, draft }) => {
  const [publish, setPublish] = useState([]);
  const [drafted, setDrafted] = useState([]);
  const [hiddened, setHiddened] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    if (open === false) {
      setExpanded(isExpanded ? panel : false);
    }
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setExpanded(false);
    setValue(newValue);
  };
  useEffect(() => {
    setPublish(published);
    setHiddened(hidden);
    setDrafted(draft);
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
        {publishedLength.map((item, i) => {
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
                  <ProofItem description={item.desc} children={actionsAccess && <ProofItemProfile val={value} />} />
                </AccordionSummary>
                <ProofDescription description={item.desc} link={item.link} />
              </Accordion>
            </Box>
          );
        })}
      </TabPanel>
      {actionsAccess && (
        <>
          <TabPanel value={value} index={1}>
            {draftsLength.map((item, i) => {
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
                      <ProofItem description={item.desc} children={<ProofItemProfile val={value} />} />
                    </AccordionSummary>
                    <ProofDescription description={item.desc} link={item.link} />
                  </Accordion>
                </Box>
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {hiddenLength.map((item, i) => {
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
                      <ProofItem description={item.desc} children={<ProofItemProfile val={value} />} />
                    </AccordionSummary>
                    <ProofDescription description={item.desc} link={item.link} />
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
