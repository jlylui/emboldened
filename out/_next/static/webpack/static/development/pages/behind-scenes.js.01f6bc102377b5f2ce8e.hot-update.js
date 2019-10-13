webpackHotUpdate("static\\development\\pages\\behind-scenes.js",{

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
    className: "col-8"
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

/***/ })

})
//# sourceMappingURL=behind-scenes.js.01f6bc102377b5f2ce8e.hot-update.js.map