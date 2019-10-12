import React, { useRef, useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import CommonField, { CommonFiledSchema } from "./CommonField";
import * as HTTP from "../common/http";

const ContactFormSchema = Yup.object().shape({
  ...CommonFiledSchema,
  message: Yup.string().required("*required")
});

const ContactForm = props => {
  const [isLoading, setIsLoading] = useState(true);
  const contactRef = useRef(null);
  const initialValues = {
    first: "",
    last: "",
    email: "",
    country_code: "",
    phone: "",
    conference: [],
    message: ""
  };

  const updateContactModal = e => {
    setIsLoading(false);
    if (contactRef.current !== null && contactRef.current.contains(e.target)) {
      // clicked inside the component
      return;
    }
    // clicked outside the component
    if (props.show) {
      props.handleContactModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", updateContactModal);
    return function cleanup() {
      window.removeEventListener("mousedown", updateContactModal);
    };
  }, [props.show, contactRef, isLoading]);

  return (
    <div
      className="modal fade show"
      id="contact"
      role="dialog"
      style={props.show ? { display: "block" } : { display: "none" }}>
      <div className="modal-dialog" ref={contactRef}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Contact Us</h5>
            <button
              type="button"
              className="close"
              onClick={props.handleContactModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={initialValues}
              validationSchema={ContactFormSchema}
              onSubmit={(values, { setSubmitting }) => {
                HTTP.saveContact(values);
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
                      Message<span className="text-danger"> *</span>
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="2"
                      onChange={handleChange}
                      value={values.message}></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={props.handleContactModal}>
                      Close
                    </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
