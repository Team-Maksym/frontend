import * as yup from 'yup';
import React, { useState, useContext } from 'react';
import { EmailField } from '../../../../shared/components/Fields/EmailField';
import { PasswordField } from '../../../../shared/components/Fields/PasswordField';
import { FullNameField } from '../../../../shared/components/Fields/FullNameField';
import { Modal } from '../../../../shared/components/Modal';
import { Form } from '../../../../shared/components/Form';
import { signIn, signUp } from '../../../../shared/service/AuthorizationService';
import { Alert, Button, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PersonContext } from '../../../../shared/context/PersonContext';
import { TypeField } from '../../../../shared/components/Fields/TypeField';

export const AuthModal = ({ open, onClose, type, authorizePerson }) => {
  const [error, setError] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(false);
  const { person } = useContext(PersonContext);
  const navigate = useNavigate();

  const getSubmitHandler = (action) => {
    return async (values) => {
      try {
        setError(() => null);
        setLoadingProgress(() => true);
        await action(values);
        authorizePerson();
        onClose();
        navigate(`/profile/${person.id}`);
      } catch (error) {
        if (error.response.status === 401) {
          setError(() => 'Wrong email or password');
        } else if (error.response.status === 409) {
          setError(() => 'An account is already registered with your email');
        } else {
          setError(() => 'Oops, something is wrong');
        }
      } finally {
        setLoadingProgress(() => false);
      }
    };
  };

  const onModalCloseHandler = (e) => {
    onClose(e);
    setError(() => null);
  };

  const formsInfo = {
    signIn: {
      id: 'signIn',
      submitBtnName: 'Sign In',
      title: 'Sign in to your account',
      onSubmit: getSubmitHandler(signIn),
      initialValues: {
        email: '',
        password: '',
        type: 'talents',
      },
      validationSchema: yup.object({
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: yup.string('Enter your password').required('Password is required'),
        type: yup.string(),
      }),
      fieldsRenderers: {
        email: EmailField,
        password: PasswordField,
        type: TypeField,
      },
    },
    signUp: {
      id: 'signUp',
      submitBtnName: 'Sign Up',
      title: 'Sign up for your account',
      onSubmit: getSubmitHandler(signUp),
      initialValues: {
        full_name: '',
        email: '',
        password: '',
        type: 'talents',
      },
      validationSchema: yup.object({
        full_name: yup
          .string()
          .min(3, 'Full name must be more than 3 characters')
          .max(64, 'Full name must be less than 64 characters')
          .matches(/^[A-Za-z\s'-]+$/, 'Full name must not contain symbols or numbers')
          .required('Full name is required'),
        email: yup
          .string()
          .email('Enter a valid email')
          .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email')
          .required('Email is required'),
        password: yup
          .string()
          .min(8, 'Password must be more than 8 characters')
          .max(128, 'Password must not be more than 128 characters')
          .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\S+$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and no spaces',
          )
          .required('Password is required'),
        type: yup
          .string(),
      }),
      fieldsRenderers: {
        full_name: FullNameField,
        email: EmailField,
        password: PasswordField,
        type: TypeField,
      },
    },
  };

  if (!formsInfo[type]) {
    return <></>;
  }

  return (
    <Modal title={formsInfo[type].title} open={open} onClose={onModalCloseHandler}>
      {error && <Alert severity="error">{error}</Alert>}
      {loadingProgress && <LinearProgress color="inherit" />}
      <Form {...formsInfo[type]}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4, px: 8, borderRadius: '6px' }}
        >
          {formsInfo[type].submitBtnName}
        </Button>
      </Form>
    </Modal>
  );
};
