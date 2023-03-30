import { useState, useEffect } from 'react';
import { TalentContext } from '../../../../shared/context/TalentContext';
import { getCurrentTalentId } from '../../../../shared/service/AuthorizationService';
import { getOneTalent } from '../../../../shared/service/ProfileService';
import { AuthModal } from '../AuthModal/AuthModal';

export const AuthProvider = ({ children }) => {
  const [talent, setTalent] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('signIn');

  useEffect(() => {
    authorizeTalent();
  }, []);

  const authorizeTalent = () => {
    if (getCurrentTalentId()) {
      getOneTalent(getCurrentTalentId()).then((talent) => {
        setTalent(talent);
      });
    } else {
      setTalent(null);
    }
  };

  const openAuthModal = (type = 'signIn') => {
    setOpen(true);
    setType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TalentContext.Provider value={{ talent, setTalent, openAuthModal }}>
      <AuthModal open={open} onClose={handleClose} type={type} authorizeTalent={authorizeTalent} />
      {children}
    </TalentContext.Provider>
  );
};

