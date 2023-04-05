import { Modal } from '../../../../shared/components/Modal';
import * as yup from 'yup';
import { FullNameField } from '../../../../shared/components/Fields/FullNameField';
import { Form } from '../../../../shared/components/Form';
import React from 'react';
import { BirthdayField } from '../../../../shared/components/Fields/AgeField';
import { AvatarLinkField } from '../../../../shared/components/Fields/AvatarLinkField';
import { EducationField } from '../../../../shared/components/Fields/EducationField';
import { ExperienceField } from '../../../../shared/components/Fields/ExperienceField';
import { patchTalentProfile } from '../../../../shared/service/ProfileService/ProfileService';
import { getCurrentTalentId } from '../../../../shared/service/AuthorizationService';
import { PositionField } from '../../../../shared/components/Fields/PositionField';

export const EditProfileModal = ({ open, onClose, talent, setTalent }) => {
  const onEditProfileHandler = (action) => {
    const talentId = getCurrentTalentId();
    return async (values) => {
      values = handleSubmitPositions(values);
      console.log(values);
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

  const handleSubmitPositions = (values) => {
    console.log(values);
    const positions = Array.isArray(values.positions)
      ? values.positions.map((position) => position.trim())
      : values.positions
          .trim()
          .split(',')
          .map((position) => position.trim());
    return { ...values, positions };
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
        .string()
        .min(4, 'Full name must be more than 4 characters')
        .max(64, 'Full name must be less than 64 characters')
        .matches(/^[A-Za-z\s'-]+$/, 'Full name must not contain symbols or numbers'),
      avatar: yup.string(),
      birthday: yup.string(),
      education: yup
        .string()
        .min(2, 'Education must be at least 2 characters')
        .max(50, 'Education must be at most 50 characters'),
      experience: yup
        .string()
        .matches(/^[a-zA-Z\s]*$/, 'Experience must contain only letters and spaces')
        .min(2, 'Experience must be at least 2 characters')
        .max(50, 'Experience must be at most 50 characters'),
      positions: yup.string(),
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
