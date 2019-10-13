webpackHotUpdate("static\\development\\pages\\get-involved.js",{

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
      onChange: handleChange // required={true}

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

/***/ })

})
//# sourceMappingURL=get-involved.js.a668baf3063ed49ee8cd.hot-update.js.map