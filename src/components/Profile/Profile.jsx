import { Wrapper } from '../Wrapper';
import { BigTalentCard } from './components/BigTalentCard/BigTalentCard';
import { TalentContext } from '../../shared/context/TalentContext';
import { getOneTalent } from '../../shared/service/ProfileService';
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
  const [updated, setUpdated] = useState();
  const [talentProfile, setTalentProfile] = useState(null);
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
    }
    setUpdated(false);
  }, [id, currentTalent, updated]);

  useEffect(() => {
    if (!currentTalent) {
      if (isTalentDataLoaded) {
        openAuthModal('signIn');
      }
    }
  }, [currentTalent, isTalentDataLoaded, openAuthModal]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {currentTalent ? (
        <Wrapper>
          <Box sx={{ display: 'flex' }} minHeight={'90vh'} maxHeight={'90vh'}>
            {talentProfile ? (
              <>
                <BigTalentCard
                  talent={talentProfile}
                  setTalent={setTalentProfile}
                  actionsAccess={talentProfile.id === currentTalent.id}
                />
                <ProofMenu
                  actionsAccess={talentProfile.id === currentTalent.id}
                  talentId={talentProfile.id}
                  setUpdated={setUpdated}
                  updated={updated}
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

