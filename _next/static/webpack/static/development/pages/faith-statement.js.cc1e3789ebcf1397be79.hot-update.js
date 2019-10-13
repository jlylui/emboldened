webpackHotUpdate("static\\development\\pages\\faith-statement.js",{

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

/***/ })

})
//# sourceMappingURL=faith-statement.js.cc1e3789ebcf1397be79.hot-update.js.map