webpackHotUpdate("static\\development\\pages\\get-involved.js",{

/***/ "./common/http.js":
/*!************************!*\
  !*** ./common/http.js ***!
  \************************/
/*! exports provided: saveRegistration, saveContact, saveVolunteer, savePartner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRegistration", function() { return saveRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveContact", function() { return saveContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVolunteer", function() { return saveVolunteer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePartner", function() { return savePartner; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);




var saveRegistration =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var options, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            options = {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json"
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
            };
            _context.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("/api/registrations", options);

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            json = _context.sent;
            console.log(response);
            console.log(json);

            if (response.status === 200) {
              setTimeout(function () {
                alert("Successfully submitted form: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json))); // window.location.href = "/#register";

                location.reload();
              }, 400);
            } else {
              setTimeout(function () {
                alert("Error: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json)));
                location.reload();
              }, 400);
            }

            return _context.abrupt("return", response);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.error("Error: ", _context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function saveRegistration(_x) {
    return _ref.apply(this, arguments);
  };
}();
var saveContact =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
    var options, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            options = {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json"
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
            };
            _context2.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("/api/contacts", options);

          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return response.json();

          case 7:
            json = _context2.sent;
            console.log(response);
            console.log(json);

            if (response.status === 200) {
              setTimeout(function () {
                alert("Successfully submitted form: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json))); // window.location.href = "/#contact";

                location.reload();
              }, 400);
            } else {
              setTimeout(function () {
                alert("Error: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json)));
                location.reload();
              }, 400);
            }

            return _context2.abrupt("return", response);

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.error("Error: ", _context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));

  return function saveContact(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var saveVolunteer =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
    var options, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            options = {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json"
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
            };
            _context3.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("/api/volunteers", options);

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();

          case 7:
            json = _context3.sent;
            console.log(response);
            console.log(json);

            if (response.status === 200) {
              setTimeout(function () {
                alert("Successfully submitted form: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json)));
                location.reload();
              }, 400);
            } else {
              setTimeout(function () {
                alert("Error: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json)));
                location.reload();
              }, 400);
            }

            return _context3.abrupt("return", response);

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            console.error("Error: ", _context3.t0);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function saveVolunteer(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var savePartner =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
    var options, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            options = {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json"
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
            };
            _context4.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("/api/partners", options);

          case 4:
            response = _context4.sent;
            _context4.next = 7;
            return response.json();

          case 7:
            json = _context4.sent;
            console.log(response);
            console.log(json);

            if (response.status === 200) {
              setTimeout(function () {
                alert("Successfully submitted form: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json)));
                location.reload();
              }, 400);
            } else {
              setTimeout(function () {
                alert("Error: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json)));
                location.reload();
              }, 400);
            }

            return _context4.abrupt("return", response);

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            console.error("Error: ", _context4.t0);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));

  return function savePartner(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./components/CommonField.js":
/*!***********************************!*\
  !*** ./components/CommonField.js ***!
  \***********************************/
/*! exports provided: default, CommonFiledSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFiledSchema", function() { return CommonFiledSchema; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox */ "./components/Checkbox.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CommonFiledSchema = {
  first: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().matches(/[A-Za-z]{1,50}/, "*invalid").required("*required"),
  last: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().matches(/[A-Za-z]{1,50}/, "*invalid").required("*required"),
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email("*invalid email").required("*required"),
  country_code: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "*invalid format").matches(/^\+\d{2,4}/, "*invalid format"),
  phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().matches(/^\d{1}[\d\-\s]{5,}/, "*invalid")
};

