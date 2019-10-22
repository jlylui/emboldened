webpackHotUpdate("static\\development\\pages\\index.js",{

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
  console.log(props);
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
  }, props.banner.subTitle), __jsx("a", {
    "class": "nav-link",
    href: "/#register",
    style: props.banner.show ? {
      visibility: "visible"
    } : {
      visibility: "hidden"
    }
  }, props.banner.linkLabel)))), __jsx("div", {
    className: "main"
  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    socialMedia: socialMedia
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.b28103074e0e9715058a.hot-update.js.map