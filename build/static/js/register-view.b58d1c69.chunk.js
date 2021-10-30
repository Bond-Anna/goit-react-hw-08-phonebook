(this["webpackJsonpgoit-react-hw-08-phonebook"] =
  this["webpackJsonpgoit-react-hw-08-phonebook"] || []).push([
  [3],
  {
    109: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t(44),
        l = t(1),
        n = t(5),
        c = t(17),
        r = t(21),
        i = t.n(r),
        b = t(2);
      a.default = function () {
        var e = Object(l.useState)(""),
          a = Object(s.a)(e, 2),
          t = a[0],
          r = a[1],
          o = Object(l.useState)(""),
          u = Object(s.a)(o, 2),
          m = u[0],
          j = u[1],
          p = Object(l.useState)(""),
          d = Object(s.a)(p, 2),
          h = d[0],
          O = d[1],
          f = Object(n.b)(),
          x = function (e) {
            switch (e.target.name) {
              case "name":
                return r(e.target.value);
              case "email":
                return j(e.target.value);
              case "password":
                return O(e.target.value);
              default:
                return;
            }
          },
          N = function () {
            r(""), j(""), O("");
          };
        return Object(b.jsx)("div", {
          className: i.a.container,
          children: Object(b.jsxs)("form", {
            onSubmit: function (e) {
              e.preventDefault(),
                f(c.a.register({ name: t, email: m, password: h })),
                N();
            },
            className: i.a.form,
            children: [
              Object(b.jsxs)("label", {
                className: i.a.labelField,
                children: [
                  Object(b.jsx)("span", {
                    className: i.a.label,
                    children: "Name",
                  }),
                  Object(b.jsx)("input", {
                    type: "text",
                    name: "name",
                    value: t,
                    onChange: x,
                    autoComplete: "off",
                    className: i.a.input,
                  }),
                ],
              }),
              Object(b.jsxs)("label", {
                className: i.a.labelField,
                children: [
                  Object(b.jsx)("span", {
                    className: i.a.label,
                    children: "Email",
                  }),
                  Object(b.jsx)("input", {
                    type: "email",
                    name: "email",
                    value: m,
                    onChange: x,
                    autoComplete: "off",
                    className: i.a.input,
                  }),
                ],
              }),
              Object(b.jsxs)("label", {
                className: i.a.labelField,
                children: [
                  Object(b.jsx)("span", {
                    className: i.a.label,
                    children: "Password",
                  }),
                  Object(b.jsx)("input", {
                    type: "password",
                    name: "password",
                    value: h,
                    onChange: x,
                    className: i.a.input,
                  }),
                ],
              }),
              Object(b.jsx)("button", {
                type: "submit",
                className: i.a.formBtn,
                children: "Register",
              }),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=register-view.b58d1c69.chunk.js.map