var CommonFiled = function CommonFiled(props) {
  var values = props.values,
      errors = props.errors,
      status = props.status,
      touched = props.touched,
      handleChange = props.handleChange;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "form-row"
  }, __jsx("div", {
    className: "form-group col-md-6 ".concat(touched.first ? errors.first ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "First Name", __jsx("span", {
    className: "text-danger"
  }, " *")), errors.first && touched.first ? __jsx("span", {
    className: "error-text"
  }, errors.first) : null, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "first",
    value: values.first,
    onChange: handleChange // required={true}

  })), __jsx("div", {
    className: "form-group col-md-6 ".concat(touched.last ? errors.last ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "Last Name", __jsx("span", {
    className: "text-danger"
  }, " *")), errors.last && touched.last ? __jsx("span", {
    className: "error-text"
  }, errors.last) : null, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "last",
    value: values.last,
    onChange: handleChange // required={true}

  }))), __jsx("div", {
    className: "form-group ".concat(touched.email ? errors.email ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "Email", __jsx("span", {
    className: "text-danger"
  }, " *")), errors.email && touched.email ? __jsx("span", {
    className: "error-text"
  }, errors.email) : null, __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "example@example.com",
    name: "email",
    value: values.email,
    onChange: handleChange // required={true}

  })), __jsx("div", {
    className: "form-row"
  }, __jsx("div", {
    className: "form-group col-xs-5 ".concat(touched.country_code ? errors.country_code ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "Country code"), errors.country_code && touched.country_code ? __jsx("span", {
    className: "error-text"
  }, errors.country_code) : null, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "country_code",
    placeholder: "+61",
    value: values.country_code,
    onChange: handleChange
  })), __jsx("div", {
    className: "form-group col-xs-7 ".concat(touched.phone ? errors.phone ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "Phone number"), errors.phone && touched.phone ? __jsx("span", {
    className: "error-text"
  }, errors.phone) : null, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "phone",
    value: values.phone,
    onChange: handleChange
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CommonFiled);


/***/ }),

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CommonField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommonField */ "./components/CommonField.js");
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/http */ "./common/http.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var ContactFormSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _CommonField__WEBPACK_IMPORTED_MODULE_4__["CommonFiledSchema"], {
  message: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("*required")
}));

