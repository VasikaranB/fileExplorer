function D() {
}
function ve(t) {
  return t();
}
function Ae() {
  return /* @__PURE__ */ Object.create(null);
}
function U(t) {
  t.forEach(ve);
}
function ke(t) {
  return typeof t == "function";
}
function Pe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let ae;
function we(t, e) {
  return ae || (ae = document.createElement("a")), ae.href = e, t === ae.href;
}
function Ye(t) {
  return Object.keys(t).length === 0;
}
const Ze = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Ze;
function h(t, e) {
  t.appendChild(e);
}
function k(t, e, n) {
  t.insertBefore(e, n || null);
}
function y(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function xe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function _(t) {
  return document.createElement(t);
}
function P(t) {
  return document.createTextNode(t);
}
function S() {
  return P(" ");
}
function Ue() {
  return P("");
}
function j(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function Ne(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function de(t, e, n) {
  e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : d(t, e, n);
}
function et(t) {
  return Array.from(t.childNodes);
}
function me(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function ze(t, e) {
  t.value = e ?? "";
}
function ue(t, e, n) {
  for (let l = 0; l < t.options.length; l += 1) {
    const o = t.options[l];
    if (o.__value === e) {
      o.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Me(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function tt(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const o = document.createEvent("CustomEvent");
  return o.initCustomEvent(t, n, l, e), o;
}
function We(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let te;
function ee(t) {
  te = t;
}
function Ee() {
  if (!te)
    throw new Error("Function called outside component initialization");
  return te;
}
function nt(t) {
  Ee().$$.on_mount.push(t);
}
function lt(t) {
  Ee().$$.on_destroy.push(t);
}
function rt() {
  const t = Ee();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const r = tt(e, n, { cancelable: l });
      return o.slice().forEach((s) => {
        s.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const Q = [], Oe = [];
let X = [];
const Te = [], ot = /* @__PURE__ */ Promise.resolve();
let ye = !1;
function it() {
  ye || (ye = !0, ot.then(B));
}
function ne(t) {
  X.push(t);
}
const be = /* @__PURE__ */ new Set();
let J = 0;
function B() {
  if (J !== 0)
    return;
  const t = te;
  do {
    try {
      for (; J < Q.length; ) {
        const e = Q[J];
        J++, ee(e), ft(e.$$);
      }
    } catch (e) {
      throw Q.length = 0, J = 0, e;
    }
    for (ee(null), Q.length = 0, J = 0; Oe.length; )
      Oe.pop()();
    for (let e = 0; e < X.length; e += 1) {
      const n = X[e];
      be.has(n) || (be.add(n), n());
    }
    X.length = 0;
  } while (Q.length);
  for (; Te.length; )
    Te.pop()();
  ye = !1, be.clear(), ee(t);
}
function ft(t) {
  if (t.fragment !== null) {
    t.update(), U(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ne);
  }
}
function st(t) {
  const e = [], n = [];
  X.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), X = e;
}
const pe = /* @__PURE__ */ new Set();
let V;
function Ke() {
  V = {
    r: 0,
    c: [],
    p: V
    // parent group
  };
}
function Ve() {
  V.r || U(V.c), V = V.p;
}
function H(t, e) {
  t && t.i && (pe.delete(t), t.i(e));
}
function le(t, e, n, l) {
  if (t && t.o) {
    if (pe.has(t))
      return;
    pe.add(t), V.c.push(() => {
      pe.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
const ct = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...ct];
function at(t) {
  t && t.c();
}
function Ge(t, e, n, l) {
  const { fragment: o, after_update: r } = t.$$;
  o && o.m(e, n), l || ne(() => {
    const s = t.$$.on_mount.map(ve).filter(ke);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : U(s), t.$$.on_mount = [];
  }), r.forEach(ne);
}
function Je(t, e) {
  const n = t.$$;
  n.fragment !== null && (st(n.after_update), U(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function dt(t, e) {
  t.$$.dirty[0] === -1 && (Q.push(t), it(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Qe(t, e, n, l, o, r, s, u = [-1]) {
  const i = te;
  ee(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: D,
    not_equal: o,
    bound: Ae(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: Ae(),
    dirty: u,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  s && s(f.root);
  let c = !1;
  if (f.ctx = n ? n(t, e.props || {}, (a, g, ...b) => {
    const E = b.length ? b[0] : g;
    return f.ctx && o(f.ctx[a], f.ctx[a] = E) && (!f.skip_bound && f.bound[a] && f.bound[a](E), c && dt(t, a)), g;
  }) : [], f.update(), c = !0, U(f.before_update), f.fragment = l ? l(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = et(e.target);
      f.fragment && f.fragment.l(a), a.forEach(y);
    } else
      f.fragment && f.fragment.c();
    e.intro && H(t.$$.fragment), Ge(t, e.target, e.anchor, e.customElement), B();
  }
  ee(i);
}
let Ce;
typeof HTMLElement == "function" && (Ce = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(ve).filter(ke);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    U(this.$$.on_disconnect);
  }
  $destroy() {
    Je(this, 1), this.$destroy = D;
  }
  $on(t, e) {
    if (!ke(e))
      return D;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const l = n.indexOf(e);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !Ye(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function Le(t, e, n) {
  const l = t.slice();
  return l[6] = e[n], l;
}
function ut(t) {
  let e, n, l, o;
  return {
    c() {
      e = _("span"), n = S(), l = _("img"), d(e, "class", "file"), d(l, "class", "fileimage"), d(l, "alt", "img"), we(l.src, o = "file.png") || d(l, "src", o);
    },
    m(r, s) {
      k(r, e, s), k(r, n, s), k(r, l, s);
    },
    p: D,
    d(r) {
      r && y(e), r && y(n), r && y(l);
    }
  };
}
function pt(t) {
  let e, n, l, o, r, s, u;
  function i() {
    return (
      /*click_handler*/
      t[4](
        /*child*/
        t[6]
      )
    );
  }
  function f(...c) {
    return (
      /*keydown_handler*/
      t[5](
        /*child*/
        t[6],
        ...c
      )
    );
  }
  return {
    c() {
      var c;
      e = _("span"), l = S(), o = _("img"), d(e, "class", n = /*child*/
      ((c = t[6]) == null ? void 0 : c.open) == !0 ? "folder-arrow-close" : "folder-arrow-open"), d(o, "class", "folderimage"), d(o, "alt", "img"), we(o.src, r = "folder.png") || d(o, "src", r);
    },
    m(c, a) {
      k(c, e, a), k(c, l, a), k(c, o, a), s || (u = [
        j(e, "click", Ne(i)),
        j(e, "keydown", Ne(f))
      ], s = !0);
    },
    p(c, a) {
      var g;
      t = c, a & /*folder*/
      1 && n !== (n = /*child*/
      ((g = t[6]) == null ? void 0 : g.open) == !0 ? "folder-arrow-close" : "folder-arrow-open") && d(e, "class", n);
    },
    d(c) {
      c && y(e), c && y(l), c && y(o), s = !1, U(u);
    }
  };
}
function Re(t) {
  let e, n;
  return e = new Xe({ props: { folder: (
    /*child*/
    t[6]
  ) } }), {
    c() {
      at(e.$$.fragment);
    },
    m(l, o) {
      Ge(e, l, o), n = !0;
    },
    p(l, o) {
      const r = {};
      o & /*folder*/
      1 && (r.folder = /*child*/
      l[6]), e.$set(r);
    },
    i(l) {
      n || (H(e.$$.fragment, l), n = !0);
    },
    o(l) {
      le(e.$$.fragment, l), n = !1;
    },
    d(l) {
      Je(e, l);
    }
  };
}
function qe(t) {
  var E, L, W;
  let e, n, l, o = (
    /*child*/
    t[6].name + ""
  ), r, s, u, i, f;
  function c(m, C) {
    var z;
    return (
      /*child*/
      (z = m[6]) != null && z.children ? pt : ut
    );
  }
  let a = c(t), g = a(t), b = (
    /*child*/
    ((E = t[6]) == null ? void 0 : E.open) && /*child*/
    ((L = t[6]) == null ? void 0 : L.children) && /*child*/
    ((W = t[6]) == null ? void 0 : W.children.length) > 0 && Re(t)
  );
  return {
    c() {
      e = _("div"), g.c(), n = S(), l = _("span"), r = P(o), s = S(), u = _("div"), b && b.c(), i = S(), d(l, "class", "folder-label"), d(e, "class", "folder"), d(u, "class", "child");
    },
    m(m, C) {
      k(m, e, C), g.m(e, null), h(e, n), h(e, l), h(l, r), k(m, s, C), k(m, u, C), b && b.m(u, null), h(u, i), f = !0;
    },
    p(m, C) {
      var z, K, M;
      a === (a = c(m)) && g ? g.p(m, C) : (g.d(1), g = a(m), g && (g.c(), g.m(e, n))), (!f || C & /*folder*/
      1) && o !== (o = /*child*/
      m[6].name + "") && me(r, o), /*child*/
      (z = m[6]) != null && z.open && /*child*/
      ((K = m[6]) != null && K.children) && /*child*/
      ((M = m[6]) == null ? void 0 : M.children.length) > 0 ? b ? (b.p(m, C), C & /*folder*/
      1 && H(b, 1)) : (b = Re(m), b.c(), H(b, 1), b.m(u, i)) : b && (Ke(), le(b, 1, 1, () => {
        b = null;
      }), Ve());
    },
    i(m) {
      f || (H(b), f = !0);
    },
    o(m) {
      le(b), f = !1;
    },
    d(m) {
      m && y(e), g.d(), m && y(s), m && y(u), b && b.d();
    }
  };
}
function mt(t) {
  var u;
  let e, n, l, o = (
    /*folder*/
    (u = t[0]) == null ? void 0 : u.children
  ), r = [];
  for (let i = 0; i < o.length; i += 1)
    r[i] = qe(Le(t, o, i));
  const s = (i) => le(r[i], 1, 1, () => {
    r[i] = null;
  });
  return {
    c() {
      e = _("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      this.c = D, d(e, "class", n = /*darkmode*/
      t[1] ? "dark" : "");
    },
    m(i, f) {
      k(i, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      l = !0;
    },
    p(i, [f]) {
      var c;
      if (f & /*folder, toggleFolder, handleKeydown*/
      13) {
        o = /*folder*/
        (c = i[0]) == null ? void 0 : c.children;
        let a;
        for (a = 0; a < o.length; a += 1) {
          const g = Le(i, o, a);
          r[a] ? (r[a].p(g, f), H(r[a], 1)) : (r[a] = qe(g), r[a].c(), H(r[a], 1), r[a].m(e, null));
        }
        for (Ke(), a = o.length; a < r.length; a += 1)
          s(a);
        Ve();
      }
      (!l || f & /*darkmode*/
      2 && n !== (n = /*darkmode*/
      i[1] ? "dark" : "")) && d(e, "class", n);
    },
    i(i) {
      if (!l) {
        for (let f = 0; f < o.length; f += 1)
          H(r[f]);
        l = !0;
      }
    },
    o(i) {
      r = r.filter(Boolean);
      for (let f = 0; f < r.length; f += 1)
        le(r[f]);
      l = !1;
    },
    d(i) {
      i && y(e), xe(r, i);
    }
  };
}
function ht(t, e, n) {
  let { folder: l = { children: [] } } = e, { darkmode: o = !1 } = e;
  function r(f) {
    f.open = !f.open, n(0, l = { ...l });
  }
  function s(f, c) {
    (f.key === "Enter" || f.key === " ") && (r(c), f.preventDefault());
  }
  const u = (f) => r(f), i = (f, c) => s(c, f);
  return t.$$set = (f) => {
    "folder" in f && n(0, l = f.folder), "darkmode" in f && n(1, o = f.darkmode);
  }, [l, o, r, s, u, i];
}
class Xe extends Ce {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".fileimage{height:1.5rem;width:1.5rem}.folderimage{height:1rem;width:1rem}.folder{display:flex;align-items:center;margin-bottom:0.25rem}.folder-arrow-open{width:0.5rem;height:0.5rem;border-top:2px solid #000;border-right:2px solid #000;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.folder-arrow-close{width:0.5rem;height:0.5rem;border-bottom:2px solid #0004ff;border-right:2px solid #0004ff;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.folder-label{margin-left:1rem;font-size:1rem}.file{margin-left:0.8rem}.child{margin-left:2rem}.dark .folder-label{color:#fff}.dark .file{color:#fff}.dark .child{color:#fff}.dark .folder-arrow-open{width:10px;height:10px;border-top:2px solid #fff;border-right:2px solid #fff;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.dark .folder-arrow-close{width:10px;height:10px;border-bottom:2px solid #c8fc0f;border-right:2px solid #c8fc0f;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}", this.shadowRoot.appendChild(n), Qe(
      this,
      {
        target: this.shadowRoot,
        props: We(this.attributes),
        customElement: !0
      },
      ht,
      mt,
      Pe,
      { folder: 0, darkmode: 1 },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), B()));
  }
  static get observedAttributes() {
    return ["folder", "darkmode"];
  }
  get folder() {
    return this.$$.ctx[0];
  }
  set folder(e) {
    this.$$set({ folder: e }), B();
  }
  get darkmode() {
    return this.$$.ctx[1];
  }
  set darkmode(e) {
    this.$$set({ darkmode: e }), B();
  }
}
customElements.define("file-list", Xe);
function Ie(t, e, n) {
  const l = t.slice();
  return l[20] = e[n], l;
}
function De(t, e, n) {
  const l = t.slice();
  return l[0] = e[n], l;
}
function je(t) {
  var r;
  let e, n = (
    /*folder*/
    ((r = t[0]) == null ? void 0 : r.name) + ""
  ), l, o;
  return {
    c() {
      var s;
      e = _("option"), l = P(n), e.__value = o = /*folder*/
      (s = t[0]) == null ? void 0 : s.name, e.value = e.__value;
    },
    m(s, u) {
      k(s, e, u), h(e, l);
    },
    p(s, u) {
      var i, f;
      u & /*folderNode*/
      512 && n !== (n = /*folder*/
      ((i = s[0]) == null ? void 0 : i.name) + "") && me(l, n), u & /*folderNode*/
      512 && o !== (o = /*folder*/
      (f = s[0]) == null ? void 0 : f.name) && (e.__value = o, e.value = e.__value);
    },
    d(s) {
      s && y(e);
    }
  };
}
function Be(t) {
  let e, n = (
    /*fileNode*/
    t[8]
  ), l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = He(Ie(t, n, o));
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      e = Ue();
    },
    m(o, r) {
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(o, r);
      k(o, e, r);
    },
    p(o, r) {
      if (r & /*fileNode*/
      256) {
        n = /*fileNode*/
        o[8];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = Ie(o, n, s);
          l[s] ? l[s].p(u, r) : (l[s] = He(u), l[s].c(), l[s].m(e.parentNode, e));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = n.length;
      }
    },
    d(o) {
      xe(l, o), o && y(e);
    }
  };
}
function He(t) {
  var r;
  let e, n = (
    /*subfolder*/
    ((r = t[20]) == null ? void 0 : r.name) + ""
  ), l, o;
  return {
    c() {
      var s;
      e = _("option"), l = P(n), e.__value = o = /*subfolder*/
      (s = t[20]) == null ? void 0 : s.name, e.value = e.__value;
    },
    m(s, u) {
      k(s, e, u), h(e, l);
    },
    p(s, u) {
      var i, f;
      u & /*fileNode*/
      256 && n !== (n = /*subfolder*/
      ((i = s[20]) == null ? void 0 : i.name) + "") && me(l, n), u & /*fileNode*/
      256 && o !== (o = /*subfolder*/
      (f = s[20]) == null ? void 0 : f.name) && (e.__value = o, e.value = e.__value);
    },
    d(s) {
      s && y(e);
    }
  };
}
function _t(t) {
  let e, n, l, o;
  return {
    c() {
      e = _("img"), l = S(), o = _("div"), o.textContent = "No folder/file to show", d(e, "class", "fileimage"), d(e, "alt", "img"), we(e.src, n = "nofile.png") || d(e, "src", n), d(o, "class", "folderstr");
    },
    m(r, s) {
      k(r, e, s), k(r, l, s), k(r, o, s);
    },
    p: D,
    d(r) {
      r && y(e), r && y(l), r && y(o);
    }
  };
}
function gt(t) {
  let e, n = (
    /*expand*/
    t[7] ? "Collapse All" : "Expand All"
  ), l, o, r, s, u;
  return {
    c() {
      e = _("div"), l = P(n), o = S(), r = _("file-list"), d(e, "class", "collapse"), de(
        r,
        "folder",
        /*folder*/
        t[0]
      ), de(
        r,
        "darkmode",
        /*darkmode*/
        t[1]
      );
    },
    m(i, f) {
      k(i, e, f), h(e, l), k(i, o, f), k(i, r, f), s || (u = j(
        e,
        "click",
        /*toggleCollapse*/
        t[10]
      ), s = !0);
    },
    p(i, f) {
      f & /*expand*/
      128 && n !== (n = /*expand*/
      i[7] ? "Collapse All" : "Expand All") && me(l, n), f & /*folder*/
      1 && de(
        r,
        "folder",
        /*folder*/
        i[0]
      ), f & /*darkmode*/
      2 && de(
        r,
        "darkmode",
        /*darkmode*/
        i[1]
      );
    },
    d(i) {
      i && y(e), i && y(o), i && y(r), s = !1, u();
    }
  };
}
function bt(t) {
  let e, n, l, o, r, s, u, i, f, c, a, g, b, E, L, W, m, C, z, K, M, R, v, w, q, A, O, Y, re, oe, he, ie, _e, I, fe, Fe, se, ge, Se, G = (
    /*folderNode*/
    t[9]
  ), $ = [];
  for (let p = 0; p < G.length; p += 1)
    $[p] = je(De(t, G, p));
  let N = (
    /*type*/
    t[3] == "file" && Be(t)
  );
  function $e(p, F) {
    var x, Z;
    return (
      /*folder*/
      (x = p[0]) != null && x.children && /*folder*/
      ((Z = p[0]) == null ? void 0 : Z.children.length) > 0 ? gt : _t
    );
  }
  let ce = $e(t), T = ce(t);
  return {
    c() {
      e = _("div"), n = _("div"), l = _("label"), l.textContent = "Folder/File Name:", o = S(), r = _("input"), s = S(), u = _("div"), i = _("label"), i.textContent = "Type:", f = S(), c = _("select"), a = _("option"), a.textContent = "Folder", g = _("option"), g.textContent = "File", b = S(), E = _("div"), L = _("label"), L.textContent = "Folder:", W = S(), m = _("select"), C = _("option"), C.textContent = "Root level";
      for (let p = 0; p < $.length; p += 1)
        $[p].c();
      z = Ue(), N && N.c(), K = S(), M = _("div"), R = _("button"), v = P("Save"), w = S(), q = _("button"), q.textContent = "Cancel", A = S(), O = _("div"), Y = P("Folder/File name aleady exists"), he = S(), ie = _("div"), _e = S(), I = _("div"), fe = _("h1"), fe.textContent = "File Explorer", Fe = S(), T.c(), this.c = D, d(l, "for", "name"), d(r, "type", "text"), d(r, "id", "name"), d(r, "name", "name"), d(r, "placeholder", "Enter name..."), d(n, "class", "form-group"), d(i, "for", "type"), a.__value = "folder", a.value = a.__value, g.__value = "file", g.value = g.__value, d(c, "id", "type"), d(c, "name", "type"), /*type*/
      t[3] === void 0 && ne(() => (
        /*select0_change_handler*/
        t[15].call(c)
      )), d(u, "class", "form-group"), d(L, "for", "folder"), C.__value = "root", C.value = C.__value, d(m, "id", "folder"), d(m, "name", "folder"), /*parentFolder*/
      t[4] === void 0 && ne(() => (
        /*select1_change_handler*/
        t[16].call(m)
      )), d(E, "id", "folder-select"), d(E, "class", "form-group"), d(R, "class", "btn btn-save"), R.disabled = /*disabled*/
      t[6], d(q, "class", "btn btn-cancel"), d(M, "class", "btn-group"), d(O, "class", re = /*error*/
      t[5] === !0 ? "error" : "d-none"), d(e, "class", oe = /*darkmode*/
      t[1] === !0 ? "container dark" : "container"), d(ie, "class", "fs"), d(fe, "class", "folderstr"), d(I, "class", se = /*darkmode*/
      t[1] === !0 ? "container dark" : "container");
    },
    m(p, F) {
      k(p, e, F), h(e, n), h(n, l), h(n, o), h(n, r), ze(
        r,
        /*name*/
        t[2]
      ), h(e, s), h(e, u), h(u, i), h(u, f), h(u, c), h(c, a), h(c, g), ue(
        c,
        /*type*/
        t[3],
        !0
      ), h(e, b), h(e, E), h(E, L), h(E, W), h(E, m), h(m, C);
      for (let x = 0; x < $.length; x += 1)
        $[x] && $[x].m(m, null);
      h(m, z), N && N.m(m, null), ue(
        m,
        /*parentFolder*/
        t[4],
        !0
      ), h(e, K), h(e, M), h(M, R), h(R, v), h(M, w), h(M, q), h(e, A), h(e, O), h(O, Y), k(p, he, F), k(p, ie, F), k(p, _e, F), k(p, I, F), h(I, fe), h(I, Fe), T.m(I, null), ge || (Se = [
        j(
          r,
          "input",
          /*input_input_handler*/
          t[14]
        ),
        j(
          c,
          "change",
          /*select0_change_handler*/
          t[15]
        ),
        j(
          m,
          "change",
          /*select1_change_handler*/
          t[16]
        ),
        j(
          R,
          "click",
          /*handleSave*/
          t[11]
        ),
        j(
          q,
          "click",
          /*handleCancel*/
          t[12]
        )
      ], ge = !0);
    },
    p(p, [F]) {
      if (F & /*name*/
      4 && r.value !== /*name*/
      p[2] && ze(
        r,
        /*name*/
        p[2]
      ), F & /*type*/
      8 && ue(
        c,
        /*type*/
        p[3]
      ), F & /*folderNode*/
      512) {
        G = /*folderNode*/
        p[9];
        let x;
        for (x = 0; x < G.length; x += 1) {
          const Z = De(p, G, x);
          $[x] ? $[x].p(Z, F) : ($[x] = je(Z), $[x].c(), $[x].m(m, z));
        }
        for (; x < $.length; x += 1)
          $[x].d(1);
        $.length = G.length;
      }
      /*type*/
      p[3] == "file" ? N ? N.p(p, F) : (N = Be(p), N.c(), N.m(m, null)) : N && (N.d(1), N = null), F & /*parentFolder, fileNode, folderNode*/
      784 && ue(
        m,
        /*parentFolder*/
        p[4]
      ), F & /*disabled*/
      64 && (R.disabled = /*disabled*/
      p[6]), F & /*error*/
      32 && re !== (re = /*error*/
      p[5] === !0 ? "error" : "d-none") && d(O, "class", re), F & /*darkmode*/
      2 && oe !== (oe = /*darkmode*/
      p[1] === !0 ? "container dark" : "container") && d(e, "class", oe), ce === (ce = $e(p)) && T ? T.p(p, F) : (T.d(1), T = ce(p), T && (T.c(), T.m(I, null))), F & /*darkmode*/
      2 && se !== (se = /*darkmode*/
      p[1] === !0 ? "container dark" : "container") && d(I, "class", se);
    },
    i: D,
    o: D,
    d(p) {
      p && y(e), xe($, p), N && N.d(), p && y(he), p && y(ie), p && y(_e), p && y(I), T.d(), ge = !1, U(Se);
    }
  };
}
function kt(t, e, n) {
  let l, o, r;
  const s = rt();
  let { darkmode: u = !1 } = e, { folder: i = {
    name: "root",
    type: "folder",
    children: [
      {
        name: "Folder 1",
        type: "folder",
        open: !1,
        children: [
          {
            name: "Subfolder 1.1",
            type: "folder",
            open: !1,
            children: [
              { name: "File 1.1.1", type: "file" },
              { name: "File 1.1.2", type: "file" }
            ]
          },
          {
            name: "Subfolder 1.2",
            type: "folder",
            open: !1,
            children: [
              { name: "File 1.2.1", type: "file" },
              { name: "File 1.2.2", type: "file" }
            ]
          }
        ]
      },
      {
        name: "Folder 2",
        type: "folder",
        open: !1,
        children: [{ name: "File 2.1", type: "file" }, { name: "File 2.2", type: "file" }]
      }
    ]
  } } = e, f = "", c = "folder", a = "root", g = !1, b = !0, E = !1;
  function L() {
    n(7, E = !E), i.children.forEach((v) => {
      v.type == "folder" && (v.open = E), v.children.forEach((w) => {
        w.type == "folder" && (w.open = E);
      });
    }), n(0, i = { ...i });
  }
  function W(v, w) {
    const q = i.children.findIndex((A) => A.name === v && A.type === "folder");
    q !== -1 ? i.children[q].children.find((A) => A.name === w.name && A.type === w.type) ? m() : i.children[q].children.push(w) : i == null || i.children.forEach((A) => {
      A.type == "folder" && A.children.forEach((O) => {
        O.type === "folder" && O.name === v && (O.children.find((Y) => Y.name === w.name && Y.type === w.type) ? m() : O.children.push(w));
      });
    }), v == "root" && (i.children.find((A) => A.name === w.name && A.type === w.type) ? m() : i.children.push(w)), n(0, i = { ...i });
  }
  function m() {
    n(5, g = !0), setTimeout(
      () => {
        n(5, g = !1);
      },
      2e3
    );
  }
  function C() {
    if (f != "" && c != "" && a != "") {
      const v = a, w = { name: f, type: c, open: !1 };
      c == "folder" && (w.children = []), W(v, w), s("save", { name: f, type: c, parentFolder: a }), n(2, f = ""), n(3, c = "folder"), n(4, a = "root");
    }
  }
  function z() {
    n(2, f = ""), n(3, c = "folder"), n(4, a = "root"), s("cancel");
  }
  nt(() => {
  }), lt(() => {
  });
  function K() {
    f = this.value, n(2, f);
  }
  function M() {
    c = Me(this), n(3, c);
  }
  function R() {
    a = Me(this), n(4, a), n(8, r), n(13, o), n(0, i), n(9, l), n(0, i);
  }
  return t.$$set = (v) => {
    "darkmode" in v && n(1, u = v.darkmode), "folder" in v && n(0, i = v.folder);
  }, t.$$.update = () => {
    t.$$.dirty & /*folder*/
    1 && n(9, l = i == null ? void 0 : i.children.filter((v) => v.type == "folder")), t.$$.dirty & /*folder*/
    1 && n(13, o = i == null ? void 0 : i.children.map((v) => {
      if (v.type == "folder")
        return v.children.filter((w) => w.type === "folder");
    })), t.$$.dirty & /*fileList*/
    8192 && n(8, r = o.flat()), t.$$.dirty & /*name, type, parentFolder*/
    28 && n(6, b = f == "" || c == "" || a == "");
  }, [
    i,
    u,
    f,
    c,
    a,
    g,
    b,
    E,
    r,
    l,
    L,
    C,
    z,
    o,
    K,
    M,
    R
  ];
}
class yt extends Ce {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = `.collapse{display:flex;font-size:0.9rem;justify-content:flex-end;color:#0066cc;cursor:pointer}.fileimage{margin:auto;height:5rem;width:5rem}div{font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif}.d-none{display:none}.error{color:red}.fs{min-height:1rem}.folderstr{display:flex;justify-content:center}.container{display:flex;flex-direction:column;gap:1rem;max-width:400px;margin:auto;padding:1rem;border:1px solid #ccc;border-radius:4px;background-color:#fff}.form-group{margin-bottom:20px;display:flex;flex-direction:column}.form-group label{font-weight:bold;margin-bottom:5px;font-size:1rem}.form-group input,.form-group select{padding:8px 10px;border:1px solid #ccc;border-radius:5px;font-size:1rem}.form-group input:focus,.form-group select:focus{outline:none;border-color:#0085ff;box-shadow:0 0 5px #0085ff}.form-group select{cursor:pointer}.btn-group{display:flex;justify-content:flex-end}.btn{padding:8px 20px;margin-right:10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer}.btn-save:disabled{border:1px solid #999999;background-color:#f2f2f2;color:#333;pointer-events:none}.btn-save{background-color:#0085ff;color:#fff}.btn-save:hover{background-color:#0066cc}.btn-cancel{background-color:#f2f2f2;color:#333}.btn-cancel:hover{background-color:#e6e6e6}.dark.container{display:flex;flex-direction:column;gap:1rem;max-width:400px;margin:auto;padding:1rem;border:1px solid #333;border-radius:4px;background-color:#1e1e1e}.dark .folderstr{color:#fff;background-color:#1e1e1e}.dark .form-group{margin-bottom:20px;display:flex;flex-direction:column}.dark .form-group label{font-weight:bold;margin-bottom:5px;font-size:1rem;color:#fff}.dark .form-group input,.dark .form-group select{padding:8px 10px;border:1px solid #ccc;border-radius:5px;font-size:1rem;background-color:#333;color:#fff}.dark .form-group input:focus,.dark .form-group select:focus{outline:none;border-color:#0085ff;box-shadow:0 0 5px #0085ff}.dark .form-group select{cursor:pointer}.dark .btn-group{display:flex;justify-content:flex-end}.dark .btn{padding:8px 20px;margin-right:10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer}.dark .btn-save{background-color:#0085ff;color:#fff}.dark .btn-save:hover{background-color:#0066cc}.dark .btn-cancel{background-color:#f2f2f2;color:#333}.dark .btn-cancel:hover{background-color:#e6e6e6}.dark .collapse{color:#00cccc}`, this.shadowRoot.appendChild(n), Qe(
      this,
      {
        target: this.shadowRoot,
        props: We(this.attributes),
        customElement: !0
      },
      kt,
      bt,
      Pe,
      { darkmode: 1, folder: 0 },
      null
    ), e && (e.target && k(e.target, this, e.anchor), e.props && (this.$set(e.props), B()));
  }
  static get observedAttributes() {
    return ["darkmode", "folder"];
  }
  get darkmode() {
    return this.$$.ctx[1];
  }
  set darkmode(e) {
    this.$$set({ darkmode: e }), B();
  }
  get folder() {
    return this.$$.ctx[0];
  }
  set folder(e) {
    this.$$set({ folder: e }), B();
  }
}
customElements.define("add-file", yt);
