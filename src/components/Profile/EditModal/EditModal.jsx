import { Modal } from '../../../shared/components/Modal';
import * as yup from 'yup';
import { FullNameField } from '../../../shared/components/Fields/FullNameField';
import { Form } from '../../../shared/components/Form';
import React from 'react';
import { AgeField } from '../../../shared/components/Fields/AgeField';
import { AvatarLinkField } from '../../../shared/components/Fields/AvatarLinkField';
import { ContactInformationField } from '../../../shared/components/Fields/ContactInformationField';
import { EducationField } from '../../../shared/components/Fields/EducationField';
import { ExperienceField } from '../../../shared/components/Fields/ExperienceField';

export const EditModal = ({ isOpen, onClose }) => {
  // const getSubmitHandler = (action) => {
  //   return async (values) => {
  //     await action(values);
  //     onClose();
  //   };
  // };

  const editForm = {
    id: 'edit-modal',
    submitBtnName: 'Accept',
    title: 'You can edit your profile',
    onSubmit: 'getSubmitHandler(patchTalentProfile)',
    //TODO: add initialValues from DB
    initialValues: {
      full_name: '',
      avatar: '',
      contact_information: '',
      age: '',
      education: '',
      experience: '',
    },
    validationSchema: yup.object({
      full_name: yup
        .string('Enter your full name')
        .min(4, 'Full name must be more than 4 characters')
        .max(64, 'Full name must be less than 64 characters')
        .matches(/^[A-Za-z\s'-]+$/, 'Full name must not contain symbols or numbers'),
      // .required('Field is required'),
      avatar: yup
        .string('Enter your avatar URL')
        .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/i, 'Invalid image URL'),
      contact_information: yup
        .string('Enter your contact information')
        // .required('Experience is required')
        .matches(/^[a-zA-Z\s]*$/, 'Contact information must contain only letters and spaces')
        .min(2, 'Contact information must be at least 2 characters')
        .max(50, 'Contact information must be at most 50 characters'),
      age: yup
        .number()
        .typeError('Age must be a number')
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .min(12, 'You must be at least 18 years old')
        .max(120, 'You cannot be older than 120 years old'),
      education: yup
        .string('Enter your last education')
        // .required('Education is required')
        .matches(/^[a-zA-Z\s]*$/, 'Education must contain only letters and spaces')
        .min(2, 'Education must be at least 2 characters')
        .max(50, 'Education must be at most 50 characters'),
      experience: yup
        .string('Enter your work experience')
        // .required('Experience is required')
        .matches(/^[a-zA-Z\s]*$/, 'Experience must contain only letters and spaces')
        .min(2, 'Experience must be at least 2 characters')
        .max(50, 'Experience must be at most 50 characters'),
    }),
    fieldsRenderers: {
      full_name: FullNameField,
      avatar: AvatarLinkField,
      contact_information: ContactInformationField,
      age: AgeField,
      education: EducationField,
      experience: ExperienceField,
    },
  };

  return (
    <Modal title={editForm.title} open={isOpen} onClose={onClose}>
      <Form {...editForm} />
    </Modal>
  );
};
