import { Wrapper } from '../Wrapper';
import { BigTalentCard } from './components/BigTalentCard/BigTalentCard';
import { TalentContext } from '../../shared/context/TalentContext';
import { getOneTalent } from '../../shared/service/ProfileService';
import { getOneTalentProofs } from '../../shared/service/ProfileService';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { PreLoader } from '../PreLoader/PreLoader';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';
import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ProofMenu } from './components/ProofMenu';

export const Profile = () => {
  const { id } = useParams();
  const { talent: currentTalent } = useContext(TalentContext);
  const [talentProfile, setTalentProfile] = useState(null);
  const [hidden, setHidden] = useState(null);
  const [draft, setDraft] = useState(null);
  const [published, setPublished] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentTalent) {
      const talentId = id || currentTalent.id;
      getOneTalent(talentId)
        .then((talent) => {
          talent.id = talentId;
          setTalentProfile(() => talent);
        })
        .catch((error) => {
          setError(() => error);
        });
      getOneTalentProofs(talentId, 'HIDDEN')
        .then((proofs) => {
          setHidden(() => proofs.data);
        })
        .catch((error) => {
          setError(() => error);
        });
      getOneTalentProofs(talentId, 'PUBLISHED')
        .then((proofs) => {
          setPublished(() => proofs.data);
        })
        .catch((error) => {
          setError(() => error);
        });
      getOneTalentProofs(talentId, 'DRAFT')
        .then((proofs) => {
          setDraft(() => proofs.data);
        })
        .catch((error) => {
          setError(() => error);
        });
    }
  }, [id, currentTalent]);

  if (!currentTalent) {
    return <ErrorPage status="401" message="You are not authorized to view this page" />;
  }

  if (error) {
    return <ErrorPage status="404" />;
  }

  return (
    <>
      {currentTalent ? (
        <Wrapper>
          <Box sx={{ display: 'flex' }}>
            {talentProfile ? (
              <>
                <BigTalentCard
                  talent={talentProfile}
                  setTalent={setTalentProfile}
                  actionsAccess={talentProfile.id === currentTalent.id}
                />
                <ProofMenu
                  actionsAccess={talentProfile.id === currentTalent.id}
                  draft={draft}
                  published={published}
                  hidden={hidden}
                />
              </>
            ) : (
              <PreLoader />
            )}
          </Box>
        </Wrapper>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
