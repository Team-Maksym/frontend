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
import { Box } from '@mui/material';
import { ProofMenu } from './components/ProofMenu';
import { UnauthorizedPage } from '../../shared/components/UnauthorizedPage/UnauthorizedPage';
export const Profile = ({ isTalentDataLoaded }) => {
  const { id } = useParams();
  const { talent: currentTalent, openAuthModal } = useContext(TalentContext);
  const [talentProfile, setTalentProfile] = useState(null);
  const [hidden, setHidden] = useState(null);
  const [draft, setDraft] = useState(null);
  const [publish, setPublish] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentTalent) {
      getOneTalent(id)
        .then((talent) => {
          talent.id = id;
          setTalentProfile(() => talent);
        })
        .catch((error) => {
          setError(() => error);
        });
      getOneTalentProofs(id, 'HIDDEN').then((proofs) => {
        setHidden(proofs.data);
      });
      getOneTalentProofs(id, 'PUBLISHED').then((proofs) => {
        setPublish(() => proofs.data);
      });

      getOneTalentProofs(id, 'DRAFT').then((proofs) => {
        setDraft(() => proofs.data);
      });
    }
  }, [id, currentTalent]);

  useEffect(() => {
    if (!currentTalent) {
      if (isTalentDataLoaded) {
        openAuthModal('signIn');
      }
    }
  }, [currentTalent]);

  if (error) {
    return <ErrorPage />;
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
                  publish={publish}
                  hidden={hidden}
                />
              </>
            ) : (
              <PreLoader />
            )}
          </Box>
        </Wrapper>
      ) : (
        <UnauthorizedPage />
      )}
    </>
  );
};

