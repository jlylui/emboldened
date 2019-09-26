import React, { useState } from "react";
import { Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Checkbox from "./Checkbox";

const CustomInputGroup = props => {
  const { values, errors, status, touched, handleChange, groupValues } = props;
  const [checkBoxList, setCheckBoxList] = useState(groupValues.checkBoxLabels);

  function AddToFieldArray(props) {
    return (
      <Field name={props.name}>
        {({ field, form }) => (
          <a
            className="form-control form-check"
            style={{
              borderRadius: "3px",
              fontSize: "14px",
              cursor: "pointer",
              padding: "4px 6px"
            }}
            onClick={() => {
              const index = field.value.indexOf("Other");
              if (typeof props.error == "undefined") {
                if (
                  typeof form.values[props.nameTmp] !== "undefined" &&
                  form.values[props.nameTmp] !== "" &&
                  index != -1
                ) {
                  form.values[props.name][index] = form.values[props.nameTmp];
                  setCheckBoxList(
                    checkBoxList.concat(form.values[props.nameTmp])
                  );
                }

                form.setFieldValue(props.nameTmp, "");
              }
              // remove empty value and "Other" from array
              const nextValue = form.values[props.name].filter(
                value => value !== "Other" && value !== ""
              );
              form.setFieldValue(props.name, nextValue);
            }}
          >
            <FontAwesomeIcon icon="plus" />
          </a>
        )}
      </Field>
    );
  }

  return (
    <div className="form-group">
      <label>{groupValues.groupTitle}</label>
      <br />
      {checkBoxList.map((checkbox, index) => (
        <Checkbox
          key={index}
          name={groupValues.name}
          value={checkbox}
          className={groupValues.className}
        />
      ))}
      {values[groupValues.name].includes("Other") ? (
        <div className="form-row" style={{ paddingLeft: "5px" }}>
          <div className="form-group" style={{ display: "inline-block" }}>
            <AddToFieldArray
              name={groupValues.name}
              nameTmp={groupValues.tmp}
              className={groupValues.className}
              error={errors[groupValues.tmp]}
            />
          </div>
          <div
            className="form-group"
            style={{
              minWidth: "80%",
              display: "inline-block",
              paddingLeft: "10px"
            }}
          >
            <textarea
              className="form-control"
              name={groupValues.tmp}
              rows="1"
              placeholder={groupValues.placeholder}
              onChange={handleChange}
              value={values[groupValues.tmp]}
            ></textarea>
            {errors[groupValues.tmp] ? (
              <span className="error-text">{errors[groupValues.tmp]}</span>
            ) : null}
          </div>
        </div>
      ) : null}
      {values[groupValues.tmp] === "" && values[groupValues.name].length > 0 ? (
        <div
          className="text-success"
          style={{
            fontSize: ".8571em",
            padding: "10px 0px",
            color: "#888"
          }}
        >
          <span style={{ fontWeight: "bold" }}>Selected values:</span>
          <br />[{values[groupValues.name].toString()}]
        </div>
      ) : null}
    </div>
  );
};
export default CustomInputGroup;
