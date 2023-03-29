import * as yup from 'yup';
import jwt_decode from "jwt-decode";
import React, { useContext } from 'react';
import { TalentContext } from '../../../../shared/context/TalentContext';
import { EmailField } from '../../../../shared/components/Fields/EmailField';
import { PasswordField } from '../../../../shared/components/Fields/PasswordField';
import { FullNameField } from '../../../../shared/components/Fields/FullNameField';
import { Modal } from '../../../../shared/components/Modal';
import { Form } from '../../../../shared/components/Form';
import { signIn, signUp } from '../../../../shared/service/AuthorizationService';

export const AuthModal = ({ open, onClose, type }) => {
  const { setTalent } = useContext(TalentContext);

  const getSubmitHandler = (action) => {
    return async (values) => {
      alert(JSON.stringify(values, null, 2));
      const responseData = await action(values);
      localStorage.setItem('token', responseData.token);
      const decodedToken = jwt_decode(responseData.token);
      setTalent(decodedToken.sub);
      onClose();
    }
  }

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
        full_name: yup.string('Enter your full name').required('Email is required'),
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .matches(/\d+/, 'Password no number')
          .matches(/[A-Z]+/, 'Password no uppercase')
          .matches(/[!@#$%^&*()-+]+/, 'Password no special char')
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
    <Modal title={formsInfo[type].title} open={open} onClose={onClose}>
      <Form {...formsInfo[type]} />
    </Modal>
  );
};

