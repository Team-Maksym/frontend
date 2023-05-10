import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TabPanel } from '../TabPanel';
import { TabItem } from '../TabItem';
import { getKudosses } from '../../../../../../shared/service/SponsorProfileService';
import { getProofById } from '../../../../../../shared/service/ProofService/ProofService';
import { ProofsOneTalentContext } from '../../../../../../shared/context';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const ProofMenuSponsor = ({ actionsAccess, sponsorId }) => {
  const navigate = useNavigate();
  const [proofs, setProofs] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(0);

  const handleChangeAcordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const findCurrentProofInfo = (proofId, status) => {
    return status.find((item) => item.id === proofId);
  };

  const handleChange = (event, newValue) => {
    setExpanded(false);
    setValue(newValue);
  };

  useEffect(() => {
    getKudosses(sponsorId).then((kudosInfo) => {
      Promise.all(kudosInfo.data.map((item) => getProofById(item.proof_id)))
        .then((proofs) => setProofs(() => proofs))
        .catch(() => {
          navigate('/404', { replace: true });
        });
    });
  }, [sponsorId]);

  return (
    <ProofsOneTalentContext.Provider
      value={{
        findCurrentProofInfo,
        expanded,
        handleChangeAcordion,
        actionsAccess,
        personRole: 'ROLE_SPONSOR'
      }}
    >
      <Box
        sx={{
          width: '100%',
          mt: '40px',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '7px',
            backgroundColor: 'neutral.white',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'primary.main',
          },
        }}
      >
        <Box sx={{ pl: '10px', position: 'sticky', top: '0', right: '0', bgcolor: 'neutral.whiteGrey', zIndex: '3' }}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
            {actionsAccess && (
              <Tab
                label="Praised"
                sx={{ color: 'neutral.white' }}
                value={0}
              />
            )}
          </Tabs>
        </Box>

        <TabItem value={value} index={0} type={proofs} />
      </Box>
    </ProofsOneTalentContext.Provider>
  );
};

