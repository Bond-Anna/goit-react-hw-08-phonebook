(this["webpackJsonpgoit-react-hw-08-phonebook"] =
  this["webpackJsonpgoit-react-hw-08-phonebook"] || []).push([
  [1],
  {
    110: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "Login", function () {
          return u;
        });
      var s = t(44),
        n = t(1),
        c = t(5),
        l = t(17),
        r = t(21),
        i = t.n(r),
        o = t(2);
      function u() {
        var e = Object(n.useState)(""),
          a = Object(s.a)(e, 2),
          t = a[0],
          r = a[1],
          u = Object(n.useState)(""),
          b = Object(s.a)(u, 2),
          j = b[0],
          m = b[1],
          p = Object(c.b)(),
          d = function (e) {
            switch (e.target.name) {
              case "email":
                return r(e.target.value);
              case "password":
                return m(e.target.value);
              default:
                return;
            }
          },
          h = function () {
            r(""), m("");
          };
        return Object(o.jsx)("div", {
          className: i.a.container,
          children: Object(o.jsxs)("form", {
            className: i.a.form,
            onSubmit: function (e) {
              e.preventDefault(), p(l.a.logIn({ email: t, password: j })), h();
            },
            children: [
              Object(o.jsxs)("label", {
                className: i.a.labelField,
                children: [
                  Object(o.jsx)("span", {
                    className: i.a.label,
                    children: "Email",
                  }),
                  Object(o.jsx)("input", {
                    type: "email",
                    name: "email",
                    value: t,
                    onChange: d,
                    className: i.a.input,
                  }),
                ],
              }),
              Object(o.jsxs)("label", {
                className: i.a.labelField,
                children: [
                  Object(o.jsx)("span", {
                    className: i.a.label,
                    children: "Password",
                  }),
                  Object(o.jsx)("input", {
                    type: "password",
                    name: "password",
                    value: j,
                    onChange: d,
                    className: i.a.input,
                  }),
                ],
              }),
              Object(o.jsx)("button", {
                type: "submit",
                className: i.a.formBtn,
                children: "Log In",
              }),
            ],
          }),
        });
      }
      a.default = u;
    },
  },
]);
//# sourceMappingURL=login-view.8612e7f1.chunk.js.map
