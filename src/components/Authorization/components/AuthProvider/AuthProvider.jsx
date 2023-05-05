import { useState, useEffect } from 'react';
import { PersonContext } from '../../../../shared/context/PersonContext';
import { getCurrentPersonId } from '../../../../shared/service/AuthorizationService';
import { getOneTalent } from '../../../../shared/service/TalentProfileService';
import { AuthModal } from '../AuthModal/AuthModal';
import { useNavigate } from 'react-router-dom';
import { getOneSponsor } from '../../../../shared/service/SponsorProfileService/SponsorProfileService';
import { getCurrentPersonRole } from "../../../../shared/service/AuthorizationService/AuthorizationService";

export const AuthProvider = ({ children }) => {
  const [person, setPerson] = useState(null);
  const [open, setOpen] = useState(false);
  const [isPersonDataLoaded, setIsPersonDataLoaded] = useState(false);
  const [type, setType] = useState('signIn');
  const navigate = useNavigate();

  useEffect(() => {
    authorizePerson();
  }, []);

  const authorizePerson = async () => {
    const personId = getCurrentPersonId();
    const personRole = getCurrentPersonRole();
    if (!personId) {
      setPerson(null);
      setIsPersonDataLoaded(() => true);
      return;
    }

    try {
      let person;
      if (personRole === 'ROLE_TALENT') {
        person = await getOneTalent(personId);
      } else if (personRole === 'ROLE_SPONSOR') {
        person = await getOneSponsor(personId);
      }

      person.id = personId;
      setPerson(person);
    } catch (error) {
      console.error(`Error getting ${personRole}: ${error.message}`);
    } finally {
      setIsPersonDataLoaded(() => true);
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
    setPerson(null);
    setIsPersonDataLoaded(() => true);
    navigate('/');
  };

  return (
    <PersonContext.Provider
      value={{ person: person, setPerson: setPerson, signOut, openAuthModal, isPersonDataLoaded: isPersonDataLoaded, setIsPersonDataLoaded: setIsPersonDataLoaded }}
    >
      <AuthModal open={open} onClose={handleClose} type={type} authorizePerson={authorizePerson} />
      {children}
    </PersonContext.Provider>
  );
};
