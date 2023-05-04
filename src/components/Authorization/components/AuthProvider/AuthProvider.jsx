import { useState, useEffect } from 'react';
import { TalentContext } from '../../../../shared/context/TalentContext';
import { getCurrentTalentId } from '../../../../shared/service/AuthorizationService';
import { getOneTalent } from '../../../../shared/service/ProfileService';
import { AuthModal } from '../AuthModal/AuthModal';
import { useNavigate } from 'react-router-dom';

export const AuthProvider = ({ children }) => {
  const [talent, setTalent] = useState(null);
  const [open, setOpen] = useState(false);
  const [isTalentDataLoaded, setIsTalentDataLoaded] = useState(false);
  const [type, setType] = useState('signIn');
  const navigate = useNavigate();

  useEffect(() => {
    authorizeTalent();
  }, []);

  const authorizeTalent = () => {
    const talentId = getCurrentTalentId();
    if (talentId) {
      getOneTalent(talentId).then((talent) => {
        talent.id = talentId;
        setTalent(talent);
        setIsTalentDataLoaded(() => true);
      });
    } else {
      setTalent(null);
      setIsTalentDataLoaded(() => true);
    }
  };

  const openAuthModal = (type = 'signIn') => {
    setOpen(true);
    setType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setTalent(null);
    setIsTalentDataLoaded(() => true);
    navigate('/');
  };

  return (
    <TalentContext.Provider
      value={{ talent, setTalent, signOut, openAuthModal, isTalentDataLoaded, setIsTalentDataLoaded }}
    >
      <AuthModal open={open} onClose={handleClose} type={type} authorizeTalent={authorizeTalent} />
      {children}
    </TalentContext.Provider>
  );
};