var ContactForm = function ContactForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var contactRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var initialValues = {
    first: "",
    last: "",
    email: "",
    country_code: "",
    phone: "",
    conference: [],
    message: ""
  };

  var updateContactModal = function updateContactModal(e) {
    setIsLoading(false);

    if (contactRef.current !== null && contactRef.current.contains(e.target)) {
      // clicked inside the component
      return;
    } // clicked outside the component


    if (props.show) {
      props.handleContactModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener("mousedown", updateContactModal);
    return function cleanup() {
      window.removeEventListener("mousedown", updateContactModal);
    };
  }, [props.show, contactRef.current, isLoading]);
  return __jsx("div", {
    className: "modal fade show",
    id: "contact",
    role: "dialog",
    style: props.show ? {
      display: "block"
    } : {
      display: "none"
    }
  }, __jsx("div", {
    className: "modal-dialog",
    ref: contactRef
  }, __jsx("div", {
    className: "modal-content"
  }, __jsx("div", {
    className: "modal-header"
  }, __jsx("h5", {
    className: "modal-title"
  }, "Contact Us"), __jsx("button", {
    type: "button",
    className: "close",
    onClick: props.handleContactModal
  }, __jsx("span", null, "\xD7"))), __jsx("div", {
    className: "modal-body"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    validationSchema: ContactFormSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      _common_http__WEBPACK_IMPORTED_MODULE_5__["saveContact"](values);
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        status = _ref2.status,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return __jsx("form", {
      onSubmit: handleSubmit
    }, __jsx(_CommonField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      values: values,
      errors: errors,
      status: status,
      touched: touched,
      handleChange: handleChange
    }), __jsx("br", null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Message", __jsx("span", {
      className: "text-danger"
    }, " *")), errors.message && touched.message ? __jsx("span", {
      className: "error-text"
    }, errors.message) : null, __jsx("textarea", {
      className: "form-control",
      name: "message",
      rows: "2",
      onChange: handleChange,
      value: values.message
    })), __jsx("div", {
      className: "modal-footer"
    }, __jsx("button", {
      type: "button",
      className: "btn btn-secondary",
      onClick: props.handleContactModal
    }, "Close"), __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Submit")));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/CustomFieldGroup.js":
/*!****************************************!*\
  !*** ./components/CustomFieldGroup.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ "./components/Checkbox.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var CustomFieldGroup = function CustomFieldGroup(props) {
  var values = props.values,
      errors = props.errors,
      handleChange = props.handleChange,
      groupValues = props.groupValues;

  function AddToFieldArray(props) {
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: props.name
    }, function (_ref) {
      var field = _ref.field,
          form = _ref.form;
      return __jsx("a", {
        className: "form-control form-check",
        style: {
          borderRadius: "3px",
          fontSize: "14px",
          cursor: "pointer",
          padding: "4px 6px"
        },
        onClick: function onClick() {
          var index = field.value.indexOf("Other");

          if (typeof props.error === "undefined") {
            if (typeof form.values[props.nameTmp] !== "undefined" && form.values[props.nameTmp] !== "" && index != -1) {
              form.values[props.name][index] = form.values[props.nameTmp];
              groupValues.checkBoxLabels.splice(groupValues.checkBoxLabels.length - 1, 0, form.values[props.nameTmp]);
            }
          }

          form.setFieldValue(props.nameTmp, ""); // remove empty value and "Other" from array
          // const nextValue = form.values[props.name].filter(
          //   value => value !== "Other" && value !== ""
          // );
          // form.setFieldValue(props.name, nextValue);
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: "plus"
      }));
    });
  }

  return __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, groupValues.groupTitle), __jsx("br", null), groupValues.checkBoxLabels.map(function (checkbox, index) {
    return __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      name: groupValues.name,
      value: checkbox,
      className: checkbox === "Other" ? "" : groupValues.className
    });
  }), values[groupValues.name].includes("Other") ? __jsx("div", {
    className: "form-row",
    style: {
      paddingLeft: "5px"
    }
  }, __jsx("div", {
    className: "form-group",
    style: {
      display: "inline-block"
    }
  }, __jsx(AddToFieldArray, {
    name: groupValues.name,
    nameTmp: groupValues.tmp,
    className: groupValues.className,
    error: errors[groupValues.tmp]
  })), __jsx("div", {
    className: "form-group",
    style: {
      minWidth: "80%",
      display: "inline-block",
      paddingLeft: "10px"
    }
  }, __jsx("textarea", {
    className: "form-control",
    name: groupValues.tmp,
    rows: "1",
    placeholder: groupValues.placeholder,
    onChange: handleChange,
    value: values[groupValues.tmp]
  }), errors[groupValues.tmp] ? __jsx("span", {
    className: "error-text"
  }, errors[groupValues.tmp]) : null)) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomFieldGroup);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactForm */ "./components/ContactForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var date = new Date().getFullYear();

var Footer = function Footer(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      contactModal = _useState[0],
      setContactModal = _useState[1];

  var handleContactModal = function handleContactModal() {
    setContactModal(!contactModal);
  };

  var footerNavMenue = [{
    label: "Donation ",
    link: "#donation",
    icon: ""
  }, {
    label: "Contact Us",
    link: "#contact",
    icon: "",
    handler: handleContactModal
  }];
  var followUs = props.socialMedia.map(function (link, index) {
    return __jsx("li", {
      className: "list-inline-item",
      key: index
    }, __jsx("a", {
      href: link.link,
      className: "footer-icon"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: link.icon,
      size: "2x"
    })));
  });
  var footerNav = footerNavMenue.map(function (navLink, index) {
    return __jsx("li", {
      key: index
    }, __jsx("a", {
      href: navLink.link,
      onClick: navLink.handler
    }, navLink.label));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: contactModal,
    handleContactModal: handleContactModal
  }), __jsx("footer", {
    className: "footer footer-default"
  }, __jsx("div", {
    className: "container text-center"
  }, __jsx("p", {
    className: "text-muted"
  }, "\xA9", date, " Emboldened. Follow us"), __jsx("ul", {
    className: "list-inline"
  }, followUs), __jsx("div", {
    style: {
      paddingTop: "20px"
    }
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-8"
  }, __jsx("nav", null, __jsx("ul", null, footerNav))), __jsx("div", {
    className: "col-sm-4"
  }, __jsx("div", {
    className: "copyright"
  }, "Made with ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "heart"
  }), " and", " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "coffee"
  }), " by Emboldened Team in Sydney")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/bootstrap.min.css */ "./static/bootstrap.min.css");
/* harmony import */ var _static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/theme.css */ "./static/theme.css");
/* harmony import */ var _static_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_theme_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/animate.css */ "./static/animate.css");
/* harmony import */ var _static_animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_animate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Layout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.css */ "./components/Layout.css");
/* harmony import */ var _Layout_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["config"].autoAddCss = false;
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faUsers"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faVideo"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faEnvelope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faHandsHelping"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faHandshake"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faUserPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faGift"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faCoffee"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faPlus"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPlusSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faCross"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faComment"]);
var navMenu = [{
  brand: "Emboldened",
  label: "home",
  link: "/",
  icon: "home",
  logo: "../static/img/jl-icon-19144-light-square.png"
}, {
  label: "About Us",
  link: "/about",
  icon: "users"
}, {
  label: "Behind the Scenes",
  link: "/behind-scenes",
  icon: "video"
}, {
  label: "Register for Conference",
  link: "/#register",
  icon: "envelope"
}, {
  label: "Get Involved",
  link: "/get-involved",
  icon: "handshake"
}, {
  label: "Faith Statement",
  link: "/faith-statement",
  icon: "cross"
}];
var socialMedia = [{
  icon: ["fab", "linkedin"],
  link: ""
}, {
  icon: ["fab", "instagram"],
  link: ""
}, {
  icon: ["fab", "youtube"],
  link: ""
}];

