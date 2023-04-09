import { Wrapper } from '../Wrapper';
import { BigTalentCard } from './components/BigTalentCard/BigTalentCard';
import { TalentContext } from '../../shared/context/TalentContext';
import { getOneTalent } from '../../shared/service/ProfileService';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { PreLoader } from '../PreLoader/PreLoader';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';
import { getCurrentTalentId } from '../../shared/service/AuthorizationService/AuthorizationService';
import { Navigate } from 'react-router-dom';

export const Profile = ({ logged }) => {
  const { id } = useParams();
  const { talent: currentTalent } = useContext(TalentContext);
  const [talentProfile, setTalentProfile] = useState(null);

  useEffect(() => {
    if (currentTalent) {
      if (id) {
        getOneTalent(id).then((talent) => {
          talent.id = id;
          setTalentProfile(() => talent);
        });
      } else {
        // console.log("id");
        // setTalentProfile(() => null);
        const currentTalentId = getCurrentTalentId();
        getOneTalent(currentTalentId).then((talent) => {
          talent.id = currentTalentId;
          setTalentProfile(() => talent);
        });
      }
    }
  }, [id, currentTalent]);

  if (!currentTalent) {
    return <ErrorPage status="401" />;
  }

  console.log(id);

  return (
    <>
      {logged && !!localStorage.token ? (
        <Wrapper>
          {talentProfile ? <BigTalentCard talent={talentProfile} setTalent={setTalentProfile} /> : <PreLoader />}
        </Wrapper>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

