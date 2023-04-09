import { useFormik } from 'formik';

export const Form = ({ id, initialValues, validationSchema, fieldsRenderers, onSubmit, children }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
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
          id: id + '-' + item,
          key: id + '-' + item,
          name: item,
          fullWidth: true,
          margin: 'normal',
          value: formik.values[item] || '',
          onChange: formik.handleChange,
          error: formik.touched[item] && Boolean(formik.errors[item]),
          helperText: formik.touched[item] && formik.errors[item],
        }),
      )}
      {children}
    </form>
  );
};

