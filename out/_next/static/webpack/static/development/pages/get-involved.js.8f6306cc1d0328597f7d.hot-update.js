webpackHotUpdate("static\\development\\pages\\get-involved.js",{

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
//# sourceMappingURL=get-involved.js.8f6306cc1d0328597f7d.hot-update.js.map