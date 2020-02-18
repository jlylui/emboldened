import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import CommonField, { CommonFiledSchema } from "./CommonField";
import Checkbox from "./Checkbox";
import * as HTTP from "../common/http";

const ContactFormSchema = Yup.object().shape({
  ...CommonFiledSchema,
  conference: Yup.array()
    .min(1, "*select at least one location")
    .required("*required"),
  heard_from: Yup.array()
    .min(1, "*select at least one")
    .required("*required")
});

const RegisterForm = () => {
  const initialValues = {
    first: "",
    last: "",
    email: "",
    country_code: "",
    phone: "",
    conference: [],
    heard_from: [],
    message: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        HTTP.saveRegistration(values);
      }}>
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
            <label>
              Conferences Interested:<span className="text-danger"> *</span>
            </label>
            {errors.conference && touched.conference ? (
              <span className="error-text">{errors.conference}</span>
            ) : null}
            <br />
            <Checkbox
              name="conference"
              value="Sydney"
              className="form-check-inline"
            />
            <Checkbox
              name="conference"
              value="Perth"
              className="form-check-inline"
            />
            <Checkbox
              name="conference"
              value="Kuala Lumpur"
              className="form-check-inline"
            />
          </div>
          <div className="form-group">
            <label>
              How did you find out about Emboldened?
              <span className="text-danger"> *</span>
            </label>
            {errors.heard_from && touched.heard_from ? (
              <span className="error-text">{errors.heard_from}</span>
            ) : null}
            <br />
            <Checkbox name="heard_from" value="family/friend" />
            <Checkbox name="heard_from" value="web search" />
            <Checkbox name="heard_from" value="church" />
          </div>
          <br />
          <div className="form-group">
            <label>Write a Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="2"
              onChange={handleChange}
              value={values.message}></textarea>
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
