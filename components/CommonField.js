import { Form, Field } from "formik";
import Checkbox from "./Checkbox";
import * as Yup from "yup";

const CommonFiledSchema = {
  first: Yup.string()
    .matches(/[A-Za-z]{1,50}/, "*invalid")
    .required("*required"),
  last: Yup.string()
    .matches(/[A-Za-z]{1,50}/, "*invalid")
    .required("*required"),
  email: Yup.string()
    .email("*invalid email")
    .required("*required"),
  country_code: Yup.string()
    .min(2, "*invalid format")
    .matches(/^\+\d{2,4}/, "*invalid format"),
  phone: Yup.string().matches(/^\d{1}[\d\-\s]{5,}/, "*invalid")
};

const CommonFiled = props => {
  const { values, errors, status, touched, handleChange } = props;
  return (
    <>
      <div className="form-row">
        <div
          className={`form-group col-md-6 ${
            touched.first ? (errors.first ? "has-danger" : "has-success") : ""
          }`}
        >
          <label>
            First Name<span className="text-danger"> *</span>
          </label>
          {errors.first && touched.first ? (
            <span className="error-text">{errors.first}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            name="first"
            value={values.first}
            onChange={handleChange}
            // required={true}
          />
        </div>
        <div
          className={`form-group col-md-6 ${
            touched.last ? (errors.last ? "has-danger" : "has-success") : ""
          }`}
        >
          <label>
            Last Name<span className="text-danger"> *</span>
          </label>
          {errors.last && touched.last ? (
            <span className="error-text">{errors.last}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            name="last"
            value={values.last}
            onChange={handleChange}
            // required={true}
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
          // required={true}
        />
      </div>
      <div className="form-row">
        <div
          className={`form-group col-xs-5 ${
            touched.country_code
              ? errors.country_code
                ? "has-danger"
                : "has-success"
              : ""
          }`}
        >
          <label>Country code</label>
          {errors.country_code && touched.country_code ? (
            <span className="error-text">{errors.country_code}</span>
          ) : null}
          <input
            type="text"
            className="form-control"
            name="country_code"
            placeholder="+61"
            value={values.country_code}
            onChange={handleChange}
          />
        </div>
        <div
          className={`form-group col-xs-7 ${
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
    </>
  );
};

export default CommonFiled;
export { CommonFiledSchema };
