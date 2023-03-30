import * as yup from 'yup';
import React, { useState } from 'react';
import { EmailField } from '../../../../shared/components/Fields/EmailField';
import { PasswordField } from '../../../../shared/components/Fields/PasswordField';
import { FullNameField } from '../../../../shared/components/Fields/FullNameField';
import { Modal } from '../../../../shared/components/Modal';
import { Form } from '../../../../shared/components/Form';
import { signIn, signUp } from '../../../../shared/service/AuthorizationService';
import { Alert, LinearProgress } from '@mui/material';

export const AuthModal = ({ open, onClose, type, authorizeTalent }) => {
  const [error, setError] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(false);

  const getSubmitHandler = (action) => {
    return async (values) => {
      try {
        setError(() => null);
        setLoadingProgress(() => true);
        await action(values);
        authorizeTalent();
        onClose();
      } catch (error) {
        setError(() => error);
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
      },
      validationSchema: yup.object({
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: yup.string('Enter your password').required('Password is required'),
      }),
      fieldsRenderers: {
        email: EmailField,
        password: PasswordField,
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
      },
      validationSchema: yup.object({
        full_name: yup
          .string('Enter your full name')
          .min(4, 'Full name must be more than 4 characters')
          .max(64, 'Full name must be less than 64 characters')
          .matches(/^[A-Za-z\s'-]+$/, 'Full name must not contain symbols or numbers')
          .required('Full name is required'),
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password must be more than 8 characters')
          .max(128, 'Password must not be more than 128 characters')
          .matches(
            /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
            'Password must contain at least one uppercase letter and one number',
          )
          .required('Password is required'),
      }),
      fieldsRenderers: {
        full_name: FullNameField,
        email: EmailField,
        password: PasswordField,
      },
    },
  };

  if (!formsInfo[type]) {
    return <></>;
  }

  return (
    <Modal title={formsInfo[type].title} open={open} onClose={onModalCloseHandler}>
      {error && <Alert severity="error">{error?.message}</Alert>}
      {loadingProgress && <LinearProgress color="inherit" />}
      <Form {...formsInfo[type]} />
    </Modal>
  );
};

