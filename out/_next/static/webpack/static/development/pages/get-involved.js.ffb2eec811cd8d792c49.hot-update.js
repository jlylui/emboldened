webpackHotUpdate("static\\development\\pages\\get-involved.js",{

/***/ "./common/http.js":
false,

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
  firstName: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "*invalid").max(50, "*invalid").required("*required"),
  lastName: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "*invalid").max(50, "*invalid").required("*required"),
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email("*invalid email").required("*required"),
  countryCode: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "*invalid format").matches(/^\+\d{2,4}/, "*invalid format"),
  phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().matches(/^\d{1}[\d\-\s]{5,}/, "*invalid"),
  conference: yup__WEBPACK_IMPORTED_MODULE_3__["array"]().min(1, "*select at least one location").required("*required")
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
    className: "form-group col-md-6 ".concat(touched.firstName ? errors.firstName ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "First Name", __jsx("span", {
    className: "text-danger"
  }, " *")), errors.firstName && touched.firstName ? __jsx("span", {
    className: "error-text"
  }, errors.firstName) : null, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "firstName",
    value: values.firstName,
    onChange: handleChange,
    required: true
  })), __jsx("div", {
    className: "form-group col-md-6 ".concat(touched.lastName ? errors.lastName ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "Last Name", __jsx("span", {
    className: "text-danger"
  }, " *")), errors.lastName && touched.lastName ? __jsx("span", {
    className: "error-text"
  }, errors.lastName) : null, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "lastName",
    value: values.lastName,
    onChange: handleChange,
    required: true
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
    onChange: handleChange,
    required: true
  })), __jsx("div", {
    className: "form-row"
  }, __jsx("div", {
    className: "form-group col-md-4 ".concat(touched.countryCode ? errors.countryCode ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "Country code"), errors.countryCode && touched.countryCode ? __jsx("span", {
    className: "error-text"
  }, errors.countryCode) : null, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "countryCode",
    placeholder: "+61",
    value: values.countryCode,
    onChange: handleChange
  })), __jsx("div", {
    className: "form-group col-md-8 ".concat(touched.phone ? errors.phone ? "has-danger" : "has-success" : "")
  }, __jsx("label", null, "Phone number"), errors.phone && touched.phone ? __jsx("span", {
    className: "error-text"
  }, errors.phone) : null, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "phone",
    value: values.phone,
    onChange: handleChange
  }))), __jsx("br", null), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Conferences Interested:", __jsx("span", {
    className: "text-danger"
  }, " *")), errors.conference && touched.conference ? __jsx("span", {
    className: "error-text"
  }, errors.conference) : null, __jsx("br", null), __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "conference",
    value: "Sydney",
    className: "form-check-inline"
  }), __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "conference",
    value: "Perth",
    className: "form-check-inline"
  }), __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "conference",
    value: "Kuala Lumpur",
    className: "form-check-inline"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CommonFiled);


/***/ }),

/***/ "./components/ContactForm.js":
false,

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
  }, errors[groupValues.tmp]) : null)) : null, values[groupValues.tmp] === "" && values[groupValues.name].length > 0 ? __jsx("div", {
    className: "text-success",
    style: {
      fontSize: ".8571em",
      padding: "10px 0px",
      color: "#888"
    }
  }, __jsx("span", {
    style: {
      fontWeight: "bold"
    }
  }, "Selected values:"), __jsx("br", null), "[", values[groupValues.name].toString(), "]") : null);
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var date = new Date().getFullYear();
var footerNavMenue = [{
  label: "Donation ",
  link: "/get-involved#donation",
  icon: ""
}, {
  label: "Contact Us",
  link: "/#contact",
  icon: "envelope"
}];

var Footer = function Footer(props) {
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
      href: navLink.link
    }, navLink.label));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ContactForm, {
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
    className: "col-6"
  }, __jsx("nav", {
    style: {
      textAlign: "left"
    }
  }, __jsx("ul", null, footerNav))), __jsx("div", {
    className: "col-6"
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
  label: "Contact Us",
  link: "/#contact",
  icon: "envelope"
}, {
  label: "Get Invovled",
  link: "/get-involved",
  icon: "handshake"
}, {
  label: "Faith Statement",
  link: "/faith-statement",
  icon: "cross"
}];
var socialMedia = [{
  icon: ["fab", "facebook"],
  link: ""
}, {
  icon: ["fab", "instagram"],
  link: ""
}, {
  icon: ["fab", "youtube"],
  link: ""
}, {
  icon: ["fab", "twitter"],
  link: ""
}, {
  icon: ["fab", "pinterest"],
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
      if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
        setNavbarColor("");
      } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
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
    className: "navbar-toggler ".concat(collapseOpen ? "toggled" : ""),
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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var PartnerFormSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "*invalid").max(50, "*invalid").required("*required"),
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email("*invalid email").required("*required"),
  message: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("*required")
});

var PartnerForm = function PartnerForm() {
  var initialValues = {
    name: "",
    email: "",
    organisation: "",
    message: ""
  };
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    validationSchema: PartnerFormSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
        setSubmitting(false);
      }, 400);
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
      onChange: handleChange,
      required: true
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
      rows: "2",
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
    }, "Submit")));
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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommonField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommonField */ "./components/CommonField.js");
/* harmony import */ var _CustomFieldGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomFieldGroup */ "./components/CustomFieldGroup.js");
/* harmony import */ var _ErrorFocus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorFocus */ "./components/ErrorFocus.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var regex = /^\w.*\S.*$/;
var VolunteerFormSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _CommonField__WEBPACK_IMPORTED_MODULE_6__["CommonFiledSchema"], {
  tmpAvailability: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().matches(regex, "*invalid format"),
  tmpInterest: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().matches(regex, "*invalid format"),
  tmpSkill: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().matches(regex, "*invalid format")
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
  checkBoxLabels: ["Layout/Graphics Designer", "Artist", "Comp. Tech.", "First Aid", "Worship leader/Musician", "Other"],
  placeholder: "Click add to include input values"
};

var VolunteerForm = function VolunteerForm() {
  var initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phone: "",
    conference: [],
    church: "",
    available: [],
    interest: [],
    skill: [],
    message: ""
  };
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validationSchema: VolunteerFormSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(values, null, 2));
        setSubmitting(false);
      }, 400);
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
    }, "Submit")), __jsx(_ErrorFocus__WEBPACK_IMPORTED_MODULE_8__["default"], null));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (VolunteerForm);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/isomorphic-unfetch/browser.js":
false,

/***/ "./node_modules/unfetch/dist/unfetch.mjs":
false,

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
    className: "section"
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
//# sourceMappingURL=get-involved.js.ffb2eec811cd8d792c49.hot-update.js.map