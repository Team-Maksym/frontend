import React, { useState } from 'react';
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

export const ProofMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChangeAcordion = (panel) => (event, isExpanded) => {
    if (open === false) {
      setExpanded(isExpanded ? panel : false);
    }
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setExpanded(false);
    setValue(newValue);
  };
  const desc =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur exercitationem iusto facilis. Tenetur, quae voluptatibus, consequatur incidunt distinctio harum quaerat quis nobis natus, consequuntur a beatae laboriosam earum corporis labore ea dolorem quas cum laborum. Delectus, cum maiores minima hic atque corporis impedit libero voluptatum odio! Deleniti reprehenderit dolorem quae debitis, libero accusamus vitae, et sit magni porro dolore sequi odio, enim sapiente mollitia eligendi asperiores! Cumque, in sunt. Dignissimos laborum hic explicabo esse, quaerat, ullam, molestias accusamus nesciunt eveniet dolores aliquam expedita recusandae reprehenderit voluptate voluptas provident ipsam facere. Ratione natus necessitatibus earum ad ea, similique dolorum doloremque itaque vel iure velit nemo quasi quaerat ex odio exercitationem animi maxime saepe ipsam et officiis pariatur asperiores voluptatibus voluptatem? Architecto consectetur quo debitis repudiandae tenetur ex voluptates ipsam recusandae aliquam dolorum! Hic fugit, voluptatem explicabo, omnis amet at nulla perspiciatis consectetur dolor minus veritatis ipsum laborum autem architecto, cum sed. Architecto illo quasi iure repudiandae laudantium soluta et asperiores eveniet corporis adipisci reiciendis nesciunt animi facere, est blanditiis deserunt nostrum porro velit inventore. Provident corporis inventore tempore! Sed dignissimos veritatis velit labore, obcaecati et maxime rem consequuntur itaque impedit modi amet aliquid, eveniet doloremque quas! Doloribus, ratione. Eveniet, animi ad?';
  const title =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias minus omnis reiciendis aspernatur! Quas incidunt distinctio nostrum velit recusandae quae.';
  const link = 'https://mui.com/material-ui/react-link/';
  const el = { title: title.substring(0, 70), desc: desc, link: link };

  const publishedLength = [el, el, el, el];
  const draftsLength = [el, el, el];
  const hiddenLength = [el, el];

  return (
    <Box sx={{ maxWidth: '900px', mt: '56px' }}>
      <Box sx={{ pl: '25px' }}>
        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
          <Tab label="Published" sx={{ color: 'neutral.white' }} />
          <Tab label="Drafts" sx={{ color: 'neutral.white' }} />
          <Tab label="Hidden" sx={{ color: 'neutral.white' }} />
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
                  <ProofItem description={item.desc} children={<ProofItemProfile val={value} />} />
                </AccordionSummary>
                <ProofDescription description={item.desc} link={item.link} />
              </Accordion>
            </Box>
          );
        })}
      </TabPanel>
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
    </Box>
  );
};
