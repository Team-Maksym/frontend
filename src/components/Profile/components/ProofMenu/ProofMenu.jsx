import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, Box, Typography, Tabs, Tab, Fab } from '@mui/material';
import { Link } from 'react-router-dom';
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

export const ProofMenu = ({ actionsAccess, setUpdated, talentId, updated }) => {
  const [published, setPublished] = useState();
  const [drafted, setDrafted] = useState([]);
  const [hiddened, setHiddened] = useState();
  const [expanded, setExpanded] = useState(false);
  const [newProofModalOpen, setNewProofModalOpen] = useState(false);
  const [proofId, setProofId] = useState();
  const navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [proofInfo, setProofInfo] = useState({});

  let AuthTalentId = getCurrentTalentId();

  const handleChangeAcordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const findCurrentProofInfo = (proofId, status) => {
    return status.find((item) => item.id === proofId);
  };

  const [value, setValue] = useState(0);

  const openNewProofModal = () => {
    setNewProofModalOpen(() => true);
  };

  const handleCloseNewProofModal = () => {
    setNewProofModalOpen(() => false);
  };

  const handleChange = (event, newValue) => {
    setExpanded(false);
    setValue(newValue);
  };

  const getProofsByStatus = async (status, setStatus) => {
    await getOneTalentProofs(talentId, status).then((proofs) => {
      setStatus(proofs.data);
    });
  };

  useEffect(() => {
    if (AuthTalentId) {
      getProofsByStatus('PUBLISHED', setPublished);
    }
    setUpdated(false);
  }, [talentId, AuthTalentId, updated]);

  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.includes(`?status=published`)) {
      setValue(0);
    } else if (currentUrl.includes('?status=drafts') && talentId === AuthTalentId) {
      setValue(1);
      navigate(`/profile/${talentId}?status=drafts`, { replace: true });
      getProofsByStatus('DRAFT', setDrafted);
    } else if (currentUrl.includes('?status=hidden') && talentId === AuthTalentId) {
      setValue(2);
      getProofsByStatus('HIDDEN', setHiddened);
      navigate(`/profile/${talentId}?status=hidden`, { replace: true });
    } else {
      navigate(`/profile/${talentId}`, { replace: true });
    }

    setUpdated(false);
  }, [updated]);

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
        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
          <Tab
            value={0}
            label="Published"
            sx={{ color: 'neutral.white' }}
            component={Link}
            to={`/profile/${talentId}?status=published`}
          />
          {actionsAccess && (
            <Tab
              label="Drafts"
              sx={{ color: 'neutral.white' }}
              value={1}
              component={Link}
              to={`/profile/${talentId}?status=drafts`}
              onClick={() => getProofsByStatus('DRAFT', setDrafted)}
            />
          )}
          {actionsAccess && (
            <Tab
              label="Hidden"
              sx={{ color: 'neutral.white' }}
              value={2}
              component={Link}
              to={`/profile/${talentId}?status=hidden`}
              onClick={() => getProofsByStatus('HIDDEN', setHiddened)}
            />
          )}
        </Tabs>

        {actionsAccess && (
          <Fab
            onClick={openNewProofModal}
            color="secondary"
            aria-label="add"
            sx={{ position: 'sticky', top: '0', left: '90%', mt: '-100%' }}
          >
            <AddIcon />
          </Fab>
        )}
      </Box>

      <TabItem value={value} index={0} type={published}></TabItem>
      {actionsAccess && (
        <>
          <TabItem value={value} active index={1} type={drafted}></TabItem>
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
