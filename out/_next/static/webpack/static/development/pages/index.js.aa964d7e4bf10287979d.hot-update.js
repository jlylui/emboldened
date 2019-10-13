webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.aa964d7e4bf10287979d.hot-update.js.map