var Layout = function Layout(props) {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, "Emboldened"), " ", __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navMenu: navMenu
  }), __jsx("div", {
    className: "".concat(props.banner.className, " page-header clear-filter "),
    "filter-color": "black"
  }, __jsx("div", {
    className: "page-header-image",
    "data-parallax": "true",
    style: {
      backgroundImage: "url(".concat(props.banner.image, ")")
    }
  }), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "content-center"
  }, __jsx("h1", {
    className: "h1-seo"
  }, props.banner.title), __jsx("h3", {
    className: "h3-seo"
  }, props.banner.subTitle)))), __jsx("div", {
    className: "main"
  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    socialMedia: socialMedia
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.css */ "./components/NavBar.css");
/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var NavBar = function NavBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("navbar-transparent"),
      navbarColor = _useState[0],
      setNavbarColor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      collapseOpen = _useState2[0],
      setCollapseOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var linkClick = function linkClick() {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };

  var navMenu = props.navMenu.map(function (menu, index) {
    if (index === 0) {
      return null;
    } else {
      return __jsx("li", {
        className: "nav-item",
        key: index
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: menu.link
      }, __jsx("a", {
        className: "nav-link",
        onClick: linkClick
      }, " ", __jsx("span", {
        className: "nav-top-icon"
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: menu.icon
      })), menu.label)));
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsLoading(false);

    var updateNavbarColor = function updateNavbarColor() {
      var windowHeight = window.innerHeight / 2;

      if (document.documentElement.scrollTop >= windowHeight || document.body.scrollTop >= windowHeight) {
        setNavbarColor("");
      } else if (document.documentElement.scrollTop < windowHeight || document.body.scrollTop < windowHeight) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, [isLoading]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, collapseOpen ? __jsx("div", {
    id: "bodyClick",
    onClick: function onClick() {
      document.documentElement.classList.toggle("nav-open");
      setCollapseOpen(false);
    }
  }) : null, __jsx("nav", {
    className: "navbar navbar-expand-lg bg-white fixed-top " + navbarColor,
    expand: "lg",
    color: "info"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "navbar-translate"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: props.navMenu[0].link
  }, __jsx("a", {
    className: "navbar-brand"
  }, __jsx("img", {
    src: "../".concat(props.navMenu[0].logo),
    alt: "",
    width: "30",
    height: "30"
  }), " ", props.navMenu[0].brand)), __jsx("button", {
    className: "navbar-toggler navbar-toggler",
    onClick: function onClick() {
      document.documentElement.classList.toggle("nav-open");
      setCollapseOpen(!collapseOpen);
    },
    "aria-expanded": collapseOpen,
    type: "button"
  }, __jsx("span", {
    className: "navbar-toggler-bar top-bar"
  }), __jsx("span", {
    className: "navbar-toggler-bar middle-bar"
  }), __jsx("span", {
    className: "navbar-toggler-bar bottom-bar"
  }))), __jsx("div", {
    className: "collapse navbar-collapse justify-content-end"
  }, __jsx("ul", {
    className: "navbar-nav"
  }, navMenu)))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/PartnerForm.js":
/*!***********************************!*\
  !*** ./components/PartnerForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/http */ "./common/http.js");
