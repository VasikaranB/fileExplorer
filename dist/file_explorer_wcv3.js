function P() {
}
function Fe(t) {
  return t();
}
function Oe() {
  return /* @__PURE__ */ Object.create(null);
}
function Z(t) {
  t.forEach(Fe);
}
function Ee(t) {
  return typeof t == "function";
}
function Ve(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let me;
function Ne(t, e) {
  return me || (me = document.createElement("a")), me.href = e, t === me.href;
}
function lt(t) {
  return Object.keys(t).length === 0;
}
const nt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in nt;
function m(t, e) {
  t.appendChild(e);
}
function v(t, e, l) {
  t.insertBefore(e, l || null);
}
function y(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Se(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function h(t) {
  return document.createElement(t);
}
function U(t) {
  return document.createTextNode(t);
}
function S() {
  return U(" ");
}
function Ze() {
  return U("");
}
function H(t, e, l, n) {
  return t.addEventListener(e, l, n), () => t.removeEventListener(e, l, n);
}
function Re(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function he(t, e, l) {
  e in t ? t[e] = typeof t[e] == "boolean" && l === "" ? !0 : l : d(t, e, l);
}
function rt(t) {
  return Array.from(t.childNodes);
}
function be(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Te(t, e) {
  t.value = e ?? "";
}
function _e(t, e, l) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === e) {
      o.selected = !0;
      return;
    }
  }
  (!l || e !== void 0) && (t.selectedIndex = -1);
}
function Ie(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function ot(t, e, { bubbles: l = !1, cancelable: n = !1 } = {}) {
  const o = document.createEvent("CustomEvent");
  return o.initCustomEvent(t, l, n, e), o;
}
function Ge(t) {
  const e = {};
  for (const l of t)
    e[l.name] = l.value;
  return e;
}
let re;
function ne(t) {
  re = t;
}
function ke() {
  if (!re)
    throw new Error("Function called outside component initialization");
  return re;
}
function it(t) {
  ke().$$.on_mount.push(t);
}
function ft(t) {
  ke().$$.on_destroy.push(t);
}
function st() {
  const t = ke();
  return (e, l, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const r = ot(e, l, { cancelable: n });
      return o.slice().forEach((f) => {
        f.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const X = [], Le = [];
let Y = [];
const qe = [], at = /* @__PURE__ */ Promise.resolve();
let Ce = !1;
function ct() {
  Ce || (Ce = !0, at.then(K));
}
function oe(t) {
  Y.push(t);
}
const xe = /* @__PURE__ */ new Set();
let Q = 0;
function K() {
  if (Q !== 0)
    return;
  const t = re;
  do {
    try {
      for (; Q < X.length; ) {
        const e = X[Q];
        Q++, ne(e), dt(e.$$);
      }
    } catch (e) {
      throw X.length = 0, Q = 0, e;
    }
    for (ne(null), X.length = 0, Q = 0; Le.length; )
      Le.pop()();
    for (let e = 0; e < Y.length; e += 1) {
      const l = Y[e];
      xe.has(l) || (xe.add(l), l());
    }
    Y.length = 0;
  } while (X.length);
  for (; qe.length; )
    qe.pop()();
  Ce = !1, xe.clear(), ne(t);
}
function dt(t) {
  if (t.fragment !== null) {
    t.update(), Z(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(oe);
  }
}
function ut(t) {
  const e = [], l = [];
  Y.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), Y = e;
}
const ge = /* @__PURE__ */ new Set();
let G;
function Je() {
  G = {
    r: 0,
    c: [],
    p: G
    // parent group
  };
}
function Qe() {
  G.r || Z(G.c), G = G.p;
}
function V(t, e) {
  t && t.i && (ge.delete(t), t.i(e));
}
function ie(t, e, l, n) {
  if (t && t.o) {
    if (ge.has(t))
      return;
    ge.add(t), G.c.push(() => {
      ge.delete(t), n && (l && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
const pt = [
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
[...pt];
function mt(t) {
  t && t.c();
}
function Xe(t, e, l, n) {
  const { fragment: o, after_update: r } = t.$$;
  o && o.m(e, l), n || oe(() => {
    const f = t.$$.on_mount.map(Fe).filter(Ee);
    t.$$.on_destroy ? t.$$.on_destroy.push(...f) : Z(f), t.$$.on_mount = [];
  }), r.forEach(oe);
}
function Ye(t, e) {
  const l = t.$$;
  l.fragment !== null && (ut(l.after_update), Z(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function ht(t, e) {
  t.$$.dirty[0] === -1 && (X.push(t), ct(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, l, n, o, r, f, u = [-1]) {
  const a = re;
  ne(t);
  const i = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: P,
    not_equal: o,
    bound: Oe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Oe(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  f && f(i.root);
  let s = !1;
  if (i.ctx = l ? l(t, e.props || {}, (c, _, ...g) => {
    const x = g.length ? g[0] : _;
    return i.ctx && o(i.ctx[c], i.ctx[c] = x) && (!i.skip_bound && i.bound[c] && i.bound[c](x), s && ht(t, c)), _;
  }) : [], i.update(), s = !0, Z(i.before_update), i.fragment = n ? n(i.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = rt(e.target);
      i.fragment && i.fragment.l(c), c.forEach(y);
    } else
      i.fragment && i.fragment.c();
    e.intro && V(t.$$.fragment), Xe(t, e.target, e.anchor, e.customElement), K();
  }
  ne(a);
}
let Ae;
typeof HTMLElement == "function" && (Ae = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Fe).filter(Ee);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, l) {
    this[t] = l;
  }
  disconnectedCallback() {
    Z(this.$$.on_disconnect);
  }
  $destroy() {
    Ye(this, 1), this.$destroy = P;
  }
  $on(t, e) {
    if (!Ee(e))
      return P;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(e), () => {
      const n = l.indexOf(e);
      n !== -1 && l.splice(n, 1);
    };
  }
  $set(t) {
    this.$$set && !lt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function De(t, e, l) {
  const n = t.slice();
  return n[6] = e[l], n;
}
function _t(t) {
  let e, l, n, o;
  return {
    c() {
      e = h("span"), l = S(), n = h("img"), d(e, "class", "file"), d(n, "class", "fileimage"), d(n, "alt", "img"), Ne(n.src, o = "file.png") || d(n, "src", o);
    },
    m(r, f) {
      v(r, e, f), v(r, l, f), v(r, n, f);
    },
    p: P,
    d(r) {
      r && y(e), r && y(l), r && y(n);
    }
  };
}
function gt(t) {
  let e, l, n, o, r, f, u;
  function a() {
    return (
      /*click_handler*/
      t[4](
        /*child*/
        t[6]
      )
    );
  }
  function i(...s) {
    return (
      /*keydown_handler*/
      t[5](
        /*child*/
        t[6],
        ...s
      )
    );
  }
  return {
    c() {
      var s;
      e = h("span"), n = S(), o = h("img"), d(e, "class", l = /*child*/
      ((s = t[6]) == null ? void 0 : s.open) == !0 ? "folder-arrow-close" : "folder-arrow-open"), d(o, "class", "folderimage"), d(o, "alt", "img"), Ne(o.src, r = "folder.png") || d(o, "src", r);
    },
    m(s, c) {
      v(s, e, c), v(s, n, c), v(s, o, c), f || (u = [
        H(e, "click", Re(a)),
        H(e, "keydown", Re(i))
      ], f = !0);
    },
    p(s, c) {
      var _;
      t = s, c & /*folder*/
      1 && l !== (l = /*child*/
      ((_ = t[6]) == null ? void 0 : _.open) == !0 ? "folder-arrow-close" : "folder-arrow-open") && d(e, "class", l);
    },
    d(s) {
      s && y(e), s && y(n), s && y(o), f = !1, Z(u);
    }
  };
}
function je(t) {
  let e, l;
  return e = new tt({ props: { folder: (
    /*child*/
    t[6]
  ) } }), {
    c() {
      mt(e.$$.fragment);
    },
    m(n, o) {
      Xe(e, n, o), l = !0;
    },
    p(n, o) {
      const r = {};
      o & /*folder*/
      1 && (r.folder = /*child*/
      n[6]), e.$set(r);
    },
    i(n) {
      l || (V(e.$$.fragment, n), l = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), l = !1;
    },
    d(n) {
      Ye(e, n);
    }
  };
}
function Be(t) {
  var x, z, O;
  let e, l, n, o = (
    /*child*/
    t[6].name + ""
  ), r, f, u, a, i;
  function s(b, C) {
    var R;
    return (
      /*child*/
      (R = b[6]) != null && R.children ? gt : _t
    );
  }
  let c = s(t), _ = c(t), g = (
    /*child*/
    ((x = t[6]) == null ? void 0 : x.open) && /*child*/
    ((z = t[6]) == null ? void 0 : z.children) && /*child*/
    ((O = t[6]) == null ? void 0 : O.children.length) > 0 && je(t)
  );
  return {
    c() {
      e = h("div"), _.c(), l = S(), n = h("span"), r = U(o), f = S(), u = h("div"), g && g.c(), a = S(), d(n, "class", "folder-label"), d(e, "class", "folder"), d(u, "class", "child");
    },
    m(b, C) {
      v(b, e, C), _.m(e, null), m(e, l), m(e, n), m(n, r), v(b, f, C), v(b, u, C), g && g.m(u, null), m(u, a), i = !0;
    },
    p(b, C) {
      var R, L, F;
      c === (c = s(b)) && _ ? _.p(b, C) : (_.d(1), _ = c(b), _ && (_.c(), _.m(e, l))), (!i || C & /*folder*/
      1) && o !== (o = /*child*/
      b[6].name + "") && be(r, o), /*child*/
      (R = b[6]) != null && R.open && /*child*/
      ((L = b[6]) != null && L.children) && /*child*/
      ((F = b[6]) == null ? void 0 : F.children.length) > 0 ? g ? (g.p(b, C), C & /*folder*/
      1 && V(g, 1)) : (g = je(b), g.c(), V(g, 1), g.m(u, a)) : g && (Je(), ie(g, 1, 1, () => {
        g = null;
      }), Qe());
    },
    i(b) {
      i || (V(g), i = !0);
    },
    o(b) {
      ie(g), i = !1;
    },
    d(b) {
      b && y(e), _.d(), b && y(f), b && y(u), g && g.d();
    }
  };
}
function bt(t) {
  var u;
  let e, l, n, o = (
    /*folder*/
    (u = t[0]) == null ? void 0 : u.children
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = Be(De(t, o, a));
  const f = (a) => ie(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = h("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      this.c = P, d(e, "class", l = /*darkmode*/
      t[1] ? "dark" : "");
    },
    m(a, i) {
      v(a, e, i);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(e, null);
      n = !0;
    },
    p(a, [i]) {
      var s;
      if (i & /*folder, toggleFolder, handleKeydown*/
      13) {
        o = /*folder*/
        (s = a[0]) == null ? void 0 : s.children;
        let c;
        for (c = 0; c < o.length; c += 1) {
          const _ = De(a, o, c);
          r[c] ? (r[c].p(_, i), V(r[c], 1)) : (r[c] = Be(_), r[c].c(), V(r[c], 1), r[c].m(e, null));
        }
        for (Je(), c = o.length; c < r.length; c += 1)
          f(c);
        Qe();
      }
      (!n || i & /*darkmode*/
      2 && l !== (l = /*darkmode*/
      a[1] ? "dark" : "")) && d(e, "class", l);
    },
    i(a) {
      if (!n) {
        for (let i = 0; i < o.length; i += 1)
          V(r[i]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let i = 0; i < r.length; i += 1)
        ie(r[i]);
      n = !1;
    },
    d(a) {
      a && y(e), Se(r, a);
    }
  };
}
function kt(t, e, l) {
  let { folder: n = { children: [] } } = e, { darkmode: o = !1 } = e;
  function r(i) {
    i.open = !i.open, l(0, n = { ...n });
  }
  function f(i, s) {
    (i.key === "Enter" || i.key === " ") && (r(s), i.preventDefault());
  }
  const u = (i) => r(i), a = (i, s) => f(s, i);
  return t.$$set = (i) => {
    "folder" in i && l(0, n = i.folder), "darkmode" in i && l(1, o = i.darkmode);
  }, [n, o, r, f, u, a];
}
class tt extends Ae {
  constructor(e) {
    super();
    const l = document.createElement("style");
    l.textContent = ".fileimage{height:1.5rem;width:1.5rem}.folderimage{height:1rem;width:1rem}.folder{display:flex;align-items:center;margin-bottom:0.25rem}.folder-arrow-open{width:0.5rem;height:0.5rem;border-top:2px solid #000;border-right:2px solid #000;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.folder-arrow-close{width:0.5rem;height:0.5rem;border-bottom:2px solid #0004ff;border-right:2px solid #0004ff;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.folder-label{margin-left:1rem;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}.file{margin-left:0.8rem}.child{margin-left:2rem}.dark .folder-label{color:#fff}.dark .file{color:#fff}.dark .child{color:#fff}.dark .folder-arrow-open{width:10px;height:10px;border-top:2px solid #fff;border-right:2px solid #fff;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}.dark .folder-arrow-close{width:10px;height:10px;border-bottom:2px solid #c8fc0f;border-right:2px solid #c8fc0f;transform:rotate(45deg);margin-right:0.5rem;cursor:pointer}", this.shadowRoot.appendChild(l), et(
      this,
      {
        target: this.shadowRoot,
        props: Ge(this.attributes),
        customElement: !0
      },
      kt,
      bt,
      Ve,
      { folder: 0, darkmode: 1 },
      null
    ), e && (e.target && v(e.target, this, e.anchor), e.props && (this.$set(e.props), K()));
  }
  static get observedAttributes() {
    return ["folder", "darkmode"];
  }
  get folder() {
    return this.$$.ctx[0];
  }
  set folder(e) {
    this.$$set({ folder: e }), K();
  }
  get darkmode() {
    return this.$$.ctx[1];
  }
  set darkmode(e) {
    this.$$set({ darkmode: e }), K();
  }
}
customElements.define("file-list", tt);
function He(t, e, l) {
  const n = t.slice();
  return n[24] = e[l], n;
}
function Pe(t, e, l) {
  const n = t.slice();
  return n[0] = e[l], n;
}
function Ue(t) {
  var r;
  let e, l = (
    /*folder*/
    ((r = t[0]) == null ? void 0 : r.name) + ""
  ), n, o;
  return {
    c() {
      var f;
      e = h("option"), n = U(l), d(e, "class", "sel-option"), e.__value = o = /*folder*/
      (f = t[0]) == null ? void 0 : f.name, e.value = e.__value;
    },
    m(f, u) {
      v(f, e, u), m(e, n);
    },
    p(f, u) {
      var a, i;
      u & /*folderNode*/
      1024 && l !== (l = /*folder*/
      ((a = f[0]) == null ? void 0 : a.name) + "") && be(n, l), u & /*folderNode*/
      1024 && o !== (o = /*folder*/
      (i = f[0]) == null ? void 0 : i.name) && (e.__value = o, e.value = e.__value);
    },
    d(f) {
      f && y(e);
    }
  };
}
function We(t) {
  let e, l = (
    /*fileNode*/
    t[9]
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = Ke(He(t, l, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      e = Ze();
    },
    m(o, r) {
      for (let f = 0; f < n.length; f += 1)
        n[f] && n[f].m(o, r);
      v(o, e, r);
    },
    p(o, r) {
      if (r & /*fileNode*/
      512) {
        l = /*fileNode*/
        o[9];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const u = He(o, l, f);
          n[f] ? n[f].p(u, r) : (n[f] = Ke(u), n[f].c(), n[f].m(e.parentNode, e));
        }
        for (; f < n.length; f += 1)
          n[f].d(1);
        n.length = l.length;
      }
    },
    d(o) {
      Se(n, o), o && y(e);
    }
  };
}
function Ke(t) {
  var r;
  let e, l = (
    /*subfolder*/
    ((r = t[24]) == null ? void 0 : r.name) + ""
  ), n, o;
  return {
    c() {
      var f;
      e = h("option"), n = U(l), d(e, "class", "sel-option"), e.__value = o = /*subfolder*/
      (f = t[24]) == null ? void 0 : f.name, e.value = e.__value;
    },
    m(f, u) {
      v(f, e, u), m(e, n);
    },
    p(f, u) {
      var a, i;
      u & /*fileNode*/
      512 && l !== (l = /*subfolder*/
      ((a = f[24]) == null ? void 0 : a.name) + "") && be(n, l), u & /*fileNode*/
      512 && o !== (o = /*subfolder*/
      (i = f[24]) == null ? void 0 : i.name) && (e.__value = o, e.value = e.__value);
    },
    d(f) {
      f && y(e);
    }
  };
}
function vt(t) {
  let e, l, n, o;
  return {
    c() {
      e = h("img"), n = S(), o = h("div"), o.textContent = "No folder/file to show", d(e, "class", "fileimage"), d(e, "alt", "img"), Ne(e.src, l = "nofile.png") || d(e, "src", l), d(o, "class", "folderstr");
    },
    m(r, f) {
      v(r, e, f), v(r, n, f), v(r, o, f);
    },
    p: P,
    d(r) {
      r && y(e), r && y(n), r && y(o);
    }
  };
}
function yt(t) {
  let e, l = (
    /*expand*/
    t[8] ? "Collapse All" : "Expand All"
  ), n, o, r, f, u;
  return {
    c() {
      e = h("div"), n = U(l), o = S(), r = h("file-list"), d(e, "class", "collapse"), he(
        r,
        "folder",
        /*folder*/
        t[0]
      ), he(
        r,
        "darkmode",
        /*darkmode*/
        t[1]
      );
    },
    m(a, i) {
      v(a, e, i), m(e, n), v(a, o, i), v(a, r, i), f || (u = H(
        e,
        "click",
        /*toggleCollapse*/
        t[11]
      ), f = !0);
    },
    p(a, i) {
      i & /*expand*/
      256 && l !== (l = /*expand*/
      a[8] ? "Collapse All" : "Expand All") && be(n, l), i & /*folder*/
      1 && he(
        r,
        "folder",
        /*folder*/
        a[0]
      ), i & /*darkmode*/
      2 && he(
        r,
        "darkmode",
        /*darkmode*/
        a[1]
      );
    },
    d(a) {
      a && y(e), a && y(o), a && y(r), f = !1, u();
    }
  };
}
function wt(t) {
  let e, l, n, o, r, f, u, a, i, s, c, _, g, x, z, O, b, C, R, L, F, q, ee, fe, W, D, k, w, j, $, T, te, se, ae, ve, ce, ye, B, de, ze, ue, we, $e, J = (
    /*folderNode*/
    t[10]
  ), A = [];
  for (let p = 0; p < J.length; p += 1)
    A[p] = Ue(Pe(t, J, p));
  let M = (
    /*type*/
    t[3] == "file" && We(t)
  );
  function Me(p, N) {
    var E, le;
    return (
      /*folder*/
      (E = p[0]) != null && E.children && /*folder*/
      ((le = p[0]) == null ? void 0 : le.children.length) > 0 ? yt : vt
    );
  }
  let pe = Me(t), I = pe(t);
  return {
    c() {
      e = h("div"), l = h("div"), n = h("label"), n.textContent = "Folder/File Name:", o = S(), r = h("input"), f = S(), u = h("div"), a = U("Invalid Folder/File Name"), s = S(), c = h("div"), _ = h("label"), _.textContent = "Type:", g = S(), x = h("select"), z = h("option"), z.textContent = "Folder", O = h("option"), O.textContent = "File", b = S(), C = h("div"), R = h("label"), R.textContent = "Folder:", L = S(), F = h("select"), q = h("option"), q.textContent = "Root level";
      for (let p = 0; p < A.length; p += 1)
        A[p].c();
      ee = Ze(), M && M.c(), fe = S(), W = h("div"), D = h("button"), k = U("Save"), w = S(), j = h("button"), j.textContent = "Cancel", $ = S(), T = h("div"), te = U("Folder/File name aleady exists"), ve = S(), ce = h("div"), ye = S(), B = h("div"), de = h("h1"), de.textContent = "File Explorer", ze = S(), I.c(), this.c = P, d(n, "for", "name"), d(r, "type", "text"), d(r, "id", "name"), d(r, "name", "name"), d(r, "placeholder", "Enter name..."), d(r, "maxlength", "35"), d(l, "class", "form-group"), d(u, "class", i = /*nameError*/
      t[5] === !0 ? "nameError" : "d-none"), d(_, "for", "type"), z.__value = "folder", z.value = z.__value, O.__value = "file", O.value = O.__value, d(x, "id", "type"), d(x, "name", "type"), /*type*/
      t[3] === void 0 && oe(() => (
        /*select0_change_handler*/
        t[17].call(x)
      )), d(c, "class", "form-group"), d(R, "for", "folder"), d(q, "class", "sel-option"), q.__value = "root", q.value = q.__value, d(F, "id", "folder"), d(F, "name", "folder"), /*parentFolder*/
      t[4] === void 0 && oe(() => (
        /*select1_change_handler*/
        t[18].call(F)
      )), d(C, "id", "folder-select"), d(C, "class", "form-group"), d(D, "class", "btn btn-save"), D.disabled = /*disabled*/
      t[7], d(j, "class", "btn btn-cancel"), d(W, "class", "btn-group"), d(T, "class", se = /*error*/
      t[6] === !0 ? "error" : "d-none"), d(e, "class", ae = /*darkmode*/
      t[1] === !0 ? "container dark" : "container"), d(ce, "class", "fs"), d(de, "class", "folderstr"), d(B, "class", ue = /*darkmode*/
      t[1] === !0 ? "container dark" : "container");
    },
    m(p, N) {
      v(p, e, N), m(e, l), m(l, n), m(l, o), m(l, r), Te(
        r,
        /*name*/
        t[2]
      ), m(e, f), m(e, u), m(u, a), m(e, s), m(e, c), m(c, _), m(c, g), m(c, x), m(x, z), m(x, O), _e(
        x,
        /*type*/
        t[3],
        !0
      ), m(e, b), m(e, C), m(C, R), m(C, L), m(C, F), m(F, q);
      for (let E = 0; E < A.length; E += 1)
        A[E] && A[E].m(F, null);
      m(F, ee), M && M.m(F, null), _e(
        F,
        /*parentFolder*/
        t[4],
        !0
      ), m(e, fe), m(e, W), m(W, D), m(D, k), m(W, w), m(W, j), m(e, $), m(e, T), m(T, te), v(p, ve, N), v(p, ce, N), v(p, ye, N), v(p, B, N), m(B, de), m(B, ze), I.m(B, null), we || ($e = [
        H(
          r,
          "input",
          /*input_input_handler*/
          t[16]
        ),
        H(
          r,
          "input",
          /*validateFolderName*/
          t[13]
        ),
        H(
          x,
          "change",
          /*select0_change_handler*/
          t[17]
        ),
        H(
          F,
          "change",
          /*select1_change_handler*/
          t[18]
        ),
        H(
          D,
          "click",
          /*handleSave*/
          t[12]
        ),
        H(
          j,
          "click",
          /*handleCancel*/
          t[14]
        )
      ], we = !0);
    },
    p(p, [N]) {
      if (N & /*name*/
      4 && r.value !== /*name*/
      p[2] && Te(
        r,
        /*name*/
        p[2]
      ), N & /*nameError*/
      32 && i !== (i = /*nameError*/
      p[5] === !0 ? "nameError" : "d-none") && d(u, "class", i), N & /*type*/
      8 && _e(
        x,
        /*type*/
        p[3]
      ), N & /*folderNode*/
      1024) {
        J = /*folderNode*/
        p[10];
        let E;
        for (E = 0; E < J.length; E += 1) {
          const le = Pe(p, J, E);
          A[E] ? A[E].p(le, N) : (A[E] = Ue(le), A[E].c(), A[E].m(F, ee));
        }
        for (; E < A.length; E += 1)
          A[E].d(1);
        A.length = J.length;
      }
      /*type*/
      p[3] == "file" ? M ? M.p(p, N) : (M = We(p), M.c(), M.m(F, null)) : M && (M.d(1), M = null), N & /*parentFolder, fileNode, folderNode*/
      1552 && _e(
        F,
        /*parentFolder*/
        p[4]
      ), N & /*disabled*/
      128 && (D.disabled = /*disabled*/
      p[7]), N & /*error*/
      64 && se !== (se = /*error*/
      p[6] === !0 ? "error" : "d-none") && d(T, "class", se), N & /*darkmode*/
      2 && ae !== (ae = /*darkmode*/
      p[1] === !0 ? "container dark" : "container") && d(e, "class", ae), pe === (pe = Me(p)) && I ? I.p(p, N) : (I.d(1), I = pe(p), I && (I.c(), I.m(B, null))), N & /*darkmode*/
      2 && ue !== (ue = /*darkmode*/
      p[1] === !0 ? "container dark" : "container") && d(B, "class", ue);
    },
    i: P,
    o: P,
    d(p) {
      p && y(e), Se(A, p), M && M.d(), p && y(ve), p && y(ce), p && y(ye), p && y(B), I.d(), we = !1, Z($e);
    }
  };
}
function xt(t, e, l) {
  let n, o, r;
  const f = st(), u = ke(), a = (k, w) => {
    f(k, w), u == null || u.dispatchEvent(new CustomEvent(k, { detail: w }));
  };
  let { darkmode: i = !1 } = e, { folder: s = {
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
  } } = e, c = "", _ = "folder", g = "root", x = !1, z = !1, O = !0, b = !1;
  function C() {
    l(8, b = !b), s.children.forEach((k) => {
      k.type == "folder" && (k.open = b), k.children.forEach((w) => {
        w.type == "folder" && (w.open = b);
      });
    }), l(0, s = { ...s });
  }
  function R(k, w) {
    const j = s.children.findIndex(($) => $.name === k && $.type === "folder");
    j !== -1 ? s.children[j].children.find(($) => $.name === w.name && $.type === w.type) ? L() : s.children[j].children.push(w) : s == null || s.children.forEach(($) => {
      $.type == "folder" && $.children.forEach((T) => {
        T.type === "folder" && T.name === k && (T.children.find((te) => te.name === w.name && te.type === w.type) ? L() : T.children.push(w));
      });
    }), k == "root" && (s.children.find(($) => $.name === w.name && $.type === w.type) ? L() : s.children.push(w)), l(0, s = { ...s });
  }
  function L() {
    l(6, x = !0), setTimeout(
      () => {
        l(6, x = !1);
      },
      2e3
    );
  }
  function F() {
    if (c != "" && _ != "" && g != "") {
      const k = g, w = { name: c, type: _, open: !1 };
      _ == "folder" && (w.children = []), R(k, w), a("foldersave", { folder: s }), l(2, c = ""), l(3, _ = "folder"), l(4, g = "root");
    }
  }
  function q() {
    /^[a-zA-Z0-9_\-]*$/.test(c) ? l(5, z = !1) : l(5, z = !0);
  }
  function ee() {
    l(2, c = ""), l(3, _ = "folder"), l(4, g = "root"), a("cancel");
  }
  it(() => {
  }), ft(() => {
  });
  function fe() {
    c = this.value, l(2, c);
  }
  function W() {
    _ = Ie(this), l(3, _);
  }
  function D() {
    g = Ie(this), l(4, g), l(9, r), l(15, o), l(0, s), l(10, n), l(0, s);
  }
  return t.$$set = (k) => {
    "darkmode" in k && l(1, i = k.darkmode), "folder" in k && l(0, s = k.folder);
  }, t.$$.update = () => {
    t.$$.dirty & /*folder*/
    1 && l(10, n = s == null ? void 0 : s.children.filter((k) => k.type == "folder")), t.$$.dirty & /*folder*/
    1 && l(15, o = s == null ? void 0 : s.children.map((k) => {
      if (k.type == "folder")
        return k.children.filter((w) => w.type === "folder");
    })), t.$$.dirty & /*fileList*/
    32768 && l(9, r = o.flat()), t.$$.dirty & /*name, type, parentFolder, nameError*/
    60 && l(7, O = c == "" || _ == "" || g == "" || z);
  }, [
    s,
    i,
    c,
    _,
    g,
    z,
    x,
    O,
    b,
    r,
    n,
    C,
    F,
    q,
    ee,
    o,
    fe,
    W,
    D
  ];
}
class Et extends Ae {
  constructor(e) {
    super();
    const l = document.createElement("style");
    l.textContent = `.collapse{display:flex;font-size:0.9rem;justify-content:flex-end;color:#0066cc;cursor:pointer}.fileimage{margin:auto;height:5rem;width:5rem}div{font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif}.d-none{display:none}.error{color:red}.nameError{color:red;margin-top:-2rem;font-size:0.8rem}.fs{min-height:1rem}.folderstr{display:flex;justify-content:center}.container{display:flex;flex-direction:column;gap:1rem;max-width:400px;margin:auto;padding:1rem;border:1px solid #ccc;border-radius:4px;background-color:#fff}.form-group{margin-bottom:20px;display:flex;flex-direction:column}.form-group label{font-weight:bold;margin-bottom:5px;font-size:1rem}.form-group input,.form-group select{padding:8px 10px;border:1px solid #ccc;border-radius:5px;font-size:1rem}.form-group input:focus,.form-group select:focus{outline:none;border-color:#0085ff;box-shadow:0 0 5px #0085ff}.form-group select{cursor:pointer}.btn-group{display:flex;justify-content:flex-end}.btn{padding:8px 20px;margin-right:10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer}.btn-save:disabled{border:1px solid #999999;background-color:#f2f2f2;color:#333;pointer-events:none}.btn-save{background-color:#0085ff;color:#fff}.btn-save:hover{background-color:#0066cc}.btn-cancel{background-color:#f2f2f2;color:#333}.btn-cancel:hover{background-color:#e6e6e6}.sel-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}.dark.container{display:flex;flex-direction:column;gap:1rem;max-width:400px;margin:auto;padding:1rem;border:1px solid #333;border-radius:4px;background-color:#1e1e1e}.dark .folderstr{color:#fff;background-color:#1e1e1e}.dark .form-group{margin-bottom:20px;display:flex;flex-direction:column}.dark .form-group label{font-weight:bold;margin-bottom:5px;font-size:1rem;color:#fff}.dark .form-group input,.dark .form-group select{padding:8px 10px;border:1px solid #ccc;border-radius:5px;font-size:1rem;background-color:#333;color:#fff}.dark .form-group input:focus,.dark .form-group select:focus{outline:none;border-color:#0085ff;box-shadow:0 0 5px #0085ff}.dark .form-group select{cursor:pointer}.dark .btn-group{display:flex;justify-content:flex-end}.dark .btn{padding:8px 20px;margin-right:10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer}.dark .btn-save{background-color:#0085ff;color:#fff}.dark .btn-save:hover{background-color:#0066cc}.dark .btn-save:disabled{border:1px solid #999999;background-color:#f2f2f2;color:#333;pointer-events:none}.dark .btn-cancel{background-color:#f2f2f2;color:#333}.dark .btn-cancel:hover{background-color:#e6e6e6}.dark .collapse{color:#00cccc}`, this.shadowRoot.appendChild(l), et(
      this,
      {
        target: this.shadowRoot,
        props: Ge(this.attributes),
        customElement: !0
      },
      xt,
      wt,
      Ve,
      { darkmode: 1, folder: 0 },
      null
    ), e && (e.target && v(e.target, this, e.anchor), e.props && (this.$set(e.props), K()));
  }
  static get observedAttributes() {
    return ["darkmode", "folder"];
  }
  get darkmode() {
    return this.$$.ctx[1];
  }
  set darkmode(e) {
    this.$$set({ darkmode: e }), K();
  }
  get folder() {
    return this.$$.ctx[0];
  }
  set folder(e) {
    this.$$set({ folder: e }), K();
  }
}
customElements.define("add-file", Et);
