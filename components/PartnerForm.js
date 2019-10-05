import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import * as HTTP from "../common/http";
import ErrorFocus from "./ErrorFocus";

const PartnerFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*invalid")
    .max(50, "*invalid")
    .required("*required"),
  email: Yup.string()
    .email("*invalid email")
    .required("*required"),
  message: Yup.string().required("*required")
});

const PartnerForm = () => {
  const initialValues = {
    name: "",
    email: "",
    organisation: "",
    message: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PartnerFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        HTTP.savePartner(values);
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
          <div
            className={`form-group ${
              touched.name ? (errors.name ? "has-danger" : "has-success") : ""
            }`}
          >
            <label>
              Name<span className="text-danger"> *</span>
            </label>
            {errors.name && touched.name ? (
              <span className="error-text">{errors.name}</span>
            ) : null}
            <input
              type="text"
              className="form-control"
              name="name"
              value={values.name}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div
            className={`form-group ${
              touched.email ? (errors.email ? "has-danger" : "has-success") : ""
            }`}
          >
            <label>
              Email<span className="text-danger"> *</span>
            </label>
            {errors.email && touched.email ? (
              <span className="error-text">{errors.email}</span>
            ) : null}
            <input
              type="email"
              className="form-control"
              placeholder="example@example.com"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Organisation/Business</label>
            <input
              type="text"
              className="form-control"
              name="organisation"
              value={values.organisation}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>
              Message<span className="text-danger"> *</span>
            </label>
            {errors.message && touched.message ? (
              <span className="error-text">{errors.message}</span>
            ) : null}
            <textarea
              className="form-control"
              name="message"
              rows="5"
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
          <ErrorFocus />
        </form>
      )}
    </Formik>
  );
};

export default PartnerForm;