/* harmony import */ var _ErrorFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorFocus */ "./components/ErrorFocus.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PartnerFormSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, "*invalid").max(50, "*invalid").required("*required"),
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email("*invalid email").required("*required"),
  message: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("*required")
});

var PartnerForm = function PartnerForm() {
  var initialValues = {
    name: "",
    email: "",
    organisation: "",
    message: ""
  };
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: initialValues,
    validationSchema: PartnerFormSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      _common_http__WEBPACK_IMPORTED_MODULE_3__["savePartner"](values);
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        status = _ref2.status,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return __jsx("form", {
      onSubmit: handleSubmit
    }, __jsx("div", {
      className: "form-group ".concat(touched.name ? errors.name ? "has-danger" : "has-success" : "")
    }, __jsx("label", null, "Name", __jsx("span", {
      className: "text-danger"
    }, " *")), errors.name && touched.name ? __jsx("span", {
      className: "error-text"
    }, errors.name) : null, __jsx("input", {
      type: "text",
      className: "form-control",
      name: "name",
      value: values.name,
      onChange: handleChange
    })), __jsx("div", {
      className: "form-group ".concat(touched.email ? errors.email ? "has-danger" : "has-success" : "")
    }, __jsx("label", null, "Email", __jsx("span", {
      className: "text-danger"
    }, " *")), errors.email && touched.email ? __jsx("span", {
      className: "error-text"
    }, errors.email) : null, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "example@example.com",
      name: "email",
      value: values.email,
      onChange: handleChange
    })), __jsx("br", null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Organisation/Business"), __jsx("input", {
      type: "text",
      className: "form-control",
      name: "organisation",
      value: values.organisation,
      onChange: handleChange
    })), __jsx("br", null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Message", __jsx("span", {
      className: "text-danger"
    }, " *")), errors.message && touched.message ? __jsx("span", {
      className: "error-text"
    }, errors.message) : null, __jsx("textarea", {
      className: "form-control",
      name: "message",
      rows: "5",
      onChange: handleChange,
      value: values.message
    })), __jsx("div", {
      style: {
        textAlign: "right"
      }
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Submit")), __jsx(_ErrorFocus__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerForm);

/***/ }),

/***/ "./components/VolunteerForm.js":
/*!*************************************!*\
  !*** ./components/VolunteerForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/http */ "./common/http.js");
