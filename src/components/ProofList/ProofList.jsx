import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Wrapper } from '../Wrapper';
import { ProofItem } from '../../shared/components/ProofItem';
import { ProofDescription } from '../../shared/components/ProofDescription';
export const ProofList = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChangeAcordion = (panel) => (event, isExpanded) => {
    if (open === false) {
      setExpanded(isExpanded ? panel : false);
    }
  };

  const desc =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur exercitationem iusto facilis. Tenetur, quae voluptatibus, consequatur incidunt distinctio harum quaerat quis nobis natus, consequuntur a beatae laboriosam earum corporis labore ea dolorem quas cum laborum. Delectus, cum maiores minima hic atque corporis impedit libero voluptatum odio! Deleniti reprehenderit dolorem quae debitis, libero accusamus vitae, et sit magni porro dolore sequi odio, enim sapiente mollitia eligendi asperiores! Cumque, in sunt. Dignissimos laborum hic explicabo esse, quaerat, ullam, molestias accusamus nesciunt eveniet dolores aliquam expedita recusandae reprehenderit voluptate voluptas provident ipsam facere. Ratione natus necessitatibus earum ad ea, similique dolorum doloremque itaque vel iure velit nemo quasi quaerat ex odio exercitationem animi maxime saepe ipsam et officiis pariatur asperiores voluptatibus voluptatem? Architecto consectetur quo debitis repudiandae tenetur ex voluptates ipsam recusandae aliquam dolorum! Hic fugit, voluptatem explicabo, omnis amet at nulla perspiciatis consectetur dolor minus veritatis ipsum laborum autem architecto, cum sed. Architecto illo quasi iure repudiandae laudantium soluta et asperiores eveniet corporis adipisci reiciendis nesciunt animi facere, est blanditiis deserunt nostrum porro velit inventore. Provident corporis inventore tempore! Sed dignissimos veritatis velit labore, obcaecati et maxime rem consequuntur itaque impedit modi amet aliquid, eveniet doloremque quas! Doloribus, ratione. Eveniet, animi ad?';
  const title =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias minus omnis reiciendis aspernatur! Quas incidunt distinctio nostrum velit recusandae quae.';
  const el = { title: title.substring(0, 70), desc: desc };

  const publishedLength = [el, el, el, el, el, el, el];

  return (
    <Wrapper>
      <Box sx={{ mt: '56px' }}>
        {publishedLength.map((item, i) => {
          return (
            <Box key={i}>
              <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
                {item.title}
              </Typography>
              <Accordion
                expanded={expanded === `panel${i}`}
                onChange={handleChangeAcordion(`panel${i}`)}
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
        })}
      </Box>
    </Wrapper>
  );
};
