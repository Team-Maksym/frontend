import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, Box, Typography, Tabs, Tab, Fab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { ProofItemProfile } from './components/ProofItemProfile';
import { TabPanel } from './components/TabPanel';
import { getCurrentTalentId } from '../../../../shared/service/AuthorizationService';
import { NewProofModal } from './components/NewProofModal';
import { ProofItem } from '../../../../shared/components/ProofItem';
import { ProofDescription } from '../../../../shared/components/ProofDescription';
import { useNavigate } from 'react-router-dom';
import { DeleteProofModal } from './components/DeleteProofModal';
import { EditProofModal } from './components/EditProofModal/EditProofModal';
import { getOneTalentProofs } from '../../../../shared/service/ProfileService';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const ProofMenu = ({ actionsAccess, talentId }) => {
  const location = useLocation();
  const navigate = useNavigate();
  let query = new URLSearchParams(location.search);
  let AuthTalentId = getCurrentTalentId();

  const [published, setPublished] = useState();
  const [updated, setUpdated] = useState(false)
  const [drafted, setDrafted] = useState([]);
  const [hiddened, setHiddened] = useState();
  const [expanded, setExpanded] = useState(false);
  const [newProofModalOpen, setNewProofModalOpen] = useState(false);
  const [proofId, setProofId] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [proofInfo, setProofInfo] = useState({});
  const [value, setValue] = useState(0);

  const handleChangeAcordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const findCurrentProofInfo = (proofId, status) => {
    return status.find((item) => item.id === proofId);
  };

  const openNewProofModal = () => {
    setNewProofModalOpen(() => true);
  };

  const handleCloseNewProofModal = () => {
    setNewProofModalOpen(() => false);
  };

  const getProofsByStatus = async (status, setStatus, value) => {
    await getOneTalentProofs(talentId, status)
      .then((proofs) => {
        setStatus(proofs.data);
        setValue(value);
      })
      .catch(function (error) {
        console.log(error);
        navigate('/404', { replace: true });
      });
  };

  useEffect(() => {
    const url = query.get('status');

    if (url === 'draft' && talentId === AuthTalentId) {
      getProofsByStatus('DRAFT', setDrafted, 1);
    } else if (url === 'hidden' && talentId === AuthTalentId) {
      getProofsByStatus('HIDDEN', setHiddened, 2);
    } else {
      getProofsByStatus('PUBLISHED', setPublished, 0);
    }

    setUpdated(false)

  }, [updated, location.search]);

  const TabItem = ({ value, index, type }) => {
    return (
      <TabPanel value={value} index={index}>
        {type &&
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
                    <ProofItem
                      description={item.description}
                      children={
                        actionsAccess && (
                          <ProofItemProfile
                            val={value}
                            id={item.id}
                            setProofId={setProofId}
                            setOpenDeleteModal={setOpenDeleteModal}
                            setOpenEditModal={setOpenEditModal}
                            status={drafted}
                            findProofInfo={findCurrentProofInfo}
                            setProofInfo={setProofInfo}
                            talentId={talentId}
                            setUpdated={setUpdated}
                          />
                        )
                      }
                    />
                  </AccordionSummary>
                  <ProofDescription description={item.description} link={item.link} />
                </Accordion>
              </Box>
            );
          })}
      </TabPanel>
    );
  };

  return (
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
      <Box sx={{ pl: '25px', position: 'sticky', top: '0', right: '0', bgcolor: 'neutral.whiteGrey', zIndex: '3' }}>
        <Tabs value={value} textColor="secondary" indicatorColor="secondary">
          <Tab
            value={0}
            label="Published"
            sx={{ color: 'neutral.white' }}
            component={Link}
            to={`/profile/${talentId}?status=published`}
            onClick={() => getProofsByStatus('PUBLISHED', setPublished, 0)}
          />
          {actionsAccess && (
            <Tab
              label="Draft"
              sx={{ color: 'neutral.white' }}
              value={1}
              component={Link}
              to={`/profile/${talentId}?status=draft`}
              onClick={() => getProofsByStatus('DRAFT', setDrafted, 1)}
            />
          )}
          {actionsAccess && (
            <Tab
              label="Hidden"
              sx={{ color: 'neutral.white' }}
              value={2}
              component={Link}
              to={`/profile/${talentId}?status=hidden`}
              onClick={() => getProofsByStatus('HIDDEN', setHiddened, 2)}
            />
          )}
        </Tabs>

        {actionsAccess && (
          <Fab
            onClick={openNewProofModal}
            color="secondary"
            aria-label="add"
            sx={{ position: 'sticky', top: '5px', left: '90%', mt: '-100%' }}
          >
            <AddIcon />
          </Fab>
        )}
      </Box>

      <TabItem value={value} index={0} type={published}></TabItem>
      {actionsAccess && (
        <>
          <TabItem value={value} index={1} type={drafted}></TabItem>
          <TabItem value={value} index={2} type={hiddened}></TabItem>
        </>
      )}

      <NewProofModal open={newProofModalOpen} onClose={handleCloseNewProofModal} setUpdated={setUpdated} />
      <EditProofModal
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        setUpdated={setUpdated}
        talentId={talentId}
        proofInfo={proofInfo}
      />
      <DeleteProofModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        setUpdated={setUpdated}
        talentId={talentId}
        proofId={proofId}
      />
    </Box>
  );
};
