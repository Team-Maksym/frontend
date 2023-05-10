import { useContext } from 'react';
import { ProofsOneTalentContext } from '../../../../../../shared/context';

import { Accordion, AccordionSummary, Box, Typography, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProofItemProfile } from '../ProofItemProfile';
import { TabPanel } from '../TabPanel';
import { ProofItem } from '../../../../../../shared/components/ProofItem';
import { ProofDescription } from '../../../../../../shared/components/ProofDescription';
import { Kudos } from '../../Kudos';
import { EmptyProofs } from '../EmptyProofs/EmptyProofs';

export const TabItem = ({ value, index, type }) => {
  const { drafted, expanded, handleChangeAcordion, actionsAccess, personRole } = useContext(ProofsOneTalentContext);

  return (
    <TabPanel value={value} index={index}>
      {type?.length ? (
        type.map((item, i) => {
          return (
            <Box key={i}>
              <Typography variant="h5" sx={{ my: '10px', color: 'neutral.white' }}>
                {item.title}
              </Typography>
              <Accordion expanded={expanded === `panel${i}`} onChange={handleChangeAcordion(`panel${i}`)}>
                <AccordionSummary
                  sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls={`panel${i}bh-content`}
                  id={`panel${i}bh-header`}
                >
                  <Stack spacing={2} sx={{ display: 'block', width: '100%' }}>
                    <ProofItem
                      description={item.description}
                      children={
                        actionsAccess &&
                        personRole !== 'ROLE_SPONSOR' && <ProofItemProfile val={value} id={item.id} status={drafted} />
                      }
                    />
                    <Kudos proofId={item.id} isKudosBtnShowing={!actionsAccess} />
                  </Stack>
                </AccordionSummary>
                <ProofDescription description={item.description} link={item.link} />
              </Accordion>
            </Box>
          );
        })
      ) : (
        <EmptyProofs />
      )}
    </TabPanel>
  );
};

