import { Button } from '@mui/material';
import { useFormik } from 'formik';

export const Form = ({ initialValues, validationSchema, fieldsRenderers, onSubmit, submitBtnName }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {Object.keys(fieldsRenderers).map((item) =>
        fieldsRenderers[item]({
          key: item,
          name: item,
          fullWidth: true,
          margin: 'normal',
          value: formik.values[item],
          onChange: formik.handleChange,
          error: formik.touched[item] && Boolean(formik.errors[item]),
          helperText: formik.touched[item] && formik.errors[item],
        }),
      )}

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mt: 4, px: 8, borderRadius: '6px' }}
      >
        {submitBtnName}
      </Button>
    </form>
  );
};

