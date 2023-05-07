import { Wrapper } from '../Wrapper';
import { BigTalentCard } from './components/BigTalentCard/BigTalentCard';
import { PersonContext } from '../../shared/context/PersonContext';
import { getOneTalent } from '../../shared/service/TalentProfileService';
import { getOneSponsor } from '../../shared/service/SponsorProfileService';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { PreLoader } from '../PreLoader/PreLoader';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';
import { Box } from '@mui/material';
import { ProofMenu } from './components/ProofMenu';
import { UnauthorizedPage } from '../../shared/components/UnauthorizedPage/UnauthorizedPage';
import { getCurrentPersonRole } from '../../shared/service/AuthorizationService/AuthorizationService';
import { BigSponsorCard } from './components/BigSponsorCard';

export const Profile = ({ isPersonDataLoaded }) => {
  const { id } = useParams();
  const personRole = getCurrentPersonRole();
  const { person: currentPerson, openAuthModal } = useContext(PersonContext);
  const [personProfile, setPersonProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentPerson) {
      if (personRole === 'ROLE_SPONSOR') {
        if (id !== currentPerson.id) {
          getOneTalent(id)
            .then((person) => {
              person.id = id;
              setPersonProfile(() => person);
            })
            .catch((error) => {
              setError(() => error);
            });
        } else {
          getOneSponsor(id)
            .then((person) => {
              person.id = id;
              setPersonProfile(() => person);
            })
            .catch((error) => {
              setError(() => error);
            });
        }
      } else if (personRole === 'ROLE_TALENT') {
        getOneTalent(id)
          .then((person) => {
            person.id = id;
            setPersonProfile(() => person);
          })
          .catch((error) => {
            setError(() => error);
          });
      }
    }
  }, [id, currentPerson]);

  useEffect(() => {
    if (!currentPerson) {
      if (isPersonDataLoaded) {
        openAuthModal('signIn');
      }
    }
  }, [currentPerson, isPersonDataLoaded, openAuthModal]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {currentPerson ? (
        <Wrapper>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              minHeight: '90vh',
              maxHeight: { lg: '90vh' },
            }}
          >
            {personProfile ? (
              <>
                {id === currentPerson.id && personRole === 'ROLE_SPONSOR' ? (
                  <BigSponsorCard
                    person={personProfile}
                    setPerson={setPersonProfile}
                    actionsAccess={personProfile.id === currentPerson.id}
                  />
                ) : (
                  <>
                    <BigTalentCard
                      person={personProfile}
                      setPerson={setPersonProfile}
                      actionsAccess={personProfile.id === currentPerson.id}
                    />
                    <ProofMenu actionsAccess={personProfile.id === currentPerson.id} talentId={personProfile.id} />
                  </>
                )}
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
