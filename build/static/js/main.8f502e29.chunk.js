(this["webpackJsonpgoit-react-hw-07-phonebook"] =
  this["webpackJsonpgoit-react-hw-07-phonebook"] || []).push([
  [0],
  {
    13: function (t, e, a) {
      t.exports = {
        form: "form_form__1Ljzh",
        labelField: "form_labelField__2H5He",
        label: "form_label__2CZws",
        input: "form_input__kPN_j",
        formBtn: "form_formBtn__bGnBn",
      };
    },
    17: function (t, e, a) {
      t.exports = {
        contactItem: "contactItem_contactItem__15v1Z",
        contact: "contactItem_contact__1PTDo",
        marker: "contactItem_marker__2mL4B",
        contactName: "contactItem_contactName__1r_4U",
        contactNumber: "contactItem_contactNumber__2HDbh",
        contactBtn: "contactItem_contactBtn__2niSk",
      };
    },
    33: function (t, e, a) {
      t.exports = {
        filterLabel: "filter_filterLabel__1GXeY",
        filterInput: "filter_filterInput__3up4A",
      };
    },
    40: function (t, e, a) {
      t.exports = { contactsList: "contacts_contactsList__3oLdY" };
    },
    61: function (t, e, a) {},
    62: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(0),
        c = a.n(n),
        r = a(24),
        s = a.n(r),
        o = a(7),
        i = (a(53), a(42)),
        l = a(19),
        u = a(2),
        b = a(6),
        j = a(36),
        d = Object(j.a)({
          reducerPath: "contactsApi",
          baseQuery: Object(b.d)({
            baseUrl: "https://6175473308834f0017c70b8b.mockapi.io/api/v1/",
          }),
          tagTypes: ["Contact"],
          endpoints: function (t) {
            return {
              getContacts: t.query({
                query: function () {
                  return "/contacts";
                },
                providesTags: ["Contact"],
              }),
              addContact: t.mutation({
                query: function (t) {
                  return { url: "/contacts", method: "POST", body: t };
                },
                invalidatesTags: ["Contact"],
              }),
              deleteContact: t.mutation({
                query: function (t) {
                  return { url: "contacts/".concat(t), method: "DELETE" };
                },
                invalidatesTags: ["Contact"],
              }),
            };
          },
        }),
        m = d.useGetContactsQuery,
        O = d.useAddContactMutation,
        f = d.useDeleteContactMutation,
        h = Object(u.a)({
          reducer: Object(l.a)({}, d.reducerPath, d.reducer),
          middleware: function (t) {
            return [].concat(Object(i.a)(t()), [d.middleware]);
          },
        });
      Object(b.e)(h.dispatch);
      var p,
        x = a(23),
        _ = a(1),
        g = function () {
          return Object(_.jsxs)("nav", {
            children: [
              Object(_.jsx)(x.a, { exact: !0, to: "/", children: "Home" }),
              Object(_.jsx)(x.a, { to: "/register", children: "Register" }),
              Object(_.jsx)(x.a, { to: "/login", children: "Login" }),
              Object(_.jsx)(x.a, { to: "/contacts", children: "Phonebook" }),
            ],
          });
        },
        v = a(15),
        N = a(34),
        C = a(38),
        L = a(43),
        y = a(30),
        k = a(41),
        w = Object(y.a)(
          p ||
            (p = Object(C.a)([
              "\n0% {\n  transform: rotate(0deg);\n}\n100% {\n  transform: rotate(1turn);\n}\n",
            ]))
        ),
        I = Object(L.a)(k.a, { target: "ez986820" })(
          "animation:",
          w,
          " 0.85s linear infinite;"
        );
      I.defaultProps = { size: 40 };
      var A = a(13),
        B = a.n(A);
      function T() {
        var t = Object(n.useState)(""),
          e = Object(v.a)(t, 2),
          a = e[0],
          c = e[1],
          r = Object(n.useState)(""),
          s = Object(v.a)(r, 2),
          o = s[0],
          i = s[1],
          l = { name: a, number: o },
          u = m().data,
          b = O(),
          j = Object(v.a)(b, 2),
          d = j[0],
          f = j[1].isLoading,
          h = function (t) {
            switch (t.currentTarget.name) {
              case "name":
                c(t.currentTarget.value);
                break;
              case "number":
                i(t.currentTarget.value);
                break;
              default:
                return;
            }
          },
          p = function () {
            c(""), i("");
          };
        return Object(_.jsxs)(_.Fragment, {
          children: [
            Object(_.jsxs)("form", {
              onSubmit: function (t) {
                if (
                  (t.preventDefault(),
                  u.find(function (t) {
                    return t.name.toLowerCase() === a.toLowerCase();
                  }))
                )
                  return window.alert("".concat(a, " is already in contacts"));
                d(l), p(), N.b.success("Contact added!");
              },
              className: B.a.form,
              children: [
                Object(_.jsxs)("label", {
                  className: B.a.labelField,
                  children: [
                    Object(_.jsx)("span", {
                      className: B.a.label,
                      children: "Name",
                    }),
                    Object(_.jsx)("input", {
                      type: "text",
                      name: "name",
                      value: a,
                      pattern:
                        "^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",
                      title:
                        "\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",
                      required: !0,
                      onChange: h,
                      className: B.a.input,
                    }),
                  ],
                }),
                Object(_.jsxs)("label", {
                  className: B.a.labelField,
                  children: [
                    Object(_.jsx)("span", {
                      className: B.a.label,
                      children: "Number",
                    }),
                    Object(_.jsx)("input", {
                      type: "tel",
                      name: "number",
                      value: o,
                      pattern:
                        "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",
                      title:
                        "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",
                      required: !0,
                      onChange: h,
                      className: B.a.input,
                    }),
                  ],
                }),
                Object(_.jsxs)("button", {
                  type: "submit",
                  className: B.a.formBtn,
                  disabled: f,
                  children: [
                    "Add contact",
                    f && Object(_.jsx)(I, { size: 17 }),
                  ],
                }),
              ],
            }),
            Object(_.jsx)(N.a, { position: "bottom-right", reverseOrder: !1 }),
          ],
        });
      }
      var S = a(33),
        z = a.n(S);
      function F(t) {
        var e = t.value,
          a = t.onChange;
        return Object(_.jsxs)("label", {
          className: z.a.filterLabel,
          children: [
            "Find contacts by name",
            Object(_.jsx)("input", {
              type: "text",
              name: "name",
              value: e,
              onChange: a,
              className: z.a.filterInput,
            }),
          ],
        });
      }
      var P = a(39),
        D = a(17),
        q = a.n(D);
      function Z(t) {
        var e = t.id,
          a = t.name,
          n = t.number,
          c = f(),
          r = Object(v.a)(c, 2),
          s = r[0],
          o = r[1].isLoading;
        return Object(_.jsx)(_.Fragment, {
          children: Object(_.jsxs)(
            "li",
            {
              className: q.a.contactItem,
              children: [
                Object(_.jsxs)("div", {
                  className: q.a.contact,
                  children: [
                    Object(_.jsx)("span", { className: q.a.marker }),
                    Object(_.jsxs)("span", {
                      className: q.a.contactName,
                      children: [a, ":"],
                    }),
                    Object(_.jsx)("span", {
                      className: q.a.contactNumber,
                      children: n,
                    }),
                  ],
                }),
                Object(_.jsx)("button", {
                  type: "button",
                  onClick: function () {
                    return s(e);
                  },
                  className: q.a.contactBtn,
                  children: o ? "Deleting..." : "Delete",
                }),
              ],
            },
            e
          ),
        });
      }
      var E = a(40),
        H = a.n(E);
      function M(t) {
        var e = t.contacts;
        return Object(_.jsx)("ul", {
          className: H.a.contactsList,
          children: e.map(function (t) {
            return Object(_.jsx)(Z, Object(P.a)({}, t), t.id);
          }),
        });
      }
      var G = function () {
          var t = m(),
            e = t.data,
            a = t.isLoading,
            c = t.isSuccess,
            r = Object(n.useState)(""),
            s = Object(v.a)(r, 2),
            o = s[0],
            i = s[1];
          console.log(e);
          return Object(_.jsxs)(_.Fragment, {
            children: [
              Object(_.jsx)("h1", {
                className: "title",
                children: "Phonebook",
              }),
              Object(_.jsx)(T, {}),
              Object(_.jsx)("h2", { className: "title", children: "Contacts" }),
              c &&
                0 !== e.lengs &&
                Object(_.jsx)(F, {
                  value: o,
                  onChange: function (t) {
                    return i(t.target.value);
                  },
                }),
              a && Object(_.jsx)(I, {}),
              c &&
                Object(_.jsx)(M, {
                  contacts: (function () {
                    var t = o.toLowerCase();
                    return e.filter(function (e) {
                      return e.name.toLowerCase().includes(t);
                    });
                  })(),
                  isLoading: a,
                  isSuccess: c,
                }),
            ],
          });
        },
        J = function () {
          return Object(_.jsxs)("div", {
            className: "App",
            children: [Object(_.jsx)(g, {}), Object(_.jsx)(G, {})],
          });
        };
      a(61);
      s.a.render(
        Object(_.jsx)(c.a.StrictMode, {
          children: Object(_.jsx)(o.a, {
            store: h,
            children: Object(_.jsx)(J, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.8f502e29.chunk.js.map
