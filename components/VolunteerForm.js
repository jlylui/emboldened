import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import * as HTTP from "../common/http";

import CommonField, { CommonFiledSchema } from "./CommonField";
import CustomFieldGroup from "./CustomFieldGroup";
import Checkbox from "./Checkbox";
import ErrorFocus from "./ErrorFocus";

const regex = /^\w.*\S.*$/;

const VolunteerFormSchema = Yup.object().shape({
  ...CommonFiledSchema,
  conference: Yup.array()
    .min(1, "*select at least one location")
    .required("*required"),
  tmpAvailability: Yup.string().matches(regex, "*invalid format"),
  tmpInterest: Yup.string().matches(regex, "*invalid format"),
  tmpSkill: Yup.string().matches(regex, "*invalid format")
});

const availableGroupValues = {
  name: "available",
  tmp: "tmpAvailability",
  groupTitle: "Availability",
  className: "form-check-inline",
  checkBoxLabels: ["Whole Conference", "Friday", "Saturday", "Other"],
  placeholder: "Please specify time available"
};

const interestGroupValues = {
  name: "interest",
  tmp: "tmpInterest",
  groupTitle: "Interested in:",
  className: "",
  checkBoxLabels: [
    "Stage Management",
    "Audio/Visual Production",
    "Registration & Admin",
    "Food & Catering",
    "Photography/Videography",
    "Logistics & Cleaning",
    "Other"
  ],
  placeholder: "Click add to include input values"
};

const skillGroupValues = {
  name: "skill",
  tmp: "tmpSkill",
  groupTitle: "Any special gifts/skills?",
  className: "",
  checkBoxLabels: [
    "Layout/Graphics Designer",
    "Artist",
    "Comp. Tech.",
    "First Aid",
    "Worship leader/Musician",
    "Translator",
    "Other"
  ],
  placeholder: "Click add to include input values"
};

const VolunteerForm = () => {
  const initialValues = {
    first: "",
    last: "",
    email: "",
    country_code: "",
    phone: "",
    conference: [],
    church: "",
    available: [],
    interest: [],
    skill: [],
    message: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={VolunteerFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        HTTP.saveVolunteer(values);
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
          <br />
          <div className="form-group">
            <label>Where do you attend church?</label>
            <input
              type="text"
              className="form-control"
              placeholder="Church Name, City"
              name="church"
              value={values.church}
              onChange={handleChange}
            />
          </div>
          <br />
          <CustomFieldGroup
            values={values}
            errors={errors}
            handleChange={handleChange}
            groupValues={availableGroupValues}
          />
          <br />
          <CustomFieldGroup
            values={values}
            errors={errors}
            handleChange={handleChange}
            groupValues={interestGroupValues}
          />
          <br />
          <CustomFieldGroup
            values={values}
            errors={errors}
            handleChange={handleChange}
            groupValues={skillGroupValues}
          />
          <br />
          <div className="form-group">
            <label>Comments</label>
            <textarea
              className="form-control"
              name="message"
              rows="2"
              onChange={handleChange}
              value={values.message}></textarea>
          </div>
          <div style={{ textAlign: "right" }}>
            {Object.values(touched).length > 0 ? (
              Object.values(errors).length > 0 ? (
                <div
                  className="text-danger"
                  style={{
                    paddingRight: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}>
                  *Error in form. Please review inputs.
                </div>
              ) : null
            ) : null}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}>
              Submit
            </button>
          </div>
          <ErrorFocus />
        </form>
      )}
    </Formik>
  );
};

export default VolunteerForm;
