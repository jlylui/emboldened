import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import CommonField, { CommonFiledSchema } from "./CommonField";

const ContactFormSchema = Yup.object().shape({
  ...CommonFiledSchema
});

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phone: "",
    conference: [],
    message: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        status,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <CommonField
            values={values}
            errors={errors}
            status={status}
            touched={touched}
            handleChange={handleChange}
          />
          <br />
          <div className="form-group">
            <label>Write a Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="2"
              onChange={handleChange}
              value={values.message}
            ></textarea>
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
