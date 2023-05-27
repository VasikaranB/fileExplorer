function j() {
}
function Ee(t) {
  return t();
}
function Oe() {
  return /* @__PURE__ */ Object.create(null);
}
function U(t) {
  t.forEach(Ee);
}
function we(t) {
  return typeof t == "function";
}
function Ve(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let pe;
function Ce(t, e) {
  return pe || (pe = document.createElement("a")), pe.href = e, t === pe.href;
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
function w(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Fe(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function h(t) {
  return document.createElement(t);
}
function B(t) {
  return document.createTextNode(t);
}
function S() {
  return B(" ");
}
function Ze() {
  return B("");
}
function D(t, e, l, n) {
  return t.addEventListener(e, l, n), () => t.removeEventListener(e, l, n);
}
function Re(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function c(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function me(t, e, l) {
  e in t ? t[e] = typeof t[e] == "boolean" && l === "" ? !0 : l : c(t, e, l);
}
function rt(t) {
  return Array.from(t.childNodes);
}
function ge(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Te(t, e) {
  t.value = e ?? "";
}
function he(t, e, l) {
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
let ne;
function le(t) {
  ne = t;
}
function Ne() {
  if (!ne)
    throw new Error("Function called outside component initialization");
  return ne;
}
function it(t) {
  Ne().$$.on_mount.push(t);
}
function ft(t) {
  Ne().$$.on_destroy.push(t);
}
function st() {
  const t = Ne();
  return (e, l, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const r = ot(e, l, { cancelable: n });
      return o.slice().forEach((s) => {
        s.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const J = [], Le = [];
let Q = [];
const qe = [], at = /* @__PURE__ */ Promise.resolve();
let xe = !1;
function ct() {
  xe || (xe = !0, at.then(H));
}
function re(t) {
  Q.push(t);
}
const ye = /* @__PURE__ */ new Set();
let G = 0;
function H() {
  if (G !== 0)
    return;
  const t = ne;
  do {
    try {
      for (; G < J.length; ) {
        const e = J[G];
        G++, le(e), dt(e.$$);
      }
    } catch (e) {
      throw J.length = 0, G = 0, e;
    }
    for (le(null), J.length = 0, G = 0; Le.length; )
      Le.pop()();
    for (let e = 0; e < Q.length; e += 1) {
      const l = Q[e];
      ye.has(l) || (ye.add(l), l());
    }
    Q.length = 0;
  } while (J.length);
  for (; qe.length; )
    qe.pop()();
  xe = !1, ye.clear(), le(t);
}
function dt(t) {
  if (t.fragment !== null) {
    t.update(), U(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(re);
  }
}
function ut(t) {
  const e = [], l = [];
  Q.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), Q = e;
}
const _e = /* @__PURE__ */ new Set();
let K;
function Je() {
  K = {
    r: 0,
    c: [],
    p: K
    // parent group
  };
}
function Qe() {
  K.r || U(K.c), K = K.p;
}
function P(t, e) {
  t && t.i && (_e.delete(t), t.i(e));
}
function oe(t, e, l, n) {
  if (t && t.o) {
    if (_e.has(t))
      return;
    _e.add(t), K.c.push(() => {
      _e.delete(t), n && (l && t.d(1), n());
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
  o && o.m(e, l), n || re(() => {
    const s = t.$$.on_mount.map(Ee).filter(we);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : U(s), t.$$.on_mount = [];
  }), r.forEach(re);
}
function Ye(t, e) {
  const l = t.$$;
  l.fragment !== null && (ut(l.after_update), U(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function ht(t, e) {
  t.$$.dirty[0] === -1 && (J.push(t), ct(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, l, n, o, r, s, u = [-1]) {
  const f = ne;
  le(t);
  const i = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: j,
    not_equal: o,
    bound: Oe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Oe(),
    dirty: u,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(i.root);
  let d = !1;
  if (i.ctx = l ? l(t, e.props || {}, (a, g, ..._) => {
    const C = _.length ? _[0] : g;
    return i.ctx && o(i.ctx[a], i.ctx[a] = C) && (!i.skip_bound && i.bound[a] && i.bound[a](C), d && ht(t, a)), g;
  }) : [], i.update(), d = !0, U(i.before_update), i.fragment = n ? n(i.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = rt(e.target);
      i.fragment && i.fragment.l(a), a.forEach(w);
    } else
      i.fragment && i.fragment.c();
    e.intro && P(t.$$.fragment), Xe(t, e.target, e.anchor, e.customElement), H();
  }
  le(f);
}
let Se;
typeof HTMLElement == "function" && (Se = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Ee).filter(we);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, l) {
    this[t] = l;
  }
  disconnectedCallback() {
    U(this.$$.on_disconnect);
  }
  $destroy() {
    Ye(this, 1), this.$destroy = j;
  }
  $on(t, e) {
    if (!we(e))
      return j;
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
      e = h("span"), l = S(), n = h("img"), c(e, "class", "file"), c(n, "class", "fileimage"), c(n, "alt", "img"), Ce(n.src, o = "file.png") || c(n, "src", o);
    },
    m(r, s) {
      v(r, e, s), v(r, l, s), v(r, n, s);
    },
    p: j,
    d(r) {
      r && w(e), r && w(l), r && w(n);
    }
  };
}
function gt(t) {
  let e, l, n, o, r, s, u;
  function f() {
    return (
      /*click_handler*/
      t[4](
        /*child*/
        t[6]
      )
    );
  }
  function i(...d) {
    return (
      /*keydown_handler*/
      t[5](
        /*child*/
        t[6],
        ...d
      )
    );
  }
  return {
    c() {
      var d;
      e = h("span"), n = S(), o = h("img"), c(e, "class", l = /*child*/
      ((d = t[6]) == null ? void 0 : d.open) == !0 ? "folder-arrow-close" : "folder-arrow-open"), c(o, "class", "folderimage"), c(o, "alt", "img"), Ce(o.src, r = "folder.png") || c(o, "src", r);
    },
    m(d, a) {
      v(d, e, a), v(d, n, a), v(d, o, a), s || (u = [
        D(e, "click", Re(f)),
        D(e, "keydown", Re(i))
      ], s = !0);
    },
    p(d, a) {
      var g;
      t = d, a & /*folder*/
      1 && l !== (l = /*child*/
      ((g = t[6]) == null ? void 0 : g.open) == !0 ? "folder-arrow-close" : "folder-arrow-open") && c(e, "class", l);
    },
    d(d) {
      d && w(e), d && w(n), d && w(o), s = !1, U(u);
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
      l || (P(e.$$.fragment, n), l = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), l = !1;
    },
    d(n) {
      Ye(e, n);
    }
  };
}
function Be(t) {
  var C, A, R;
  let e, l, n, o = (
    /*child*/
    t[6].name + ""
  ), r, s, u, f, i;
  function d(k, x) {
    var O;
    return (
      /*child*/
      (O = k[6]) != null && O.children ? gt : _t
    );
  }
  let a = d(t), g = a(t), _ = (
    /*child*/
    ((C = t[6]) == null ? void 0 : C.open) && /*child*/
    ((A = t[6]) == null ? void 0 : A.children) && /*child*/
    ((R = t[6]) == null ? void 0 : R.children.length) > 0 && je(t)
  );
  return {
    c() {
      e = h("div"), g.c(), l = S(), n = h("span"), r = B(o), s = S(), u = h("div"), _ && _.c(), f = S(), c(n, "class", "folder-label"), c(e, "class", "folder"), c(u, "class", "child");
    },
    m(k, x) {
      v(k, e, x), g.m(e, null), m(e, l), m(e, n), m(n, r), v(k, s, x), v(k, u, x), _ && _.m(u, null), m(u, f), i = !0;
    },
    p(k, x) {
      var O, W, F;
      a === (a = d(k)) && g ? g.p(k, x) : (g.d(1), g = a(k), g && (g.c(), g.m(e, l))), (!i || x & /*folder*/
      1) && o !== (o = /*child*/
      k[6].name + "") && ge(r, o), /*child*/
      (O = k[6]) != null && O.open && /*child*/
      ((W = k[6]) != null && W.children) && /*child*/
      ((F = k[6]) == null ? void 0 : F.children.length) > 0 ? _ ? (_.p(k, x), x & /*folder*/
      1 && P(_, 1)) : (_ = je(k), _.c(), P(_, 1), _.m(u, f)) : _ && (Je(), oe(_, 1, 1, () => {
        _ = null;
      }), Qe());
    },
    i(k) {
      i || (P(_), i = !0);
    },
    o(k) {
      oe(_), i = !1;
    },
    d(k) {
      k && w(e), g.d(), k && w(s), k && w(u), _ && _.d();
    }
  };
}
function bt(t) {
  var u;
  let e, l, n, o = (
    /*folder*/
    (u = t[0]) == null ? void 0 : u.children
  ), r = [];
  for (let f = 0; f < o.length; f += 1)
    r[f] = Be(De(t, o, f));
  const s = (f) => oe(r[f], 1, 1, () => {
    r[f] = null;
  });
  return {
    c() {
      e = h("div");
      for (let f = 0; f < r.length; f += 1)
        r[f].c();
      this.c = j, c(e, "class", l = /*darkmode*/
      t[1] ? "dark" : "");
    },
    m(f, i) {
      v(f, e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d] && r[d].m(e, null);
      n = !0;
    },
    p(f, [i]) {
      var d;
      if (i & /*folder, toggleFolder, handleKeydown*/
      13) {
        o = /*folder*/
        (d = f[0]) == null ? void 0 : d.children;
        let a;
        for (a = 0; a < o.length; a += 1) {
          const g = De(f, o, a);
          r[a] ? (r[a].p(g, i), P(r[a], 1)) : (r[a] = Be(g), r[a].c(), P(r[a], 1), r[a].m(e, null));
        }
        for (Je(), a = o.length; a < r.length; a += 1)
          s(a);
        Qe();
      }
      (!n || i & /*darkmode*/
      2 && l !== (l = /*darkmode*/
      f[1] ? "dark" : "")) && c(e, "class", l);
    },
    i(f) {
      if (!n) {
        for (let i = 0; i < o.length; i += 1)
          P(r[i]);
        n = !0;
      }
    },
    o(f) {
      r = r.filter(Boolean);
      for (let i = 0; i < r.length; i += 1)
        oe(r[i]);
      n = !1;
    },
    d(f) {
      f && w(e), Fe(r, f);
    }
  };
}
function kt(t, e, l) {
  let { folder: n = { children: [] } } = e, { darkmode: o = !1 } = e;
  function r(i) {
    i.open = !i.open, l(0, n = { ...n });
  }
  function s(i, d) {
    (i.key === "Enter" || i.key === " ") && (r(d), i.preventDefault());
  }
  const u = (i) => r(i), f = (i, d) => s(d, i);
  return t.$$set = (i) => {
    "folder" in i && l(0, n = i.folder), "darkmode" in i && l(1, o = i.darkmode);
  }, [n, o, r, s, u, f];
}
class tt extends Se {
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
    ), e && (e.target && v(e.target, this, e.anchor), e.props && (this.$set(e.props), H()));
  }
  static get observedAttributes() {
    return ["folder", "darkmode"];
  }
  get folder() {
    return this.$$.ctx[0];
  }
  set folder(e) {
    this.$$set({ folder: e }), H();
  }
  get darkmode() {
    return this.$$.ctx[1];
  }
  set darkmode(e) {
    this.$$set({ darkmode: e }), H();
  }
}
customElements.define("file-list", tt);
function He(t, e, l) {
  const n = t.slice();
  return n[22] = e[l], n;
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
      var s;
      e = h("option"), n = B(l), c(e, "class", "sel-option"), e.__value = o = /*folder*/
      (s = t[0]) == null ? void 0 : s.name, e.value = e.__value;
    },
    m(s, u) {
      v(s, e, u), m(e, n);
    },
    p(s, u) {
      var f, i;
      u & /*folderNode*/
      1024 && l !== (l = /*folder*/
      ((f = s[0]) == null ? void 0 : f.name) + "") && ge(n, l), u & /*folderNode*/
      1024 && o !== (o = /*folder*/
      (i = s[0]) == null ? void 0 : i.name) && (e.__value = o, e.value = e.__value);
    },
    d(s) {
      s && w(e);
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
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, r);
      v(o, e, r);
    },
    p(o, r) {
      if (r & /*fileNode*/
      512) {
        l = /*fileNode*/
        o[9];
        let s;
        for (s = 0; s < l.length; s += 1) {
          const u = He(o, l, s);
          n[s] ? n[s].p(u, r) : (n[s] = Ke(u), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = l.length;
      }
    },
    d(o) {
      Fe(n, o), o && w(e);
    }
  };
}
function Ke(t) {
  var r;
  let e, l = (
    /*subfolder*/
    ((r = t[22]) == null ? void 0 : r.name) + ""
  ), n, o;
  return {
    c() {
      var s;
      e = h("option"), n = B(l), c(e, "class", "sel-option"), e.__value = o = /*subfolder*/
      (s = t[22]) == null ? void 0 : s.name, e.value = e.__value;
    },
    m(s, u) {
      v(s, e, u), m(e, n);
    },
    p(s, u) {
      var f, i;
      u & /*fileNode*/
      512 && l !== (l = /*subfolder*/
      ((f = s[22]) == null ? void 0 : f.name) + "") && ge(n, l), u & /*fileNode*/
      512 && o !== (o = /*subfolder*/
      (i = s[22]) == null ? void 0 : i.name) && (e.__value = o, e.value = e.__value);
    },
    d(s) {
      s && w(e);
    }
  };
}
function vt(t) {
  let e, l, n, o;
  return {
    c() {
      e = h("img"), n = S(), o = h("div"), o.textContent = "No folder/file to show", c(e, "class", "fileimage"), c(e, "alt", "img"), Ce(e.src, l = "nofile.png") || c(e, "src", l), c(o, "class", "folderstr");
    },
    m(r, s) {
      v(r, e, s), v(r, n, s), v(r, o, s);
    },
    p: j,
    d(r) {
      r && w(e), r && w(n), r && w(o);
    }
  };
}
function yt(t) {
  let e, l = (
    /*expand*/
    t[8] ? "Collapse All" : "Expand All"
  ), n, o, r, s, u;
  return {
    c() {
      e = h("div"), n = B(l), o = S(), r = h("file-list"), c(e, "class", "collapse"), me(
        r,
        "folder",
        /*folder*/
        t[0]
      ), me(
        r,
        "darkmode",
        /*darkmode*/
        t[1]
      );
    },
    m(f, i) {
      v(f, e, i), m(e, n), v(f, o, i), v(f, r, i), s || (u = D(
        e,
        "click",
        /*toggleCollapse*/
        t[11]
      ), s = !0);
    },
    p(f, i) {
      i & /*expand*/
      256 && l !== (l = /*expand*/
      f[8] ? "Collapse All" : "Expand All") && ge(n, l), i & /*folder*/
      1 && me(
        r,
        "folder",
        /*folder*/
        f[0]
      ), i & /*darkmode*/
      2 && me(
        r,
        "darkmode",
        /*darkmode*/
        f[1]
      );
    },
    d(f) {
      f && w(e), f && w(o), f && w(r), s = !1, u();
    }
  };
}
function wt(t) {
  let e, l, n, o, r, s, u, f, i, d, a, g, _, C, A, R, k, x, O, W, F, L, X, ie, b, y, V, $, T, Y, ee, Ae, fe, se, be, ae, ke, q, ce, ze, de, ve, $e, Z = (
    /*folderNode*/
    t[10]
  ), z = [];
  for (let p = 0; p < Z.length; p += 1)
    z[p] = Ue(Pe(t, Z, p));
  let M = (
    /*type*/
    t[3] == "file" && We(t)
  );
  function Me(p, N) {
    var E, te;
    return (
      /*folder*/
      (E = p[0]) != null && E.children && /*folder*/
      ((te = p[0]) == null ? void 0 : te.children.length) > 0 ? yt : vt
    );
  }
  let ue = Me(t), I = ue(t);
  return {
    c() {
      e = h("div"), l = h("div"), n = h("label"), n.textContent = "Folder/File Name:", o = S(), r = h("input"), s = S(), u = h("div"), f = B("Invalid Folder/File Name"), d = S(), a = h("div"), g = h("label"), g.textContent = "Type:", _ = S(), C = h("select"), A = h("option"), A.textContent = "Folder", R = h("option"), R.textContent = "File", k = S(), x = h("div"), O = h("label"), O.textContent = "Folder:", W = S(), F = h("select"), L = h("option"), L.textContent = "Root level";
      for (let p = 0; p < z.length; p += 1)
        z[p].c();
      X = Ze(), M && M.c(), ie = S(), b = h("div"), y = h("button"), V = B("Save"), $ = S(), T = h("button"), T.textContent = "Cancel", Y = S(), ee = h("div"), Ae = B("Folder/File name aleady exists"), be = S(), ae = h("div"), ke = S(), q = h("div"), ce = h("h1"), ce.textContent = "File Explorer", ze = S(), I.c(), this.c = j, c(n, "for", "name"), c(r, "type", "text"), c(r, "id", "name"), c(r, "name", "name"), c(r, "placeholder", "Enter name..."), c(l, "class", "form-group"), c(u, "class", i = /*nameError*/
      t[5] === !0 ? "nameError" : "d-none"), c(g, "for", "type"), A.__value = "folder", A.value = A.__value, R.__value = "file", R.value = R.__value, c(C, "id", "type"), c(C, "name", "type"), /*type*/
      t[3] === void 0 && re(() => (
        /*select0_change_handler*/
        t[17].call(C)
      )), c(a, "class", "form-group"), c(O, "for", "folder"), c(L, "class", "sel-option"), L.__value = "root", L.value = L.__value, c(F, "id", "folder"), c(F, "name", "folder"), /*parentFolder*/
      t[4] === void 0 && re(() => (
        /*select1_change_handler*/
        t[18].call(F)
      )), c(x, "id", "folder-select"), c(x, "class", "form-group"), c(y, "class", "btn btn-save"), y.disabled = /*disabled*/
      t[7], c(T, "class", "btn btn-cancel"), c(b, "class", "btn-group"), c(ee, "class", fe = /*error*/
      t[6] === !0 ? "error" : "d-none"), c(e, "class", se = /*darkmode*/
      t[1] === !0 ? "container dark" : "container"), c(ae, "class", "fs"), c(ce, "class", "folderstr"), c(q, "class", de = /*darkmode*/
      t[1] === !0 ? "container dark" : "container");
    },
    m(p, N) {
      v(p, e, N), m(e, l), m(l, n), m(l, o), m(l, r), Te(
        r,
        /*name*/
        t[2]
      ), m(e, s), m(e, u), m(u, f), m(e, d), m(e, a), m(a, g), m(a, _), m(a, C), m(C, A), m(C, R), he(
        C,
        /*type*/
        t[3],
        !0
      ), m(e, k), m(e, x), m(x, O), m(x, W), m(x, F), m(F, L);
      for (let E = 0; E < z.length; E += 1)
        z[E] && z[E].m(F, null);
      m(F, X), M && M.m(F, null), he(
        F,
        /*parentFolder*/
        t[4],
        !0
      ), m(e, ie), m(e, b), m(b, y), m(y, V), m(b, $), m(b, T), m(e, Y), m(e, ee), m(ee, Ae), v(p, be, N), v(p, ae, N), v(p, ke, N), v(p, q, N), m(q, ce), m(q, ze), I.m(q, null), ve || ($e = [
        D(
          r,
          "input",
          /*input_input_handler*/
          t[16]
        ),
        D(
          r,
          "input",
          /*validateFolderName*/
          t[13]
        ),
        D(
          C,
          "change",
          /*select0_change_handler*/
          t[17]
        ),
        D(
          F,
          "change",
          /*select1_change_handler*/
          t[18]
        ),
        D(
          y,
          "click",
          /*handleSave*/
          t[12]
        ),
        D(
          T,
          "click",
          /*handleCancel*/
          t[14]
        )
      ], ve = !0);
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
      p[5] === !0 ? "nameError" : "d-none") && c(u, "class", i), N & /*type*/
      8 && he(
        C,
        /*type*/
        p[3]
      ), N & /*folderNode*/
      1024) {
        Z = /*folderNode*/
        p[10];
        let E;
        for (E = 0; E < Z.length; E += 1) {
          const te = Pe(p, Z, E);
          z[E] ? z[E].p(te, N) : (z[E] = Ue(te), z[E].c(), z[E].m(F, X));
        }
        for (; E < z.length; E += 1)
          z[E].d(1);
        z.length = Z.length;
      }
      /*type*/
      p[3] == "file" ? M ? M.p(p, N) : (M = We(p), M.c(), M.m(F, null)) : M && (M.d(1), M = null), N & /*parentFolder, fileNode, folderNode*/
      1552 && he(
        F,
        /*parentFolder*/
        p[4]
      ), N & /*disabled*/
      128 && (y.disabled = /*disabled*/
      p[7]), N & /*error*/
      64 && fe !== (fe = /*error*/
      p[6] === !0 ? "error" : "d-none") && c(ee, "class", fe), N & /*darkmode*/
      2 && se !== (se = /*darkmode*/
      p[1] === !0 ? "container dark" : "container") && c(e, "class", se), ue === (ue = Me(p)) && I ? I.p(p, N) : (I.d(1), I = ue(p), I && (I.c(), I.m(q, null))), N & /*darkmode*/
      2 && de !== (de = /*darkmode*/
      p[1] === !0 ? "container dark" : "container") && c(q, "class", de);
    },
    i: j,
    o: j,
    d(p) {
      p && w(e), Fe(z, p), M && M.d(), p && w(be), p && w(ae), p && w(ke), p && w(q), I.d(), ve = !1, U($e);
    }
  };
}
function xt(t, e, l) {
  let n, o, r;
  const s = st();
  let { darkmode: u = !0 } = e, { folder: f = {
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
  } } = e, i = "", d = "folder", a = "root", g = !1, _ = !1, C = !0, A = !1;
  function R() {
    l(8, A = !A), f.children.forEach((b) => {
      b.type == "folder" && (b.open = A), b.children.forEach((y) => {
        y.type == "folder" && (y.open = A);
      });
    }), l(0, f = { ...f });
  }
  function k(b, y) {
    const V = f.children.findIndex(($) => $.name === b && $.type === "folder");
    V !== -1 ? f.children[V].children.find(($) => $.name === y.name && $.type === y.type) ? x() : f.children[V].children.push(y) : f == null || f.children.forEach(($) => {
      $.type == "folder" && $.children.forEach((T) => {
        T.type === "folder" && T.name === b && (T.children.find((Y) => Y.name === y.name && Y.type === y.type) ? x() : T.children.push(y));
      });
    }), b == "root" && (f.children.find(($) => $.name === y.name && $.type === y.type) ? x() : f.children.push(y)), l(0, f = { ...f });
  }
  function x() {
    l(6, g = !0), setTimeout(
      () => {
        l(6, g = !1);
      },
      2e3
    );
  }
  function O() {
    if (i != "" && d != "" && a != "") {
      const b = a, y = { name: i, type: d, open: !1 };
      d == "folder" && (y.children = []), k(b, y), s("save", { folder: f }), l(2, i = ""), l(3, d = "folder"), l(4, a = "root");
    }
  }
  function W() {
    /^[a-zA-Z0-9_\-]*$/.test(i) ? l(5, _ = !1) : l(5, _ = !0);
  }
  function F() {
    l(2, i = ""), l(3, d = "folder"), l(4, a = "root"), s("cancel");
  }
  it(() => {
  }), ft(() => {
  });
  function L() {
    i = this.value, l(2, i);
  }
  function X() {
    d = Ie(this), l(3, d);
  }
  function ie() {
    a = Ie(this), l(4, a), l(9, r), l(15, o), l(0, f), l(10, n), l(0, f);
  }
  return t.$$set = (b) => {
    "darkmode" in b && l(1, u = b.darkmode), "folder" in b && l(0, f = b.folder);
  }, t.$$.update = () => {
    t.$$.dirty & /*folder*/
    1 && l(10, n = f == null ? void 0 : f.children.filter((b) => b.type == "folder")), t.$$.dirty & /*folder*/
    1 && l(15, o = f == null ? void 0 : f.children.map((b) => {
      if (b.type == "folder")
        return b.children.filter((y) => y.type === "folder");
    })), t.$$.dirty & /*fileList*/
    32768 && l(9, r = o.flat()), t.$$.dirty & /*name, type, parentFolder, nameError*/
    60 && l(7, C = i == "" || d == "" || a == "" || _);
  }, [
    f,
    u,
    i,
    d,
    a,
    _,
    g,
    C,
    A,
    r,
    n,
    R,
    O,
    W,
    F,
    o,
    L,
    X,
    ie
  ];
}
class Et extends Se {
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
    ), e && (e.target && v(e.target, this, e.anchor), e.props && (this.$set(e.props), H()));
  }
  static get observedAttributes() {
    return ["darkmode", "folder"];
  }
  get darkmode() {
    return this.$$.ctx[1];
  }
  set darkmode(e) {
    this.$$set({ darkmode: e }), H();
  }
  get folder() {
    return this.$$.ctx[0];
  }
  set folder(e) {
    this.$$set({ folder: e }), H();
  }
}
customElements.define("add-file", Et);
