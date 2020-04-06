import React, { FormEvent } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log('Form submitted', event);
}

export const TodoFormComponent = () => {
  return (
    <Formik
      initialValues={{ title: '', text: '' }}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        text: Yup.string()
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="title">First Name</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />
        <label htmlFor="text">Last Name</label>
        <Field name="text" type="text" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}