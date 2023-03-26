import * as yup from 'yup';
import { EmailField } from '../../../../shared/components/Fields/EmailField';
import { PasswordField } from '../../../../shared/components/Fields/PasswordField';
import { FullNameField } from '../../../../shared/components/Fields/FullNameField';
import { Modal } from '../../../../shared/components/Modal';
import { Form } from '../../../../shared/components/Form';

export const AuthModal = ({ open, onClose, type }) => {
  const info = {
    signIn: {
      id: 'signIn',
      submitBtnName: 'Sign In',
      title: 'Sign in to your account',
      onSubmit: (values) => {
        onClose();
        alert(JSON.stringify(values, null, 2));
      },
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: yup.object({
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      }),
      fieldsRenderers: {
        email: EmailField,
        password: PasswordField,
      },
    },
    signUp: {
      id: 'signUp',
      submitBtnName: 'Sign Up',
      title: 'Sign up to your account',
      onSubmit: (values) => {
        onClose();
        alert(JSON.stringify(values, null, 2));
      },
      initialValues: {
        fullName: '',
        email: '',
        password: '',
      },
      validationSchema: yup.object({
        fullName: yup.string('Enter your full name').required('Email is required'),
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      }),
      fieldsRenderers: {
        fullName: FullNameField,
        email: EmailField,
        password: PasswordField,
      },
    },
  };

  if (!info[type]) {
    return <></>;
  }

  return (
    <Modal title={info[type].title} open={open} onClose={onClose}>
      <Form {...info[type]} />
    </Modal>
  );
};

