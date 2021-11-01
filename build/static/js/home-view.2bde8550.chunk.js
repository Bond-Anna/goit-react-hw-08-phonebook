(this["webpackJsonpgoit-react-hw-08-phonebook"] =
  this["webpackJsonpgoit-react-hw-08-phonebook"] || []).push([
  [0],
  {
    107: function (e, i, t) {
      e.exports = {
        home: "HomeView_home__2iMFy",
        title: "HomeView_title__2K0nF",
        registredTitle: "HomeView_registredTitle__hMuT3",
        name: "HomeView_name__PAr-E",
        link: "HomeView_link__2Lahy",
        activeLink: "HomeView_activeLink__1FLAz",
        registerLink: "HomeView_registerLink__2CkiC",
        loginLink: "HomeView_loginLink__c8873",
      };
    },
    108: function (e, i, t) {
      "use strict";
      t.r(i);
      var a = t(5),
        s = t(29),
        n = t(18),
        c = t(107),
        o = t.n(c),
        l = t(2);
      i.default = function () {
        var e = Object(a.c)(n.a.getIsLoggedIn),
          i = Object(a.c)(n.a.getUserName);
        return Object(l.jsx)("div", {
          className: o.a.home,
          children: e
            ? Object(l.jsxs)("h2", {
                className: o.a.registredTitle,
                children: [
                  "Hello, ",
                  Object(l.jsx)("span", { className: o.a.name, children: i }),
                  " ! Check your Pnonebook",
                ],
              })
            : Object(l.jsxs)(l.Fragment, {
                children: [
                  Object(l.jsx)("h1", {
                    className: o.a.title,
                    children: "Welcome",
                  }),
                  Object(l.jsxs)("div", {
                    className: o.a.links,
                    children: [
                      Object(l.jsx)(s.b, {
                        to: "/register",
                        className: o.a.registerLink,
                        activeClassName: o.a.activeLink,
                        children: Object(l.jsx)("button", {
                          className: o.a.link,
                          children: "Register",
                        }),
                      }),
                      Object(l.jsx)(s.b, {
                        to: "/login",
                        className: o.a.loginLink,
                        activeClassName: o.a.activeLink,
                        children: Object(l.jsx)("button", {
                          className: o.a.link,
                          children: "Login",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
        });
      };
    },
  },
]);
//# sourceMappingURL=home-view.2bde8550.chunk.js.map
