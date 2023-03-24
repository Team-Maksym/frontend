import { Modal } from '../../../../shared/components/Modal';
import { AuthForm } from '../AuthForm/AuthForm';

const info = {
  signIn: {
    submitBtnName: 'Sign In',
    title: 'Sign in to your account',
    handleSubmit: (email, password) => {
      console.log('Sign In:');
      console.log('email', email);
      console.log('password:', password);
    },
  },
  signUp: {
    submitBtnName: 'Sign Up',
    title: 'Sign up to your account',
    handleSubmit: (email, password) => {
      console.log('Sign In:');
      console.log('email', email);
      console.log('password:', password);
    },
  },
};

export const AuthModal = ({ open, onClose, type }) => {
  if (!info[type]) {
    return <></>;
  }

  return (
    <Modal title={info[type].title} open={open} onClose={onClose}>
      <AuthForm onSubmit={info[type].handleSubmit} submitBtnName={info[type].submitBtnName} onClose={onClose} />
    </Modal>
  );
};