/* harmony import */ var _CommonField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommonField */ "./components/CommonField.js");
/* harmony import */ var _CustomFieldGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomFieldGroup */ "./components/CustomFieldGroup.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Checkbox */ "./components/Checkbox.js");
/* harmony import */ var _ErrorFocus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorFocus */ "./components/ErrorFocus.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var regex = /^\w.*\S.*$/;
var VolunteerFormSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _CommonField__WEBPACK_IMPORTED_MODULE_6__["CommonFiledSchema"], {
  conference: yup__WEBPACK_IMPORTED_MODULE_4__["array"]().min(1, "*select at least one location").required("*required"),
  tmpAvailability: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().matches(regex, "*invalid format"),
  tmpInterest: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().matches(regex, "*invalid format"),
  tmpSkill: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().matches(regex, "*invalid format")
}));
var availableGroupValues = {
  name: "available",
  tmp: "tmpAvailability",
  groupTitle: "Availability",
  className: "form-check-inline",
  checkBoxLabels: ["Whole Conference", "Friday", "Saturday", "Other"],
  placeholder: "Please specify time available"
};
var interestGroupValues = {
  name: "interest",
  tmp: "tmpInterest",
  groupTitle: "Interested in:",
  className: "",
  checkBoxLabels: ["Stage Management", "Audio/Visual Production", "Registration & Admin", "Food & Catering", "Photography/Videography", "Logistics & Cleaning", "Other"],
  placeholder: "Click add to include input values"
};
var skillGroupValues = {
  name: "skill",
  tmp: "tmpSkill",
  groupTitle: "Any special gifts/skills?",
  className: "",
  checkBoxLabels: ["Layout/Graphics Designer", "Artist", "Comp. Tech.", "First Aid", "Worship leader/Musician", "Translator", "Other"],
  placeholder: "Click add to include input values"
};

var VolunteerForm = function VolunteerForm() {
  var initialValues = {
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
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: initialValues,
    validationSchema: VolunteerFormSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      _common_http__WEBPACK_IMPORTED_MODULE_5__["saveVolunteer"](values);
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        status = _ref2.status,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return __jsx("form", {
      onSubmit: handleSubmit
    }, __jsx(_CommonField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      values: values,
      errors: errors,
      status: status,
      touched: touched,
      handleChange: handleChange
    }), __jsx("br", null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Conferences Interested:", __jsx("span", {
      className: "text-danger"
    }, " *")), errors.conference && touched.conference ? __jsx("span", {
      className: "error-text"
    }, errors.conference) : null, __jsx("br", null), __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "conference",
      value: "Sydney",
      className: "form-check-inline"
    }), __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "conference",
      value: "Perth",
      className: "form-check-inline"
    }), __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "conference",
      value: "Kuala Lumpur",
      className: "form-check-inline"
    })), __jsx("br", null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Where do you attend church?"), __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Church Name, City",
      name: "church",
      value: values.church,
      onChange: handleChange
    })), __jsx("br", null), __jsx(_CustomFieldGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      values: values,
      errors: errors,
      handleChange: handleChange,
      groupValues: availableGroupValues
    }), __jsx("br", null), __jsx(_CustomFieldGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      values: values,
      errors: errors,
      handleChange: handleChange,
      groupValues: interestGroupValues
    }), __jsx("br", null), __jsx(_CustomFieldGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      values: values,
      errors: errors,
      handleChange: handleChange,
      groupValues: skillGroupValues
    }), __jsx("br", null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Comments"), __jsx("textarea", {
      className: "form-control",
      name: "message",
      rows: "2",
      onChange: handleChange,
      value: values.message
    })), __jsx("div", {
      style: {
        textAlign: "right"
      }
    }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(touched).length > 0 ? _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(errors).length > 0 ? __jsx("div", {
      className: "text-danger",
      style: {
        paddingRight: "20px",
        fontWeight: "bold",
        textTransform: "uppercase"
      }
    }, "*Error in form. Please review inputs.") : null : null, __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Submit")), __jsx(_ErrorFocus__WEBPACK_IMPORTED_MODULE_9__["default"], null));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (VolunteerForm);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/isomorphic-unfetch/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs").default || __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs"));


/***/ }),

