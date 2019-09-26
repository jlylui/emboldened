import { Form, Field } from "formik";
import Checkbox from "./Checkbox";
import * as Yup from "yup";

const CommonFiledSchema = {
  firstName: Yup.string()
    .min(2, "*invalid")
    .max(50, "*invalid")
    .required("*required"),
  lastName: Yup.string()
    .min(2, "*invalid")
    .max(50, "*invalid")
    .required("*required"),
  email: Yup.string()
    .email("*invalid email")
    .required("*required"),
  countryCode: Yup.string()
    .min(2, "*invalid format")
    .matches(/^\+\d{2,4}/, "*invalid format"),
  phone: Yup.string().matches(/^\d{1}[\d\-\s]{5,}/, "*invalid"),
  conference: Yup.array()
    .min(1, "*select at least one location")
    .required("*required")
};

const CommonFiled = props => {
  const { values, errors, status, touched, handleChange } = props;
  return (
    <>
      <div className="form-row">
        <div
          className={`form-group col-md-6 ${
            touched.firstName
              ? errors.firstName
                ? "has-danger"
                : "has-success"
              : ""
          }`}
        >
          <label>
            First Name<span className="text-danger"> *</span>
          </label>
          {errors.firstName && touched.firstName ? (
            <span className="error-text">{errors.firstName}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div
          className={`form-group col-md-6 ${
            touched.lastName
              ? errors.lastName
                ? "has-danger"
                : "has-success"
              : ""
          }`}
        >
          <label>
            Last Name<span className="text-danger"> *</span>
          </label>
          {errors.lastName && touched.lastName ? (
            <span className="error-text">{errors.lastName}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            required={true}
          />
        </div>
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
          required={true}
        />
      </div>
      <div className="form-row">
        <div
          className={`form-group col-md-4 ${
            touched.countryCode
              ? errors.countryCode
                ? "has-danger"
                : "has-success"
              : ""
          }`}
        >
          <label>Country code</label>
          {errors.countryCode && touched.countryCode ? (
            <span className="error-text">{errors.countryCode}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            name="countryCode"
            placeholder="+61"
            value={values.countryCode}
            onChange={handleChange}
          />
        </div>
        <div
          className={`form-group col-md-8 ${
            touched.phone ? (errors.phone ? "has-danger" : "has-success") : ""
          }`}
        >
          <label>Phone number</label>
          {errors.phone && touched.phone ? (
            <span className="error-text">{errors.phone}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
      </div>
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
    </>
  );
};

export default CommonFiled;
export { CommonFiledSchema };
