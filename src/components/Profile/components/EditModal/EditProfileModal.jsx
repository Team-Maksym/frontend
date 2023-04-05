import { Modal } from '../../../../shared/components/Modal';
import * as yup from 'yup';
import { FullNameField } from '../../../../shared/components/Fields/FullNameField';
import { Form } from '../../../../shared/components/Form';
import React from 'react';
import { BirthdayField } from '../../../../shared/components/Fields/AgeField';
import { AvatarLinkField } from '../../../../shared/components/Fields/AvatarLinkField';
import { ContactInformationField } from '../../../../shared/components/Fields/ContactInformationField';
import { EducationField } from '../../../../shared/components/Fields/EducationField';
import { ExperienceField } from '../../../../shared/components/Fields/ExperienceField';
import { deleteTalent, getOneTalent } from '../../../../shared/service/ProfileService';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { patchTalentProfile } from '../../../../shared/service/ProfileService/ProfileService';
import async from 'async';
import { getCurrentTalentId } from '../../../../shared/service/AuthorizationService';
import { object } from 'yup';
import { PositionField } from '../../../../shared/components/Fields/PositionField';

export const EditProfileModal = ({ open, onClose, talent, setTalent }) => {
  const onEditProfileHandler = (action) => {
    const talentId = getCurrentTalentId();
    return async (values) => {
      const talentNewProfile = {};
      Object.entries(values).map(([key, value]) => {
        if (values[key] !== '') {
          talentNewProfile[key] = values[key];
        }
      });
      if (Object.keys(talentNewProfile).length === 0) {
        onClose();
      } else {
        try {
          const response = await action(talentNewProfile, talentId);
          setTalent(response);
        } catch (error) {
          console.error(error);
        }
        onClose();
      }
    };
  };

  const editForm = {
    id: 'edit-modal',
    submitBtnName: 'Accept',
    title: 'You can edit your profile',
    onSubmit: onEditProfileHandler(patchTalentProfile),
    initialValues: {
      full_name: talent.full_name,
      avatar: talent.avatar,
      birthday: talent.birthday,
      education: talent.education,
      experience: talent.experience,
      positions: talent.positions,
    },
    validationSchema: yup.object({
      fullName: yup
        .string('Enter your full name')
        .min(4, 'Full name must be more than 4 characters')
        .max(64, 'Full name must be less than 64 characters')
        .matches(/^[A-Za-z\s'-]+$/, 'Full name must not contain symbols or numbers'),
      // .required('Field is required'),
      avatar: yup.string('Enter your avatar URL'),
      // .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/i, 'Invalid image URL'),
      birthday: yup.string(),
      education: yup
        .string('Enter your last education')
        // .required('Education is required')
        .min(2, 'Education must be at least 2 characters')
        .max(50, 'Education must be at most 50 characters'),
      experience: yup
        .string('Enter your work experience')
        // .required('Experience is required')
        .matches(/^[a-zA-Z\s]*$/, 'Experience must contain only letters and spaces')
        .min(2, 'Experience must be at least 2 characters')
        .max(50, 'Experience must be at most 50 characters'),
      positions: yup.array().of(yup.string()),
    }),
    fieldsRenderers: {
      full_name: FullNameField,
      avatar: AvatarLinkField,
      birthday: BirthdayField,
      education: EducationField,
      experience: ExperienceField,
      positions: PositionField,
    },
  };

  return (
    <Modal title={editForm.title} open={open} onClose={onClose}>
      <Form {...editForm} />
    </Modal>
  );
};