/***/ "./pages/get-involved.js":
/*!*******************************!*\
  !*** ./pages/get-involved.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_VolunteerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/VolunteerForm */ "./components/VolunteerForm.js");
/* harmony import */ var _components_PartnerForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PartnerForm */ "./components/PartnerForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var banner = {
  title: "Get Involved",
  subTitle: "",
  image: "../static/img/header-05-get-involved.jpg"
};
var volunteer = {
  id: "volunteer",
  title: "Volunteering",
  info: "Conferences are hard work. We can’t do without helping hands so if you are keen to volunteer, we salute you! Oh, and please fill in the form, we promise to be in contact soon!",
  link: "/get-involved#volunteer",
  linkLabel: "Register",
  form: __jsx(_components_VolunteerForm__WEBPACK_IMPORTED_MODULE_2__["default"], null),
  formTitle: "Emboldened Volunteer Registration",
  ref: "volunteerForm"
};
var partner = {
  id: "partner",
  title: "Partnership",
  info: "Our heart is to reach as many women as we can so if you are keen to explore possibilities with Emboldened, whether you are a church, business or an individual, we would love to hear from you.",
  link: "/get-involved#partner",
  linkLabel: "Partner with Us",
  form: __jsx(_components_PartnerForm__WEBPACK_IMPORTED_MODULE_3__["default"], null),
  formTitle: "Partner with Us!",
  ref: "partnerForm"
};
var donate = {
  id: "donation",
  title: "Donation",
  info: "Support us finacially",
  link: "/get-involved#donation",
  linkLabel: "Details",
  form: ""
};

var GetInvolved = function GetInvolved() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      formShow = _useState[0],
      setFormShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      partnerFormShow = _useState2[0],
      setPartnerFormShow = _useState2[1];

  var handleVolunteerFormClick = function handleVolunteerFormClick() {
    if (formShow === "show") {
      setFormShow(" ");
    } else {
      setFormShow("show");
    }
  };

  var handlePartnerFormClick = function handlePartnerFormClick() {
    if (partnerFormShow === "show") {
      setPartnerFormShow(" ");
    } else {
      setPartnerFormShow("show");
    }
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    banner: banner
  }, __jsx("div", {
    className: "section section-1"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "card",
    id: volunteer.id
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h4", {
    className: "card-title "
  }, volunteer.title), __jsx("p", {
    className: "card-text"
  }, volunteer.info), __jsx("div", {
    className: "text-right"
  }, __jsx("a", {
    href: volunteer.link,
    "data-toggle": "collapse",
    onClick: handleVolunteerFormClick
  }, volunteer.linkLabel, " ", __jsx("i", {
    className: "now-ui-icons arrows-1_minimal-down"
  }))), __jsx("div", {
    className: "collapse ".concat(formShow),
    style: {
      paddingTop: "20px"
    }
  }, __jsx("div", {
    className: "card-header"
  }, __jsx("h6", null, volunteer.formTitle)), __jsx("div", {
    className: "card-body"
  }, volunteer.form)))), __jsx("div", {
    className: "card",
    id: partner.id
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h4", {
    className: "card-title "
  }, partner.title), __jsx("p", {
    className: "card-text"
  }, partner.info), __jsx("div", {
    className: "text-right"
  }, __jsx("a", {
    href: partner.link,
    "data-toggle": "collapse",
    onClick: handlePartnerFormClick
  }, partner.linkLabel, " ", __jsx("i", {
    className: "now-ui-icons arrows-1_minimal-down"
  }))), __jsx("div", {
    className: "collapse ".concat(partnerFormShow),
    style: {
      paddingTop: "20px"
    }
  }, __jsx("div", {
    className: "card-header"
  }, __jsx("h6", null, partner.formTitle)), __jsx("div", {
    className: "card-body"
  }, partner.form)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (GetInvolved);

/***/ })

})
//# sourceMappingURL=get-involved.js.e08c073f43076fdfa9bc.hot-update.js.map