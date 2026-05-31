var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  s = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  c = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  l = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    c(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var u = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      ee = Object.prototype.hasOwnProperty;
    function te(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function ne(e, t) {
      return te(e.type, t, e.props);
    }
    function T(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function re(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ie = /\/+/g;
    function ae(e, t) {
      return typeof e == `object` && e && e.key != null
        ? re(`` + e.key)
        : t.toString(36);
    }
    function oe(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function se(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), se(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ae(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(ie, `$&/`) + `/`),
              se(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (T(o) &&
                (o = ne(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ie, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + ae(a, u)), (c += se(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          ((a = a.value), (s = l + ae(a, u++)), (c += se(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return se(oe(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function ce(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        se(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function le(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var E =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      D = {
        map: ce,
        forEach: function (e, t, n) {
          ce(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            ce(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            ce(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!T(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = D),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !ee.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return te(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            ee.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return te(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = T),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: le,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, E));
        } catch (e) {
          E(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.4`));
  }),
  d = o((e, t) => {
    t.exports = u();
  }),
  f = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), T()));
        else {
          var t = n(l);
          t !== null && ae(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      ee = -1;
    function te() {
      return g ? !0 : !(e.unstable_now() - ee < w);
    }
    function ne() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        ee = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && te());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ae(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? T() : (S = !1);
        }
      }
    }
    var T;
    if (typeof y == `function`)
      T = function () {
        y(ne);
      };
    else if (typeof MessageChannel < `u`) {
      var re = new MessageChannel(),
        ie = re.port2;
      ((re.port1.onmessage = ne),
        (T = function () {
          ie.postMessage(null);
        }));
    } else
      T = function () {
        _(ne, 0);
      };
    function ae(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), ae(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), T()))),
          r
        );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  p = o((e, t) => {
    t.exports = f();
  }),
  m = o((e) => {
    var t = d();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.4`));
  }),
  h = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = m()));
  }),
  g = o((e) => {
    var t = p(),
      n = d(),
      r = h();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function f(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = f(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var m = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      ee = Symbol.for(`react.suspense`),
      te = Symbol.for(`react.suspense_list`),
      ne = Symbol.for(`react.memo`),
      T = Symbol.for(`react.lazy`),
      re = Symbol.for(`react.activity`),
      ie = Symbol.for(`react.memo_cache_sentinel`),
      ae = Symbol.iterator;
    function oe(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ae && e[ae]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var se = Symbol.for(`react.client.reference`);
    function ce(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === se ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case te:
          return `SuspenseList`;
        case re:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ne:
            return (
              (t = e.displayName || null),
              t === null ? ce(e.type) || `Memo` : t
            );
          case T:
            ((t = e._payload), (e = e._init));
            try {
              return ce(e(t));
            } catch {}
        }
      return null;
    }
    var le = Array.isArray,
      E = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      D = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      ue = { pending: !1, data: null, method: null, action: null },
      de = [],
      fe = -1;
    function pe(e) {
      return { current: e };
    }
    function me(e) {
      0 > fe || ((e.current = de[fe]), (de[fe] = null), fe--);
    }
    function O(e, t) {
      (fe++, (de[fe] = e.current), (e.current = t));
    }
    var he = pe(null),
      ge = pe(null),
      _e = pe(null),
      ve = pe(null);
    function ye(e, t) {
      switch ((O(_e, t), O(ge, e), O(he, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (me(he), O(he, e));
    }
    function be() {
      (me(he), me(ge), me(_e));
    }
    function xe(e) {
      e.memoizedState !== null && O(ve, e);
      var t = he.current,
        n = Hd(t, e.type);
      t !== n && (O(ge, e), O(he, n));
    }
    function k(e) {
      (ge.current === e && (me(he), me(ge)),
        ve.current === e && (me(ve), (Qf._currentValue = ue)));
    }
    var Se, Ce;
    function we(e) {
      if (Se === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Se = (t && t[1]) || ``),
            (Ce =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Se +
        e +
        Ce
      );
    }
    var Te = !1;
    function Ee(e, t) {
      if (!e || Te) return ``;
      Te = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, `props`, {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, `name`, {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);
          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Te = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? we(n) : ``;
    }
    function De(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return we(e.type);
        case 16:
          return we(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? we(`Suspense Fallback`)
            : we(`Suspense`);
        case 19:
          return we(`SuspenseList`);
        case 0:
        case 15:
          return Ee(e.type, !1);
        case 11:
          return Ee(e.type.render, !1);
        case 1:
          return Ee(e.type, !0);
        case 31:
          return we(`Activity`);
        default:
          return ``;
      }
    }
    function Oe(e) {
      try {
        var t = ``,
          n = null;
        do ((t += De(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var ke = Object.prototype.hasOwnProperty,
      Ae = t.unstable_scheduleCallback,
      je = t.unstable_cancelCallback,
      Me = t.unstable_shouldYield,
      Ne = t.unstable_requestPaint,
      Pe = t.unstable_now,
      Fe = t.unstable_getCurrentPriorityLevel,
      Ie = t.unstable_ImmediatePriority,
      Le = t.unstable_UserBlockingPriority,
      Re = t.unstable_NormalPriority,
      ze = t.unstable_LowPriority,
      Be = t.unstable_IdlePriority,
      Ve = t.log,
      He = t.unstable_setDisableYieldValue,
      Ue = null,
      We = null;
    function Ge(e) {
      if (
        (typeof Ve == `function` && He(e),
        We && typeof We.setStrictMode == `function`)
      )
        try {
          We.setStrictMode(Ue, e);
        } catch {}
    }
    var Ke = Math.clz32 ? Math.clz32 : Ye,
      qe = Math.log,
      Je = Math.LN2;
    function Ye(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((qe(e) / Je) | 0)) | 0);
    }
    var Xe = 256,
      Ze = 262144,
      Qe = 4194304;
    function $e(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function et(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = $e(n)))
                : (i = $e(o))
              : (i = $e(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = $e(n)))
                  : (i = $e(o)))
              : (i = $e(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function tt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function nt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function rt() {
      var e = Qe;
      return ((Qe <<= 1), !(Qe & 62914560) && (Qe = 4194304), e);
    }
    function it(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function at(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function ot(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ke(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && st(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function st(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ke(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function ct(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ke(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function lt(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : ut(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function ut(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function dt(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function ft() {
      var e = D.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function pt(e, t) {
      var n = D.p;
      try {
        return ((D.p = e), t());
      } finally {
        D.p = n;
      }
    }
    var mt = Math.random().toString(36).slice(2),
      ht = `__reactFiber$` + mt,
      gt = `__reactProps$` + mt,
      _t = `__reactContainer$` + mt,
      vt = `__reactEvents$` + mt,
      yt = `__reactListeners$` + mt,
      bt = `__reactHandles$` + mt,
      xt = `__reactResources$` + mt,
      St = `__reactMarker$` + mt;
    function Ct(e) {
      (delete e[ht], delete e[gt], delete e[vt], delete e[yt], delete e[bt]);
    }
    function wt(e) {
      var t = e[ht];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[_t] || n[ht])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null; ) {
              if ((n = e[ht])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Tt(e) {
      if ((e = e[ht] || e[_t])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Et(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Dt(e) {
      var t = e[xt];
      return (
        (t ||= e[xt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Ot(e) {
      e[St] = !0;
    }
    var kt = new Set(),
      At = {};
    function jt(e, t) {
      (Mt(e, t), Mt(e + `Capture`, t));
    }
    function Mt(e, t) {
      for (At[e] = t, e = 0; e < t.length; e++) kt.add(t[e]);
    }
    var Nt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Pt = {},
      Ft = {};
    function It(e) {
      return ke.call(Ft, e)
        ? !0
        : ke.call(Pt, e)
          ? !1
          : Nt.test(e)
            ? (Ft[e] = !0)
            : ((Pt[e] = !0), !1);
    }
    function Lt(e, t, n) {
      if (It(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Rt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function zt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Bt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Vt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Ht(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Ut(e) {
      if (!e._valueTracker) {
        var t = Vt(e) ? `checked` : `value`;
        e._valueTracker = Ht(e, t, `` + e[t]);
      }
    }
    function Wt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Vt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function Gt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Kt = /[\n"\\]/g;
    function qt(e) {
      return e.replace(Kt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Jt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + Bt(t))
            : e.value !== `` + Bt(t) && (e.value = `` + Bt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Xt(e, o, Bt(n))
          : Xt(e, o, Bt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Bt(s))
          : e.removeAttribute(`name`));
    }
    function Yt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Ut(e);
          return;
        }
        ((n = n == null ? `` : `` + Bt(n)),
          (t = t == null ? n : `` + Bt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Ut(e));
    }
    function Xt(e, t, n) {
      (t === `number` && Gt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Zt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Bt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Qt(e, t, n) {
      if (
        t != null &&
        ((t = `` + Bt(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Bt(n);
    }
    function $t(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (le(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Bt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Ut(e));
    }
    function en(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var tn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function nn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || tn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function rn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && nn(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && nn(e, o, t[o]);
    }
    function an(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var on = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      sn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function A(e) {
      return sn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function cn() {}
    var ln = null;
    function un(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var dn = null,
      fn = null;
    function pn(e) {
      var t = Tt(e);
      if (t && (e = t.stateNode)) {
        var n = e[gt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Jt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + qt(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[gt] || null;
                  if (!a) throw Error(i(90));
                  Jt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Wt(r));
            }
            break a;
          case `textarea`:
            Qt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Zt(e, !!n.multiple, t, !1));
        }
      }
    }
    var mn = !1;
    function hn(e, t, n) {
      if (mn) return e(t, n);
      mn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((mn = !1),
          (dn !== null || fn !== null) &&
            (bu(), dn && ((t = dn), (e = fn), (fn = dn = null), pn(t), e)))
        )
          for (t = 0; t < e.length; t++) pn(e[t]);
      }
    }
    function gn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[gt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var _n = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      vn = !1;
    if (_n)
      try {
        var yn = {};
        (Object.defineProperty(yn, `passive`, {
          get: function () {
            vn = !0;
          },
        }),
          window.addEventListener(`test`, yn, yn),
          window.removeEventListener(`test`, yn, yn));
      } catch {
        vn = !1;
      }
    var bn = null,
      xn = null,
      Sn = null;
    function Cn() {
      if (Sn) return Sn;
      var e,
        t = xn,
        n = t.length,
        r,
        i = `value` in bn ? bn.value : bn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Sn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function wn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Tn() {
      return !0;
    }
    function En() {
      return !1;
    }
    function Dn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Tn
            : En),
          (this.isPropagationStopped = En),
          this
        );
      }
      return (
        m(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Tn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Tn));
          },
          persist: function () {},
          isPersistent: Tn,
        }),
        t
      );
    }
    var On = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      kn = Dn(On),
      An = m({}, On, { view: 0, detail: 0 }),
      jn = Dn(An),
      Mn,
      Nn,
      Pn,
      Fn = m({}, An, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Kn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Pn &&
                (Pn && e.type === `mousemove`
                  ? ((Mn = e.screenX - Pn.screenX),
                    (Nn = e.screenY - Pn.screenY))
                  : (Nn = Mn = 0),
                (Pn = e)),
              Mn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Nn;
        },
      }),
      In = Dn(Fn),
      Ln = Dn(m({}, Fn, { dataTransfer: 0 })),
      Rn = Dn(m({}, An, { relatedTarget: 0 })),
      zn = Dn(
        m({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Bn = Dn(
        m({}, On, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Vn = Dn(m({}, On, { data: 0 })),
      Hn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Un = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Wn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Gn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Wn[e])
          ? !!t[e]
          : !1;
    }
    function Kn() {
      return Gn;
    }
    var qn = Dn(
        m({}, An, {
          key: function (e) {
            if (e.key) {
              var t = Hn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = wn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Un[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Kn,
          charCode: function (e) {
            return e.type === `keypress` ? wn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? wn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Jn = Dn(
        m({}, Fn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Yn = Dn(
        m({}, An, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Kn,
        }),
      ),
      Xn = Dn(m({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Zn = Dn(
        m({}, Fn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Qn = Dn(m({}, On, { newState: 0, oldState: 0 })),
      $n = [9, 13, 27, 32],
      er = _n && `CompositionEvent` in window,
      tr = null;
    _n && `documentMode` in document && (tr = document.documentMode);
    var nr = _n && `TextEvent` in window && !tr,
      rr = _n && (!er || (tr && 8 < tr && 11 >= tr)),
      ir = ` `,
      ar = !1;
    function or(e, t) {
      switch (e) {
        case `keyup`:
          return $n.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function sr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var cr = !1;
    function lr(e, t) {
      switch (e) {
        case `compositionend`:
          return sr(t);
        case `keypress`:
          return t.which === 32 ? ((ar = !0), ir) : null;
        case `textInput`:
          return ((e = t.data), e === ir && ar ? null : e);
        default:
          return null;
      }
    }
    function ur(e, t) {
      if (cr)
        return e === `compositionend` || (!er && or(e, t))
          ? ((e = Cn()), (Sn = xn = bn = null), (cr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return rr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var dr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function fr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!dr[e.type] : t === `textarea`;
    }
    function pr(e, t, n, r) {
      (dn ? (fn ? fn.push(r) : (fn = [r])) : (dn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new kn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var mr = null,
      hr = null;
    function gr(e) {
      yd(e, 0);
    }
    function _r(e) {
      if (Wt(Et(e))) return e;
    }
    function vr(e, t) {
      if (e === `change`) return t;
    }
    var yr = !1;
    if (_n) {
      var br;
      if (_n) {
        var xr = `oninput` in document;
        if (!xr) {
          var Sr = document.createElement(`div`);
          (Sr.setAttribute(`oninput`, `return;`),
            (xr = typeof Sr.oninput == `function`));
        }
        br = xr;
      } else br = !1;
      yr = br && (!document.documentMode || 9 < document.documentMode);
    }
    function Cr() {
      mr && (mr.detachEvent(`onpropertychange`, wr), (hr = mr = null));
    }
    function wr(e) {
      if (e.propertyName === `value` && _r(hr)) {
        var t = [];
        (pr(t, hr, e, un(e)), hn(gr, t));
      }
    }
    function Tr(e, t, n) {
      e === `focusin`
        ? (Cr(), (mr = t), (hr = n), mr.attachEvent(`onpropertychange`, wr))
        : e === `focusout` && Cr();
    }
    function Er(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return _r(hr);
    }
    function Dr(e, t) {
      if (e === `click`) return _r(t);
    }
    function Or(e, t) {
      if (e === `input` || e === `change`) return _r(t);
    }
    function kr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Ar = typeof Object.is == `function` ? Object.is : kr;
    function jr(e, t) {
      if (Ar(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ke.call(t, i) || !Ar(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Mr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Nr(e, t) {
      var n = Mr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Mr(n);
      }
    }
    function Pr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Pr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Fr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Gt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Gt(e.document);
      }
      return t;
    }
    function Ir(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Lr = _n && `documentMode` in document && 11 >= document.documentMode,
      Rr = null,
      zr = null,
      Br = null,
      Vr = !1;
    function Hr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Vr ||
        Rr == null ||
        Rr !== Gt(r) ||
        ((r = Rr),
        `selectionStart` in r && Ir(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Br && jr(Br, r)) ||
          ((Br = r),
          (r = Ed(zr, `onSelect`)),
          0 < r.length &&
            ((t = new kn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Rr))));
    }
    function Ur(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Wr = {
        animationend: Ur(`Animation`, `AnimationEnd`),
        animationiteration: Ur(`Animation`, `AnimationIteration`),
        animationstart: Ur(`Animation`, `AnimationStart`),
        transitionrun: Ur(`Transition`, `TransitionRun`),
        transitionstart: Ur(`Transition`, `TransitionStart`),
        transitioncancel: Ur(`Transition`, `TransitionCancel`),
        transitionend: Ur(`Transition`, `TransitionEnd`),
      },
      Gr = {},
      Kr = {};
    _n &&
      ((Kr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Wr.animationend.animation,
        delete Wr.animationiteration.animation,
        delete Wr.animationstart.animation),
      `TransitionEvent` in window || delete Wr.transitionend.transition);
    function qr(e) {
      if (Gr[e]) return Gr[e];
      if (!Wr[e]) return e;
      var t = Wr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Kr) return (Gr[e] = t[n]);
      return e;
    }
    var Jr = qr(`animationend`),
      Yr = qr(`animationiteration`),
      Xr = qr(`animationstart`),
      Zr = qr(`transitionrun`),
      Qr = qr(`transitionstart`),
      $r = qr(`transitioncancel`),
      ei = qr(`transitionend`),
      ti = new Map(),
      ni =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ni.push(`scrollEnd`);
    function ri(e, t) {
      (ti.set(e, t), jt(t, [e]));
    }
    var ii =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      j = [],
      ai = 0,
      oi = 0;
    function si() {
      for (var e = ai, t = (oi = ai = 0); t < e; ) {
        var n = j[t];
        j[t++] = null;
        var r = j[t];
        j[t++] = null;
        var i = j[t];
        j[t++] = null;
        var a = j[t];
        if (((j[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && di(n, i, a);
      }
    }
    function ci(e, t, n, r) {
      ((j[ai++] = e),
        (j[ai++] = t),
        (j[ai++] = n),
        (j[ai++] = r),
        (oi |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function li(e, t, n, r) {
      return (ci(e, t, n, r), fi(e));
    }
    function ui(e, t) {
      return (ci(e, null, null, t), fi(e));
    }
    function di(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ke(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function fi(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(i(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var pi = {};
    function mi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function hi(e, t, n, r) {
      return new mi(e, t, n, r);
    }
    function gi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function _i(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = hi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function vi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function yi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) gi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, he.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case re:
            return (
              (e = hi(31, n, t, a)),
              (e.elementType = re),
              (e.lanes = o),
              e
            );
          case y:
            return bi(n.children, a, o, t);
          case b:
            ((s = 8), (a |= 24));
            break;
          case x:
            return (
              (e = hi(12, n, t, a | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            );
          case ee:
            return (
              (e = hi(13, n, t, a)),
              (e.elementType = ee),
              (e.lanes = o),
              e
            );
          case te:
            return (
              (e = hi(19, n, t, a)),
              (e.elementType = te),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case ne:
                  s = 14;
                  break a;
                case T:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = hi(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function bi(e, t, n, r) {
      return ((e = hi(7, e, r, t)), (e.lanes = n), e);
    }
    function xi(e, t, n) {
      return ((e = hi(6, e, null, t)), (e.lanes = n), e);
    }
    function Si(e) {
      var t = hi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function M(e, t, n) {
      return (
        (t = hi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ci = new WeakMap();
    function wi(e, t) {
      if (typeof e == `object` && e) {
        var n = Ci.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Oe(t) }), Ci.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Oe(t) };
    }
    var Ti = [],
      Ei = 0,
      Di = null,
      Oi = 0,
      ki = [],
      Ai = 0,
      ji = null,
      Mi = 1,
      Ni = ``;
    function Pi(e, t) {
      ((Ti[Ei++] = Oi), (Ti[Ei++] = Di), (Di = e), (Oi = t));
    }
    function Fi(e, t, n) {
      ((ki[Ai++] = Mi), (ki[Ai++] = Ni), (ki[Ai++] = ji), (ji = e));
      var r = Mi;
      e = Ni;
      var i = 32 - Ke(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ke(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Mi = (1 << (32 - Ke(t) + i)) | (n << i) | r),
          (Ni = a + e));
      } else ((Mi = (1 << a) | (n << i) | r), (Ni = e));
    }
    function Ii(e) {
      e.return !== null && (Pi(e, 1), Fi(e, 1, 0));
    }
    function Li(e) {
      for (; e === Di; )
        ((Di = Ti[--Ei]), (Ti[Ei] = null), (Oi = Ti[--Ei]), (Ti[Ei] = null));
      for (; e === ji; )
        ((ji = ki[--Ai]),
          (ki[Ai] = null),
          (Ni = ki[--Ai]),
          (ki[Ai] = null),
          (Mi = ki[--Ai]),
          (ki[Ai] = null));
    }
    function Ri(e, t) {
      ((ki[Ai++] = Mi),
        (ki[Ai++] = Ni),
        (ki[Ai++] = ji),
        (Mi = t.id),
        (Ni = t.overflow),
        (ji = e));
    }
    var zi = null,
      N = null,
      P = !1,
      Bi = null,
      Vi = !1,
      Hi = Error(i(519));
    function Ui(e) {
      throw (
        Yi(
          wi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Hi
      );
    }
    function Wi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[ht] = e), (t[gt] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Yt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), $t(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = cn),
            (t = !0))
          : (t = !1),
        t || Ui(e, !0));
    }
    function Gi(e) {
      for (zi = e.return; zi; )
        switch (zi.tag) {
          case 5:
          case 31:
          case 13:
            Vi = !1;
            return;
          case 27:
          case 3:
            Vi = !0;
            return;
          default:
            zi = zi.return;
        }
    }
    function Ki(e) {
      if (e !== zi) return !1;
      if (!P) return (Gi(e), (P = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && N && Ui(e),
        Gi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        N = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        N = uf(e);
      } else
        t === 27
          ? ((t = N), Zd(e.type) ? ((e = lf), (lf = null), (N = e)) : (N = t))
          : (N = zi ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function qi() {
      ((N = zi = null), (P = !1));
    }
    function Ji() {
      var e = Bi;
      return (
        e !== null &&
          (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (Bi = null)),
        e
      );
    }
    function Yi(e) {
      Bi === null ? (Bi = [e]) : Bi.push(e);
    }
    var Xi = pe(null),
      Zi = null,
      Qi = null;
    function $i(e, t, n) {
      (O(Xi, t._currentValue), (t._currentValue = n));
    }
    function ea(e) {
      ((e._currentValue = Xi.current), me(Xi));
    }
    function ta(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function na(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ta(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ta(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ra(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Ar(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === ve.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        a = a.return;
      }
      (e !== null && na(t, e, n, r), (t.flags |= 262144));
    }
    function ia(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ar(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function aa(e) {
      ((Zi = e),
        (Qi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function oa(e) {
      return ca(Zi, e);
    }
    function sa(e, t) {
      return (Zi === null && aa(e), ca(e, t));
    }
    function ca(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Qi === null)) {
        if (e === null) throw Error(i(308));
        ((Qi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else Qi = Qi.next = t;
      return n;
    }
    var la =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      ua = t.unstable_scheduleCallback,
      da = t.unstable_NormalPriority,
      fa = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function pa() {
      return { controller: new la(), data: new Map(), refCount: 0 };
    }
    function ma(e) {
      (e.refCount--,
        e.refCount === 0 &&
          ua(da, function () {
            e.controller.abort();
          }));
    }
    var ha = null,
      ga = 0,
      _a = 0,
      va = null;
    function ya(e, t) {
      if (ha === null) {
        var n = (ha = []);
        ((ga = 0),
          (_a = dd()),
          (va = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ga++, t.then(ba, ba), t);
    }
    function ba() {
      if (--ga === 0 && ha !== null) {
        va !== null && (va.status = `fulfilled`);
        var e = ha;
        ((ha = null), (_a = 0), (va = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function xa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Sa = E.S;
    E.S = function (e, t) {
      ((eu = Pe()),
        typeof t == `object` && t && typeof t.then == `function` && ya(e, t),
        Sa !== null && Sa(e, t));
    };
    var Ca = pe(null);
    function wa() {
      var e = Ca.current;
      return e === null ? q.pooledCache : e;
    }
    function Ta(e, t) {
      t === null ? O(Ca, Ca.current) : O(Ca, t.pool);
    }
    function Ea() {
      var e = wa();
      return e === null ? null : { parent: fa._currentValue, pool: e };
    }
    var Da = Error(i(460)),
      Oa = Error(i(474)),
      ka = Error(i(542)),
      Aa = { then: function () {} };
    function ja(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Ma(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Fa(e), e);
        default:
          if (typeof t.status == `string`) t.then(cn, cn);
          else {
            if (((e = q), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Fa(e), e);
          }
          throw ((Na = t), Da);
      }
    }
    function F(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Na = e), Da)
          : e;
      }
    }
    var Na = null;
    function Pa() {
      if (Na === null) throw Error(i(459));
      var e = Na;
      return ((Na = null), e);
    }
    function Fa(e) {
      if (e === Da || e === ka) throw Error(i(483));
    }
    var Ia = null,
      La = 0;
    function Ra(e) {
      var t = La;
      return ((La += 1), Ia === null && (Ia = []), Ma(Ia, e, t));
    }
    function za(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Ba(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Va(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = _i(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = xi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === T &&
                  F(i) === t.type))
            ? ((t = a(t, n.props)), za(t, n), (t.return = e), t)
            : ((t = yi(n.type, n.key, n.props, null, e.mode, r)),
              za(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = M(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = bi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = xi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = yi(t.type, t.key, t.props, null, e.mode, n)),
                za(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = M(t, e.mode, n)), (t.return = e), t);
            case T:
              return ((t = F(t)), f(e, t, n));
          }
          if (le(t) || oe(t))
            return ((t = bi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Ra(t), n);
          if (t.$$typeof === C) return f(e, sa(e, t), n);
          Ba(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case T:
              return ((n = F(n)), p(e, t, n, r));
          }
          if (le(n) || oe(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Ra(n), r);
          if (n.$$typeof === C) return p(e, t, sa(e, n), r);
          Ba(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case T:
              return ((r = F(r)), m(e, t, n, r, i));
          }
          if (le(r) || oe(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Ra(r), i);
          if (r.$$typeof === C) return m(e, t, n, sa(t, r), i);
          Ba(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), P && Pi(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (P && Pi(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          P && Pi(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), P && Pi(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (P && Pi(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          P && Pi(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === T &&
                        F(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        za(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = bi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = yi(o.type, o.key, o.props, null, e.mode, c)),
                    za(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = M(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case T:
              return ((o = F(o)), b(e, r, o, c));
          }
          if (le(o)) return h(e, r, o, c);
          if (oe(o)) {
            if (((l = oe(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, Ra(o), c);
          if (o.$$typeof === C) return b(e, r, sa(e, o), c);
          Ba(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = xi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          La = 0;
          var i = b(e, t, n, r);
          return ((Ia = null), i);
        } catch (t) {
          if (t === Da || t === ka) throw t;
          var a = hi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ha = Va(!0),
      Ua = Va(!1),
      Wa = !1;
    function Ga(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ka(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function qa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ja(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = fi(e)),
          di(e, null, n),
          t
        );
      }
      return (ci(e, r, t, n), fi(e));
    }
    function Ya(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ct(e, n));
      }
    }
    function Xa(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Za = !1;
    function Qa() {
      if (Za) {
        var e = va;
        if (e !== null) throw e;
      }
    }
    function $a(e, t, n, r) {
      Za = !1;
      var i = e.updateQueue;
      Wa = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (Y & f) === f : (r & f) === f) {
            (f !== 0 && f === _a && (Za = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var h = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, f);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = g.payload),
                    (f = typeof h == `function` ? h.call(_, d, f) : h),
                    f == null)
                  )
                    break a;
                  d = m({}, d, f);
                  break a;
                case 2:
                  Wa = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function eo(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function to(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) eo(n[e], t);
    }
    var no = pe(null),
      ro = pe(0);
    function io(e, t) {
      ((e = Ul), O(ro, e), O(no, t), (Ul = e | t.baseLanes));
    }
    function ao() {
      (O(ro, Ul), O(no, no.current));
    }
    function oo() {
      ((Ul = ro.current), me(no), me(ro));
    }
    var so = pe(null),
      co = null;
    function lo(e) {
      var t = e.alternate;
      (O(ho, ho.current & 1),
        O(so, e),
        co === null &&
          (t === null || no.current !== null || t.memoizedState !== null) &&
          (co = e));
    }
    function uo(e) {
      (O(ho, ho.current), O(so, e), co === null && (co = e));
    }
    function fo(e) {
      e.tag === 22
        ? (O(ho, ho.current), O(so, e), co === null && (co = e))
        : po(e);
    }
    function po() {
      (O(ho, ho.current), O(so, so.current));
    }
    function mo(e) {
      (me(so), co === e && (co = null), me(ho));
    }
    var ho = pe(0);
    function go(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var _o = 0,
      I = null,
      L = null,
      vo = null,
      yo = !1,
      bo = !1,
      xo = !1,
      So = 0,
      Co = 0,
      wo = null,
      To = 0;
    function R() {
      throw Error(i(321));
    }
    function Eo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ar(e[n], t[n])) return !1;
      return !0;
    }
    function Do(e, t, n, r, i, a) {
      return (
        (_o = a),
        (I = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (E.H = e === null || e.memoizedState === null ? Hs : Us),
        (xo = !1),
        (a = n(r, i)),
        (xo = !1),
        bo && (a = ko(t, n, r, i)),
        Oo(e),
        a
      );
    }
    function Oo(e) {
      E.H = Vs;
      var t = L !== null && L.next !== null;
      if (((_o = 0), (vo = L = I = null), (yo = !1), (Co = 0), (wo = null), t))
        throw Error(i(300));
      e === null ||
        oc ||
        ((e = e.dependencies), e !== null && ia(e) && (oc = !0));
    }
    function ko(e, t, n, r) {
      I = e;
      var a = 0;
      do {
        if ((bo && (wo = null), (Co = 0), (bo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (vo = L = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((E.H = Ws), (o = t(n, r)));
      } while (bo);
      return o;
    }
    function Ao() {
      var e = E.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Lo(t) : t),
        (e = e.useState()[0]),
        (L === null ? null : L.memoizedState) !== e && (I.flags |= 1024),
        t
      );
    }
    function jo() {
      var e = So !== 0;
      return ((So = 0), e);
    }
    function Mo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function No(e) {
      if (yo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        yo = !1;
      }
      ((_o = 0), (vo = L = I = null), (bo = !1), (Co = So = 0), (wo = null));
    }
    function Po() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        vo === null ? (I.memoizedState = vo = e) : (vo = vo.next = e),
        vo
      );
    }
    function Fo() {
      if (L === null) {
        var e = I.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = L.next;
      var t = vo === null ? I.memoizedState : vo.next;
      if (t !== null) ((vo = t), (L = e));
      else {
        if (e === null)
          throw I.alternate === null ? Error(i(467)) : Error(i(310));
        ((L = e),
          (e = {
            memoizedState: L.memoizedState,
            baseState: L.baseState,
            baseQueue: L.baseQueue,
            queue: L.queue,
            next: null,
          }),
          vo === null ? (I.memoizedState = vo = e) : (vo = vo.next = e));
      }
      return vo;
    }
    function Io() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Lo(e) {
      var t = Co;
      return (
        (Co += 1),
        wo === null && (wo = []),
        (e = Ma(wo, e, t)),
        (t = I),
        (vo === null ? t.memoizedState : vo.next) === null &&
          ((t = t.alternate),
          (E.H = t === null || t.memoizedState === null ? Hs : Us)),
        e
      );
    }
    function Ro(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Lo(e);
        if (e.$$typeof === C) return oa(e);
      }
      throw Error(i(438, String(e)));
    }
    function zo(e) {
      var t = null,
        n = I.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = I.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Io()), (I.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ie;
      return (t.index++, n);
    }
    function Bo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Vo(e) {
      return z(Fo(), L, e);
    }
    function z(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (_o & f) === f : (Y & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === _a && (d = !0));
            else if ((_o & p) === p) {
              ((u = u.next), p === _a && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (I.lanes |= p),
                (Gl |= p));
            ((f = u.action),
              xo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (I.lanes |= f),
              (Gl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Ar(o, e.memoizedState) && ((oc = !0), d && ((n = va), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Ho(e) {
      var t = Fo(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Ar(o, t.memoizedState) || (oc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Uo(e, t, n) {
      var r = I,
        a = Fo(),
        o = P;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Ar((L || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (oc = !0)),
        (a = a.queue),
        ps(Ko.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (vo !== null && vo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          cs(9, { destroy: void 0 }, Go.bind(null, r, a, n, t), null),
          q === null)
        )
          throw Error(i(349));
        o || _o & 127 || Wo(r, t, n);
      }
      return n;
    }
    function Wo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = I.updateQueue),
        t === null
          ? ((t = Io()), (I.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Go(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), qo(t) && Jo(e));
    }
    function Ko(e, t, n) {
      return n(function () {
        qo(t) && Jo(e);
      });
    }
    function qo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Ar(e, n);
      } catch {
        return !0;
      }
    }
    function Jo(e) {
      var t = ui(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Yo(e) {
      var t = Po();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), xo)) {
          Ge(!0);
          try {
            n();
          } finally {
            Ge(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Xo(e, t, n, r) {
      return ((e.baseState = n), z(e, L, typeof r == `function` ? r : Bo));
    }
    function Zo(e, t, n, r, a) {
      if (Rs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (E.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Qo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Qo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = E.T,
          o = {};
        E.T = o;
        try {
          var s = n(i, r),
            c = E.S;
          (c !== null && c(o, s), $o(e, t, s));
        } catch (n) {
          ts(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (E.T = a));
        }
      } else
        try {
          ((a = n(i, r)), $o(e, t, a));
        } catch (n) {
          ts(e, t, n);
        }
    }
    function $o(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              es(e, t, n);
            },
            function (n) {
              return ts(e, t, n);
            },
          )
        : es(e, t, n);
    }
    function es(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        ns(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Qo(e, n))));
    }
    function ts(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), ns(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function ns(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function rs(e, t) {
      return t;
    }
    function is(e, t) {
      if (P) {
        var n = q.formState;
        if (n !== null) {
          a: {
            var r = I;
            if (P) {
              if (N) {
                b: {
                  for (var i = N, a = Vi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((N = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Ui(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Po()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rs,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Fs.bind(null, I, r)),
        (r.dispatch = n),
        (r = Yo(!1)),
        (a = Ls.bind(null, I, !1, r.queue)),
        (r = Po()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Zo.bind(null, I, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function B(e) {
      return as(Fo(), L, e);
    }
    function as(e, t, n) {
      if (
        ((t = z(e, t, rs)[0]),
        (e = Vo(Bo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Lo(t);
        } catch (e) {
          throw e === Da ? ka : e;
        }
      else r = t;
      t = Fo();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((I.flags |= 2048),
          cs(9, { destroy: void 0 }, os.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function os(e, t) {
      e.action = t;
    }
    function ss(e) {
      var t = Fo(),
        n = L;
      if (n !== null) return as(t, n, e);
      (Fo(), (t = t.memoizedState), (n = Fo()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function cs(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = I.updateQueue),
        t === null && ((t = Io()), (I.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ls() {
      return Fo().memoizedState;
    }
    function us(e, t, n, r) {
      var i = Po();
      ((I.flags |= e),
        (i.memoizedState = cs(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function ds(e, t, n, r) {
      var i = Fo();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      L !== null && r !== null && Eo(r, L.memoizedState.deps)
        ? (i.memoizedState = cs(t, a, n, r))
        : ((I.flags |= e), (i.memoizedState = cs(1 | t, a, n, r)));
    }
    function fs(e, t) {
      us(8390656, 8, e, t);
    }
    function ps(e, t) {
      ds(2048, 8, e, t);
    }
    function ms(e) {
      I.flags |= 4;
      var t = I.updateQueue;
      if (t === null) ((t = Io()), (I.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function hs(e) {
      var t = Fo().memoizedState;
      return (
        ms({ ref: t, nextImpl: e }),
        function () {
          if (K & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function gs(e, t) {
      return ds(4, 2, e, t);
    }
    function _s(e, t) {
      return ds(4, 4, e, t);
    }
    function vs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ys(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        ds(4, 4, vs.bind(null, t, e), n));
    }
    function bs() {}
    function xs(e, t) {
      var n = Fo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && Eo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ss(e, t) {
      var n = Fo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && Eo(t, r[1])) return r[0];
      if (((r = e()), xo)) {
        Ge(!0);
        try {
          e();
        } finally {
          Ge(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Cs(e, t, n) {
      return n === void 0 || (_o & 1073741824 && !(Y & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (I.lanes |= e), (Gl |= e), n);
    }
    function ws(e, t, n, r) {
      return Ar(n, t)
        ? n
        : no.current === null
          ? !(_o & 42) || (_o & 1073741824 && !(Y & 261930))
            ? ((oc = !0), (e.memoizedState = n))
            : ((e = mu()), (I.lanes |= e), (Gl |= e), t)
          : ((e = Cs(e, n, r)), Ar(e, t) || (oc = !0), e);
    }
    function Ts(e, t, n, r, i) {
      var a = D.p;
      D.p = a !== 0 && 8 > a ? a : 8;
      var o = E.T,
        s = {};
      ((E.T = s), Ls(e, !1, t, n));
      try {
        var c = i(),
          l = E.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Is(e, t, xa(c, r), pu(e))
            : Is(e, t, r, pu(e)));
      } catch (n) {
        Is(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        ((D.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (E.T = o));
      }
    }
    function Es() {}
    function Ds(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = Os(e).queue;
      Ts(
        e,
        a,
        t,
        ue,
        n === null
          ? Es
          : function () {
              return (ks(e), n(r));
            },
      );
    }
    function Os(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ue,
        baseState: ue,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bo,
          lastRenderedState: ue,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Bo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function ks(e) {
      var t = Os(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Is(e, t.next.queue, {}, pu()));
    }
    function As() {
      return oa(Qf);
    }
    function js() {
      return Fo().memoizedState;
    }
    function Ms() {
      return Fo().memoizedState;
    }
    function Ns(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = qa(n);
            var r = Ja(t, e, n);
            (r !== null && (hu(r, t, n), Ya(r, t, n)),
              (t = { cache: pa() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ps(e, t, n) {
      var r = pu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Rs(e)
          ? zs(t, n)
          : ((n = li(e, t, n, r)), n !== null && (hu(n, e, r), Bs(n, t, r))));
    }
    function Fs(e, t, n) {
      Is(e, t, n, pu());
    }
    function Is(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Rs(e)) zs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Ar(s, o)))
              return (ci(e, t, i, 0), q === null && si(), !1);
          } catch {}
        if (((n = li(e, t, i, r)), n !== null))
          return (hu(n, e, r), Bs(n, t, r), !0);
      }
      return !1;
    }
    function Ls(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Rs(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = li(e, n, r, 2)), t !== null && hu(t, e, 2));
    }
    function Rs(e) {
      var t = e.alternate;
      return e === I || (t !== null && t === I);
    }
    function zs(e, t) {
      bo = yo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function Bs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ct(e, n));
      }
    }
    var Vs = {
      readContext: oa,
      use: Ro,
      useCallback: R,
      useContext: R,
      useEffect: R,
      useImperativeHandle: R,
      useLayoutEffect: R,
      useInsertionEffect: R,
      useMemo: R,
      useReducer: R,
      useRef: R,
      useState: R,
      useDebugValue: R,
      useDeferredValue: R,
      useTransition: R,
      useSyncExternalStore: R,
      useId: R,
      useHostTransitionStatus: R,
      useFormState: R,
      useActionState: R,
      useOptimistic: R,
      useMemoCache: R,
      useCacheRefresh: R,
    };
    Vs.useEffectEvent = R;
    var Hs = {
        readContext: oa,
        use: Ro,
        useCallback: function (e, t) {
          return ((Po().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: oa,
        useEffect: fs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            us(4194308, 4, vs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return us(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          us(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Po();
          t = t === void 0 ? null : t;
          var r = e();
          if (xo) {
            Ge(!0);
            try {
              e();
            } finally {
              Ge(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Po();
          if (n !== void 0) {
            var i = n(t);
            if (xo) {
              Ge(!0);
              try {
                n(t);
              } finally {
                Ge(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ps.bind(null, I, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Po();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Yo(e);
          var t = e.queue,
            n = Fs.bind(null, I, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return Cs(Po(), e, t);
        },
        useTransition: function () {
          var e = Yo(!1);
          return (
            (e = Ts.bind(null, I, e.queue, !0, !1)),
            (Po().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = I,
            a = Po();
          if (P) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), q === null)) throw Error(i(349));
            Y & 127 || Wo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            fs(Ko.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            cs(9, { destroy: void 0 }, Go.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Po(),
            t = q.identifierPrefix;
          if (P) {
            var n = Ni,
              r = Mi;
            ((n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = So++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = To++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: As,
        useFormState: is,
        useActionState: is,
        useOptimistic: function (e) {
          var t = Po();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ls.bind(null, I, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: zo,
        useCacheRefresh: function () {
          return (Po().memoizedState = Ns.bind(null, I));
        },
        useEffectEvent: function (e) {
          var t = Po(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (K & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Us = {
        readContext: oa,
        use: Ro,
        useCallback: xs,
        useContext: oa,
        useEffect: ps,
        useImperativeHandle: ys,
        useInsertionEffect: gs,
        useLayoutEffect: _s,
        useMemo: Ss,
        useReducer: Vo,
        useRef: ls,
        useState: function () {
          return Vo(Bo);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return ws(Fo(), L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Vo(Bo)[0],
            t = Fo().memoizedState;
          return [typeof e == `boolean` ? e : Lo(e), t];
        },
        useSyncExternalStore: Uo,
        useId: js,
        useHostTransitionStatus: As,
        useFormState: B,
        useActionState: B,
        useOptimistic: function (e, t) {
          return Xo(Fo(), L, e, t);
        },
        useMemoCache: zo,
        useCacheRefresh: Ms,
      };
    Us.useEffectEvent = hs;
    var Ws = {
      readContext: oa,
      use: Ro,
      useCallback: xs,
      useContext: oa,
      useEffect: ps,
      useImperativeHandle: ys,
      useInsertionEffect: gs,
      useLayoutEffect: _s,
      useMemo: Ss,
      useReducer: Ho,
      useRef: ls,
      useState: function () {
        return Ho(Bo);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = Fo();
        return L === null ? Cs(n, e, t) : ws(n, L.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ho(Bo)[0],
          t = Fo().memoizedState;
        return [typeof e == `boolean` ? e : Lo(e), t];
      },
      useSyncExternalStore: Uo,
      useId: js,
      useHostTransitionStatus: As,
      useFormState: ss,
      useActionState: ss,
      useOptimistic: function (e, t) {
        var n = Fo();
        return L === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Xo(n, L, e, t);
      },
      useMemoCache: zo,
      useCacheRefresh: Ms,
    };
    Ws.useEffectEvent = hs;
    function Gs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : m({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ks = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = qa(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Ja(e, i, r)),
          t !== null && (hu(t, e, r), Ya(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = qa(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ja(e, i, r)),
          t !== null && (hu(t, e, r), Ya(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = qa(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ja(e, r, n)),
          t !== null && (hu(t, e, n), Ya(t, e, n)));
      },
    };
    function qs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !jr(n, r) || !jr(i, a)
            : !0
      );
    }
    function Js(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ks.enqueueReplaceState(t, t.state, null));
    }
    function Ys(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = m({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Xs(e) {
      ii(e);
    }
    function Zs(e) {
      console.error(e);
    }
    function Qs(e) {
      ii(e);
    }
    function $s(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ec(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function tc(e, t, n) {
      return (
        (n = qa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          $s(e, t);
        }),
        n
      );
    }
    function nc(e) {
      return ((e = qa(e)), (e.tag = 3), e);
    }
    function rc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            ec(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (ec(t, n, r),
            typeof i != `function` &&
              (ru === null ? (ru = new Set([this])) : ru.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function ic(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && ra(t, n, a, !0),
          (n = so.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                co === null
                  ? Du()
                  : n.alternate === null && Wl === 0 && (Wl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Gu(e, r, a), Du(), !1);
      }
      if (P)
        return (
          (t = so.current),
          t === null
            ? (r !== Hi && ((t = Error(i(423), { cause: r })), Yi(wi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = wi(r, n)),
              (a = tc(e.stateNode, r, a)),
              Xa(e, a),
              Wl !== 4 && (Wl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Hi && ((e = Error(i(422), { cause: r })), Yi(wi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = wi(o, n)),
        Xl === null ? (Xl = [o]) : Xl.push(o),
        Wl !== 4 && (Wl = 2),
        t === null)
      )
        return !0;
      ((r = wi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = tc(n.stateNode, r, e)),
              Xa(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (ru === null || !ru.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = nc(a)),
                rc(a, e, n, r),
                Xa(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var ac = Error(i(461)),
      oc = !1;
    function sc(e, t, n, r) {
      t.child = e === null ? Ua(t, null, n, r) : Ha(t, e.child, n, r);
    }
    function cc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        aa(t),
        (r = Do(e, t, n, o, a, i)),
        (s = jo()),
        e !== null && !oc
          ? (Mo(e, t, i), V(e, t, i))
          : (P && s && Ii(t), (t.flags |= 1), sc(e, t, r, i), t.child)
      );
    }
    function lc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !gi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), uc(e, t, a, r, i))
          : ((e = yi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !H(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? jr : n),
          n(o, r) && e.ref === t.ref)
        )
          return V(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = _i(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function uc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (jr(a, r) && e.ref === t.ref)
          if (((oc = !1), (t.pendingProps = r = a), H(e, i)))
            e.flags & 131072 && (oc = !0);
          else return ((t.lanes = e.lanes), V(e, t, i));
      }
      return vc(e, t, n, r, i);
    }
    function dc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return pc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ta(t, a === null ? null : a.cachePool),
            a === null ? ao() : io(t, a),
            fo(t));
        else
          return (
            (r = t.lanes = 536870912),
            pc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Ta(t, null), ao(), po(t))
          : (Ta(t, a.cachePool), io(t, a), po(t), (t.memoizedState = null));
      return (sc(e, t, i, n), t.child);
    }
    function fc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function pc(e, t, n, r, i) {
      var a = wa();
      return (
        (a = a === null ? null : { parent: fa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ta(t, null),
        ao(),
        fo(t),
        e !== null && ra(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function mc(e, t) {
      return (
        (t = Dc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function hc(e, t, n) {
      return (
        Ha(t, e.child, null, n),
        (e = mc(t, t.pendingProps)),
        (e.flags |= 2),
        mo(t),
        (t.memoizedState = null),
        e
      );
    }
    function gc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (P) {
          if (r.mode === `hidden`)
            return ((e = mc(t, r)), (t.lanes = 536870912), fc(null, e));
          if (
            (uo(t),
            (e = N)
              ? ((e = rf(e, Vi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ji === null ? null : { id: Mi, overflow: Ni },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Si(e)),
                  (n.return = t),
                  (t.child = n),
                  (zi = t),
                  (N = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t);
          return ((t.lanes = 536870912), null);
        }
        return mc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((uo(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = hc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if (
          (oc || ra(e, t, n, !1), (a = (n & e.childLanes) !== 0), oc || a)
        ) {
          if (
            ((r = q),
            r !== null && ((s = lt(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), ui(e, s), hu(r, e, s), ac);
          (Du(), (t = hc(e, t, n)));
        } else
          ((e = o.treeContext),
            (N = cf(s.nextSibling)),
            (zi = t),
            (P = !0),
            (Bi = null),
            (Vi = !1),
            e !== null && Ri(t, e),
            (t = mc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = _i(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function _c(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function vc(e, t, n, r, i) {
      return (
        aa(t),
        (n = Do(e, t, n, r, void 0, i)),
        (r = jo()),
        e !== null && !oc
          ? (Mo(e, t, i), V(e, t, i))
          : (P && r && Ii(t), (t.flags |= 1), sc(e, t, n, i), t.child)
      );
    }
    function yc(e, t, n, r, i, a) {
      return (
        aa(t),
        (t.updateQueue = null),
        (n = ko(t, r, n, i)),
        Oo(e),
        (r = jo()),
        e !== null && !oc
          ? (Mo(e, t, a), V(e, t, a))
          : (P && r && Ii(t), (t.flags |= 1), sc(e, t, n, a), t.child)
      );
    }
    function bc(e, t, n, r, i) {
      if ((aa(t), t.stateNode === null)) {
        var a = pi,
          o = n.contextType;
        (typeof o == `object` && o && (a = oa(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ks),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ga(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? oa(o) : pi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Gs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Ks.enqueueReplaceState(a, a.state, null),
            $a(t, r, a, i),
            Qa(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Ys(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = pi), typeof u == `object` && u && (o = oa(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Js(t, a, r, o)),
          (Wa = !1));
        var f = t.memoizedState;
        ((a.state = f),
          $a(t, r, a, i),
          Qa(),
          (l = t.memoizedState),
          s || f !== l || Wa
            ? (typeof d == `function` &&
                (Gs(t, n, d, r), (l = t.memoizedState)),
              (c = Wa || qs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          Ka(e, t),
          (o = t.memoizedProps),
          (u = Ys(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = pi),
          typeof l == `object` && l && (c = oa(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Js(t, a, r, c)),
          (Wa = !1),
          (f = t.memoizedState),
          (a.state = f),
          $a(t, r, a, i),
          Qa());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Wa ||
        (e !== null && e.dependencies !== null && ia(e.dependencies))
          ? (typeof s == `function` && (Gs(t, n, s, r), (p = t.memoizedState)),
            (u =
              Wa ||
              qs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && ia(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        _c(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ha(t, e.child, null, i)),
                (t.child = Ha(t, null, n, i)))
              : sc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = V(e, t, i)),
        e
      );
    }
    function xc(e, t, n, r) {
      return (qi(), (t.flags |= 256), sc(e, t, n, r), t.child);
    }
    var Sc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Cc(e) {
      return { baseLanes: e, cachePool: Ea() };
    }
    function wc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e);
    }
    function Tc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null
              ? !1
              : (ho.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (P) {
          if (
            (a ? lo(t) : po(t),
            (e = N)
              ? ((e = rf(e, Vi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ji === null ? null : { id: Mi, overflow: Ni },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Si(e)),
                  (n.return = t),
                  (t.child = n),
                  (zi = t),
                  (N = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (po(t),
              (a = t.mode),
              (c = Dc({ mode: `hidden`, children: c }, a)),
              (r = bi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Cc(n)),
              (r.childLanes = wc(e, s, n)),
              (t.memoizedState = Sc),
              fc(null, r))
            : (lo(t), Ec(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (lo(t), (t.flags &= -257), (t = Oc(e, t, n)))
            : t.memoizedState === null
              ? (po(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Dc({ mode: `visible`, children: r.children }, a)),
                (c = bi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ha(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Cc(n)),
                (r.childLanes = wc(e, s, n)),
                (t.memoizedState = Sc),
                (t = fc(null, r)))
              : (po(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((lo(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Yi({ value: r, source: null, stack: null }),
            (t = Oc(e, t, n)));
        } else if (
          (oc || ra(e, t, n, !1), (s = (n & e.childLanes) !== 0), oc || s)
        ) {
          if (
            ((s = q),
            s !== null && ((r = lt(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), ui(e, r), hu(s, e, r), ac);
          (af(c) || Du(), (t = Oc(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (N = cf(c.nextSibling)),
              (zi = t),
              (P = !0),
              (Bi = null),
              (Vi = !1),
              e !== null && Ri(t, e),
              (t = Ec(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (po(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = _i(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = bi(c, a, n, null)), (c.flags |= 2))
            : (c = _i(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          fc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Cc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Ea())
                : ((l = fa._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = wc(e, s, n)),
          (t.memoizedState = Sc),
          fc(e.child, r))
        : (lo(t),
          (n = e.child),
          (e = n.sibling),
          (n = _i(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Ec(e, t) {
      return (
        (t = Dc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Dc(e, t) {
      return ((e = hi(22, e, null, t)), (e.lanes = 0), e);
    }
    function Oc(e, t, n) {
      return (
        Ha(t, e.child, null, n),
        (e = Ec(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function kc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ta(e.return, t, n));
    }
    function Ac(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function jc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = ho.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        O(ho, o),
        sc(e, t, r, n),
        (r = P ? Oi : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
          else if (e.tag === 19) kc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate),
              e !== null && go(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Ac(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && go(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Ac(t, !0, n, null, a, r);
          break;
        case `together`:
          Ac(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function V(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Gl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ra(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = _i(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = _i(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function H(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && ia(e)))
        : !0;
    }
    function Mc(e, t, n) {
      switch (t.tag) {
        case 3:
          (ye(t, t.stateNode.containerInfo),
            $i(t, fa, e.memoizedState.cache),
            qi());
          break;
        case 27:
        case 5:
          xe(t);
          break;
        case 4:
          ye(t, t.stateNode.containerInfo);
          break;
        case 10:
          $i(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), uo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (lo(t), (e = V(e, t, n)), e === null ? null : e.sibling)
                : Tc(e, t, n)
              : (lo(t), (t.flags |= 128), null);
          lo(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (ra(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return jc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            O(ho, ho.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), dc(e, t, n, t.pendingProps));
        case 24:
          $i(t, fa, e.memoizedState.cache);
      }
      return V(e, t, n);
    }
    function Nc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) oc = !0;
        else {
          if (!H(e, n) && !(t.flags & 128)) return ((oc = !1), Mc(e, t, n));
          oc = !!(e.flags & 131072);
        }
      else ((oc = !1), P && t.flags & 1048576 && Fi(t, Oi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = F(t.elementType)), (t.type = e), typeof e == `function`))
              gi(e)
                ? ((r = Ys(e, r)), (t.tag = 1), (t = bc(null, t, e, r, n)))
                : ((t.tag = 0), (t = vc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  ((t.tag = 11), (t = cc(null, t, e, r, n)));
                  break a;
                } else if (a === ne) {
                  ((t.tag = 14), (t = lc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = ce(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return vc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Ys(r, t.pendingProps)), bc(e, t, r, a, n));
        case 3:
          a: {
            if ((ye(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), Ka(e, t), $a(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              $i(t, fa, r),
              r !== o.cache && na(t, [fa], n, !0),
              Qa(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = xc(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = wi(Error(i(424)), t)), Yi(a), (t = xc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  N = cf(e.firstChild),
                    zi = t,
                    P = !0,
                    Bi = null,
                    Vi = !0,
                    n = Ua(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((qi(), r === a)) {
                t = V(e, t, n);
                break a;
              }
              sc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            _c(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : P ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(_e.current).createElement(n)),
                  (r[ht] = t),
                  (r[gt] = e),
                  Pd(r, n, e),
                  Ot(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            xe(t),
            e === null &&
              P &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, _e.current)),
              (zi = t),
              (Vi = !0),
              (a = N),
              Zd(t.type) ? ((lf = a), (N = cf(r.firstChild))) : (N = a)),
            sc(e, t, t.pendingProps.children, n),
            _c(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              P &&
              ((a = r = N) &&
                ((r = tf(r, t.type, t.pendingProps, Vi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (zi = t),
                    (N = cf(r.firstChild)),
                    (Vi = !1),
                    (a = !0))),
              a || Ui(t)),
            xe(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = Do(e, t, Ao, null, null, n)), (Qf._currentValue = a)),
            _c(e, t),
            sc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              P &&
              ((e = n = N) &&
                ((n = nf(n, t.pendingProps, Vi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (zi = t), (N = null), (e = !0))),
              e || Ui(t)),
            null
          );
        case 13:
          return Tc(e, t, n);
        case 4:
          return (
            ye(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ha(t, null, r, n)) : sc(e, t, r, n),
            t.child
          );
        case 11:
          return cc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (sc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (sc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (sc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            $i(t, t.type, r.value),
            sc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            aa(t),
            (a = oa(a)),
            (r = r(a)),
            (t.flags |= 1),
            sc(e, t, r, n),
            t.child
          );
        case 14:
          return lc(e, t, t.type, t.pendingProps, n);
        case 15:
          return uc(e, t, t.type, t.pendingProps, n);
        case 19:
          return jc(e, t, n);
        case 31:
          return gc(e, t, n);
        case 22:
          return dc(e, t, n, t.pendingProps);
        case 24:
          return (
            aa(t),
            (r = oa(fa)),
            e === null
              ? ((a = wa()),
                a === null &&
                  ((a = q),
                  (o = pa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ga(t),
                $i(t, fa, a))
              : ((e.lanes & n) !== 0 && (Ka(e, t), $a(t, null, null, n), Qa()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    $i(t, fa, r),
                    r !== a.cache && na(t, [fa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    $i(t, fa, r))),
            sc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Pc(e) {
      e.flags |= 4;
    }
    function Fc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((Na = Aa), Oa);
      } else e.flags &= -16777217;
    }
    function Ic(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (wu()) e.flags |= 8192;
        else throw ((Na = Aa), Oa);
    }
    function Lc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : rt()), (e.lanes |= t), (Yl |= t)));
    }
    function Rc(e, t) {
      if (!P)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function U(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function zc(e, t, n) {
      var r = t.pendingProps;
      switch ((Li(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (U(t), null);
        case 1:
          return (U(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ea(fa),
            be(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ki(t)
                ? Pc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ji())),
            U(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Pc(t),
                o === null ? (U(t), Fc(t, a, null, r, n)) : (U(t), Ic(t, o)))
              : o
                ? o === e.memoizedState
                  ? (U(t), (t.flags &= -16777217))
                  : (Pc(t), U(t), Ic(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Pc(t),
                  U(t),
                  Fc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (k(t),
            (n = _e.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (U(t), null);
            }
            ((e = he.current),
              Ki(t) ? Wi(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), Pc(t)));
          }
          return (U(t), null);
        case 5:
          if ((k(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (U(t), null);
            }
            if (((o = he.current), Ki(t))) Wi(t, o);
            else {
              var s = Bd(_e.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[ht] = t), (o[gt] = r));
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Pc(t);
            }
          }
          return (
            U(t),
            Fc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Pc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = _e.current), Ki(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = zi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[ht] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Ui(t, !0));
            } else
              ((e = Bd(e).createTextNode(r)), (e[ht] = t), (t.stateNode = e));
          }
          return (U(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ki(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[ht] = t;
              } else
                (qi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (U(t), (e = !1));
            } else
              ((n = Ji()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (mo(t), t) : (mo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (U(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ki(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[ht] = t;
              } else
                (qi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (U(t), (a = !1));
            } else
              ((a = Ji()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (mo(t), t) : (mo(t), null);
          }
          return (
            mo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Lc(t, t.updateQueue),
                U(t),
                null)
          );
        case 4:
          return (
            be(),
            e === null && Sd(t.stateNode.containerInfo),
            U(t),
            null
          );
        case 10:
          return (ea(t.type), U(t), null);
        case 19:
          if ((me(ho), (r = t.memoizedState), r === null)) return (U(t), null);
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Rc(r, !1);
            else {
              if (Wl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = go(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Rc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Lc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (vi(n, e), (n = n.sibling));
                    return (
                      O(ho, (ho.current & 1) | 2),
                      P && Pi(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Pe() > tu &&
                ((t.flags |= 128), (a = !0), Rc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = go(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Lc(t, e),
                  Rc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !P)
                )
                  return (U(t), null);
              } else
                2 * Pe() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Rc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (U(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Pe()),
              (e.sibling = null),
              (n = ho.current),
              O(ho, a ? (n & 1) | 2 : n & 1),
              P && Pi(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            mo(t),
            oo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (U(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : U(t),
            (n = t.updateQueue),
            n !== null && Lc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && me(Ca),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ea(fa),
            U(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Bc(e, t) {
      switch ((Li(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            ea(fa),
            be(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (k(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((mo(t), t.alternate === null)) throw Error(i(340));
            qi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (mo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            qi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (me(ho), null);
        case 4:
          return (be(), null);
        case 10:
          return (ea(t.type), null);
        case 22:
        case 23:
          return (
            mo(t),
            oo(),
            e !== null && me(Ca),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (ea(fa), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Vc(e, t) {
      switch ((Li(t), t.tag)) {
        case 3:
          (ea(fa), be());
          break;
        case 26:
        case 27:
        case 5:
          k(t);
          break;
        case 4:
          be();
          break;
        case 31:
          t.memoizedState !== null && mo(t);
          break;
        case 13:
          mo(t);
          break;
        case 19:
          me(ho);
          break;
        case 10:
          ea(t.type);
          break;
        case 22:
        case 23:
          (mo(t), oo(), e !== null && me(Ca));
          break;
        case 24:
          ea(fa);
      }
    }
    function Hc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Uc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Wc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          to(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Gc(e, t, n) {
      ((n.props = Ys(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Kc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function qc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Jc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Yc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[gt] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Xc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      );
    }
    function Zc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Xc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = cn)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null; )
          (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for ($c(e, t, n), e = e.sibling; e !== null; )
          ($c(e, t, n), (e = e.sibling));
    }
    function el(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[ht] = e), (t[gt] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var tl = !1,
      nl = !1,
      rl = !1,
      il = typeof WeakSet == `function` ? WeakSet : Set,
      al = null;
    function ol(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Fr(e)), Ir(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        zd = { focusedElem: e, selectionRange: n }, sp = !1, al = t;
        al !== null;
      )
        if (((t = al), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (al = e));
        else
          for (; al !== null; ) {
            switch (((t = al), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Ys(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (al = e));
              break;
            }
            al = t.return;
          }
    }
    function sl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (bl(e, n), r & 4 && Hc(5, n));
          break;
        case 1:
          if ((bl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Ys(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          (r & 64 && Wc(n), r & 512 && Kc(n, n.return));
          break;
        case 3:
          if ((bl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              to(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && el(n);
        case 26:
        case 5:
          (bl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return));
          break;
        case 12:
          bl(e, n);
          break;
        case 31:
          (bl(e, n), r & 4 && dl(e, n));
          break;
        case 13:
          (bl(e, n),
            r & 4 && fl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || tl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || nl), (i = tl));
            var a = nl;
            ((tl = r),
              (nl = t) && !a
                ? Sl(e, n, (n.subtreeFlags & 8772) != 0)
                : bl(e, n),
              (tl = i),
              (nl = a));
          }
          break;
        case 30:
          break;
        default:
          bl(e, n);
      }
    }
    function cl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), cl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Ct(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var W = null,
      G = !1;
    function ll(e, t, n) {
      for (n = n.child; n !== null; ) (ul(e, t, n), (n = n.sibling));
    }
    function ul(e, t, n) {
      if (We && typeof We.onCommitFiberUnmount == `function`)
        try {
          We.onCommitFiberUnmount(Ue, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (nl || qc(n, t),
            ll(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          nl || qc(n, t);
          var r = W,
            i = G;
          (Zd(n.type) && ((W = n.stateNode), (G = !1)),
            ll(e, t, n),
            pf(n.stateNode),
            (W = r),
            (G = i));
          break;
        case 5:
          nl || qc(n, t);
        case 6:
          if (
            ((r = W),
            (i = G),
            (W = null),
            ll(e, t, n),
            (W = r),
            (G = i),
            W !== null)
          )
            if (G)
              try {
                (W.nodeType === 9
                  ? W.body
                  : W.nodeName === `HTML`
                    ? W.ownerDocument.body
                    : W
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                W.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          W !== null &&
            (G
              ? ((e = W),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(W, n.stateNode));
          break;
        case 4:
          ((r = W),
            (i = G),
            (W = n.stateNode.containerInfo),
            (G = !0),
            ll(e, t, n),
            (W = r),
            (G = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Uc(2, n, t), nl || Uc(4, n, t), ll(e, t, n));
          break;
        case 1:
          (nl ||
            (qc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Gc(n, t, r)),
            ll(e, t, n));
          break;
        case 21:
          ll(e, t, n);
          break;
        case 22:
          ((nl = (r = nl) || n.memoizedState !== null), ll(e, t, n), (nl = r));
          break;
        default:
          ll(e, t, n);
      }
    }
    function dl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function pl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new il()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new il()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ml(e, t) {
      var n = pl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function hl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((W = c.stateNode), (G = !1));
                  break a;
                }
                break;
              case 5:
                ((W = c.stateNode), (G = !1));
                break a;
              case 3:
              case 4:
                ((W = c.stateNode.containerInfo), (G = !0));
                break a;
            }
            c = c.return;
          }
          if (W === null) throw Error(i(160));
          (ul(o, s, a),
            (W = null),
            (G = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) (_l(t, e), (t = t.sibling));
    }
    var gl = null;
    function _l(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (hl(t, e),
            vl(e),
            r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return)));
          break;
        case 1:
          (hl(t, e),
            vl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            r & 64 &&
              tl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = gl;
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[St] ||
                            o[ht] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Pd(o, r, n),
                          (o[ht] = e),
                          Ot(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Vf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[ht] = e), Ot(o), (r = o));
                  }
                  e.stateNode = r;
                } else Hf(a, e.type, e.stateNode);
              else e.stateNode = If(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Yc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Hf(a, e.type, e.stateNode)
                    : If(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (hl(t, e),
            vl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              en(a, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Yc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (rl = !0));
          break;
        case 6:
          if ((hl(t, e), vl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (a = gl),
            (gl = gf(t.containerInfo)),
            hl(t, e),
            (gl = a),
            vl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          rl && ((rl = !1), yl(e));
          break;
        case 4:
          ((r = gl),
            (gl = gf(e.stateNode.containerInfo)),
            hl(t, e),
            vl(e),
            (gl = r));
          break;
        case 12:
          (hl(t, e), vl(e));
          break;
        case 31:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 13:
          (hl(t, e),
            vl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              ($l = Pe()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = tl,
            d = nl;
          if (
            ((tl = u || a),
            (nl = d || l),
            hl(t, e),
            (nl = d),
            (tl = u),
            vl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || tl || nl || xl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), ml(e, n))));
          break;
        case 19:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (hl(t, e), vl(e));
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Xc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              $c(e, Zc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (en(o, ``), (n.flags &= -33)), $c(e, Zc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Qc(e, Zc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function yl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (yl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function bl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          (sl(e, t.alternate, t), (t = t.sibling));
    }
    function xl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Uc(4, t, t.return), xl(t));
            break;
          case 1:
            qc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Gc(t, t.return, n),
              xl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (qc(t, t.return), xl(t));
            break;
          case 22:
            t.memoizedState === null && xl(t);
            break;
          case 30:
            xl(t);
            break;
          default:
            xl(t);
        }
        e = e.sibling;
      }
    }
    function Sl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Sl(i, a, n), Hc(4, a));
            break;
          case 1:
            if (
              (Sl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    eo(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Wc(a), Kc(a, a.return));
            break;
          case 27:
            el(a);
          case 26:
          case 5:
            (Sl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return));
            break;
          case 12:
            Sl(i, a, n);
            break;
          case 31:
            (Sl(i, a, n), n && o & 4 && dl(i, a));
            break;
          case 13:
            (Sl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Sl(i, a, n), Kc(a, a.return));
            break;
          case 30:
            break;
          default:
            Sl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Cl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ma(n)));
    }
    function wl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ma(e)));
    }
    function Tl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) (El(e, t, n, r), (t = t.sibling));
    }
    function El(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Tl(e, t, n, r), i & 2048 && Hc(9, t));
          break;
        case 1:
          Tl(e, t, n, r);
          break;
        case 3:
          (Tl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ma(e))));
          break;
        case 12:
          if (i & 2048) {
            (Tl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Tl(e, t, n, r);
          break;
        case 31:
          Tl(e, t, n, r);
          break;
        case 13:
          Tl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Tl(e, t, n, r)
                : ((a._visibility |= 2),
                  Dl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Tl(e, t, n, r)
                : Ol(e, t),
            i & 2048 && Cl(o, t));
          break;
        case 24:
          (Tl(e, t, n, r), i & 2048 && wl(t.alternate, t));
          break;
        default:
          Tl(e, t, n, r);
      }
    }
    function Dl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Dl(a, o, s, c, i), Hc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Dl(a, o, s, c, i))
              : u._visibility & 2
                ? Dl(a, o, s, c, i)
                : Ol(a, o),
              i && l & 2048 && Cl(o.alternate, o));
            break;
          case 24:
            (Dl(a, o, s, c, i), i && l & 2048 && wl(o.alternate, o));
            break;
          default:
            Dl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ol(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Ol(n, r), i & 2048 && Cl(r.alternate, r));
              break;
            case 24:
              (Ol(n, r), i & 2048 && wl(r.alternate, r));
              break;
            default:
              Ol(n, r);
          }
          t = t.sibling;
        }
    }
    var kl = 8192;
    function Al(e, t, n) {
      if (e.subtreeFlags & kl)
        for (e = e.child; e !== null; ) (jl(e, t, n), (e = e.sibling));
    }
    function jl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Al(e, t, n),
            e.flags & kl &&
              e.memoizedState !== null &&
              Gf(n, gl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Al(e, t, n);
          break;
        case 3:
        case 4:
          var r = gl;
          ((gl = gf(e.stateNode.containerInfo)), Al(e, t, n), (gl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = kl), (kl = 16777216), Al(e, t, n), (kl = r))
              : Al(e, t, n));
          break;
        default:
          Al(e, t, n);
      }
    }
    function Ml(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Nl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Il(r, e));
          }
        Ml(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (Pl(e), (e = e.sibling));
    }
    function Pl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Nl(e), e.flags & 2048 && Uc(9, e, e.return));
          break;
        case 3:
          Nl(e);
          break;
        case 12:
          Nl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Fl(e))
            : Nl(e);
          break;
        default:
          Nl(e);
      }
    }
    function Fl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Il(r, e));
          }
        Ml(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Uc(8, t, t.return), Fl(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Fl(t)));
            break;
          default:
            Fl(t);
        }
        e = e.sibling;
      }
    }
    function Il(e, t) {
      for (; al !== null; ) {
        var n = al;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Uc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ma(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (al = r));
        else
          a: for (n = e; al !== null; ) {
            r = al;
            var i = r.sibling,
              a = r.return;
            if ((cl(r), r === n)) {
              al = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (al = i));
              break a;
            }
            al = a;
          }
      }
    }
    var Ll = {
        getCacheForType: function (e) {
          var t = oa(fa),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return oa(fa).controller.signal;
        },
      },
      Rl = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      q = null,
      J = null,
      Y = 0,
      X = 0,
      zl = null,
      Bl = !1,
      Vl = !1,
      Hl = !1,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return K & 2 && Y !== 0 ? Y & -Y : E.T === null ? ft() : dd();
    }
    function mu() {
      if (Jl === 0)
        if (!(Y & 536870912) || P) {
          var e = Ze;
          ((Ze <<= 1), !(Ze & 3932160) && (Ze = 262144), (Jl = e));
        } else Jl = 536870912;
      return ((e = so.current), e !== null && (e.flags |= 32), Jl);
    }
    function hu(e, t, n) {
      (((e === q && (X === 2 || X === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, Y, Jl, !1)),
        at(e, n),
        (!(K & 2) || e !== q) &&
          (e === q && (!(K & 2) && (Kl |= n), Wl === 4 && yu(e, Y, Jl, !1)),
          rd(e)));
    }
    function gu(e, t, n) {
      if (K & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || tt(e, t),
        a = r ? Au(e, t) : Ou(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Vl && !r && yu(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !vu(n))) {
            ((a = Ou(e, t, !1)), (o = !1));
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = Xl;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)
                ) {
                  if (Hl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Kl |= o), (a = 4));
                    break a;
                  }
                  ((o = Zl),
                    (Zl = a),
                    o !== null &&
                      (Zl === null ? (Zl = o) : Zl.push.apply(Zl, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Su(e, 0), yu(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                yu(r, t, Jl, !Bl);
                break a;
              case 2:
                Zl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = $l + 300 - Pe()), 10 < a)) {
              if ((yu(r, t, Jl, !Bl), et(r, 0, !0) !== 0)) break a;
              ((su = t),
                (r.timeoutHandle = Kd(
                  _u.bind(
                    null,
                    r,
                    n,
                    Zl,
                    nu,
                    Ql,
                    t,
                    Jl,
                    Kl,
                    Yl,
                    Bl,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: cn,
        }),
          jl(t, a, d));
        var m =
          (a & 62914560) === a
            ? $l - Pe()
            : (a & 4194048) === a
              ? eu - Pe()
              : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((su = a),
            (e.cancelPendingCommit = m(
              Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            yu(e, a, o, !l));
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Ar(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      ((t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i; ) {
        var a = 31 - Ke(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && st(e, n, t);
    }
    function bu() {
      return K & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (J !== null) {
        if (X === 0) var e = J.return;
        else ((e = J), (Qi = Zi = null), No(e), (Ia = null), (La = 0), (e = J));
        for (; e !== null; ) (Vc(e.alternate, e), (e = e.return));
        J = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (q = e),
        (J = n = _i(e.current, null)),
        (Y = t),
        (X = 0),
        (zl = null),
        (Bl = !1),
        (Vl = tt(e, t)),
        (Hl = !1),
        (Yl = Jl = ql = Kl = Gl = Wl = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ke(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Ul = t), si(), n);
    }
    function Cu(e, t) {
      ((I = null),
        (E.H = Vs),
        t === Da || t === ka
          ? ((t = Pa()), (X = 3))
          : t === Oa
            ? ((t = Pa()), (X = 4))
            : (X =
                t === ac
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (zl = t),
        J === null && ((Wl = 1), $s(e, wi(t, e.current))));
    }
    function wu() {
      var e = so.current;
      return e === null
        ? !0
        : (Y & 4194048) === Y
          ? co === null
          : (Y & 62914560) === Y || Y & 536870912
            ? e === co
            : !1;
    }
    function Tu() {
      var e = E.H;
      return ((E.H = Vs), e === null ? Vs : e);
    }
    function Eu() {
      var e = E.A;
      return ((E.A = Ll), e);
    }
    function Du() {
      ((Wl = 4),
        Bl || ((Y & 4194048) !== Y && so.current !== null) || (Vl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) ||
          q === null ||
          yu(q, Y, Jl, !1));
    }
    function Ou(e, t, n) {
      var r = K;
      K |= 2;
      var i = Tu(),
        a = Eu();
      ((q !== e || Y !== t) && ((nu = null), Su(e, t)), (t = !1));
      var o = Wl;
      a: do
        try {
          if (X !== 0 && J !== null) {
            var s = J,
              c = zl;
            switch (X) {
              case 8:
                (xu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                so.current === null && (t = !0);
                var l = X;
                if (((X = 0), (zl = null), Pu(e, s, c, l), n && Vl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = X), (X = 0), (zl = null), Pu(e, s, c, l));
            }
          }
          (ku(), (o = Wl));
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Qi = Zi = null),
        (K = r),
        (E.H = i),
        (E.A = a),
        J === null && ((q = null), (Y = 0), si()),
        o
      );
    }
    function ku() {
      for (; J !== null; ) Mu(J);
    }
    function Au(e, t) {
      var n = K;
      K |= 2;
      var r = Tu(),
        a = Eu();
      q !== e || Y !== t
        ? ((nu = null), (tu = Pe() + 500), Su(e, t))
        : (Vl = tt(e, t));
      a: do
        try {
          if (X !== 0 && J !== null) {
            t = J;
            var o = zl;
            b: switch (X) {
              case 1:
                ((X = 0), (zl = null), Pu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ja(o)) {
                  ((X = 0), (zl = null), Nu(t));
                  break;
                }
                ((t = function () {
                  ((X !== 2 && X !== 9) || q !== e || (X = 7), rd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                X = 7;
                break a;
              case 4:
                X = 5;
                break a;
              case 7:
                ja(o)
                  ? ((X = 0), (zl = null), Nu(t))
                  : ((X = 0), (zl = null), Pu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (J.tag) {
                  case 26:
                    s = J.memoizedState;
                  case 5:
                  case 27:
                    var c = J;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((X = 0), (zl = null));
                      var l = c.sibling;
                      if (l !== null) J = l;
                      else {
                        var u = c.return;
                        u === null ? (J = null) : ((J = u), Fu(u));
                      }
                      break b;
                    }
                }
                ((X = 0), (zl = null), Pu(e, t, o, 5));
                break;
              case 6:
                ((X = 0), (zl = null), Pu(e, t, o, 6));
                break;
              case 8:
                (xu(), (Wl = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (Qi = Zi = null),
        (E.H = r),
        (E.A = a),
        (K = n),
        J === null ? ((q = null), (Y = 0), si(), Wl) : 0
      );
    }
    function ju() {
      for (; J !== null && !Me(); ) Mu(J);
    }
    function Mu(e) {
      var t = Nc(e.alternate, e, Ul);
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = yc(n, t, t.pendingProps, t.type, void 0, Y);
          break;
        case 11:
          t = yc(n, t, t.pendingProps, t.type.render, t.ref, Y);
          break;
        case 5:
          No(t);
        default:
          (Vc(n, t), (t = J = vi(t, Ul)), (t = Nc(n, t, Ul)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Pu(e, t, n, r) {
      ((Qi = Zi = null), No(t), (Ia = null), (La = 0));
      var i = t.return;
      try {
        if (ic(e, i, t, n, Y)) {
          ((Wl = 1), $s(e, wi(n, e.current)), (J = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((J = i), t);
        ((Wl = 1), $s(e, wi(n, e.current)), (J = null));
        return;
      }
      t.flags & 32768
        ? (P || r === 1
            ? (e = !0)
            : Vl || Y & 536870912
              ? (e = !1)
              : ((Bl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = so.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Bl);
          return;
        }
        e = t.return;
        var n = zc(t.alternate, t, Ul);
        if (n !== null) {
          J = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          J = t;
          return;
        }
        J = t = e;
      } while (t !== null);
      Wl === 0 && (Wl = 5);
    }
    function Iu(e, t) {
      do {
        var n = Bc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (J = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          J = e;
          return;
        }
        J = e = n;
      } while (e !== null);
      ((Wl = 6), (J = null));
    }
    function Lu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (K & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= oi),
          ot(e, n, o, s, c, l),
          e === q && ((J = q = null), (Y = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = o),
          (lu = a),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(Re, function () {
                return (Uu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = E.T), (E.T = null), (a = D.p), (D.p = 2), (s = K), (K |= 4));
          try {
            ol(e, t, n);
          } finally {
            ((K = s), (D.p = a), (E.T = r));
          }
        }
        ((iu = 1), Ru(), zu(), Bu());
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = E.T), (E.T = null));
          var r = D.p;
          D.p = 2;
          var i = K;
          K |= 4;
          try {
            _l(t, e);
            var a = zd,
              o = Fr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Pr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Ir(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Nr(s, h),
                      v = Nr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((K = i), (D.p = r), (E.T = n));
          }
        }
        ((e.current = t), (iu = 2));
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = E.T), (E.T = null));
          var r = D.p;
          D.p = 2;
          var i = K;
          K |= 4;
          try {
            sl(e, t.alternate, t);
          } finally {
            ((K = i), (D.p = r), (E.T = n));
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        ((iu = 0), Ne());
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          dt(n),
          (t = t.stateNode),
          We && typeof We.onCommitFiberRoot == `function`)
        )
          try {
            We.onCommitFiberRoot(Ue, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = E.T), (i = D.p), (D.p = 2), (E.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((E.T = t), (D.p = i));
          }
        }
        (su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === fu
              ? du++
              : ((du = 0), (fu = e))
            : (du = 0),
          id(0, !1));
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ma(t)));
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu());
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = dt(su),
        r = E.T,
        a = D.p;
      try {
        ((D.p = 32 > n ? 32 : n), (E.T = null), (n = lu), (lu = null));
        var o = au,
          s = su;
        if (((iu = 0), (ou = au = null), (su = 0), K & 6)) throw Error(i(331));
        var c = K;
        if (
          ((K |= 4),
          Pl(o.current),
          El(o, o.current, s, n),
          (K = c),
          id(0, !1),
          We && typeof We.onPostCommitFiberRoot == `function`)
        )
          try {
            We.onPostCommitFiberRoot(Ue, o);
          } catch {}
        return !0;
      } finally {
        ((D.p = a), (E.T = r), Vu(e, t));
      }
    }
    function Wu(e, t, n) {
      ((t = wi(n, t)),
        (t = tc(e.stateNode, t, 2)),
        (e = Ja(e, t, 2)),
        e !== null && (at(e, 2), rd(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (ru === null || !ru.has(r)))
            ) {
              ((e = wi(n, e)),
                (n = nc(2)),
                (r = Ja(t, n, 2)),
                r !== null && (rc(n, r, t, e), at(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Rl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Hl = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        q === e &&
          (Y & n) === n &&
          (Wl === 4 || (Wl === 3 && (Y & 62914560) === Y && 300 > Pe() - $l)
            ? !(K & 2) && Su(e, 0)
            : (ql |= n),
          Yl === Y && (Yl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = rt()), (e = ui(e, t)), e !== null && (at(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return Ae(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu &&
        e.next === null &&
        (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ke(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = Y),
                  (a = et(
                    r,
                    r === q ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || tt(r, a) || ((n = !0), ld(r, a)));
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Pe(), n = null, r = Zu; r !== null; ) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (Zu = i) : (n.next = i),
            i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ke(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = q),
        (n = Y),
        (n = et(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (X === 2 || X === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && je(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || tt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && je(r), dt(n))) {
          case 2:
          case 8:
            n = Le;
            break;
          case 32:
            n = Re;
            break;
          case 268435456:
            n = Be;
            break;
          default:
            n = Re;
        }
        return (
          (r = cd.bind(null, e)),
          (n = Ae(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && je(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = Y;
      return (
        (r = et(
          e,
          e === q ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Pe()),
            e.callbackNode != null && e.callbackNode === n
              ? cd.bind(null, e)
              : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        K & 6 ? Ae(Ie, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = _a;
        (e === 0 && ((e = Xe), (Xe <<= 1), !(Xe & 261888) && (Xe = 256)),
          (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : A(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[gt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[gt] || null)
            ? fd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new kn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < ni.length; hd++) {
      var gd = ni[hd];
      ri(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (ri(Jr, `onAnimationEnd`),
      ri(Yr, `onAnimationIteration`),
      ri(Xr, `onAnimationStart`),
      ri(`dblclick`, `onDoubleClick`),
      ri(`focusin`, `onFocus`),
      ri(`focusout`, `onBlur`),
      ri(Zr, `onTransitionRun`),
      ri(Qr, `onTransitionStart`),
      ri($r, `onTransitionCancel`),
      ri(ei, `onTransitionEnd`),
      Mt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Mt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Mt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Mt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      jt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      jt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      jt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      jt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      jt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      jt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(_d),
      );
    function yd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ii(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ii(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[vt];
      n === void 0 && (n = t[vt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          kt.forEach(function (t) {
            t !== `selectionchange` &&
              (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !vn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = wt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      hn(function () {
        var r = a,
          i = un(n),
          s = [];
        a: {
          var c = ti.get(e);
          if (c !== void 0) {
            var l = kn,
              u = e;
            switch (e) {
              case `keypress`:
                if (wn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = qn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Rn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Rn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Rn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = In;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Ln;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Yn;
                break;
              case Jr:
              case Yr:
              case Xr:
                l = zn;
                break;
              case ei:
                l = Xn;
                break;
              case `scroll`:
              case `scrollend`:
                l = jn;
                break;
              case `wheel`:
                l = Zn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Bn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Jn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Qn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = gn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== ln &&
                (u = n.relatedTarget || n.fromElement) &&
                (wt(u) || u[_t]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? wt(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = In),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Jn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : Et(l)),
                (h = u == null ? c : Et(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                wt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) ((p = d(p)), h--);
                  for (; 0 < g - h; ) ((m = d(m)), g--);
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Od(s, c, l, d, !1),
                u !== null && f !== null && Od(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? Et(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = vr;
            else if (fr(c))
              if (yr) v = Or;
              else {
                v = Er;
                var y = Tr;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && an(r.elementType) && (v = vr)
                  : (v = Dr));
            if ((v &&= v(e, r))) {
              pr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Xt(c, `number`, c.value));
          }
          switch (((y = r ? Et(r) : window), e)) {
            case `focusin`:
              (fr(y) || y.contentEditable === `true`) &&
                ((Rr = y), (zr = r), (Br = null));
              break;
            case `focusout`:
              Br = zr = Rr = null;
              break;
            case `mousedown`:
              Vr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Vr = !1), Hr(s, n, i));
              break;
            case `selectionchange`:
              if (Lr) break;
            case `keydown`:
            case `keyup`:
              Hr(s, n, i);
          }
          var b;
          if (er)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            cr
              ? or(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (rr &&
              n.locale !== `ko` &&
              (cr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && cr && (b = Cn())
                : ((bn = i),
                  (xn = `value` in bn ? bn.value : bn.textContent),
                  (cr = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Vn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = sr(n)), b !== null && (x.data = b)))),
            (b = nr ? lr(e, n) : ur(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Vn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            md(s, e, r, n, i));
        }
        yd(s, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = gn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = gn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = gn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = gn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || en(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              en(e, `` + r);
          break;
        case `className`:
          Rt(e, `class`, r);
          break;
        case `tabIndex`:
          Rt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Rt(e, n, r);
          break;
        case `style`:
          rn(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Rt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = A(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = A(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = cn);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = A(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Lt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Lt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = on.get(n) || n), Lt(e, n, r));
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          rn(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? en(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && en(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = cn);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!At.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[gt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : Lt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Yt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Zt(e, !!r, n, !0) : Zt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          $t(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (an(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Jt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Zt(e, !!n, n ? [] : ``, !1) : Zt(e, !!n, t, !0))
              : Zt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          Qt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (an(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Wd
          ? !1
          : ((Wd = e), !0)
        : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[St] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), Ct(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[St])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      Ct(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = D.d;
    D.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = Tt(e);
      t !== null && t.tag === 5 && t.type === `form` ? ks(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = qt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              Ot(t),
              r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + qt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + qt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + qt(n.imageSizes) + `"]`))
          : (i += `[href="` + qt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = m(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            Ot(t),
            r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            qt(r) +
            `"][href="` +
            qt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = m({ rel: `modulepreload`, href: e }, t)),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)),
            Pd(r, `link`, e),
            Ot(r),
            n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = Dt(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = m({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (Ot(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = Dt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = m({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            Ot(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = Dt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = m({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            Ot(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var a = (a = _e.current) ? gf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = Dt(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = Dt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = Dt(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Af(e) {
      return `href="` + qt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return m({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          Ot(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + qt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + qt(n.href) + `"]`);
            if (r) return ((t.instance = r), Ot(r), r);
            var a = m({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Ot(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Af(n.href);
            var o = e.querySelector(jf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Ot(o), o);
            ((r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Ot(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), Ot(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = m({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Ot(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[St] ||
            a[ht] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Ot(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            Ot(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: ue,
      _currentValue2: ue,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = it(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = it(0)),
        (this.hiddenUpdates = it(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = hi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = pa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ga(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = pi), e) : pi;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = qa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ja(e, r, t)),
        n !== null && (hu(n, e, t), Ya(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ui(e, 67108864);
        (t !== null && hu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = ut(t);
        var n = ui(e, t);
        (n !== null && hu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = E.T;
      E.T = null;
      var a = D.p;
      try {
        ((D.p = 2), up(e, t, n, r));
      } finally {
        ((D.p = a), (E.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = E.T;
      E.T = null;
      var a = D.p;
      try {
        ((D.p = 8), up(e, t, n, r));
      } finally {
        ((D.p = a), (E.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = Tt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = $e(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ke(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(K & 6) && ((tu = Pe() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ui(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = un(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = wt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Fe()) {
            case Ie:
              return 2;
            case Le:
              return 8;
            case Re:
            case ze:
              return 32;
            case Be:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Tt(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ep(e) {
      var t = wt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                pt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                pt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((ln = r), n.target.dispatchEvent(r), (ln = null));
        } else return ((t = Tt(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = Tt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ds(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[gt] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[gt] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), bu(), (t[_t] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = ft();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.4`) throw Error(i(527, Lp, `19.2.4`));
    D.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = u(t)),
        (e = e === null ? null : f(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.4`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: E,
      reconcilerVersion: `19.2.4`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((Ue = zp.inject(Rp)), (We = zp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Xs,
        s = Zs,
        c = Qs;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp)),
        (e[_t] = t.current),
        Sd(e),
        new Fp(t)
      );
    };
  }),
  _ = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = g()));
  }),
  v = l(d(), 1),
  y = _(),
  b = `1.3.21`;
function x(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function S(e, t, n) {
  return (1 - n) * e + n * t;
}
function C(e, t, n, r) {
  return S(e, t, 1 - Math.exp(-n * r));
}
function w(e, t) {
  return ((e % t) + t) % t;
}
var ee = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(e) {
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += e;
      let n = x(0, this.currentTime / this.duration, 1);
      t = n >= 1;
      let r = t ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * r;
    } else
      this.lerp
        ? ((this.value = C(this.value, this.to, this.lerp * 60, e)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (t = !0)))
        : ((this.value = this.to), (t = !0));
    (t && this.stop(), this.onUpdate?.(this.value, t));
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
    ((this.from = this.value = e),
      (this.to = t),
      (this.lerp = n),
      (this.duration = r),
      (this.easing = i),
      (this.currentTime = 0),
      (this.isRunning = !0),
      a?.(),
      (this.onUpdate = o));
  }
};
function te(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
var ne = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
      ((this.wrapper = e),
        (this.content = t),
        n &&
          ((this.debouncedResize = te(this.resize, r)),
          this.wrapper instanceof Window
            ? window.addEventListener(`resize`, this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize,
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize());
    }
    destroy() {
      (this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window &&
          this.debouncedResize &&
          window.removeEventListener(`resize`, this.debouncedResize));
    }
    resize = () => {
      (this.onWrapperResize(), this.onContentResize());
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    };
    onContentResize = () => {
      this.wrapper instanceof Window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  T = class {
    events = {};
    emit(e, ...t) {
      let n = this.events[e] || [];
      for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
    }
    on(e, t) {
      return (
        this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
        () => {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
      );
    }
    off(e, t) {
      this.events[e] = this.events[e]?.filter((e) => t !== e);
    }
    destroy() {
      this.events = {};
    }
  },
  re = 100 / 6,
  ie = { passive: !1 };
function ae(e, t) {
  return e === 1 ? re : e === 2 ? t : 1;
}
var oe = class {
    touchStart = { x: 0, y: 0 };
    lastDelta = { x: 0, y: 0 };
    window = { width: 0, height: 0 };
    emitter = new T();
    constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      ((this.element = e),
        (this.options = t),
        window.addEventListener(`resize`, this.onWindowResize),
        this.onWindowResize(),
        this.element.addEventListener(`wheel`, this.onWheel, ie),
        this.element.addEventListener(`touchstart`, this.onTouchStart, ie),
        this.element.addEventListener(`touchmove`, this.onTouchMove, ie),
        this.element.addEventListener(`touchend`, this.onTouchEnd, ie));
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    destroy() {
      (this.emitter.destroy(),
        window.removeEventListener(`resize`, this.onWindowResize),
        this.element.removeEventListener(`wheel`, this.onWheel, ie),
        this.element.removeEventListener(`touchstart`, this.onTouchStart, ie),
        this.element.removeEventListener(`touchmove`, this.onTouchMove, ie),
        this.element.removeEventListener(`touchend`, this.onTouchEnd, ie));
    }
    onTouchStart = (e) => {
      let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
      ((this.touchStart.x = t),
        (this.touchStart.y = n),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
    };
    onTouchMove = (e) => {
      let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
        r = -(t - this.touchStart.x) * this.options.touchMultiplier,
        i = -(n - this.touchStart.y) * this.options.touchMultiplier;
      ((this.touchStart.x = t),
        (this.touchStart.y = n),
        (this.lastDelta = { x: r, y: i }),
        this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
    };
    onTouchEnd = (e) => {
      this.emitter.emit(`scroll`, {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: e,
      });
    };
    onWheel = (e) => {
      let { deltaX: t, deltaY: n, deltaMode: r } = e,
        i = ae(r, this.window.width),
        a = ae(r, this.window.height);
      ((t *= i),
        (n *= a),
        (t *= this.options.wheelMultiplier),
        (n *= this.options.wheelMultiplier),
        this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
    };
    onWindowResize = () => {
      this.window = { width: window.innerWidth, height: window.innerHeight };
    };
  },
  se = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
  ce = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    _rafId = null;
    isTouching;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new ee();
    emitter = new T();
    dimensions;
    virtualScroll;
    constructor({
      wrapper: e = window,
      content: t = document.documentElement,
      eventsTarget: n = e,
      smoothWheel: r = !0,
      syncTouch: i = !1,
      syncTouchLerp: a = 0.075,
      touchInertiaExponent: o = 1.7,
      duration: s,
      easing: c,
      lerp: l = 0.1,
      infinite: u = !1,
      orientation: d = `vertical`,
      gestureOrientation: f = d === `horizontal` ? `both` : `vertical`,
      touchMultiplier: p = 1,
      wheelMultiplier: m = 1,
      autoResize: h = !0,
      prevent: g,
      virtualScroll: _,
      overscroll: v = !0,
      autoRaf: y = !1,
      anchors: x = !1,
      autoToggle: S = !1,
      allowNestedScroll: C = !1,
      __experimental__naiveDimensions: w = !1,
      naiveDimensions: ee = w,
      stopInertiaOnNavigate: te = !1,
    } = {}) {
      ((window.lenisVersion = b),
        window.lenis || (window.lenis = {}),
        (window.lenis.version = b),
        d === `horizontal` && (window.lenis.horizontal = !0),
        i === !0 && (window.lenis.touch = !0),
        (!e || e === document.documentElement) && (e = window),
        typeof s == `number` && typeof c != `function`
          ? (c = se)
          : typeof c == `function` && typeof s != `number` && (s = 1),
        (this.options = {
          wrapper: e,
          content: t,
          eventsTarget: n,
          smoothWheel: r,
          syncTouch: i,
          syncTouchLerp: a,
          touchInertiaExponent: o,
          duration: s,
          easing: c,
          lerp: l,
          infinite: u,
          gestureOrientation: f,
          orientation: d,
          touchMultiplier: p,
          wheelMultiplier: m,
          autoResize: h,
          prevent: g,
          virtualScroll: _,
          overscroll: v,
          autoRaf: y,
          anchors: x,
          autoToggle: S,
          allowNestedScroll: C,
          naiveDimensions: ee,
          stopInertiaOnNavigate: te,
        }),
        (this.dimensions = new ne(e, t, { autoResize: h })),
        this.updateClassName(),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
        this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, {
          capture: !0,
        }),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.addEventListener(`click`, this.onClick),
        this.options.wrapper.addEventListener(
          `pointerdown`,
          this.onPointerDown,
        ),
        (this.virtualScroll = new oe(n, {
          touchMultiplier: p,
          wheelMultiplier: m,
        })),
        this.virtualScroll.on(`scroll`, this.onVirtualScroll),
        this.options.autoToggle &&
          (this.checkOverflow(),
          this.rootElement.addEventListener(
            `transitionend`,
            this.onTransitionEnd,
          )),
        this.options.autoRaf &&
          (this._rafId = requestAnimationFrame(this.raf)));
    }
    destroy() {
      (this.emitter.destroy(),
        this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
        this.options.wrapper.removeEventListener(
          `scrollend`,
          this.onScrollEnd,
          { capture: !0 },
        ),
        this.options.wrapper.removeEventListener(
          `pointerdown`,
          this.onPointerDown,
        ),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.removeEventListener(`click`, this.onClick),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName(),
        this._rafId && cancelAnimationFrame(this._rafId));
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    off(e, t) {
      return this.emitter.off(e, t);
    }
    onScrollEnd = (e) => {
      e instanceof CustomEvent ||
        ((this.isScrolling === `smooth` || this.isScrolling === !1) &&
          e.stopPropagation());
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(
        new CustomEvent(`scrollend`, {
          bubbles: this.options.wrapper === window,
          detail: { lenisScrollEnd: !0 },
        }),
      );
    };
    get overflow() {
      let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
      return getComputedStyle(this.rootElement)[e];
    }
    checkOverflow() {
      [`hidden`, `clip`].includes(this.overflow)
        ? this.internalStop()
        : this.internalStart();
    }
    onTransitionEnd = (e) => {
      e.propertyName?.includes(`overflow`) &&
        e.target === this.rootElement &&
        this.checkOverflow();
    };
    setScroll(e) {
      this.isHorizontal
        ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
        : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
    }
    onClick = (e) => {
      let t = e
          .composedPath()
          .filter((e) => e instanceof HTMLAnchorElement && e.href)
          .map((e) => new URL(e.href)),
        n = new URL(window.location.href);
      if (this.options.anchors) {
        let e = t.find(
          (e) => n.host === e.host && n.pathname === e.pathname && e.hash,
        );
        if (e) {
          let t =
              typeof this.options.anchors == `object` && this.options.anchors
                ? this.options.anchors
                : void 0,
            n = `#${e.hash.split(`#`)[1]}`;
          this.scrollTo(n, t);
          return;
        }
      }
      if (
        this.options.stopInertiaOnNavigate &&
        t.some((e) => n.host === e.host && n.pathname !== e.pathname)
      ) {
        this.reset();
        return;
      }
    };
    onPointerDown = (e) => {
      e.button === 1 && this.reset();
    };
    onVirtualScroll = (e) => {
      if (
        typeof this.options.virtualScroll == `function` &&
        this.options.virtualScroll(e) === !1
      )
        return;
      let { deltaX: t, deltaY: n, event: r } = e;
      if (
        (this.emitter.emit(`virtual-scroll`, {
          deltaX: t,
          deltaY: n,
          event: r,
        }),
        r.ctrlKey || r.lenisStopPropagation)
      )
        return;
      let i = r.type.includes(`touch`),
        a = r.type.includes(`wheel`);
      this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
      let o = t === 0 && n === 0;
      if (
        this.options.syncTouch &&
        i &&
        r.type === `touchstart` &&
        o &&
        !this.isStopped &&
        !this.isLocked
      ) {
        this.reset();
        return;
      }
      let s =
        (this.options.gestureOrientation === `vertical` && n === 0) ||
        (this.options.gestureOrientation === `horizontal` && t === 0);
      if (o || s) return;
      let c = r.composedPath();
      c = c.slice(0, c.indexOf(this.rootElement));
      let l = this.options.prevent,
        u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
      if (
        c.find(
          (e) =>
            e instanceof HTMLElement &&
            ((typeof l == `function` && l?.(e)) ||
              e.hasAttribute?.(`data-lenis-prevent`) ||
              (u === `vertical` &&
                e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
              (u === `horizontal` &&
                e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
              (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
              (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
              (this.options.allowNestedScroll &&
                this.hasNestedScroll(e, { deltaX: t, deltaY: n }))),
        )
      )
        return;
      if (this.isStopped || this.isLocked) {
        r.cancelable && r.preventDefault();
        return;
      }
      if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
        ((this.isScrolling = `native`),
          this.animate.stop(),
          (r.lenisStopPropagation = !0));
        return;
      }
      let d = n;
      (this.options.gestureOrientation === `both`
        ? (d = Math.abs(n) > Math.abs(t) ? n : t)
        : this.options.gestureOrientation === `horizontal` && (d = t),
        (!this.options.overscroll ||
          this.options.infinite ||
          (this.options.wrapper !== window &&
            this.limit > 0 &&
            ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
              (this.animatedScroll === 0 && n > 0) ||
              (this.animatedScroll === this.limit && n < 0)))) &&
          (r.lenisStopPropagation = !0),
        r.cancelable && r.preventDefault());
      let f = i && this.options.syncTouch,
        p = i && r.type === `touchend`;
      (p &&
        (d =
          Math.sign(this.velocity) *
          Math.abs(this.velocity) ** this.options.touchInertiaExponent),
        this.scrollTo(this.targetScroll + d, {
          programmatic: !1,
          ...(f
            ? { lerp: p ? this.options.syncTouchLerp : 1 }
            : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing,
              }),
        }));
    };
    resize() {
      (this.dimensions.resize(),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        this.emit());
    }
    emit() {
      this.emitter.emit(`scroll`, this);
    }
    onNativeScroll = () => {
      if (
        (this._resetVelocityTimeout !== null &&
          (clearTimeout(this._resetVelocityTimeout),
          (this._resetVelocityTimeout = null)),
        this._preventNextNativeScrollEvent)
      ) {
        this._preventNextNativeScrollEvent = !1;
        return;
      }
      if (this.isScrolling === !1 || this.isScrolling === `native`) {
        let e = this.animatedScroll;
        ((this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity),
          (this.velocity = this.animatedScroll - e),
          (this.direction = Math.sign(this.animatedScroll - e)),
          this.isStopped || (this.isScrolling = `native`),
          this.emit(),
          this.velocity !== 0 &&
            (this._resetVelocityTimeout = setTimeout(() => {
              ((this.lastVelocity = this.velocity),
                (this.velocity = 0),
                (this.isScrolling = !1),
                this.emit());
            }, 400)));
      }
    };
    reset() {
      ((this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity = 0),
        this.animate.stop());
    }
    start() {
      if (this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.removeProperty(`overflow`);
          return;
        }
        this.internalStart();
      }
    }
    internalStart() {
      this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
    }
    stop() {
      if (!this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.setProperty(`overflow`, `clip`);
          return;
        }
        this.internalStop();
      }
    }
    internalStop() {
      this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
    }
    raf = (e) => {
      let t = e - (this.time || e);
      ((this.time = e),
        this.animate.advance(t * 0.001),
        this.options.autoRaf &&
          (this._rafId = requestAnimationFrame(this.raf)));
    };
    scrollTo(
      e,
      {
        offset: t = 0,
        immediate: n = !1,
        lock: r = !1,
        programmatic: i = !0,
        lerp: a = i ? this.options.lerp : void 0,
        duration: o = i ? this.options.duration : void 0,
        easing: s = i ? this.options.easing : void 0,
        onStart: c,
        onComplete: l,
        force: u = !1,
        userData: d,
      } = {},
    ) {
      if ((this.isStopped || this.isLocked) && !u) return;
      let f = e,
        p = t;
      if (typeof f == `string` && [`top`, `left`, `start`, `#`].includes(f))
        f = 0;
      else if (typeof f == `string` && [`bottom`, `right`, `end`].includes(f))
        f = this.limit;
      else {
        let e = null;
        if (
          (typeof f == `string`
            ? ((e = document.querySelector(f)),
              e ||
                (f === `#top`
                  ? (f = 0)
                  : console.warn(`Lenis: Target not found`, f)))
            : f instanceof HTMLElement && f?.nodeType && (e = f),
          e)
        ) {
          if (this.options.wrapper !== window) {
            let e = this.rootElement.getBoundingClientRect();
            p -= this.isHorizontal ? e.left : e.top;
          }
          let t = e.getBoundingClientRect(),
            n = getComputedStyle(e),
            r = this.isHorizontal
              ? Number.parseFloat(n.scrollMarginLeft)
              : Number.parseFloat(n.scrollMarginTop),
            i = getComputedStyle(this.rootElement),
            a = this.isHorizontal
              ? Number.parseFloat(i.scrollPaddingLeft)
              : Number.parseFloat(i.scrollPaddingTop);
          f =
            (this.isHorizontal ? t.left : t.top) +
            this.animatedScroll -
            (Number.isNaN(r) ? 0 : r) -
            (Number.isNaN(a) ? 0 : a);
        }
      }
      if (typeof f == `number`) {
        if (((f += p), (f = Math.round(f)), this.options.infinite)) {
          if (i) {
            this.targetScroll = this.animatedScroll = this.scroll;
            let e = f - this.animatedScroll;
            e > this.limit / 2
              ? (f -= this.limit)
              : e < -this.limit / 2 && (f += this.limit);
          }
        } else f = x(0, f, this.limit);
        if (f === this.targetScroll) {
          (c?.(this), l?.(this));
          return;
        }
        if (((this.userData = d ?? {}), n)) {
          ((this.animatedScroll = this.targetScroll = f),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            l?.(this),
            (this.userData = {}),
            requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            }));
          return;
        }
        (i || (this.targetScroll = f),
          typeof o == `number` && typeof s != `function`
            ? (s = se)
            : typeof s == `function` && typeof o != `number` && (o = 1),
          this.animate.fromTo(this.animatedScroll, f, {
            duration: o,
            easing: s,
            lerp: a,
            onStart: () => {
              (r && (this.isLocked = !0),
                (this.isScrolling = `smooth`),
                c?.(this));
            },
            onUpdate: (e, t) => {
              ((this.isScrolling = `smooth`),
                (this.lastVelocity = this.velocity),
                (this.velocity = e - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = e),
                this.setScroll(this.scroll),
                i && (this.targetScroll = e),
                t || this.emit(),
                t &&
                  (this.reset(),
                  this.emit(),
                  l?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  }),
                  this.preventNextNativeScrollEvent()));
            },
          }));
      }
    }
    preventNextNativeScrollEvent() {
      ((this._preventNextNativeScrollEvent = !0),
        requestAnimationFrame(() => {
          this._preventNextNativeScrollEvent = !1;
        }));
    }
    hasNestedScroll(e, { deltaX: t, deltaY: n }) {
      let r = Date.now();
      e._lenis ||= {};
      let i = e._lenis,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m;
      if (r - (i.time ?? 0) > 2e3) {
        i.time = Date.now();
        let t = window.getComputedStyle(e);
        if (
          ((i.computedStyle = t),
          (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
          (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
          (l = [`auto`].includes(t.overscrollBehaviorX)),
          (u = [`auto`].includes(t.overscrollBehaviorY)),
          (i.hasOverflowX = a),
          (i.hasOverflowY = o),
          !(a || o))
        )
          return !1;
        ((d = e.scrollWidth),
          (f = e.scrollHeight),
          (p = e.clientWidth),
          (m = e.clientHeight),
          (s = d > p),
          (c = f > m),
          (i.isScrollableX = s),
          (i.isScrollableY = c),
          (i.scrollWidth = d),
          (i.scrollHeight = f),
          (i.clientWidth = p),
          (i.clientHeight = m),
          (i.hasOverscrollBehaviorX = l),
          (i.hasOverscrollBehaviorY = u));
      } else
        ((s = i.isScrollableX),
          (c = i.isScrollableY),
          (a = i.hasOverflowX),
          (o = i.hasOverflowY),
          (d = i.scrollWidth),
          (f = i.scrollHeight),
          (p = i.clientWidth),
          (m = i.clientHeight),
          (l = i.hasOverscrollBehaviorX),
          (u = i.hasOverscrollBehaviorY));
      if (!((a && s) || (o && c))) return !1;
      let h = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
        g,
        _,
        v,
        y,
        b,
        x;
      if (h === `horizontal`)
        ((g = Math.round(e.scrollLeft)),
          (_ = d - p),
          (v = t),
          (y = a),
          (b = s),
          (x = l));
      else if (h === `vertical`)
        ((g = Math.round(e.scrollTop)),
          (_ = f - m),
          (v = n),
          (y = o),
          (b = c),
          (x = u));
      else return !1;
      return !x && (g >= _ || g <= 0) ? !0 : (v > 0 ? g < _ : g > 0) && y && b;
    }
    get rootElement() {
      return this.options.wrapper === window
        ? document.documentElement
        : this.options.wrapper;
    }
    get limit() {
      return this.options.naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
    }
    get isHorizontal() {
      return this.options.orientation === `horizontal`;
    }
    get actualScroll() {
      let e = this.options.wrapper;
      return this.isHorizontal
        ? (e.scrollX ?? e.scrollLeft)
        : (e.scrollY ?? e.scrollTop);
    }
    get scroll() {
      return this.options.infinite
        ? w(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(e) {
      this._isScrolling !== e &&
        ((this._isScrolling = e), this.updateClassName());
    }
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(e) {
      this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
    }
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(e) {
      this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === `smooth`;
    }
    get className() {
      let e = `lenis`;
      return (
        this.options.autoToggle && (e += ` lenis-autoToggle`),
        this.isStopped && (e += ` lenis-stopped`),
        this.isLocked && (e += ` lenis-locked`),
        this.isScrolling && (e += ` lenis-scrolling`),
        this.isScrolling === `smooth` && (e += ` lenis-smooth`),
        e
      );
    }
    updateClassName() {
      (this.cleanUpClassName(),
        (this.rootElement.className =
          `${this.rootElement.className} ${this.className}`.trim()));
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className
        .replace(/lenis(-\w+)?/g, ``)
        .trim();
    }
  },
  le = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  E = o((e, t) => {
    t.exports = le();
  })(),
  D = class {
    listeners = [];
    constructor(e) {
      this.state = e;
    }
    set(e) {
      this.state = e;
      for (let e of this.listeners) e(this.state);
    }
    subscribe(e) {
      return (
        (this.listeners = [...this.listeners, e]),
        () => {
          this.listeners = this.listeners.filter((t) => t !== e);
        }
      );
    }
    get() {
      return this.state;
    }
  };
function ue(e) {
  let [t, n] = (0, v.useState)(e.get());
  return ((0, v.useEffect)(() => e.subscribe((e) => n(e)), [e]), t);
}
var de = (0, v.createContext)(null),
  fe = new D(null),
  pe = (0, v.forwardRef)(
    (
      {
        children: e,
        root: t = !1,
        options: n = {},
        autoRaf: r = !0,
        className: i = ``,
        ...a
      },
      o,
    ) => {
      let s = (0, v.useRef)(null),
        c = (0, v.useRef)(null),
        [l, u] = (0, v.useState)(void 0);
      ((0, v.useImperativeHandle)(
        o,
        () => ({ wrapper: s.current, content: c.current, lenis: l }),
        [l],
      ),
        (0, v.useEffect)(() => {
          let e = new ce({
            ...n,
            ...(s.current &&
              c.current && { wrapper: s.current, content: c.current }),
            autoRaf: n?.autoRaf ?? r,
          });
          return (
            u(e),
            () => {
              (e.destroy(), u(void 0));
            }
          );
        }, [r, JSON.stringify({ ...n, wrapper: null, content: null })]));
      let d = (0, v.useRef)([]),
        f = (0, v.useCallback)((e, t) => {
          (d.current.push({ callback: e, priority: t }),
            d.current.sort((e, t) => e.priority - t.priority));
        }, []),
        p = (0, v.useCallback)((e) => {
          d.current = d.current.filter((t) => t.callback !== e);
        }, []);
      return (
        (0, v.useEffect)(() => {
          if (t && l)
            return (
              fe.set({ lenis: l, addCallback: f, removeCallback: p }),
              () => fe.set(null)
            );
        }, [t, l, f, p]),
        (0, v.useEffect)(() => {
          if (!l) return;
          let e = (e) => {
            for (let { callback: t } of d.current) t(e);
          };
          return (
            l.on(`scroll`, e),
            () => {
              l.off(`scroll`, e);
            }
          );
        }, [l]),
        e
          ? (0, E.jsx)(de.Provider, {
              value: { lenis: l, addCallback: f, removeCallback: p },
              children:
                t && t !== `asChild`
                  ? e
                  : (0, E.jsx)(`div`, {
                      ref: s,
                      className: `${i} ${l?.className ?? ``}`.trim(),
                      ...a,
                      children: (0, E.jsx)(`div`, { ref: c, children: e }),
                    }),
            })
          : null
      );
    },
  ),
  me = {};
function O(e, t = [], n = 0) {
  let r = (0, v.useContext)(de),
    i = ue(fe),
    { lenis: a, addCallback: o, removeCallback: s } = r ?? i ?? me;
  return (
    (0, v.useEffect)(() => {
      if (e && o && s && a)
        return (
          o(e, n),
          e(a),
          () => {
            s(e);
          }
        );
    }, [a, o, s, n, ...t, e]),
    a
  );
}
var he = `modulepreload`,
  ge = function (e) {
    return `/` + e;
  },
  _e = {},
  ve = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      r = o(
        t.map((t) => {
          if (((t = ge(t, n)), t in _e)) return;
          _e[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : he),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  ye = `popstate`;
function be(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function xe(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return Te(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : Ee(t);
  }
  return Oe(t, n, null, e);
}
function k(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function Se(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function Ce() {
  return Math.random().toString(36).substring(2, 10);
}
function we(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.unstable_mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function Te(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? De(t) : t),
    state: n,
    key: (t && t.key) || r || Ce(),
    unstable_mask: i,
  };
}
function Ee({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function De(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Oe(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = `PUSH`;
    let r = be(e) ? e : Te(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = we(r, l),
      f = h.createHref(r.unstable_mask || r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = be(e) ? e : Te(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = we(r, l),
      d = h.createHref(r.unstable_mask || r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    return ke(e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(ye, d),
        (c = e),
        () => {
          (i.removeEventListener(ye, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function ke(e, t = !1) {
  let n = `http://localhost`;
  (typeof window < `u` &&
    (n =
      window.location.origin === `null`
        ? window.location.href
        : window.location.origin),
    k(n, `No window.location.(origin|href) available to create URL`));
  let r = typeof e == `string` ? e : Ee(e);
  return (
    (r = r.replace(/ $/, `%20`)),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r, n)
  );
}
function Ae(e, t, n = `/`) {
  return je(e, t, n, !1);
}
function je(e, t, n, r) {
  let i = Ye((typeof t == `string` ? De(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = Ne(e);
  Fe(a);
  let o = null;
  for (let e = 0; o == null && e < a.length; ++e) {
    let t = Je(i);
    o = Ge(a[e], t, r);
  }
  return o;
}
function Me(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle,
  };
}
function Ne(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      (k(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (c.relativePath = c.relativePath.slice(r.length)));
    }
    let l = rt([r, c.relativePath]),
      u = n.concat(c);
    (e.children &&
      e.children.length > 0 &&
      (k(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
      ),
      Ne(e.children, t, u, l, o)),
      !(e.path == null && !e.index) &&
        t.push({ path: l, score: Ue(l, e.index), routesMeta: u }));
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of Pe(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function Pe(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = Pe(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function Fe(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? We(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var Ie = /^:[\w-]+$/,
  Le = 3,
  Re = 2,
  ze = 1,
  Be = 10,
  Ve = -2,
  He = (e) => e === `*`;
function Ue(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(He) && (r += Ve),
    t && (r += Re),
    n
      .filter((e) => !He(e))
      .reduce((e, t) => e + (Ie.test(t) ? Le : t === `` ? ze : Be), r)
  );
}
function We(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ge(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = Ke(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l,
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = Ke(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: rt([a, u.pathname]),
        pathnameBase: it(rt([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = rt([a, u.pathnameBase])));
  }
  return o;
}
function Ke(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = qe(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let i = s[r];
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)),
        e
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function qe(e, t = !1, n = !0) {
  Se(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function Je(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      Se(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function Ye(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var Xe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Ze(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? De(e) : e,
    a;
  return (
    n
      ? ((n = n.replace(/\/\/+/g, `/`)),
        (a = n.startsWith(`/`) ? Qe(n.substring(1), `/`) : Qe(n, t)))
      : (a = t),
    { pathname: a, search: at(r), hash: ot(i) }
  );
}
function Qe(e, t) {
  let n = t.replace(/\/+$/, ``).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function $e(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function et(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function tt(e) {
  let t = et(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function nt(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = De(e))
    : ((i = { ...e }),
      k(
        !i.pathname || !i.pathname.includes(`?`),
        $e(`?`, `pathname`, `search`, i),
      ),
      k(
        !i.pathname || !i.pathname.includes(`#`),
        $e(`#`, `pathname`, `hash`, i),
      ),
      k(!i.search || !i.search.includes(`#`), $e(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = Ze(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var rt = (e) => e.join(`/`).replace(/\/\/+/g, `/`),
  it = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
  at = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  ot = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  st = class {
    constructor(e, t, n, r = !1) {
      ((this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
function ct(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function lt(e) {
  return (
    e
      .map((e) => e.route.path)
      .filter(Boolean)
      .join(`/`)
      .replace(/\/\/*/g, `/`) || `/`
  );
}
var ut =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
function dt(e, t) {
  let n = e;
  if (typeof n != `string` || !Xe.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    i = !1;
  if (ut)
    try {
      let e = new URL(window.location.href),
        r = n.startsWith(`//`) ? new URL(e.protocol + n) : new URL(n),
        a = Ye(r.pathname, t);
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0);
    } catch {
      Se(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: i, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var ft = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(ft);
var pt = [`GET`, ...ft];
new Set(pt);
var mt = v.createContext(null);
mt.displayName = `DataRouter`;
var ht = v.createContext(null);
ht.displayName = `DataRouterState`;
var gt = v.createContext(!1);
function _t() {
  return v.useContext(gt);
}
var vt = v.createContext({ isTransitioning: !1 });
vt.displayName = `ViewTransition`;
var yt = v.createContext(new Map());
yt.displayName = `Fetchers`;
var bt = v.createContext(null);
bt.displayName = `Await`;
var xt = v.createContext(null);
xt.displayName = `Navigation`;
var St = v.createContext(null);
St.displayName = `Location`;
var Ct = v.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ct.displayName = `Route`;
var wt = v.createContext(null);
wt.displayName = `RouteError`;
var Tt = `REACT_ROUTER_ERROR`,
  Et = `REDIRECT`,
  Dt = `ROUTE_ERROR_RESPONSE`;
function Ot(e) {
  if (e.startsWith(`${Tt}:${Et}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function kt(e) {
  if (e.startsWith(`${Tt}:${Dt}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new st(t.status, t.statusText, t.data);
    } catch {}
}
function At(e, { relative: t } = {}) {
  k(jt(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = v.useContext(xt),
    { hash: i, pathname: a, search: o } = Lt(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : rt([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function jt() {
  return v.useContext(St) != null;
}
function Mt() {
  return (
    k(
      jt(),
      `useLocation() may be used only in the context of a <Router> component.`,
    ),
    v.useContext(St).location
  );
}
var Nt = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function Pt(e) {
  v.useContext(xt).static || v.useLayoutEffect(e);
}
function Ft() {
  let { isDataRoute: e } = v.useContext(Ct);
  return e ? nn() : It();
}
function It() {
  k(
    jt(),
    `useNavigate() may be used only in the context of a <Router> component.`,
  );
  let e = v.useContext(mt),
    { basename: t, navigator: n } = v.useContext(xt),
    { matches: r } = v.useContext(Ct),
    { pathname: i } = Mt(),
    a = JSON.stringify(tt(r)),
    o = v.useRef(!1);
  return (
    Pt(() => {
      o.current = !0;
    }),
    v.useCallback(
      (r, s = {}) => {
        if ((Se(o.current, Nt), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = nt(r, JSON.parse(a), i, s.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : rt([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s));
      },
      [t, n, a, i, e],
    )
  );
}
v.createContext(null);
function Lt(e, { relative: t } = {}) {
  let { matches: n } = v.useContext(Ct),
    { pathname: r } = Mt(),
    i = JSON.stringify(tt(n));
  return v.useMemo(() => nt(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function Rt(e, t) {
  return zt(e, t);
}
function zt(e, t, n) {
  k(
    jt(),
    `useRoutes() may be used only in the context of a <Router> component.`,
  );
  let { navigator: r } = v.useContext(xt),
    { matches: i } = v.useContext(Ct),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route;
  {
    let e = (l && l.path) || ``;
    an(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
    );
  }
  let u = Mt(),
    d;
  if (t) {
    let e = typeof t == `string` ? De(t) : t;
    (k(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
    ),
      (d = e));
  } else d = u;
  let f = d.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m = Ae(e, { pathname: p });
  (Se(
    l || m != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `,
  ),
    Se(
      m == null ||
        m[m.length - 1].route.element !== void 0 ||
        m[m.length - 1].route.Component !== void 0 ||
        m[m.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let h = Kt(
    m &&
      m.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: rt([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : rt([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`),
                      ).pathname
                    : e.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
  );
  return t && h
    ? v.createElement(
        St.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              unstable_mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        h,
      )
    : h;
}
function Bt() {
  let e = tn(),
    t = ct(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = v.createElement(
      v.Fragment,
      null,
      v.createElement(`p`, null, `💿 Hey developer 👋`),
      v.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        v.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        v.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`,
      ),
    )),
    v.createElement(
      v.Fragment,
      null,
      v.createElement(`h2`, null, `Unexpected Application Error!`),
      v.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? v.createElement(`pre`, { style: i }, n) : null,
      o,
    )
  );
}
var Vt = v.createElement(Bt, null),
  Ht = class extends v.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e,
          );
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = kt(e.digest);
        t && (e = t);
      }
      let t =
        e === void 0
          ? this.props.children
          : v.createElement(
              Ct.Provider,
              { value: this.props.routeContext },
              v.createElement(wt.Provider, {
                value: e,
                children: this.props.component,
              }),
            );
      return this.context ? v.createElement(Wt, { error: e }, t) : t;
    }
  };
Ht.contextType = gt;
var Ut = new WeakMap();
function Wt({ children: e, error: t }) {
  let { basename: n } = v.useContext(xt);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = Ot(t.digest);
    if (e) {
      let r = Ut.get(t);
      if (r) throw r;
      let i = dt(e.location, n);
      if (ut && !Ut.get(t))
        if (i.isExternal || e.reloadDocument)
          window.location.href = i.absoluteURL || i.to;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, {
              replace: e.replace,
            }),
          );
          throw (Ut.set(t, n), n);
        }
      return v.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return e;
}
function Gt({ routeContext: e, match: t, children: n }) {
  let r = v.useContext(mt);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    v.createElement(Ct.Provider, { value: e }, n)
  );
}
function Kt(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    (k(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`,
    ),
      (i = i.slice(0, Math.min(i.length, e + 1))));
  }
  let o = !1,
    s = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          (n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]));
          break;
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              unstable_pattern: lt(r.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null;
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || Vt),
      o &&
        (s < 0 && c === 0
          ? (an(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t;
        return (
          (t = u
            ? f
            : d
              ? p
              : n.route.Component
                ? v.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          v.createElement(Gt, {
            match: n,
            routeContext: { outlet: e, matches: m, isDataRoute: r != null },
            children: t,
          })
        );
      };
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? v.createElement(Ht, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: l,
        })
      : h();
  }, null);
}
function qt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jt(e) {
  let t = v.useContext(mt);
  return (k(t, qt(e)), t);
}
function Yt(e) {
  let t = v.useContext(ht);
  return (k(t, qt(e)), t);
}
function Xt(e) {
  let t = v.useContext(Ct);
  return (k(t, qt(e)), t);
}
function Zt(e) {
  let t = Xt(e),
    n = t.matches[t.matches.length - 1];
  return (
    k(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Qt() {
  return Zt(`useRouteId`);
}
function $t() {
  return Yt(`useNavigation`).navigation;
}
function en() {
  let { matches: e, loaderData: t } = Yt(`useMatches`);
  return v.useMemo(() => e.map((e) => Me(e, t)), [e, t]);
}
function tn() {
  let e = v.useContext(wt),
    t = Yt(`useRouteError`),
    n = Zt(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function nn() {
  let { router: e } = Jt(`useNavigate`),
    t = Zt(`useNavigate`),
    n = v.useRef(!1);
  return (
    Pt(() => {
      n.current = !0;
    }),
    v.useCallback(
      async (r, i = {}) => {
        (Se(n.current, Nt),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })));
      },
      [e, t],
    )
  );
}
var rn = {};
function an(e, t, n) {
  !t && !rn[e] && ((rn[e] = !0), Se(!1, n));
}
(v.useOptimistic, v.memo(on));
function on({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
  return zt(e, void 0, { state: n, isStatic: r, onError: i, future: t });
}
function sn({ to: e, replace: t, state: n, relative: r }) {
  k(
    jt(),
    `<Navigate> may be used only in the context of a <Router> component.`,
  );
  let { static: i } = v.useContext(xt);
  Se(
    !i,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`,
  );
  let { matches: a } = v.useContext(Ct),
    { pathname: o } = Mt(),
    s = Ft(),
    c = nt(e, tt(a), o, r === `path`),
    l = JSON.stringify(c);
  return (
    v.useEffect(() => {
      s(JSON.parse(l), { replace: t, state: n, relative: r });
    }, [s, l, r, t, n]),
    null
  );
}
function A(e) {
  k(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`,
  );
}
function cn({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  unstable_useTransitions: o,
}) {
  k(
    !jt(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
  );
  let s = e.replace(/^\/*/, `/`),
    c = v.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        unstable_useTransitions: o,
        future: {},
      }),
      [s, i, a, o],
    );
  typeof n == `string` && (n = De(n));
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      unstable_mask: m,
    } = n,
    h = v.useMemo(() => {
      let e = Ye(l, s);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              unstable_mask: m,
            },
            navigationType: r,
          };
    }, [s, l, u, d, f, p, r, m]);
  return (
    Se(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    h == null
      ? null
      : v.createElement(
          xt.Provider,
          { value: c },
          v.createElement(St.Provider, { children: t, value: h }),
        )
  );
}
function ln({ children: e, location: t }) {
  return Rt(un(e), t);
}
v.Component;
function un(e, t = []) {
  let n = [];
  return (
    v.Children.forEach(e, (e, r) => {
      if (!v.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === v.Fragment) {
        n.push.apply(n, un(e.props.children, i));
        return;
      }
      (k(
        e.type === A,
        `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        k(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`,
        ));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = un(e.props.children, i)), n.push(a));
    }),
    n
  );
}
var dn = `get`,
  fn = `application/x-www-form-urlencoded`;
function pn(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function mn(e) {
  return pn(e) && e.tagName.toLowerCase() === `button`;
}
function hn(e) {
  return pn(e) && e.tagName.toLowerCase() === `form`;
}
function gn(e) {
  return pn(e) && e.tagName.toLowerCase() === `input`;
}
function _n(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function vn(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !_n(e);
}
var yn = null;
function bn() {
  if (yn === null)
    try {
      (new FormData(document.createElement(`form`), 0), (yn = !1));
    } catch {
      yn = !0;
    }
  return yn;
}
var xn = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function Sn(e) {
  return e != null && !xn.has(e)
    ? (Se(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fn}"`,
      ),
      null)
    : e;
}
function Cn(e, t) {
  let n, r, i, a, o;
  if (hn(e)) {
    let o = e.getAttribute(`action`);
    ((r = o ? Ye(o, t) : null),
      (n = e.getAttribute(`method`) || dn),
      (i = Sn(e.getAttribute(`enctype`)) || fn),
      (a = new FormData(e)));
  } else if (mn(e) || (gn(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`,
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? Ye(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || dn),
      (i =
        Sn(e.getAttribute(`formenctype`)) ||
        Sn(o.getAttribute(`enctype`)) ||
        fn),
      (a = new FormData(o, e)),
      !bn())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
      } else t && a.append(t, r);
    }
  } else if (pn(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
    );
  else ((n = dn), (r = null), (i = fn), (o = e));
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var wn = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  Tn = /[&><\u2028\u2029]/g;
function En(e) {
  return e.replace(Tn, (e) => wn[e]);
}
function Dn(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function On(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u`
            ? `server://singlefetch/`
            : window.location.origin,
        )
      : e;
  return (
    n
      ? i.pathname.endsWith(`/`)
        ? (i.pathname = `${i.pathname}_.${r}`)
        : (i.pathname = `${i.pathname}.${r}`)
      : i.pathname === `/`
        ? (i.pathname = `_root.${r}`)
        : t && Ye(i.pathname, t) === `/`
          ? (i.pathname = `${t.replace(/\/$/, ``)}/_root.${r}`)
          : (i.pathname = `${i.pathname.replace(/\/$/, ``)}.${r}`),
    i
  );
}
async function kn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await ve(() => import(e.module), []);
    return ((t[e.id] = n), n);
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function An(e) {
  return e != null && typeof e.page == `string`;
}
function jn(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`;
}
async function Mn(e, t, n) {
  return Ln(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await kn(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(jn)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` },
      ),
  );
}
function Nn(e, t, n, r, i, a) {
  let o = (e, t) => (n[t] ? e.route.id !== n[t].route.id : !0),
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id];
          if (!c || !c.hasLoader) return !1;
          if (o(t, a) || s(t, a)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof r == `boolean`) return r;
          }
          return !0;
        })
      : [];
}
function Pn(e, t, { includeHydrateFallback: n } = {}) {
  return Fn(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1),
  );
}
function Fn(e) {
  return [...new Set(e)];
}
function In(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Ln(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !An(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(In(i));
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
  }, []);
}
function Rn() {
  let e = v.useContext(mt);
  return (
    Dn(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`,
    ),
    e
  );
}
function zn() {
  let e = v.useContext(ht);
  return (
    Dn(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`,
    ),
    e
  );
}
var Bn = v.createContext(void 0);
Bn.displayName = `FrameworkContext`;
function Vn() {
  let e = v.useContext(Bn);
  return (
    Dn(e, `You must render this element inside a <HydratedRouter> element`),
    e
  );
}
function Hn(e, t) {
  let n = v.useContext(Bn),
    [r, i] = v.useState(!1),
    [a, o] = v.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = v.useRef(null);
  (v.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 },
      );
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    v.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]));
  let p = () => {
      i(!0);
    },
    m = () => {
      (i(!1), o(!1));
    };
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: Un(s, p),
            onBlur: Un(c, m),
            onMouseEnter: Un(l, p),
            onMouseLeave: Un(u, m),
            onTouchStart: Un(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}];
}
function Un(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function Wn({ page: e, ...t }) {
  let n = _t(),
    { router: r } = Rn(),
    i = v.useMemo(() => Ae(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return i
    ? n
      ? v.createElement(Kn, { page: e, matches: i, ...t })
      : v.createElement(qn, { page: e, matches: i, ...t })
    : null;
}
function Gn(e) {
  let { manifest: t, routeModules: n } = Vn(),
    [r, i] = v.useState([]);
  return (
    v.useEffect(() => {
      let r = !1;
      return (
        Mn(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Kn({ page: e, matches: t, ...n }) {
  let r = Mt(),
    { future: i } = Vn(),
    { basename: a } = Rn(),
    o = v.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = On(e, a, i.unstable_trailingSlashAwareDataRequests, `rsc`),
        o = !1,
        s = [];
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (o = !0)
          : s.push(e.route.id);
      return (
        o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      );
    }, [a, i.unstable_trailingSlashAwareDataRequests, e, r, t]);
  return v.createElement(
    v.Fragment,
    null,
    o.map((e) =>
      v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
  );
}
function qn({ page: e, matches: t, ...n }) {
  let r = Mt(),
    { future: i, manifest: a, routeModules: o } = Vn(),
    { basename: s } = Rn(),
    { loaderData: c, matches: l } = zn(),
    u = v.useMemo(() => Nn(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = v.useMemo(() => Nn(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = v.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        l = !1;
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id];
          !t ||
            !t.hasLoader ||
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let d = On(e, s, i.unstable_trailingSlashAwareDataRequests, `data`);
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`),
          ),
        [d.pathname + d.search]
      );
    }, [s, i.unstable_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = v.useMemo(() => Pn(d, a), [d, a]),
    m = Gn(d);
  return v.createElement(
    v.Fragment,
    null,
    f.map((e) =>
      v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
    p.map((e) =>
      v.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n }),
    ),
    m.map(({ key: e, link: t }) =>
      v.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function Jn(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
v.Component;
var Yn =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  Yn && (window.__reactRouterVersion = `7.14.0`);
} catch {}
function Xn({
  basename: e,
  children: t,
  unstable_useTransitions: n,
  window: r,
}) {
  let i = v.useRef();
  i.current ??= xe({ window: r, v5Compat: !0 });
  let a = i.current,
    [o, s] = v.useState({ action: a.action, location: a.location }),
    c = v.useCallback(
      (e) => {
        n === !1 ? s(e) : v.startTransition(() => s(e));
      },
      [n],
    );
  return (
    v.useLayoutEffect(() => a.listen(c), [a, c]),
    v.createElement(cn, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      unstable_useTransitions: n,
    })
  );
}
function Zn({
  basename: e,
  children: t,
  history: n,
  unstable_useTransitions: r,
}) {
  let [i, a] = v.useState({ action: n.action, location: n.location }),
    o = v.useCallback(
      (e) => {
        r === !1 ? a(e) : v.startTransition(() => a(e));
      },
      [r],
    );
  return (
    v.useLayoutEffect(() => n.listen(o), [n, o]),
    v.createElement(cn, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: n,
      unstable_useTransitions: r,
    })
  );
}
Zn.displayName = `unstable_HistoryRouter`;
var Qn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $n = v.forwardRef(function (
    {
      onClick: e,
      discover: t = `render`,
      prefetch: n = `none`,
      relative: r,
      reloadDocument: i,
      replace: a,
      unstable_mask: o,
      state: s,
      target: c,
      to: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) {
    let {
        basename: h,
        navigator: g,
        unstable_useTransitions: _,
      } = v.useContext(xt),
      y = typeof l == `string` && Qn.test(l),
      b = dt(l, h);
    l = b.to;
    let x = At(l, { relative: r }),
      S = Mt(),
      C = null;
    if (o) {
      let e = nt(o, [], S.unstable_mask ? S.unstable_mask.pathname : `/`, !0);
      (h !== `/` && (e.pathname = e.pathname === `/` ? h : rt([h, e.pathname])),
        (C = g.createHref(e)));
    }
    let [w, ee, te] = Hn(n, p),
      ne = or(l, {
        replace: a,
        unstable_mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        unstable_defaultShouldRevalidate: f,
        unstable_useTransitions: _,
      });
    function T(t) {
      (e && e(t), t.defaultPrevented || ne(t));
    }
    let re = !(b.isExternal || i),
      ie = v.createElement(`a`, {
        ...p,
        ...te,
        href: (re ? C : void 0) || b.absoluteURL || x,
        onClick: re ? T : e,
        ref: Jn(m, ee),
        target: c,
        "data-discover": !y && t === `render` ? `true` : void 0,
      });
    return w && !y
      ? v.createElement(v.Fragment, null, ie, v.createElement(Wn, { page: x }))
      : ie;
  });
$n.displayName = `Link`;
var er = v.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l,
) {
  let u = Lt(a, { relative: c.relative }),
    d = Mt(),
    f = v.useContext(ht),
    { navigator: p, basename: m } = v.useContext(xt),
    h = f != null && gr(u) && o === !0,
    g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    _ = d.pathname,
    y =
      f && f.navigation && f.navigation.location
        ? f.navigation.location.pathname
        : null;
  (t ||
    ((_ = _.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (g = g.toLowerCase())),
    y && m && (y = Ye(y, m) || y));
  let b = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
    x = _ === g || (!r && _.startsWith(g) && _.charAt(b) === `/`),
    S =
      y != null &&
      (y === g || (!r && y.startsWith(g) && y.charAt(g.length) === `/`)),
    C = { isActive: x, isPending: S, isTransitioning: h },
    w = x ? e : void 0,
    ee;
  ee =
    typeof n == `function`
      ? n(C)
      : [
          n,
          x ? `active` : null,
          S ? `pending` : null,
          h ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let te = typeof i == `function` ? i(C) : i;
  return v.createElement(
    $n,
    {
      ...c,
      "aria-current": w,
      className: ee,
      ref: l,
      style: te,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(C) : s,
  );
});
er.displayName = `NavLink`;
var tr = v.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = dn,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) => {
    let { unstable_useTransitions: h } = v.useContext(xt),
      g = lr(),
      _ = ur(s, { relative: l }),
      y = o.toLowerCase() === `get` ? `get` : `post`,
      b = typeof s == `string` && Qn.test(s);
    return v.createElement(`form`, {
      ref: m,
      method: y,
      action: _,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o,
              p = () =>
                g(r || e.currentTarget, {
                  fetcherKey: t,
                  method: s,
                  navigate: n,
                  replace: i,
                  state: a,
                  relative: l,
                  preventScrollReset: u,
                  viewTransition: d,
                  unstable_defaultShouldRevalidate: f,
                });
            h && n !== !1 ? v.startTransition(() => p()) : p();
          },
      ...p,
      "data-discover": !b && e === `render` ? `true` : void 0,
    });
  },
);
tr.displayName = `Form`;
function nr({ getKey: e, storageKey: t, ...n }) {
  let r = v.useContext(Bn),
    { basename: i } = v.useContext(xt),
    a = Mt(),
    o = en();
  mr({ getKey: e, storageKey: t });
  let s = v.useMemo(() => {
    if (!r || !e) return null;
    let t = pr(a, o, i, e);
    return t === a.key ? null : t;
  }, []);
  if (!r || r.isSpaMode) return null;
  let c = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: e }, ``);
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ];
      typeof n == `number` && window.scrollTo(0, n);
    } catch (t) {
      (console.error(t), sessionStorage.removeItem(e));
    }
  }).toString();
  return v.createElement(`script`, {
    ...n,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${c})(${En(JSON.stringify(t || dr))}, ${En(JSON.stringify(s))})`,
    },
  });
}
nr.displayName = `ScrollRestoration`;
function rr(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ir(e) {
  let t = v.useContext(mt);
  return (k(t, rr(e)), t);
}
function ar(e) {
  let t = v.useContext(ht);
  return (k(t, rr(e)), t);
}
function or(
  e,
  {
    target: t,
    replace: n,
    unstable_mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    unstable_defaultShouldRevalidate: c,
    unstable_useTransitions: l,
  } = {},
) {
  let u = Ft(),
    d = Mt(),
    f = Lt(e, { relative: o });
  return v.useCallback(
    (p) => {
      if (vn(p, t)) {
        p.preventDefault();
        let t = n === void 0 ? Ee(d) === Ee(f) : n,
          m = () =>
            u(e, {
              replace: t,
              unstable_mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              unstable_defaultShouldRevalidate: c,
            });
        l ? v.startTransition(() => m()) : m();
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l],
  );
}
var sr = 0,
  cr = () => `__${String(++sr)}__`;
function lr() {
  let { router: e } = ir(`useSubmit`),
    { basename: t } = v.useContext(xt),
    n = Qt(),
    r = e.fetch,
    i = e.navigate;
  return v.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = Cn(e, t);
      a.navigate === !1
        ? await r(a.fetcherKey || cr(), n, a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync,
          })
        : await i(a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
    },
    [r, i, t, n],
  );
}
function ur(e, { relative: t } = {}) {
  let { basename: n } = v.useContext(xt),
    r = v.useContext(Ct);
  k(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...Lt(e || `.`, { relative: t }) },
    o = Mt();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      (e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : rt([n, a.pathname])),
    Ee(a)
  );
}
var dr = `react-router-scroll-positions`,
  fr = {};
function pr(e, t, n, r) {
  let i = null;
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: Ye(e.pathname, n) || e.pathname },
        t,
      )),
    (i ??= e.key),
    i
  );
}
function mr({ getKey: e, storageKey: t } = {}) {
  let { router: n } = ir(`useScrollRestoration`),
    { restoreScrollPosition: r, preventScrollReset: i } =
      ar(`useScrollRestoration`),
    { basename: a } = v.useContext(xt),
    o = Mt(),
    s = en(),
    c = $t();
  (v.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`;
      }
    ),
    [],
  ),
    hr(
      v.useCallback(() => {
        if (c.state === `idle`) {
          let t = pr(o, s, a, e);
          fr[t] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || dr, JSON.stringify(fr));
        } catch (e) {
          Se(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`,
          );
        }
        window.history.scrollRestoration = `auto`;
      }, [c.state, e, a, o, s, t]),
    ),
    typeof document < `u` &&
      (v.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || dr);
          e && (fr = JSON.parse(e));
        } catch {}
      }, [t]),
      v.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          fr,
          () => window.scrollY,
          e ? (t, n) => pr(t, n, a, e) : void 0,
        );
        return () => t && t();
      }, [n, a, e]),
      v.useLayoutEffect(() => {
        if (r !== !1) {
          if (typeof r == `number`) {
            window.scrollTo(0, r);
            return;
          }
          try {
            if (o.hash) {
              let e = document.getElementById(
                decodeURIComponent(o.hash.slice(1)),
              );
              if (e) {
                e.scrollIntoView();
                return;
              }
            }
          } catch {
            Se(
              !1,
              `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`,
            );
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [o, r, i])));
}
function hr(e, t) {
  let { capture: n } = t || {};
  v.useEffect(() => {
    let t = n == null ? void 0 : { capture: n };
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t);
      }
    );
  }, [e, n]);
}
function gr(e, { relative: t } = {}) {
  let n = v.useContext(vt);
  k(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = ir(`useViewTransitionState`),
    i = Lt(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = Ye(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Ye(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ke(i.pathname, o) != null || Ke(i.pathname, a) != null;
}
var _r = o((e) => {
    var t = d();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useSyncExternalStore,
      a = t.useRef,
      o = t.useEffect,
      s = t.useMemo,
      c = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, l, u) {
      var d = a(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = s(
        function () {
          function e(e) {
            if (!i) {
              if (((i = !0), (a = e), (e = l(e)), u !== void 0 && f.hasValue)) {
                var t = f.value;
                if (u(t, e)) return (o = t);
              }
              return (o = e);
            }
            if (((t = o), r(a, e))) return t;
            var n = l(e);
            return u !== void 0 && u(t, n) ? ((a = e), t) : ((a = e), (o = n));
          }
          var i = !1,
            a,
            o,
            s = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            s === null
              ? void 0
              : function () {
                  return e(s());
                },
          ];
        },
        [t, n, l, u],
      );
      var p = i(e, d[0], d[1]);
      return (
        o(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        c(p),
        p
      );
    };
  }),
  vr = o((e, t) => {
    t.exports = _r();
  })();
function yr(e) {
  e();
}
function br() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      yr(() => {
        let t = e;
        for (; t; ) (t.callback(), (t = t.next));
      });
    },
    get() {
      let t = [],
        n = e;
      for (; n; ) (t.push(n), (n = n.next));
      return t;
    },
    subscribe(n) {
      let r = !0,
        i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var xr = { notify() {}, get: () => [] };
function Sr(e, t) {
  let n,
    r = xr,
    i = 0,
    a = !1;
  function o(e) {
    u();
    let t = r.subscribe(e),
      n = !1;
    return () => {
      n || ((n = !0), t(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return a;
  }
  function u() {
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = br())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = xr)));
  }
  function f() {
    a || ((a = !0), u());
  }
  function p() {
    a && ((a = !1), d());
  }
  let m = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return m;
}
var Cr =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  wr = typeof navigator < `u` && navigator.product === `ReactNative`,
  Tr = Cr || wr ? v.useLayoutEffect : v.useEffect,
  Er = Symbol.for(`react-redux-context`),
  Dr = typeof globalThis < `u` ? globalThis : {};
function Or() {
  if (!v.createContext) return {};
  let e = (Dr[Er] ??= new Map()),
    t = e.get(v.createContext);
  return (t || ((t = v.createContext(null)), e.set(v.createContext, t)), t);
}
var kr = Or();
function Ar(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = v.useMemo(
      () => ({
        store: i,
        subscription: Sr(i),
        getServerState: r ? () => r : void 0,
      }),
      [i, r],
    ),
    o = v.useMemo(() => i.getState(), [i]);
  Tr(() => {
    let { subscription: e } = a;
    return (
      (e.onStateChange = e.notifyNestedSubs),
      e.trySubscribe(),
      o !== i.getState() && e.notifyNestedSubs(),
      () => {
        (e.tryUnsubscribe(), (e.onStateChange = void 0));
      }
    );
  }, [a, o]);
  let s = n || kr;
  return v.createElement(s.Provider, { value: a }, t);
}
var jr = Ar;
function Mr(e = kr) {
  return function () {
    return v.useContext(e);
  };
}
var Nr = Mr();
function Pr(e = kr) {
  let t = e === kr ? Nr : Mr(e),
    n = () => {
      let { store: e } = t();
      return e;
    };
  return (Object.assign(n, { withTypes: () => n }), n);
}
var Fr = Pr();
function Ir(e = kr) {
  let t = e === kr ? Fr : Pr(e),
    n = () => t().dispatch;
  return (Object.assign(n, { withTypes: () => n }), n);
}
var Lr = Ir(),
  Rr = (e, t) => e === t;
function zr(e = kr) {
  let t = e === kr ? Nr : Mr(e),
    n = (e, n = {}) => {
      let { equalityFn: r = Rr } =
          typeof n == `function` ? { equalityFn: n } : n,
        { store: i, subscription: a, getServerState: o } = t();
      v.useRef(!0);
      let s = v.useCallback(
          {
            [e.name](t) {
              return e(t);
            },
          }[e.name],
          [e],
        ),
        c = (0, vr.useSyncExternalStoreWithSelector)(
          a.addNestedSub,
          i.getState,
          o || i.getState,
          s,
          r,
        );
      return (v.useDebugValue(c), c);
    };
  return (Object.assign(n, { withTypes: () => n }), n);
}
var Br = zr();
function Vr(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Vr(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function Hr() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Vr(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Ur = (e) => typeof e == `number` && !isNaN(e),
  Wr = (e) => typeof e == `string`,
  Gr = (e) => typeof e == `function`,
  Kr = (e) => Wr(e) || Ur(e),
  qr = (e) => (Wr(e) || Gr(e) ? e : null),
  Jr = (e, t) => (e === !1 || (Ur(e) && e > 0) ? e : t),
  Yr = (e) => (0, v.isValidElement)(e) || Wr(e) || Gr(e) || Ur(e);
function Xr(e, t, n = 300) {
  let { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    ((i.minHeight = `initial`),
      (i.height = r + `px`),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        ((i.height = `0`),
          (i.padding = `0`),
          (i.margin = `0`),
          setTimeout(t, n));
      }));
  });
}
function Zr({
  enter: e,
  exit: t,
  appendPosition: n = !1,
  collapse: r = !0,
  collapseDuration: i = 300,
}) {
  return function ({
    children: a,
    position: o,
    preventExitTransition: s,
    done: c,
    nodeRef: l,
    isIn: u,
    playToast: d,
  }) {
    let f = n ? `${e}--${o}` : e,
      p = n ? `${t}--${o}` : t,
      m = (0, v.useRef)(0);
    return (
      (0, v.useLayoutEffect)(() => {
        let e = l.current,
          t = f.split(` `),
          n = (r) => {
            r.target === l.current &&
              (d(),
              e.removeEventListener(`animationend`, n),
              e.removeEventListener(`animationcancel`, n),
              m.current === 0 &&
                r.type !== `animationcancel` &&
                e.classList.remove(...t));
          };
        (e.classList.add(...t),
          e.addEventListener(`animationend`, n),
          e.addEventListener(`animationcancel`, n));
      }, []),
      (0, v.useEffect)(() => {
        let e = l.current,
          t = () => {
            (e.removeEventListener(`animationend`, t), r ? Xr(e, c, i) : c());
          };
        u ||
          (s
            ? t()
            : ((m.current = 1),
              (e.className += ` ${p}`),
              e.addEventListener(`animationend`, t)));
      }, [u]),
      v.createElement(v.Fragment, null, a)
    );
  };
}
function Qr(e, t) {
  return {
    content: $r(e.content, e.props),
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    reason: e.removalReason,
    status: t,
  };
}
function $r(e, t, n = !1) {
  return (0, v.isValidElement)(e) && !Wr(e.type)
    ? (0, v.cloneElement)(e, {
        closeToast: t.closeToast,
        toastProps: t,
        data: t.data,
        isPaused: n,
      })
    : Gr(e)
      ? e({
          closeToast: t.closeToast,
          toastProps: t,
          data: t.data,
          isPaused: n,
        })
      : e;
}
function ei({ closeToast: e, theme: t, ariaLabel: n = `close` }) {
  return v.createElement(
    `button`,
    {
      className: `Toastify__close-button Toastify__close-button--${t}`,
      type: `button`,
      onClick: (t) => {
        (t.stopPropagation(), e(!0));
      },
      "aria-label": n,
    },
    v.createElement(
      `svg`,
      { "aria-hidden": `true`, viewBox: `0 0 14 16` },
      v.createElement(`path`, {
        fillRule: `evenodd`,
        d: `M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`,
      }),
    ),
  );
}
function ti({
  delay: e,
  isRunning: t,
  closeToast: n,
  type: r = `default`,
  hide: i,
  className: a,
  controlledProgress: o,
  progress: s,
  rtl: c,
  isIn: l,
  theme: u,
}) {
  let d = i || (o && s === 0),
    f = {
      animationDuration: `${e}ms`,
      animationPlayState: t ? `running` : `paused`,
    };
  o && (f.transform = `scaleX(${s})`);
  let p = Hr(
      `Toastify__progress-bar`,
      o
        ? `Toastify__progress-bar--controlled`
        : `Toastify__progress-bar--animated`,
      `Toastify__progress-bar-theme--${u}`,
      `Toastify__progress-bar--${r}`,
      { "Toastify__progress-bar--rtl": c },
    ),
    m = Gr(a) ? a({ rtl: c, type: r, defaultClassName: p }) : Hr(p, a),
    h = {
      [o && s >= 1 ? `onTransitionEnd` : `onAnimationEnd`]:
        o && s < 1
          ? null
          : () => {
              l && n();
            },
    };
  return v.createElement(
    `div`,
    { className: `Toastify__progress-bar--wrp`, "data-hidden": d },
    v.createElement(`div`, {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`,
    }),
    v.createElement(`div`, {
      role: `progressbar`,
      "aria-hidden": d ? `true` : `false`,
      "aria-label": `notification timer`,
      "aria-valuenow": o ? Math.round(s * 100) : void 0,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      className: m,
      style: f,
      ...h,
    }),
  );
}
var ni = 1,
  ri = () => `${ni++}`;
function ii(e, t, n) {
  let r = 1,
    i = 0,
    a = [],
    o = [],
    s = t,
    c = new Map(),
    l = new Set(),
    u = (e) => (l.add(e), () => l.delete(e)),
    d = () => {
      ((o = Array.from(c.values())), l.forEach((e) => e()));
    },
    f = ({ containerId: t, toastId: n, updateId: r }) => {
      let i = t ? t !== e : e !== 1,
        a = c.has(n) && r == null;
      return i || a;
    },
    p = (e, t) => {
      c.forEach((n) => {
        var r;
        (t == null || t === n.props.toastId) &&
          ((r = n.toggle) == null || r.call(n, e));
      });
    },
    m = (e) => {
      var t, r;
      e.isActive &&
        ((r = (t = e.props)?.onClose) == null || r.call(t, e.removalReason),
        (e.isActive = !1),
        n(Qr(e, `removed`)));
    },
    h = (e) => {
      if (e == null) c.forEach(m);
      else {
        let t = c.get(e);
        t && m(t);
      }
      d();
    },
    g = () => {
      ((i -= a.length), (a = []));
    },
    _ = (e) => {
      var t, r;
      let { toastId: i, updateId: a } = e.props,
        o = a == null;
      (e.staleId && c.delete(e.staleId),
        (e.isActive = !0),
        c.set(i, e),
        d(),
        n(Qr(e, o ? `added` : `updated`)),
        o && ((r = (t = e.props).onOpen) == null || r.call(t)));
    };
  return {
    id: e,
    props: s,
    observe: u,
    toggle: p,
    removeToast: h,
    toasts: c,
    clearQueue: g,
    buildToast: (e, t) => {
      if (f(t)) return;
      let { toastId: n, updateId: o, data: l, staleId: u, delay: p } = t,
        m = o == null;
      m && i++;
      let g = {
        ...s,
        style: s.toastStyle,
        key: r++,
        ...Object.fromEntries(Object.entries(t).filter(([e, t]) => t != null)),
        toastId: n,
        updateId: o,
        data: l,
        isIn: !1,
        className: qr(t.className || s.toastClassName),
        progressClassName: qr(t.progressClassName || s.progressClassName),
        autoClose: t.isLoading ? !1 : Jr(t.autoClose, s.autoClose),
        closeToast(e) {
          let t = c.get(n);
          t && ((t.removalReason = e), h(n));
        },
        deleteToast() {
          if (c.get(n) != null) {
            if ((c.delete(n), i--, i < 0 && (i = 0), a.length > 0)) {
              _(a.shift());
              return;
            }
            d();
          }
        },
      };
      ((g.closeButton = s.closeButton),
        t.closeButton === !1 || Yr(t.closeButton)
          ? (g.closeButton = t.closeButton)
          : t.closeButton === !0 &&
            (g.closeButton = Yr(s.closeButton) ? s.closeButton : !0));
      let v = { content: e, props: g, staleId: u };
      s.limit && s.limit > 0 && i > s.limit && m
        ? a.push(v)
        : Ur(p)
          ? setTimeout(() => {
              _(v);
            }, p)
          : _(v);
    },
    setProps(e) {
      s = e;
    },
    setToggle: (e, t) => {
      let n = c.get(e);
      n && (n.toggle = t);
    },
    isToastActive: (e) => c.get(e)?.isActive,
    getSnapshot: () => o,
  };
}
var j = new Map(),
  ai = [],
  oi = new Set(),
  si = (e) => oi.forEach((t) => t(e)),
  ci = () => j.size > 0;
function li() {
  (ai.forEach((e) => mi(e.content, e.options)), (ai = []));
}
var ui = (e, { containerId: t }) => j.get(t || 1)?.toasts.get(e);
function di(e, t) {
  var n;
  if (t) return !!((n = j.get(t)) != null && n.isToastActive(e));
  let r = !1;
  return (
    j.forEach((t) => {
      t.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function fi(e) {
  if (!ci()) {
    ai = ai.filter((t) => e != null && t.options.toastId !== e);
    return;
  }
  if (e == null || Kr(e))
    j.forEach((t) => {
      t.removeToast(e);
    });
  else if (e && (`containerId` in e || `id` in e)) {
    let t = j.get(e.containerId);
    t
      ? t.removeToast(e.id)
      : j.forEach((t) => {
          t.removeToast(e.id);
        });
  }
}
var pi = (e = {}) => {
  j.forEach((t) => {
    t.props.limit &&
      (!e.containerId || t.id === e.containerId) &&
      t.clearQueue();
  });
};
function mi(e, t) {
  Yr(e) &&
    (ci() || ai.push({ content: e, options: t }),
    j.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function hi(e) {
  var t;
  (t = j.get(e.containerId || 1)) == null || t.setToggle(e.id, e.fn);
}
function gi(e, t) {
  j.forEach((n) => {
    (t == null || !(t != null && t.containerId) || t?.containerId === n.id) &&
      n.toggle(e, t?.id);
  });
}
function _i(e) {
  let t = e.containerId || 1;
  return {
    subscribe(n) {
      let r = ii(t, e, si);
      j.set(t, r);
      let i = r.observe(n);
      return (
        li(),
        () => {
          (i(), j.delete(t));
        }
      );
    },
    setProps(e) {
      var n;
      (n = j.get(t)) == null || n.setProps(e);
    },
    getSnapshot() {
      return j.get(t)?.getSnapshot();
    },
  };
}
function vi(e) {
  return (
    oi.add(e),
    () => {
      oi.delete(e);
    }
  );
}
function yi(e) {
  return e && (Wr(e.toastId) || Ur(e.toastId)) ? e.toastId : ri();
}
function bi(e, t) {
  return (mi(e, t), t.toastId);
}
function xi(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: yi(t) };
}
function Si(e) {
  return (t, n) => bi(t, xi(e, n));
}
function M(e, t) {
  return bi(e, xi(`default`, t));
}
M.loading = (e, t) =>
  bi(
    e,
    xi(`default`, {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    }),
  );
function Ci(e, { pending: t, error: n, success: r }, i) {
  let a;
  t && (a = Wr(t) ? M.loading(t, i) : M.loading(t.render, { ...i, ...t }));
  let o = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    s = (e, t, n) => {
      if (t == null) {
        M.dismiss(a);
        return;
      }
      let r = { type: e, ...o, ...i, data: n },
        s = Wr(t) ? { render: t } : t;
      return (a ? M.update(a, { ...r, ...s }) : M(s.render, { ...r, ...s }), n);
    },
    c = Gr(e) ? e() : e;
  return (c.then((e) => s(`success`, r, e)).catch((e) => s(`error`, n, e)), c);
}
((M.promise = Ci),
  (M.success = Si(`success`)),
  (M.info = Si(`info`)),
  (M.error = Si(`error`)),
  (M.warning = Si(`warning`)),
  (M.warn = M.warning),
  (M.dark = (e, t) => bi(e, xi(`default`, { theme: `dark`, ...t }))));
function wi(e) {
  fi(e);
}
((M.dismiss = wi),
  (M.clearWaitingQueue = pi),
  (M.isActive = di),
  (M.update = (e, t = {}) => {
    let n = ui(e, t);
    if (n) {
      let { props: r, content: i } = n,
        a = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: ri() };
      a.toastId !== e && (a.staleId = e);
      let o = a.render || i;
      (delete a.render, bi(o, a));
    }
  }),
  (M.done = (e) => {
    M.update(e, { progress: 1 });
  }),
  (M.onChange = vi),
  (M.play = (e) => gi(!0, e)),
  (M.pause = (e) => gi(!1, e)));
function Ti(e) {
  let {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = (0, v.useRef)(_i(e)).current;
  r(e);
  let i = (0, v.useSyncExternalStore)(t, n, n)?.slice();
  function a(t) {
    if (!i) return [];
    let n = new Map();
    return (
      e.newestOnTop && i.reverse(),
      i.forEach((e) => {
        let { position: t } = e.props;
        (n.has(t) || n.set(t, []), n.get(t).push(e));
      }),
      Array.from(n, (e) => t(e[0], e[1]))
    );
  }
  return { getToastToRender: a, isToastActive: di, count: i?.length };
}
function Ei(e) {
  let [t, n] = (0, v.useState)(!1),
    [r, i] = (0, v.useState)(!1),
    a = (0, v.useRef)(null),
    o = (0, v.useRef)({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: s,
      pauseOnHover: c,
      closeToast: l,
      onClick: u,
      closeOnClick: d,
    } = e;
  (hi({ id: e.toastId, containerId: e.containerId, fn: n }),
    (0, v.useEffect)(() => {
      if (e.pauseOnFocusLoss)
        return (
          f(),
          () => {
            p();
          }
        );
    }, [e.pauseOnFocusLoss]));
  function f() {
    (document.hasFocus() || _(),
      window.addEventListener(`focus`, g),
      window.addEventListener(`blur`, _));
  }
  function p() {
    (window.removeEventListener(`focus`, g),
      window.removeEventListener(`blur`, _));
  }
  function m(t) {
    if (e.draggable === !0 || e.draggable === t.pointerType) {
      y();
      let n = a.current;
      ((o.canCloseOnClick = !0),
        (o.canDrag = !0),
        (n.style.transition = `none`),
        e.draggableDirection === `x`
          ? ((o.start = t.clientX),
            (o.removalDistance = n.offsetWidth * (e.draggablePercent / 100)))
          : ((o.start = t.clientY),
            (o.removalDistance =
              (n.offsetHeight *
                (e.draggablePercent === 80
                  ? e.draggablePercent * 1.5
                  : e.draggablePercent)) /
              100)));
    }
  }
  function h(t) {
    let {
      top: n,
      bottom: r,
      left: i,
      right: o,
    } = a.current.getBoundingClientRect();
    t.pointerType === `mouse` &&
    e.pauseOnHover &&
    t.clientX >= i &&
    t.clientX <= o &&
    t.clientY >= n &&
    t.clientY <= r
      ? _()
      : g();
  }
  function g() {
    n(!0);
  }
  function _() {
    n(!1);
  }
  function y() {
    ((o.didMove = !1),
      document.addEventListener(`pointermove`, x),
      document.addEventListener(`pointerup`, S));
  }
  function b() {
    (document.removeEventListener(`pointermove`, x),
      document.removeEventListener(`pointerup`, S));
  }
  function x(n) {
    let r = a.current;
    if (o.canDrag && r) {
      ((o.didMove = !0),
        t && _(),
        e.draggableDirection === `x`
          ? (o.delta = n.clientX - o.start)
          : (o.delta = n.clientY - o.start),
        o.start !== n.clientX && (o.canCloseOnClick = !1));
      let i =
        e.draggableDirection === `x`
          ? `${o.delta}px, var(--y)`
          : `0, calc(${o.delta}px + var(--y))`;
      ((r.style.transform = `translate3d(${i},0)`),
        (r.style.opacity = `${1 - Math.abs(o.delta / o.removalDistance)}`));
    }
  }
  function S() {
    b();
    let t = a.current;
    if (o.canDrag && o.didMove && t) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance)) {
        (i(!0), e.closeToast(!0), e.collapseAll());
        return;
      }
      ((t.style.transition = `transform 0.2s, opacity 0.2s`),
        t.style.removeProperty(`transform`),
        t.style.removeProperty(`opacity`));
    }
  }
  let C = { onPointerDown: m, onPointerUp: h };
  return (
    s && c && ((C.onMouseEnter = _), e.stacked || (C.onMouseLeave = g)),
    d &&
      (C.onClick = (e) => {
        (u && u(e), o.canCloseOnClick && l(!0));
      }),
    {
      playToast: g,
      pauseToast: _,
      isRunning: t,
      preventExitTransition: r,
      toastRef: a,
      eventHandlers: C,
    }
  );
}
var Di = typeof window < `u` ? v.useLayoutEffect : v.useEffect,
  Oi = ({ theme: e, type: t, isLoading: n, ...r }) =>
    v.createElement(`svg`, {
      viewBox: `0 0 24 24`,
      width: `100%`,
      height: `100%`,
      fill:
        e === `colored` ? `currentColor` : `var(--toastify-icon-color-${t})`,
      ...r,
    });
function ki(e) {
  return v.createElement(
    Oi,
    { ...e },
    v.createElement(`path`, {
      d: `M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`,
    }),
  );
}
function Ai(e) {
  return v.createElement(
    Oi,
    { ...e },
    v.createElement(`path`, {
      d: `M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`,
    }),
  );
}
function ji(e) {
  return v.createElement(
    Oi,
    { ...e },
    v.createElement(`path`, {
      d: `M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`,
    }),
  );
}
function Mi(e) {
  return v.createElement(
    Oi,
    { ...e },
    v.createElement(`path`, {
      d: `M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`,
    }),
  );
}
function Ni() {
  return v.createElement(`div`, { className: `Toastify__spinner` });
}
var Pi = { info: Ai, warning: ki, success: ji, error: Mi, spinner: Ni },
  Fi = (e) => e in Pi;
function Ii({ theme: e, type: t, isLoading: n, icon: r }) {
  let i = null,
    a = { theme: e, type: t };
  return (
    r === !1 ||
      (Gr(r)
        ? (i = r({ ...a, isLoading: n }))
        : (0, v.isValidElement)(r)
          ? (i = (0, v.cloneElement)(r, a))
          : n
            ? (i = Pi.spinner())
            : Fi(t) && (i = Pi[t](a))),
    i
  );
}
var Li = (e) => {
    let {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
        playToast: a,
      } = Ei(e),
      {
        closeButton: o,
        children: s,
        autoClose: c,
        onClick: l,
        type: u,
        hideProgressBar: d,
        closeToast: f,
        transition: p,
        position: m,
        className: h,
        style: g,
        progressClassName: _,
        updateId: y,
        role: b,
        progress: x,
        rtl: S,
        toastId: C,
        deleteToast: w,
        isIn: ee,
        isLoading: te,
        closeOnClick: ne,
        theme: T,
        ariaLabel: re,
      } = e,
      ie = Hr(
        `Toastify__toast`,
        `Toastify__toast-theme--${T}`,
        `Toastify__toast--${u}`,
        { "Toastify__toast--rtl": S },
        { "Toastify__toast--close-on-click": ne },
      ),
      ae = Gr(h)
        ? h({ rtl: S, position: m, type: u, defaultClassName: ie })
        : Hr(ie, h),
      oe = Ii(e),
      se = !!x || !c,
      ce = { closeToast: f, type: u, theme: T },
      le = null;
    return (
      o === !1 ||
        (le = Gr(o)
          ? o(ce)
          : (0, v.isValidElement)(o)
            ? (0, v.cloneElement)(o, ce)
            : ei(ce)),
      v.createElement(
        p,
        {
          isIn: ee,
          done: w,
          position: m,
          preventExitTransition: n,
          nodeRef: r,
          playToast: a,
        },
        v.createElement(
          `div`,
          {
            id: C,
            tabIndex: 0,
            onClick: l,
            "data-in": ee,
            className: ae,
            ...i,
            style: g,
            ref: r,
            ...(ee && { role: b, "aria-label": re }),
          },
          oe != null &&
            v.createElement(
              `div`,
              {
                className: Hr(`Toastify__toast-icon`, {
                  "Toastify--animate-icon Toastify__zoom-enter": !te,
                }),
              },
              oe,
            ),
          $r(s, e, !t),
          le,
          !e.customProgressBar &&
            v.createElement(ti, {
              ...(y && !se ? { key: `p-${y}` } : {}),
              rtl: S,
              theme: T,
              delay: c,
              isRunning: t,
              isIn: ee,
              closeToast: f,
              hide: d,
              type: u,
              className: _,
              controlledProgress: se,
              progress: x || 0,
            }),
        ),
      )
    );
  },
  Ri = (e, t = !1) => ({
    enter: `Toastify--animate Toastify__${e}-enter`,
    exit: `Toastify--animate Toastify__${e}-exit`,
    appendPosition: t,
  }),
  zi = Zr(Ri(`bounce`, !0));
(Zr(Ri(`slide`, !0)), Zr(Ri(`zoom`)), Zr(Ri(`flip`)));
var N = {
  position: `top-right`,
  transition: zi,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: `touch`,
  draggablePercent: 80,
  draggableDirection: `x`,
  role: `alert`,
  theme: `light`,
  "aria-label": `Notifications Alt+T`,
  hotKeys: (e) => e.altKey && e.code === `KeyT`,
};
function P(e) {
  let t = { ...N, ...e },
    n = e.stacked,
    [r, i] = (0, v.useState)(!0),
    a = (0, v.useRef)(null),
    { getToastToRender: o, isToastActive: s, count: c } = Ti(t),
    { className: l, style: u, rtl: d, containerId: f, hotKeys: p } = t;
  function m(e) {
    let t = Hr(`Toastify__toast-container`, `Toastify__toast-container--${e}`, {
      "Toastify__toast-container--rtl": d,
    });
    return Gr(l)
      ? l({ position: e, rtl: d, defaultClassName: t })
      : Hr(t, qr(l));
  }
  function h() {
    n && (i(!0), M.play());
  }
  return (
    Di(() => {
      if (n) {
        let e = a.current.querySelectorAll(`[data-in="true"]`),
          n = t.position?.includes(`top`),
          i = 0,
          o = 0;
        Array.from(e)
          .reverse()
          .forEach((e, t) => {
            let a = e;
            (a.classList.add(`Toastify__toast--stacked`),
              t > 0 && (a.dataset.collapsed = `${r}`),
              a.dataset.pos || (a.dataset.pos = n ? `top` : `bot`));
            let s = i * (r ? 0.2 : 1) + (r ? 0 : 12 * t),
              c = Math.max(0.5, 1 - (r ? o : 0));
            (a.style.setProperty(`--y`, `${n ? s : s * -1}px`),
              a.style.setProperty(`--g`, `12`),
              a.style.setProperty(`--s`, `${c}`),
              (i += a.offsetHeight),
              (o += 0.025));
          });
      }
    }, [r, c, n]),
    (0, v.useEffect)(() => {
      function e(e) {
        var t;
        let n = a.current;
        (p(e) &&
          ((t = n?.querySelector(`[tabIndex="0"]`)) == null || t.focus(),
          i(!1),
          M.pause()),
          e.key === `Escape` &&
            (document.activeElement === n ||
              (n != null && n.contains(document.activeElement))) &&
            (i(!0), M.play()));
      }
      return (
        document.addEventListener(`keydown`, e),
        () => {
          document.removeEventListener(`keydown`, e);
        }
      );
    }, [p]),
    v.createElement(
      `section`,
      {
        ref: a,
        className: `Toastify`,
        id: f,
        onMouseEnter: () => {
          n && (i(!1), M.pause());
        },
        onMouseLeave: h,
        "aria-live": `polite`,
        "aria-atomic": `false`,
        "aria-relevant": `additions text`,
        "aria-label": t[`aria-label`],
      },
      o((e, t) => {
        let r = t.length ? { ...u } : { ...u, pointerEvents: `none` };
        return v.createElement(
          `div`,
          {
            tabIndex: -1,
            className: m(e),
            "data-stacked": n,
            style: r,
            key: `c-${e}`,
          },
          t.map(({ content: e, props: t }) =>
            v.createElement(
              Li,
              {
                ...t,
                stacked: n,
                collapseAll: h,
                isIn: s(t.toastId, t.containerId),
                key: `t-${t.key}`,
              },
              e,
            ),
          ),
        );
      }),
    )
  );
}
var Bi = `:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,
  Vi = new Map(),
  Hi = (e, t) => {
    Di(() => {
      if (!e || typeof document > `u`) return;
      let n = document,
        r = Vi.get(n);
      if (r) {
        t && r.setAttribute(`nonce`, t);
        return;
      }
      let i = n.createElement(`style`);
      ((i.textContent = e),
        t && i.setAttribute(`nonce`, t),
        n.head.appendChild(i),
        Vi.set(n, i));
    }, [t]);
  };
function Ui(e) {
  return (Hi(Bi, e.nonce), v.createElement(P, { ...e }));
}
function Wi() {
  return (0, E.jsxs)(`div`, {
    className: `h-screen w-full flex flex-col justify-center items-center -mt-25`,
    children: [
      (0, E.jsx)(`svg`, {
        className: `loader-svg`,
        viewBox: `0 0 200 200`,
        children: (0, E.jsx)(`circle`, {
          className: `loader`,
          cx: `100`,
          cy: `100`,
          r: `80`,
        }),
      }),
      (0, E.jsx)(`h1`, {
        className: `text-2xl font-medium tracking-tight mt-10`,
        children: `Loading..., Please wait!`,
      }),
    ],
  });
}
function Gi({ children: e, className: t = `` }) {
  return (0, E.jsx)(`div`, {
    className: `w-full overflow-x-auto overscroll-x-contain rounded-lg ${t}`,
    children: (0, E.jsx)(`div`, { className: `min-w-[36rem]`, children: e }),
  });
}
var Ki = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  qi = v.createContext && v.createContext(Ki),
  Ji = [`attr`, `size`, `title`];
function Yi(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Xi(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Xi(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Zi() {
  return (
    (Zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zi.apply(null, arguments)
  );
}
function Qi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function $i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qi(Object(n), !0).forEach(function (t) {
          ea(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ea(e, t, n) {
  return (
    (t = ta(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ta(e) {
  var t = na(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function na(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ra(e) {
  return (
    e &&
    e.map((e, t) => v.createElement(e.tag, $i({ key: t }, e.attr), ra(e.child)))
  );
}
function ia(e) {
  return (t) =>
    v.createElement(aa, Zi({ attr: $i({}, e.attr) }, t), ra(e.child));
}
function aa(e) {
  var t = (t) => {
    var { attr: n, size: r, title: i } = e,
      a = Yi(e, Ji),
      o = r || t.size || `1em`,
      s;
    return (
      t.className && (s = t.className),
      e.className && (s = (s ? s + ` ` : ``) + e.className),
      v.createElement(
        `svg`,
        Zi(
          { stroke: `currentColor`, fill: `currentColor`, strokeWidth: `0` },
          t.attr,
          n,
          a,
          {
            className: s,
            style: $i($i({ color: e.color || t.color }, t.style), e.style),
            height: o,
            width: o,
            xmlns: `http://www.w3.org/2000/svg`,
          },
        ),
        i && v.createElement(`title`, null, i),
        e.children,
      )
    );
  };
  return qi === void 0
    ? t(Ki)
    : v.createElement(qi.Consumer, null, (e) => t(e));
}
function oa(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zM15.403 12a3 3 0 0 0 3-3c0-2.708-3-6-3-6s-3 3.271-3 6a3 3 0 0 0 3 3z`,
        },
        child: [],
      },
    ],
  })(e);
}
function sa(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z`,
        },
        child: [],
      },
      { tag: `circle`, attr: { cx: `9`, cy: `13`, r: `1` }, child: [] },
      { tag: `circle`, attr: { cx: `15`, cy: `13`, r: `1` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z`,
        },
        child: [],
      },
    ],
  })(e);
}
function ca(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z`,
        },
        child: [],
      },
    ],
  })(e);
}
function la(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z`,
        },
        child: [],
      },
    ],
  })(e);
}
function ua(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z`,
        },
        child: [],
      },
    ],
  })(e);
}
function da(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z`,
        },
        child: [],
      },
    ],
  })(e);
}
function fa(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z`,
        },
        child: [],
      },
    ],
  })(e);
}
function pa(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0V0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z`,
        },
        child: [],
      },
    ],
  })(e);
}
function ma(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z`,
        },
        child: [],
      },
    ],
  })(e);
}
function ha(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0z` }, child: [] },
      {
        tag: `path`,
        attr: {
          d: `M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z`,
        },
        child: [],
      },
      {
        tag: `path`,
        attr: { d: `M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z` },
        child: [],
      },
    ],
  })(e);
}
function ga(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      { tag: `path`, attr: { fill: `none`, d: `M0 0h24v24H0V0z` }, child: [] },
      {
        tag: `path`,
        attr: { d: `M9 16h6v2H9zM13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z` },
        child: [],
      },
      {
        tag: `path`,
        attr: {
          d: `M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z`,
        },
        child: [],
      },
    ],
  })(e);
}
function _a(e) {
  return ia({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: { d: `M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2` },
        child: [],
      },
      { tag: `circle`, attr: { cx: `12`, cy: `7`, r: `4` }, child: [] },
    ],
  })(e);
}
function va(e) {
  return ia({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [{ tag: `polyline`, attr: { points: `6 9 12 15 18 9` }, child: [] }],
  })(e);
}
function ya(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 256 256`, fill: `currentColor` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-120,0H80V160h48Zm0-104H112v16a8,8,0,0,1-16,0V104H80a8,8,0,0,1,0-16H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16Zm96,104H168V128h56Z`,
        },
        child: [],
      },
    ],
  })(e);
}
function ba(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M6.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM5.5 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM6.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM9 12.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm.75-4.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM9 5.75A.75.75 0 0 1 9.75 5h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 9 5.75ZM13.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Zm-.75-2.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM13.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z`,
        },
        child: [],
      },
      {
        tag: `path`,
        attr: {
          d: `M2 20V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17c0 .173-.022.34-.063.5H20a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.2-.4l-.5-.375a.75.75 0 0 1 .9-1.2l.5.375c.504.378.8.97.8 1.6v8a2 2 0 0 1-2 2h-3.562a.767.767 0 0 1-.166-.018c-.089.012-.18.018-.272.018h-3.75a.75.75 0 0 1-.75-.75V19h-3v2.25a.75.75 0 0 1-.75.75H4a2 2 0 0 1-2-2Zm2 .5h3v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25h3a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5Z`,
        },
        child: [],
      },
    ],
  })(e);
}
function xa(e) {
  return ia({
    tag: `svg`,
    attr: { role: `img`, viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z`,
        },
        child: [],
      },
    ],
  })(e);
}
function Sa(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 512 512` },
    child: [
      {
        tag: `path`,
        attr: {
          fill: `none`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `32`,
          d: `M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z`,
        },
        child: [],
      },
    ],
  })(e);
}
var Ca = [
  { icon: xa, label: `Analytics`, to: `/analytics` },
  { icon: Sa, label: `Settings`, to: `/settings` },
];
function wa(e) {
  switch (e) {
    case `admin`:
      return `/admin`;
    case `organisation`:
      return `/inventory`;
    case `donor`:
      return `/organisation`;
    case `hospital`:
      return `/consumer`;
    default:
      return `/blood`;
  }
}
function Ta(e) {
  switch (e) {
    case `organisation`:
      return [
        { icon: ha, label: `Inventory`, to: `/inventory` },
        { icon: _a, label: `Donor`, to: `/donor` },
        { icon: ya, label: `Hospital`, to: `/hospital` },
        ...Ca,
      ];
    case `admin`:
      return [
        { icon: ha, label: `Donor List`, to: `/donor-list` },
        { icon: _a, label: `Hospital List`, to: `/hospital-list` },
        { icon: ya, label: `Organisation List`, to: `/organisation-list` },
        ...Ca,
      ];
    case `donor`:
      return [
        { icon: ba, label: `Organisation`, to: `/organisation` },
        { icon: ma, label: `Donation History`, to: `/donation` },
        ...Ca,
      ];
    case `hospital`:
      return [
        { icon: ba, label: `Organisation`, to: `/organisation` },
        { icon: _a, label: `Consumer`, to: `/consumer` },
        ...Ca,
      ];
    default:
      return [];
  }
}
var Ea = [
    { to: `/blood`, icon: oa, label: `Donate Blood` },
    { to: `/help`, icon: sa, label: `Need Help` },
    { to: `/about`, icon: pa, label: `About Us` },
    { to: `/contact`, icon: la, label: `Contact Us` },
  ],
  Da = {
    donor: `Donor`,
    admin: `Admin`,
    hospital: `Hospital`,
    organisation: `Organisation`,
  };
function Oa(e) {
  let t = e?.role;
  return t === `hospital`
    ? (e?.hospitalName ?? e?.name)
    : t === `organisation`
      ? (e?.organisationName ?? e?.name)
      : e?.name;
}
function ka({ open: e, onClick: t, className: n = `` }) {
  return (0, E.jsx)(`button`, {
    onClick: t,
    className: `flex items-center justify-center w-11 h-11 sm:w-11 sm:h-11 rounded-full bg-primary-green/10 hover:bg-primary-green/20 transition-colors duration-200 shrink-0 ${n}`,
    "aria-label": `Toggle menu`,
    children: (0, E.jsx)(`div`, {
      className: `flex flex-col gap-0.5 w-4`,
      children: [
        { transform: e ? `translateY(4px) rotate(45deg)` : `none`, opacity: 1 },
        { transform: `none`, opacity: e ? 0 : 1 },
        {
          transform: e ? `translateY(-4px) rotate(-45deg)` : `none`,
          opacity: 1,
        },
      ].map((e, t) =>
        (0, E.jsx)(
          `span`,
          {
            className: `block w-4 h-0.5 bg-primary-dark rounded-full transition-all duration-300 ease-in-out`,
            style: { transform: e.transform, opacity: e.opacity },
          },
          t,
        ),
      ),
    }),
  });
}
function Aa() {
  let [e, t] = (0, v.useState)(!1),
    [n, r] = (0, v.useState)(!1),
    [i, a] = (0, v.useState)(!1),
    [o, s] = (0, v.useState)(null),
    c = (0, v.useRef)(null),
    { user: l } = Br((e) => e.auth),
    u = Ft(),
    d = Da[l?.role ?? `user`],
    f = Oa(l),
    p = Ta(l?.role);
  return (
    O(({ scroll: e }) => {
      t(e > 50);
    }),
    (0, v.useEffect)(() => {
      function e(e) {
        c.current && !c.current.contains(e.target) && r(!1);
      }
      return (
        document.addEventListener(`mousedown`, e),
        () => document.removeEventListener(`mousedown`, e)
      );
    }, []),
    (0, v.useEffect)(
      () => (
        (document.body.style.overflow = i ? `hidden` : ``),
        () => {
          document.body.style.overflow = ``;
        }
      ),
      [i],
    ),
    (0, v.useEffect)(() => {
      let e = () => {
        window.innerWidth >= 768 && a(!1);
      };
      return (
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      );
    }, []),
    (0, E.jsxs)(`nav`, {
      className: `fixed top-0 left-0 right-0 z-50 bg-primary-light border-b border-primary-dark/10`,
      style: {
        height: e ? `48px` : `64px`,
        transition: `height 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: e ? `0 4px 10px rgba(0,0,0,0.2)` : `none`,
      },
      children: [
        (0, E.jsx)(`div`, {
          className: `max-w-7xl mx-auto h-full px-4 sm:px-6`,
          children: (0, E.jsxs)(`div`, {
            className: `flex items-center justify-between h-full gap-3`,
            children: [
              (0, E.jsxs)(`div`, {
                className: `flex items-center gap-2 shrink-0`,
                children: [
                  (0, E.jsx)(`img`, {
                    src: `./logo1.png`,
                    alt: `logo`,
                    className: `h-8 sm:h-9 object-contain`,
                  }),
                  (0, E.jsx)(er, {
                    to: `/`,
                    className: `text-lg sm:text-2xl font-bold tracking-tight text-primary-dark whitespace-nowrap`,
                    children: `RaktSeva`,
                  }),
                ],
              }),
              (0, E.jsx)(`div`, {
                className: `hidden md:flex items-center flex-wrap justify-center`,
                children: Ea.map((e) => {
                  let t = e.icon;
                  return (0, E.jsxs)(
                    er,
                    {
                      to: e.to,
                      className: ({ isActive: e }) =>
                        `flex items-center gap-1 p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base font-medium tracking-tight transition-colors duration-200 ${e ? `text-primary-green` : `text-primary-dark/50`}`,
                      children: [(0, E.jsx)(t, { size: 18 }), e.label],
                    },
                    e.to,
                  );
                }),
              }),
              (0, E.jsxs)(`div`, {
                className: `flex items-center gap-2 sm:gap-3 shrink-0`,
                children: [
                  (0, E.jsxs)(`div`, {
                    className: `relative`,
                    ref: c,
                    children: [
                      (0, E.jsxs)(`button`, {
                        onClick: () => r((e) => !e),
                        className: `flex items-center gap-2 p-1.5 rounded-full bg-primary-green/10 hover:bg-primary-green/20 transition-all duration-200 cursor-pointer`,
                        children: [
                          (0, E.jsx)(`div`, {
                            className: `w-8 h-8 rounded-full bg-primary-green/20 flex items-center justify-center shrink-0`,
                            children: (0, E.jsx)(`span`, {
                              className: `text-xs font-bold text-primary-green`,
                              children: f?.charAt(0)?.toUpperCase(),
                            }),
                          }),
                          (0, E.jsxs)(`div`, {
                            className: `hidden sm:flex items-center gap-2`,
                            children: [
                              (0, E.jsx)(`span`, {
                                className: `text-sm font-medium text-primary-dark/70 truncate`,
                                children: f,
                              }),
                              (0, E.jsx)(va, {
                                size: 16,
                                className: `text-primary-dark/50 transition-transform duration-200 shrink-0 ${n ? `rotate-180` : ``}`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      n &&
                        (0, E.jsxs)(`div`, {
                          className: `absolute right-0 mt-3 w-[280px] max-w-[90vw] bg-primary-light rounded-2xl shadow-2xl border border-primary-green/20 overflow-hidden`,
                          children: [
                            (0, E.jsx)(`div`, {
                              className: `p-4 bg-primary-green/10 border-b border-primary-green/20`,
                              children: (0, E.jsxs)(`div`, {
                                className: `flex items-center gap-3`,
                                children: [
                                  (0, E.jsx)(`div`, {
                                    className: `w-12 h-12 rounded-full bg-primary-green/20 flex items-center justify-center shrink-0`,
                                    children: (0, E.jsx)(`span`, {
                                      className: `text-lg font-bold text-primary-green`,
                                      children: f?.charAt(0)?.toUpperCase(),
                                    }),
                                  }),
                                  (0, E.jsxs)(`div`, {
                                    className: `min-w-0 flex-1`,
                                    children: [
                                      (0, E.jsxs)(`p`, {
                                        className: `font-semibold text-primary-dark truncate`,
                                        children: [`Welcome, `, f],
                                      }),
                                      (0, E.jsx)(`p`, {
                                        className: `text-xs text-primary-dark/50 truncate`,
                                        children: l?.email,
                                      }),
                                      (0, E.jsxs)(`div`, {
                                        className: `flex flex-wrap items-center gap-2 mt-1`,
                                        children: [
                                          l?.bloodGroup &&
                                            (0, E.jsxs)(`div`, {
                                              className: `flex items-center gap-1 text-primary-green`,
                                              children: [
                                                (0, E.jsx)(ga, { size: 14 }),
                                                (0, E.jsx)(`span`, {
                                                  className: `text-xs font-medium`,
                                                  children: l.bloodGroup,
                                                }),
                                              ],
                                            }),
                                          (0, E.jsx)(`span`, {
                                            className: `text-xs px-2 py-0.5 rounded-full bg-primary-green/10 text-primary-green font-semibold`,
                                            children: d,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(`div`, {
                              className: `py-2`,
                              children: p.map((e) => {
                                let t = e.icon;
                                return (0, E.jsxs)(
                                  er,
                                  {
                                    to: e.to,
                                    onClick: () => r(!1),
                                    onMouseEnter: () => s(e.to),
                                    onMouseLeave: () => s(null),
                                    className: `flex items-center gap-3 px-4 py-2 text-sm font-semibold text-primary-dark/80 hover:bg-primary-green/10 hover:text-primary-green transition-colors duration-150`,
                                    children: [
                                      (0, E.jsx)(t, {
                                        size: 16,
                                        className: `transition-colors duration-150 ${o === e.to ? `text-primary-green` : ``}`,
                                      }),
                                      e.label,
                                    ],
                                  },
                                  e.to,
                                );
                              }),
                            }),
                            (0, E.jsx)(`div`, {
                              className: `border-t border-primary-green/20 p-1`,
                              children: (0, E.jsxs)(`button`, {
                                onClick: () => {
                                  (localStorage.clear(), u(`/login`));
                                },
                                className: `flex items-center gap-3 w-full px-4 py-2 rounded-xl text-sm font-semibold text-primary-red hover:bg-primary-red/10 transition-colors duration-150 cursor-pointer`,
                                children: [
                                  (0, E.jsx)(fa, { size: 16 }),
                                  `Logout`,
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, E.jsx)(ka, {
                    open: i,
                    onClick: () => a((e) => !e),
                    className: `md:hidden`,
                  }),
                ],
              }),
            ],
          }),
        }),
        i &&
          (0, E.jsx)(`div`, {
            className: `md:hidden border-t border-primary-green/10 bg-primary-light shadow-xl max-h-[calc(100dvh-4rem)] overflow-y-auto`,
            children: (0, E.jsxs)(`div`, {
              className: `p-4 flex flex-col gap-1`,
              children: [
                (0, E.jsx)(`p`, {
                  className: `px-3 pt-1 pb-2 text-xs font-semibold uppercase tracking-wider text-primary-dark/40`,
                  children: `Pages`,
                }),
                Ea.map((e) => {
                  let t = e.icon;
                  return (0, E.jsxs)(
                    er,
                    {
                      to: e.to,
                      onClick: () => a(!1),
                      className: ({ isActive: e }) =>
                        `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors duration-200 ${e ? `text-primary-green` : `text-primary-dark/50`}`,
                      children: [(0, E.jsx)(t, { size: 18 }), e.label],
                    },
                    e.to,
                  );
                }),
                p.length > 0 &&
                  (0, E.jsxs)(E.Fragment, {
                    children: [
                      (0, E.jsx)(`div`, {
                        className: `my-2 border-t border-primary-green/10`,
                      }),
                      (0, E.jsx)(`p`, {
                        className: `px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary-dark/40`,
                        children: `Dashboard`,
                      }),
                      p.map((e) => {
                        let t = e.icon;
                        return (0, E.jsxs)(
                          er,
                          {
                            to: e.to,
                            onClick: () => a(!1),
                            className: ({ isActive: e }) =>
                              `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors duration-200 ${e ? `text-primary-green` : `text-primary-dark/50`}`,
                            children: [(0, E.jsx)(t, { size: 18 }), e.label],
                          },
                          e.to,
                        );
                      }),
                    ],
                  }),
              ],
            }),
          }),
      ],
    })
  );
}
function ja({ children: e }) {
  return (0, E.jsxs)(E.Fragment, {
    children: [
      (0, E.jsx)(Aa, {}),
      (0, E.jsx)(`div`, {
        className: `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-12 overflow-x-hidden`,
        children: e,
      }),
    ],
  });
}
function Ma(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 15 15`, fill: `none` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M10.9688 3.21871C11.1933 2.99416 11.5567 2.99416 11.7813 3.21871C12.0056 3.44328 12.0057 3.80673 11.7813 4.03121L8.31251 7.49996L11.7813 10.9687L11.8555 11.0586C12.0026 11.2817 11.9777 11.5848 11.7813 11.7812C11.5849 11.9776 11.2818 12.0026 11.0586 11.8554L10.9688 11.7812L7.50001 8.31246L4.03126 11.7812C3.80677 12.0057 3.44332 12.0056 3.21876 11.7812C2.99421 11.5567 2.99421 11.1933 3.21876 10.9687L6.68751 7.49996L3.21876 4.03121L3.14454 3.94137C2.99723 3.71819 3.0223 3.41517 3.21876 3.21871C3.41522 3.02225 3.71823 2.99719 3.94141 3.14449L4.03126 3.21871L7.50001 6.68746L10.9688 3.21871Z`,
          fill: `currentColor`,
        },
        child: [],
      },
    ],
  })(e);
}
function F({
  labelFor: e,
  labelText: t,
  name: n,
  value: r,
  inputType: i,
  onChange: a,
}) {
  return (0, E.jsxs)(`div`, {
    className: `flex flex-col text-sm`,
    children: [
      (0, E.jsx)(`label`, { htmlFor: e, children: t }),
      (0, E.jsx)(`input`, {
        className: `font-medium px-4 py-2 rounded-2xl border border-primary-dark outline-none`,
        placeholder: `Enter your ${t?.toLowerCase()}`,
        id: e,
        name: n,
        value: r,
        type: i,
        onChange: a,
      }),
    ],
  });
}
function Na(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var { toString: Pa } = Object.prototype,
  { getPrototypeOf: Fa } = Object,
  { iterator: Ia, toStringTag: La } = Symbol,
  Ra = ((e) => (t) => {
    let n = Pa.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  za = (e) => ((e = e.toLowerCase()), (t) => Ra(t) === e),
  Ba = (e) => (t) => typeof t === e,
  { isArray: Va } = Array,
  Ha = Ba(`undefined`);
function Ua(e) {
  return (
    e !== null &&
    !Ha(e) &&
    e.constructor !== null &&
    !Ha(e.constructor) &&
    qa(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
var Wa = za(`ArrayBuffer`);
function Ga(e) {
  let t;
  return (
    (t =
      typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && Wa(e.buffer)),
    t
  );
}
var Ka = Ba(`string`),
  qa = Ba(`function`),
  Ja = Ba(`number`),
  Ya = (e) => typeof e == `object` && !!e,
  Xa = (e) => e === !0 || e === !1,
  Za = (e) => {
    if (Ra(e) !== `object`) return !1;
    let t = Fa(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(La in e) &&
      !(Ia in e)
    );
  },
  Qa = (e) => {
    if (!Ya(e) || Ua(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  $a = za(`Date`),
  eo = za(`File`),
  to = (e) => !!(e && e.uri !== void 0),
  no = (e) => e && e.getParts !== void 0,
  ro = za(`Blob`),
  io = za(`FileList`),
  ao = (e) => Ya(e) && qa(e.pipe);
function oo() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
}
var so = oo(),
  co = so.FormData === void 0 ? void 0 : so.FormData,
  lo = (e) => {
    if (!e) return !1;
    if (co && e instanceof co) return !0;
    let t = Fa(e);
    if (!t || t === Object.prototype || !qa(e.append)) return !1;
    let n = Ra(e);
    return (
      n === `formdata` ||
      (n === `object` && qa(e.toString) && e.toString() === `[object FormData]`)
    );
  },
  uo = za(`URLSearchParams`),
  [fo, po, mo, ho] = [`ReadableStream`, `Request`, `Response`, `Headers`].map(
    za,
  ),
  go = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``);
function _o(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e == null) return;
  let r, i;
  if ((typeof e != `object` && (e = [e]), Va(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    if (Ua(e)) return;
    let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length,
      o;
    for (r = 0; r < a; r++) ((o = i[r]), t.call(null, e[o], o, e));
  }
}
function I(e, t) {
  if (Ua(e)) return null;
  t = t.toLowerCase();
  let n = Object.keys(e),
    r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
var L =
    typeof globalThis < `u`
      ? globalThis
      : typeof self < `u`
        ? self
        : typeof window < `u`
          ? window
          : global,
  vo = (e) => !Ha(e) && e !== L;
function yo(...e) {
  let { caseless: t, skipUndefined: n } = (vo(this) && this) || {},
    r = {},
    i = (e, i) => {
      if (i === `__proto__` || i === `constructor` || i === `prototype`) return;
      let a = (t && I(r, i)) || i,
        o = Ao(r, a) ? r[a] : void 0;
      Za(o) && Za(e)
        ? (r[a] = yo(o, e))
        : Za(e)
          ? (r[a] = yo({}, e))
          : Va(e)
            ? (r[a] = e.slice())
            : (!n || !Ha(e)) && (r[a] = e);
    };
  for (let t = 0, n = e.length; t < n; t++) e[t] && _o(e[t], i);
  return r;
}
var bo = (e, t, n, { allOwnKeys: r } = {}) => (
    _o(
      t,
      (t, r) => {
        n && qa(t)
          ? Object.defineProperty(e, r, {
              __proto__: null,
              value: Na(t, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, r, {
              __proto__: null,
              value: t,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  xo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  So = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, `constructor`, {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, `super`, {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n));
  },
  Co = (e, t, n, r) => {
    let i,
      a,
      o,
      s = {};
    if (((t ||= {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        ((o = i[a]),
          (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0)));
      e = n !== !1 && Fa(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  wo = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    let r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  To = (e) => {
    if (!e) return null;
    if (Va(e)) return e;
    let t = e.length;
    if (!Ja(t)) return null;
    let n = Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  R = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < `u` && Fa(Uint8Array)),
  Eo = (e, t) => {
    let n = (e && e[Ia]).call(e),
      r;
    for (; (r = n.next()) && !r.done; ) {
      let n = r.value;
      t.call(e, n[0], n[1]);
    }
  },
  Do = (e, t) => {
    let n,
      r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Oo = za(`HTMLFormElement`),
  ko = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
      return t.toUpperCase() + n;
    }),
  Ao = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  jo = za(`RegExp`),
  Mo = (e, t) => {
    let n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (_o(n, (n, i) => {
      let a;
      (a = t(n, i, e)) !== !1 && (r[i] = a || n);
    }),
      Object.defineProperties(e, r));
  },
  No = (e) => {
    Mo(e, (t, n) => {
      if (qa(e) && [`arguments`, `caller`, `callee`].includes(n)) return !1;
      let r = e[n];
      if (qa(r)) {
        if (((t.enumerable = !1), `writable` in t)) {
          t.writable = !1;
          return;
        }
        t.set ||= () => {
          throw Error(`Can not rewrite read-only method '` + n + `'`);
        };
      }
    });
  },
  Po = (e, t) => {
    let n = {},
      r = (e) => {
        e.forEach((e) => {
          n[e] = !0;
        });
      };
    return (Va(e) ? r(e) : r(String(e).split(t)), n);
  },
  Fo = () => {},
  Io = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Lo(e) {
  return !!(e && qa(e.append) && e[La] === `FormData` && e[Ia]);
}
var Ro = (e) => {
    let t = Array(10),
      n = (e, r) => {
        if (Ya(e)) {
          if (t.indexOf(e) >= 0) return;
          if (Ua(e)) return e;
          if (!(`toJSON` in e)) {
            t[r] = e;
            let i = Va(e) ? [] : {};
            return (
              _o(e, (e, t) => {
                let a = n(e, r + 1);
                !Ha(a) && (i[t] = a);
              }),
              (t[r] = void 0),
              i
            );
          }
        }
        return e;
      };
    return n(e, 0);
  },
  zo = za(`AsyncFunction`),
  Bo = (e) => e && (Ya(e) || qa(e)) && qa(e.then) && qa(e.catch),
  Vo = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((e, t) => (
            L.addEventListener(
              `message`,
              ({ source: n, data: r }) => {
                n === L && r === e && t.length && t.shift()();
              },
              !1,
            ),
            (n) => {
              (t.push(n), L.postMessage(e, `*`));
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == `function`,
    qa(L.postMessage),
  ),
  z = {
    isArray: Va,
    isArrayBuffer: Wa,
    isBuffer: Ua,
    isFormData: lo,
    isArrayBufferView: Ga,
    isString: Ka,
    isNumber: Ja,
    isBoolean: Xa,
    isObject: Ya,
    isPlainObject: Za,
    isEmptyObject: Qa,
    isReadableStream: fo,
    isRequest: po,
    isResponse: mo,
    isHeaders: ho,
    isUndefined: Ha,
    isDate: $a,
    isFile: eo,
    isReactNativeBlob: to,
    isReactNative: no,
    isBlob: ro,
    isRegExp: jo,
    isFunction: qa,
    isStream: ao,
    isURLSearchParams: uo,
    isTypedArray: R,
    isFileList: io,
    forEach: _o,
    merge: yo,
    extend: bo,
    trim: go,
    stripBOM: xo,
    inherits: So,
    toFlatObject: Co,
    kindOf: Ra,
    kindOfTest: za,
    endsWith: wo,
    toArray: To,
    forEachEntry: Eo,
    matchAll: Do,
    isHTMLForm: Oo,
    hasOwnProperty: Ao,
    hasOwnProp: Ao,
    reduceDescriptors: Mo,
    freezeMethods: No,
    toObjectSet: Po,
    toCamelCase: ko,
    noop: Fo,
    toFiniteNumber: Io,
    findKey: I,
    global: L,
    isContextDefined: vo,
    isSpecCompliantForm: Lo,
    toJSONObject: Ro,
    isAsyncFn: zo,
    isThenable: Bo,
    setImmediate: Vo,
    asap:
      typeof queueMicrotask < `u`
        ? queueMicrotask.bind(L)
        : (typeof process < `u` && process.nextTick) || Vo,
    isIterable: (e) => e != null && qa(e[Ia]),
  },
  Ho = z.toObjectSet([
    `age`,
    `authorization`,
    `content-length`,
    `content-type`,
    `etag`,
    `expires`,
    `from`,
    `host`,
    `if-modified-since`,
    `if-unmodified-since`,
    `last-modified`,
    `location`,
    `max-forwards`,
    `proxy-authorization`,
    `referer`,
    `retry-after`,
    `user-agent`,
  ]),
  Uo = (e) => {
    let t = {},
      n,
      r,
      i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (e) {
            ((i = e.indexOf(`:`)),
              (n = e.substring(0, i).trim().toLowerCase()),
              (r = e.substring(i + 1).trim()),
              !(!n || (t[n] && Ho[n])) &&
                (n === `set-cookie`
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + `, ` + r : r)));
          }),
      t
    );
  },
  Wo = Symbol(`internals`),
  Go = /[^\x09\x20-\x7E\x80-\xFF]/g;
function Ko(e) {
  let t = 0,
    n = e.length;
  for (; t < n; ) {
    let n = e.charCodeAt(t);
    if (n !== 9 && n !== 32) break;
    t += 1;
  }
  for (; n > t; ) {
    let t = e.charCodeAt(n - 1);
    if (t !== 9 && t !== 32) break;
    --n;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
function qo(e) {
  return e && String(e).trim().toLowerCase();
}
function Jo(e) {
  return Ko(e.replace(Go, ``));
}
function Yo(e) {
  return e === !1 || e == null ? e : z.isArray(e) ? e.map(Yo) : Jo(String(e));
}
function Xo(e) {
  let t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
    r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
var Zo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qo(e, t, n, r, i) {
  if (z.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), z.isString(t))) {
    if (z.isString(r)) return t.indexOf(r) !== -1;
    if (z.isRegExp(r)) return r.test(t);
  }
}
function $o(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function es(e, t) {
  let n = z.toCamelCase(` ` + t);
  [`get`, `set`, `has`].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (e, n, i) {
        return this[r].call(this, t, e, n, i);
      },
      configurable: !0,
    });
  });
}
var ts = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    let r = this;
    function i(e, t, n) {
      let i = qo(t);
      if (!i) throw Error(`header name must be a non-empty string`);
      let a = z.findKey(r, i);
      (!a || r[a] === void 0 || n === !0 || (n === void 0 && r[a] !== !1)) &&
        (r[a || t] = Yo(e));
    }
    let a = (e, t) => z.forEach(e, (e, n) => i(e, n, t));
    if (z.isPlainObject(e) || e instanceof this.constructor) a(e, t);
    else if (z.isString(e) && (e = e.trim()) && !Zo(e)) a(Uo(e), t);
    else if (z.isObject(e) && z.isIterable(e)) {
      let n = {},
        r,
        i;
      for (let t of e) {
        if (!z.isArray(t))
          throw TypeError(`Object iterator must return a key-value pair`);
        n[(i = t[0])] = (r = n[i])
          ? z.isArray(r)
            ? [...r, t[1]]
            : [r, t[1]]
          : t[1];
      }
      a(n, t);
    } else e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (((e = qo(e)), e)) {
      let n = z.findKey(this, e);
      if (n) {
        let e = this[n];
        if (!t) return e;
        if (t === !0) return Xo(e);
        if (z.isFunction(t)) return t.call(this, e, n);
        if (z.isRegExp(t)) return t.exec(e);
        throw TypeError(`parser must be boolean|regexp|function`);
      }
    }
  }
  has(e, t) {
    if (((e = qo(e)), e)) {
      let n = z.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Qo(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    let n = this,
      r = !1;
    function i(e) {
      if (((e = qo(e)), e)) {
        let i = z.findKey(n, e);
        i && (!t || Qo(n, n[i], i, t)) && (delete n[i], (r = !0));
      }
    }
    return (z.isArray(e) ? e.forEach(i) : i(e), r);
  }
  clear(e) {
    let t = Object.keys(this),
      n = t.length,
      r = !1;
    for (; n--; ) {
      let i = t[n];
      (!e || Qo(this, this[i], i, e, !0)) && (delete this[i], (r = !0));
    }
    return r;
  }
  normalize(e) {
    let t = this,
      n = {};
    return (
      z.forEach(this, (r, i) => {
        let a = z.findKey(n, i);
        if (a) {
          ((t[a] = Yo(r)), delete t[i]);
          return;
        }
        let o = e ? $o(i) : String(i).trim();
        (o !== i && delete t[i], (t[o] = Yo(r)), (n[o] = !0));
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    let t = Object.create(null);
    return (
      z.forEach(this, (n, r) => {
        n != null && n !== !1 && (t[r] = e && z.isArray(n) ? n.join(`, `) : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + `: ` + t).join(`
`);
  }
  getSetCookie() {
    return this.get(`set-cookie`) || [];
  }
  get [Symbol.toStringTag]() {
    return `AxiosHeaders`;
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    let n = new this(e);
    return (t.forEach((e) => n.set(e)), n);
  }
  static accessor(e) {
    let t = (this[Wo] = this[Wo] = { accessors: {} }).accessors,
      n = this.prototype;
    function r(e) {
      let r = qo(e);
      t[r] || (es(n, e), (t[r] = !0));
    }
    return (z.isArray(e) ? e.forEach(r) : r(e), this);
  }
};
(ts.accessor([
  `Content-Type`,
  `Content-Length`,
  `Accept`,
  `Accept-Encoding`,
  `User-Agent`,
  `Authorization`,
]),
  z.reduceDescriptors(ts.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[n] = e;
      },
    };
  }),
  z.freezeMethods(ts));
var ns = `[REDACTED ****]`;
function rs(e) {
  if (z.hasOwnProp(e, `toJSON`)) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (z.hasOwnProp(t, `toJSON`)) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function is(e, t) {
  let n = new Set(t.map((e) => String(e).toLowerCase())),
    r = [],
    i = (e) => {
      if (typeof e != `object` || !e || z.isBuffer(e)) return e;
      if (r.indexOf(e) !== -1) return;
      (e instanceof ts && (e = e.toJSON()), r.push(e));
      let t;
      if (z.isArray(e))
        ((t = []),
          e.forEach((e, n) => {
            let r = i(e);
            z.isUndefined(r) || (t[n] = r);
          }));
      else {
        if (!z.isPlainObject(e) && rs(e)) return (r.pop(), e);
        t = Object.create(null);
        for (let [r, a] of Object.entries(e)) {
          let e = n.has(r.toLowerCase()) ? ns : i(a);
          z.isUndefined(e) || (t[r] = e);
        }
      }
      return (r.pop(), t);
    };
  return i(e);
}
var B = class e extends Error {
  static from(t, n, r, i, a, o) {
    let s = new e(t.message, n || t.code, r, i, a);
    return (
      (s.cause = t),
      (s.name = t.name),
      t.status != null && s.status == null && (s.status = t.status),
      o && Object.assign(s, o),
      s
    );
  }
  constructor(e, t, n, r, i) {
    (super(e),
      Object.defineProperty(this, `message`, {
        __proto__: null,
        value: e,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = `AxiosError`),
      (this.isAxiosError = !0),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && ((this.response = i), (this.status = i.status)));
  }
  toJSON() {
    let e = this.config,
      t = e && z.hasOwnProp(e, `redact`) ? e.redact : void 0,
      n = z.isArray(t) && t.length > 0 ? is(e, t) : z.toJSONObject(e);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: n,
      code: this.code,
      status: this.status,
    };
  }
};
((B.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`),
  (B.ERR_BAD_OPTION = `ERR_BAD_OPTION`),
  (B.ECONNABORTED = `ECONNABORTED`),
  (B.ETIMEDOUT = `ETIMEDOUT`),
  (B.ECONNREFUSED = `ECONNREFUSED`),
  (B.ERR_NETWORK = `ERR_NETWORK`),
  (B.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`),
  (B.ERR_DEPRECATED = `ERR_DEPRECATED`),
  (B.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`),
  (B.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`),
  (B.ERR_CANCELED = `ERR_CANCELED`),
  (B.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`),
  (B.ERR_INVALID_URL = `ERR_INVALID_URL`),
  (B.ERR_FORM_DATA_DEPTH_EXCEEDED = `ERR_FORM_DATA_DEPTH_EXCEEDED`));
function as(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function os(e) {
  return z.endsWith(e, `[]`) ? e.slice(0, -2) : e;
}
function ss(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return ((e = os(e)), !n && t ? `[` + e + `]` : e);
        })
        .join(n ? `.` : ``)
    : t;
}
function cs(e) {
  return z.isArray(e) && !e.some(as);
}
var ls = z.toFlatObject(z, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function us(e, t, n) {
  if (!z.isObject(e)) throw TypeError(`target must be an object`);
  ((t ||= new FormData()),
    (n = z.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (e, t) {
        return !z.isUndefined(t[e]);
      },
    )));
  let r = n.metaTokens,
    i = n.visitor || d,
    a = n.dots,
    o = n.indexes,
    s = n.Blob || (typeof Blob < `u` && Blob),
    c = n.maxDepth === void 0 ? 100 : n.maxDepth,
    l = s && z.isSpecCompliantForm(t);
  if (!z.isFunction(i)) throw TypeError(`visitor must be a function`);
  function u(e) {
    if (e === null) return ``;
    if (z.isDate(e)) return e.toISOString();
    if (z.isBoolean(e)) return e.toString();
    if (!l && z.isBlob(e))
      throw new B(`Blob is not supported. Use a Buffer instead.`);
    return z.isArrayBuffer(e) || z.isTypedArray(e)
      ? l && typeof Blob == `function`
        ? new Blob([e])
        : Buffer.from(e)
      : e;
  }
  function d(e, n, i) {
    let s = e;
    if (z.isReactNative(t) && z.isReactNativeBlob(e))
      return (t.append(ss(i, n, a), u(e)), !1);
    if (e && !i && typeof e == `object`) {
      if (z.endsWith(n, `{}`))
        ((n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e)));
      else if (
        (z.isArray(e) && cs(e)) ||
        ((z.isFileList(e) || z.endsWith(n, `[]`)) && (s = z.toArray(e)))
      )
        return (
          (n = os(n)),
          s.forEach(function (e, r) {
            !(z.isUndefined(e) || e === null) &&
              t.append(
                o === !0 ? ss([n], r, a) : o === null ? n : n + `[]`,
                u(e),
              );
          }),
          !1
        );
    }
    return as(e) ? !0 : (t.append(ss(i, n, a), u(e)), !1);
  }
  let f = [],
    p = Object.assign(ls, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: as,
    });
  function m(e, n, r = 0) {
    if (!z.isUndefined(e)) {
      if (r > c)
        throw new B(
          `Object is too deeply nested (` + r + ` levels). Max depth: ` + c,
          B.ERR_FORM_DATA_DEPTH_EXCEEDED,
        );
      if (f.indexOf(e) !== -1)
        throw Error(`Circular reference detected in ` + n.join(`.`));
      (f.push(e),
        z.forEach(e, function (e, a) {
          (!(z.isUndefined(e) || e === null) &&
            i.call(t, e, z.isString(a) ? a.trim() : a, n, p)) === !0 &&
            m(e, n ? n.concat(a) : [a], r + 1);
        }),
        f.pop());
    }
  }
  if (!z.isObject(e)) throw TypeError(`data must be an object`);
  return (m(e), t);
}
function ds(e) {
  let t = {
    "!": `%21`,
    "'": `%27`,
    "(": `%28`,
    ")": `%29`,
    "~": `%7E`,
    "%20": `+`,
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
    return t[e];
  });
}
function fs(e, t) {
  ((this._pairs = []), e && us(e, this, t));
}
var ps = fs.prototype;
((ps.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (ps.toString = function (e) {
    let t = e
      ? function (t) {
          return e.call(this, t, ds);
        }
      : ds;
    return this._pairs
      .map(function (e) {
        return t(e[0]) + `=` + t(e[1]);
      }, ``)
      .join(`&`);
  }));
function ms(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, `:`)
    .replace(/%24/g, `$`)
    .replace(/%2C/gi, `,`)
    .replace(/%20/g, `+`);
}
function hs(e, t, n) {
  if (!t) return e;
  let r = (n && n.encode) || ms,
    i = z.isFunction(n) ? { serialize: n } : n,
    a = i && i.serialize,
    o;
  if (
    ((o = a
      ? a(t, i)
      : z.isURLSearchParams(t)
        ? t.toString()
        : new fs(t, i).toString(r)),
    o)
  ) {
    let t = e.indexOf(`#`);
    (t !== -1 && (e = e.slice(0, t)),
      (e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o));
  }
  return e;
}
var gs = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers &&= [];
    }
    forEach(e) {
      z.forEach(this.handlers, function (t) {
        t !== null && e(t);
      });
    }
  },
  _s = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  vs = {
    isBrowser: !0,
    classes: {
      URLSearchParams: typeof URLSearchParams < `u` ? URLSearchParams : fs,
      FormData: typeof FormData < `u` ? FormData : null,
      Blob: typeof Blob < `u` ? Blob : null,
    },
    protocols: [`http`, `https`, `file`, `blob`, `url`, `data`],
  },
  ys = s({
    hasBrowserEnv: () => bs,
    hasStandardBrowserEnv: () => Ss,
    hasStandardBrowserWebWorkerEnv: () => Cs,
    navigator: () => xs,
    origin: () => ws,
  }),
  bs = typeof window < `u` && typeof document < `u`,
  xs = (typeof navigator == `object` && navigator) || void 0,
  Ss =
    bs &&
    (!xs || [`ReactNative`, `NativeScript`, `NS`].indexOf(xs.product) < 0),
  Cs =
    typeof WorkerGlobalScope < `u` &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == `function`,
  ws = (bs && window.location.href) || `http://localhost`,
  Ts = { ...ys, ...vs };
function Es(e, t) {
  return us(e, new Ts.classes.URLSearchParams(), {
    visitor: function (e, t, n, r) {
      return Ts.isNode && z.isBuffer(e)
        ? (this.append(t, e.toString(`base64`)), !1)
        : r.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function Ds(e) {
  return z
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((e) => (e[0] === `[]` ? `` : e[1] || e[0]));
}
function Os(e) {
  let t = {},
    n = Object.keys(e),
    r,
    i = n.length,
    a;
  for (r = 0; r < i; r++) ((a = n[r]), (t[a] = e[a]));
  return t;
}
function ks(e) {
  function t(e, n, r, i) {
    let a = e[i++];
    if (a === `__proto__`) return !0;
    let o = Number.isFinite(+a),
      s = i >= e.length;
    return (
      (a = !a && z.isArray(r) ? r.length : a),
      s
        ? (z.hasOwnProp(r, a)
            ? (r[a] = z.isArray(r[a]) ? r[a].concat(n) : [r[a], n])
            : (r[a] = n),
          !o)
        : ((!r[a] || !z.isObject(r[a])) && (r[a] = []),
          t(e, n, r[a], i) && z.isArray(r[a]) && (r[a] = Os(r[a])),
          !o)
    );
  }
  if (z.isFormData(e) && z.isFunction(e.entries)) {
    let n = {};
    return (
      z.forEachEntry(e, (e, r) => {
        t(Ds(e), r, n, 0);
      }),
      n
    );
  }
  return null;
}
var As = (e, t) => (e != null && z.hasOwnProp(e, t) ? e[t] : void 0);
function js(e, t, n) {
  if (z.isString(e))
    try {
      return ((t || JSON.parse)(e), z.trim(e));
    } catch (e) {
      if (e.name !== `SyntaxError`) throw e;
    }
  return (n || JSON.stringify)(e);
}
var Ms = {
  transitional: _s,
  adapter: [`xhr`, `http`, `fetch`],
  transformRequest: [
    function (e, t) {
      let n = t.getContentType() || ``,
        r = n.indexOf(`application/json`) > -1,
        i = z.isObject(e);
      if ((i && z.isHTMLForm(e) && (e = new FormData(e)), z.isFormData(e)))
        return r ? JSON.stringify(ks(e)) : e;
      if (
        z.isArrayBuffer(e) ||
        z.isBuffer(e) ||
        z.isStream(e) ||
        z.isFile(e) ||
        z.isBlob(e) ||
        z.isReadableStream(e)
      )
        return e;
      if (z.isArrayBufferView(e)) return e.buffer;
      if (z.isURLSearchParams(e))
        return (
          t.setContentType(
            `application/x-www-form-urlencoded;charset=utf-8`,
            !1,
          ),
          e.toString()
        );
      let a;
      if (i) {
        let t = As(this, `formSerializer`);
        if (n.indexOf(`application/x-www-form-urlencoded`) > -1)
          return Es(e, t).toString();
        if ((a = z.isFileList(e)) || n.indexOf(`multipart/form-data`) > -1) {
          let n = As(this, `env`),
            r = n && n.FormData;
          return us(a ? { "files[]": e } : e, r && new r(), t);
        }
      }
      return i || r ? (t.setContentType(`application/json`, !1), js(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      let t = As(this, `transitional`) || Ms.transitional,
        n = t && t.forcedJSONParsing,
        r = As(this, `responseType`),
        i = r === `json`;
      if (z.isResponse(e) || z.isReadableStream(e)) return e;
      if (e && z.isString(e) && ((n && !r) || i)) {
        let n = !(t && t.silentJSONParsing) && i;
        try {
          return JSON.parse(e, As(this, `parseReviver`));
        } catch (e) {
          if (n)
            throw e.name === `SyntaxError`
              ? B.from(e, B.ERR_BAD_RESPONSE, this, null, As(this, `response`))
              : e;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: `XSRF-TOKEN`,
  xsrfHeaderName: `X-XSRF-TOKEN`,
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ts.classes.FormData, Blob: Ts.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: `application/json, text/plain, */*`,
      "Content-Type": void 0,
    },
  },
};
z.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`, `query`], (e) => {
  Ms.headers[e] = {};
});
function Ns(e, t) {
  let n = this || Ms,
    r = t || n,
    i = ts.from(r.headers),
    a = r.data;
  return (
    z.forEach(e, function (e) {
      a = e.call(n, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function Ps(e) {
  return !!(e && e.__CANCEL__);
}
var Fs = class extends B {
  constructor(e, t, n) {
    (super(e ?? `canceled`, B.ERR_CANCELED, t, n),
      (this.name = `CanceledError`),
      (this.__CANCEL__ = !0));
  }
};
function Is(e, t, n) {
  let r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new B(
          `Request failed with status code ` + n.status,
          n.status >= 400 && n.status < 500
            ? B.ERR_BAD_REQUEST
            : B.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
function Ls(e) {
  let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || ``;
}
function Rs(e, t) {
  e ||= 10;
  let n = Array(e),
    r = Array(e),
    i = 0,
    a = 0,
    o;
  return (
    (t = t === void 0 ? 1e3 : t),
    function (s) {
      let c = Date.now(),
        l = r[a];
      ((o ||= c), (n[i] = s), (r[i] = c));
      let u = a,
        d = 0;
      for (; u !== i; ) ((d += n[u++]), (u %= e));
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), c - o < t)) return;
      let f = l && c - l;
      return f ? Math.round((d * 1e3) / f) : void 0;
    }
  );
}
function zs(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    a,
    o = (t, r = Date.now()) => {
      ((n = r), (i = null), (a &&= (clearTimeout(a), null)), e(...t));
    };
  return [
    (...e) => {
      let t = Date.now(),
        s = t - n;
      s >= r
        ? o(e, t)
        : ((i = e),
          (a ||= setTimeout(() => {
            ((a = null), o(i));
          }, r - s)));
    },
    () => i && o(i),
  ];
}
var Bs = (e, t, n = 3) => {
    let r = 0,
      i = Rs(50, 250);
    return zs((n) => {
      let a = n.loaded,
        o = n.lengthComputable ? n.total : void 0,
        s = o == null ? a : Math.min(a, o),
        c = Math.max(0, s - r),
        l = i(c);
      ((r = Math.max(r, s)),
        e({
          loaded: s,
          total: o,
          progress: o ? s / o : void 0,
          bytes: c,
          rate: l || void 0,
          estimated: l && o ? (o - s) / l : void 0,
          event: n,
          lengthComputable: o != null,
          [t ? `download` : `upload`]: !0,
        }));
    }, n);
  },
  Vs = (e, t) => {
    let n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Hs =
    (e) =>
    (...t) =>
      z.asap(() => e(...t)),
  Us = Ts.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Ts.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Ts.origin),
        Ts.navigator && /(msie|trident)/i.test(Ts.navigator.userAgent),
      )
    : () => !0,
  Ws = Ts.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, a, o) {
          if (typeof document > `u`) return;
          let s = [`${e}=${encodeURIComponent(t)}`];
          (z.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`),
            z.isString(r) && s.push(`path=${r}`),
            z.isString(i) && s.push(`domain=${i}`),
            a === !0 && s.push(`secure`),
            z.isString(o) && s.push(`SameSite=${o}`),
            (document.cookie = s.join(`; `)));
        },
        read(e) {
          if (typeof document > `u`) return null;
          let t = document.cookie.split(`;`);
          for (let n = 0; n < t.length; n++) {
            let r = t[n].replace(/^\s+/, ``),
              i = r.indexOf(`=`);
            if (i !== -1 && r.slice(0, i) === e)
              return decodeURIComponent(r.slice(i + 1));
          }
          return null;
        },
        remove(e) {
          this.write(e, ``, Date.now() - 864e5, `/`);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Gs(e) {
  return typeof e == `string` ? /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) : !1;
}
function Ks(e, t) {
  return t ? e.replace(/\/?\/$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
}
function qs(e, t, n) {
  let r = !Gs(t);
  return e && (r || n === !1) ? Ks(e, t) : t;
}
var Js = (e) => (e instanceof ts ? { ...e } : e);
function Ys(e, t) {
  t ||= {};
  let n = Object.create(null);
  Object.defineProperty(n, `hasOwnProperty`, {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(e, t, n, r) {
    return z.isPlainObject(e) && z.isPlainObject(t)
      ? z.merge.call({ caseless: r }, e, t)
      : z.isPlainObject(t)
        ? z.merge({}, t)
        : z.isArray(t)
          ? t.slice()
          : t;
  }
  function i(e, t, n, i) {
    if (!z.isUndefined(t)) return r(e, t, n, i);
    if (!z.isUndefined(e)) return r(void 0, e, n, i);
  }
  function a(e, t) {
    if (!z.isUndefined(t)) return r(void 0, t);
  }
  function o(e, t) {
    if (!z.isUndefined(t)) return r(void 0, t);
    if (!z.isUndefined(e)) return r(void 0, e);
  }
  function s(n, i, a) {
    if (z.hasOwnProp(t, a)) return r(n, i);
    if (z.hasOwnProp(e, a)) return r(void 0, n);
  }
  let c = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    allowedSocketPaths: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (e, t, n) => i(Js(e), Js(t), n, !0),
  };
  return (
    z.forEach(Object.keys({ ...e, ...t }), function (r) {
      if (r === `__proto__` || r === `constructor` || r === `prototype`) return;
      let a = z.hasOwnProp(c, r) ? c[r] : i,
        o = a(
          z.hasOwnProp(e, r) ? e[r] : void 0,
          z.hasOwnProp(t, r) ? t[r] : void 0,
          r,
        );
      (z.isUndefined(o) && a !== s) || (n[r] = o);
    }),
    n
  );
}
var Xs = [`content-type`, `content-length`];
function Zs(e, t, n) {
  if (n !== `content-only`) {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([t, n]) => {
    Xs.includes(t.toLowerCase()) && e.set(t, n);
  });
}
var Qs = (e) =>
    encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
      String.fromCharCode(parseInt(t, 16)),
    ),
  $s = (e) => {
    let t = Ys({}, e),
      n = (e) => (z.hasOwnProp(t, e) ? t[e] : void 0),
      r = n(`data`),
      i = n(`withXSRFToken`),
      a = n(`xsrfHeaderName`),
      o = n(`xsrfCookieName`),
      s = n(`headers`),
      c = n(`auth`),
      l = n(`baseURL`),
      u = n(`allowAbsoluteUrls`),
      d = n(`url`);
    if (
      ((t.headers = s = ts.from(s)),
      (t.url = hs(qs(l, d, u), e.params, e.paramsSerializer)),
      c &&
        s.set(
          `Authorization`,
          `Basic ` +
            btoa((c.username || ``) + `:` + (c.password ? Qs(c.password) : ``)),
        ),
      z.isFormData(r) &&
        (Ts.hasStandardBrowserEnv || Ts.hasStandardBrowserWebWorkerEnv
          ? s.setContentType(void 0)
          : z.isFunction(r.getHeaders) &&
            Zs(s, r.getHeaders(), n(`formDataHeaderPolicy`))),
      Ts.hasStandardBrowserEnv &&
        (z.isFunction(i) && (i = i(t)), i === !0 || (i == null && Us(t.url))))
    ) {
      let e = a && o && Ws.read(o);
      e && s.set(a, e);
    }
    return t;
  },
  ec =
    typeof XMLHttpRequest < `u` &&
    function (e) {
      return new Promise(function (t, n) {
        let r = $s(e),
          i = r.data,
          a = ts.from(r.headers).normalize(),
          { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r,
          l,
          u,
          d,
          f,
          p;
        function m() {
          (f && f(),
            p && p(),
            r.cancelToken && r.cancelToken.unsubscribe(l),
            r.signal && r.signal.removeEventListener(`abort`, l));
        }
        let h = new XMLHttpRequest();
        (h.open(r.method.toUpperCase(), r.url, !0), (h.timeout = r.timeout));
        function g() {
          if (!h) return;
          let r = ts.from(
            `getAllResponseHeaders` in h && h.getAllResponseHeaders(),
          );
          (Is(
            function (e) {
              (t(e), m());
            },
            function (e) {
              (n(e), m());
            },
            {
              data:
                !o || o === `text` || o === `json`
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: r,
              config: e,
              request: h,
            },
          ),
            (h = null));
        }
        (`onloadend` in h
          ? (h.onloadend = g)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 &&
                  !(h.responseURL && h.responseURL.startsWith(`file:`))) ||
                setTimeout(g);
            }),
          (h.onabort = function () {
            h &&=
              (n(new B(`Request aborted`, B.ECONNABORTED, e, h)), m(), null);
          }),
          (h.onerror = function (t) {
            let r = new B(
              t && t.message ? t.message : `Network Error`,
              B.ERR_NETWORK,
              e,
              h,
            );
            ((r.event = t || null), n(r), m(), (h = null));
          }),
          (h.ontimeout = function () {
            let t = r.timeout
                ? `timeout of ` + r.timeout + `ms exceeded`
                : `timeout exceeded`,
              i = r.transitional || _s;
            (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
              n(
                new B(
                  t,
                  i.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
                  e,
                  h,
                ),
              ),
              m(),
              (h = null));
          }),
          i === void 0 && a.setContentType(null),
          `setRequestHeader` in h &&
            z.forEach(a.toJSON(), function (e, t) {
              h.setRequestHeader(t, e);
            }),
          z.isUndefined(r.withCredentials) ||
            (h.withCredentials = !!r.withCredentials),
          o && o !== `json` && (h.responseType = r.responseType),
          c && (([d, p] = Bs(c, !0)), h.addEventListener(`progress`, d)),
          s &&
            h.upload &&
            (([u, f] = Bs(s)),
            h.upload.addEventListener(`progress`, u),
            h.upload.addEventListener(`loadend`, f)),
          (r.cancelToken || r.signal) &&
            ((l = (t) => {
              h &&=
                (n(!t || t.type ? new Fs(null, e, h) : t),
                h.abort(),
                m(),
                null);
            }),
            r.cancelToken && r.cancelToken.subscribe(l),
            r.signal &&
              (r.signal.aborted
                ? l()
                : r.signal.addEventListener(`abort`, l))));
        let _ = Ls(r.url);
        if (_ && !Ts.protocols.includes(_)) {
          n(new B(`Unsupported protocol ` + _ + `:`, B.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(i || null);
      });
    },
  tc = (e, t) => {
    let { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let n = new AbortController(),
        r,
        i = function (e) {
          if (!r) {
            ((r = !0), o());
            let t = e instanceof Error ? e : this.reason;
            n.abort(
              t instanceof B ? t : new Fs(t instanceof Error ? t.message : t),
            );
          }
        },
        a =
          t &&
          setTimeout(() => {
            ((a = null), i(new B(`timeout of ${t}ms exceeded`, B.ETIMEDOUT)));
          }, t),
        o = () => {
          e &&=
            (a && clearTimeout(a),
            (a = null),
            e.forEach((e) => {
              e.unsubscribe
                ? e.unsubscribe(i)
                : e.removeEventListener(`abort`, i);
            }),
            null);
        };
      e.forEach((e) => e.addEventListener(`abort`, i));
      let { signal: s } = n;
      return ((s.unsubscribe = () => z.asap(o)), s);
    }
  },
  nc = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) ((i = r + t), yield e.slice(r, i), (r = i));
  },
  rc = async function* (e, t) {
    for await (let n of ic(e)) yield* nc(n, t);
  },
  ic = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    let t = e.getReader();
    try {
      for (;;) {
        let { done: e, value: n } = await t.read();
        if (e) break;
        yield n;
      }
    } finally {
      await t.cancel();
    }
  },
  ac = (e, t, n, r) => {
    let i = rc(e, t),
      a = 0,
      o,
      s = (e) => {
        o || ((o = !0), r && r(e));
      };
    return new ReadableStream(
      {
        async pull(e) {
          try {
            let { done: t, value: r } = await i.next();
            if (t) {
              (s(), e.close());
              return;
            }
            let o = r.byteLength;
            (n && n((a += o)), e.enqueue(new Uint8Array(r)));
          } catch (e) {
            throw (s(e), e);
          }
        },
        cancel(e) {
          return (s(e), i.return());
        },
      },
      { highWaterMark: 2 },
    );
  };
function oc(e) {
  if (!e || typeof e != `string` || !e.startsWith(`data:`)) return 0;
  let t = e.indexOf(`,`);
  if (t < 0) return 0;
  let n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let e = r.length,
      t = r.length;
    for (let n = 0; n < t; n++)
      if (r.charCodeAt(n) === 37 && n + 2 < t) {
        let t = r.charCodeAt(n + 1),
          i = r.charCodeAt(n + 2);
        ((t >= 48 && t <= 57) ||
          (t >= 65 && t <= 70) ||
          (t >= 97 && t <= 102)) &&
          ((i >= 48 && i <= 57) ||
            (i >= 65 && i <= 70) ||
            (i >= 97 && i <= 102)) &&
          ((e -= 2), (n += 2));
      }
    let n = 0,
      i = t - 1,
      a = (e) =>
        e >= 2 &&
        r.charCodeAt(e - 2) === 37 &&
        r.charCodeAt(e - 1) === 51 &&
        (r.charCodeAt(e) === 68 || r.charCodeAt(e) === 100);
    (i >= 0 && (r.charCodeAt(i) === 61 ? (n++, i--) : a(i) && (n++, (i -= 3))),
      n === 1 && i >= 0 && (r.charCodeAt(i) === 61 || a(i)) && n++);
    let o = Math.floor(e / 4) * 3 - (n || 0);
    return o > 0 ? o : 0;
  }
  if (typeof Buffer < `u` && typeof Buffer.byteLength == `function`)
    return Buffer.byteLength(r, `utf8`);
  let i = 0;
  for (let e = 0, t = r.length; e < t; e++) {
    let n = r.charCodeAt(e);
    if (n < 128) i += 1;
    else if (n < 2048) i += 2;
    else if (n >= 55296 && n <= 56319 && e + 1 < t) {
      let t = r.charCodeAt(e + 1);
      t >= 56320 && t <= 57343 ? ((i += 4), e++) : (i += 3);
    } else i += 3;
  }
  return i;
}
var sc = `1.16.0`,
  cc = 64 * 1024,
  { isFunction: lc } = z,
  uc = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  dc = (e) => {
    let t = z.global ?? globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = z.merge.call(
      { skipUndefined: !0 },
      { Request: t.Request, Response: t.Response },
      e,
    );
    let { fetch: i, Request: a, Response: o } = e,
      s = i ? lc(i) : typeof fetch == `function`,
      c = lc(a),
      l = lc(o);
    if (!s) return !1;
    let u = s && lc(n),
      d =
        s &&
        (typeof r == `function`
          ? (
              (e) => (t) =>
                e.encode(t)
            )(new r())
          : async (e) => new Uint8Array(await new a(e).arrayBuffer())),
      f =
        c &&
        u &&
        uc(() => {
          let e = !1,
            t = new a(Ts.origin, {
              body: new n(),
              method: `POST`,
              get duplex() {
                return ((e = !0), `half`);
              },
            }),
            r = t.headers.has(`Content-Type`);
          return (t.body != null && t.body.cancel(), e && !r);
        }),
      p = l && u && uc(() => z.isReadableStream(new o(``).body)),
      m = { stream: p && ((e) => e.body) };
    s &&
      [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach((e) => {
        !m[e] &&
          (m[e] = (t, n) => {
            let r = t && t[e];
            if (r) return r.call(t);
            throw new B(
              `Response type '${e}' is not supported`,
              B.ERR_NOT_SUPPORT,
              n,
            );
          });
      });
    let h = async (e) => {
        if (e == null) return 0;
        if (z.isBlob(e)) return e.size;
        if (z.isSpecCompliantForm(e))
          return (
            await new a(Ts.origin, { method: `POST`, body: e }).arrayBuffer()
          ).byteLength;
        if (z.isArrayBufferView(e) || z.isArrayBuffer(e)) return e.byteLength;
        if ((z.isURLSearchParams(e) && (e += ``), z.isString(e)))
          return (await d(e)).byteLength;
      },
      g = async (e, t) => z.toFiniteNumber(e.getContentLength()) ?? h(t);
    return async (e) => {
      let {
          url: t,
          method: n,
          data: s,
          signal: l,
          cancelToken: u,
          timeout: d,
          onDownloadProgress: h,
          onUploadProgress: _,
          responseType: v,
          headers: y,
          withCredentials: b = `same-origin`,
          fetchOptions: x,
          maxContentLength: S,
          maxBodyLength: C,
        } = $s(e),
        w = z.isNumber(S) && S > -1,
        ee = z.isNumber(C) && C > -1,
        te = i || fetch;
      v = v ? (v + ``).toLowerCase() : `text`;
      let ne = tc([l, u && u.toAbortSignal()], d),
        T = null,
        re =
          ne &&
          ne.unsubscribe &&
          (() => {
            ne.unsubscribe();
          }),
        ie;
      try {
        if (w && typeof t == `string` && t.startsWith(`data:`) && oc(t) > S)
          throw new B(
            `maxContentLength size of ` + S + ` exceeded`,
            B.ERR_BAD_RESPONSE,
            e,
            T,
          );
        if (ee && n !== `get` && n !== `head`) {
          let t = await g(y, s);
          if (typeof t == `number` && isFinite(t) && t > C)
            throw new B(
              `Request body larger than maxBodyLength limit`,
              B.ERR_BAD_REQUEST,
              e,
              T,
            );
        }
        if (
          _ &&
          f &&
          n !== `get` &&
          n !== `head` &&
          (ie = await g(y, s)) !== 0
        ) {
          let e = new a(t, { method: `POST`, body: s, duplex: `half` }),
            n;
          if (
            (z.isFormData(s) &&
              (n = e.headers.get(`content-type`)) &&
              y.setContentType(n),
            e.body)
          ) {
            let [t, n] = Vs(ie, Bs(Hs(_)));
            s = ac(e.body, cc, t, n);
          }
        }
        z.isString(b) || (b = b ? `include` : `omit`);
        let i = c && `credentials` in a.prototype;
        if (z.isFormData(s)) {
          let e = y.getContentType();
          e &&
            /^multipart\/form-data/i.test(e) &&
            !/boundary=/i.test(e) &&
            y.delete(`content-type`);
        }
        y.set(`User-Agent`, `axios/` + sc, !1);
        let l = {
          ...x,
          signal: ne,
          method: n.toUpperCase(),
          headers: y.normalize().toJSON(),
          body: s,
          duplex: `half`,
          credentials: i ? b : void 0,
        };
        T = c && new a(t, l);
        let u = await (c ? te(T, x) : te(t, l));
        if (w) {
          let t = z.toFiniteNumber(u.headers.get(`content-length`));
          if (t != null && t > S)
            throw new B(
              `maxContentLength size of ` + S + ` exceeded`,
              B.ERR_BAD_RESPONSE,
              e,
              T,
            );
        }
        let d = p && (v === `stream` || v === `response`);
        if (p && u.body && (h || w || (d && re))) {
          let t = {};
          [`status`, `statusText`, `headers`].forEach((e) => {
            t[e] = u[e];
          });
          let n = z.toFiniteNumber(u.headers.get(`content-length`)),
            [r, i] = (h && Vs(n, Bs(Hs(h), !0))) || [],
            a = 0;
          u = new o(
            ac(
              u.body,
              cc,
              (t) => {
                if (w && ((a = t), a > S))
                  throw new B(
                    `maxContentLength size of ` + S + ` exceeded`,
                    B.ERR_BAD_RESPONSE,
                    e,
                    T,
                  );
                r && r(t);
              },
              () => {
                (i && i(), re && re());
              },
            ),
            t,
          );
        }
        v ||= `text`;
        let ae = await m[z.findKey(m, v) || `text`](u, e);
        if (w && !p && !d) {
          let t;
          if (
            (ae != null &&
              (typeof ae.byteLength == `number`
                ? (t = ae.byteLength)
                : typeof ae.size == `number`
                  ? (t = ae.size)
                  : typeof ae == `string` &&
                    (t =
                      typeof r == `function`
                        ? new r().encode(ae).byteLength
                        : ae.length)),
            typeof t == `number` && t > S)
          )
            throw new B(
              `maxContentLength size of ` + S + ` exceeded`,
              B.ERR_BAD_RESPONSE,
              e,
              T,
            );
        }
        return (
          !d && re && re(),
          await new Promise((t, n) => {
            Is(t, n, {
              data: ae,
              headers: ts.from(u.headers),
              status: u.status,
              statusText: u.statusText,
              config: e,
              request: T,
            });
          })
        );
      } catch (t) {
        if ((re && re(), ne && ne.aborted && ne.reason instanceof B)) {
          let n = ne.reason;
          throw (
            (n.config = e),
            T && (n.request = T),
            t !== n && (n.cause = t),
            n
          );
        }
        throw t &&
          t.name === `TypeError` &&
          /Load failed|fetch/i.test(t.message)
          ? Object.assign(
              new B(`Network Error`, B.ERR_NETWORK, e, T, t && t.response),
              { cause: t.cause || t },
            )
          : B.from(t, t && t.code, e, T, t && t.response);
      }
    };
  },
  fc = new Map(),
  pc = (e) => {
    let t = (e && e.env) || {},
      { fetch: n, Request: r, Response: i } = t,
      a = [r, i, n],
      o = a.length,
      s,
      c,
      l = fc;
    for (; o--; )
      ((s = a[o]),
        (c = l.get(s)),
        c === void 0 && l.set(s, (c = o ? new Map() : dc(t))),
        (l = c));
    return c;
  };
pc();
var mc = { http: null, xhr: ec, fetch: { get: pc } };
z.forEach(mc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, `name`, { __proto__: null, value: t });
    } catch {}
    Object.defineProperty(e, `adapterName`, { __proto__: null, value: t });
  }
});
var hc = (e) => `- ${e}`,
  gc = (e) => z.isFunction(e) || e === null || e === !1;
function _c(e, t) {
  e = z.isArray(e) ? e : [e];
  let { length: n } = e,
    r,
    i,
    a = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let n;
    if (
      ((i = r),
      !gc(r) && ((i = mc[(n = String(r)).toLowerCase()]), i === void 0))
    )
      throw new B(`Unknown adapter '${n}'`);
    if (i && (z.isFunction(i) || (i = i.get(t)))) break;
    a[n || `#` + o] = i;
  }
  if (!i) {
    let e = Object.entries(a).map(
      ([e, t]) =>
        `adapter ${e} ` +
        (t === !1
          ? `is not supported by the environment`
          : `is not available in the build`),
    );
    throw new B(
      `There is no suitable adapter to dispatch the request ` +
        (n
          ? e.length > 1
            ? `since :
` +
              e.map(hc).join(`
`)
            : ` ` + hc(e[0])
          : `as no adapter specified`),
      `ERR_NOT_SUPPORT`,
    );
  }
  return i;
}
var vc = { getAdapter: _c, adapters: mc };
function yc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Fs(null, e);
}
function bc(e) {
  return (
    yc(e),
    (e.headers = ts.from(e.headers)),
    (e.data = Ns.call(e, e.transformRequest)),
    [`post`, `put`, `patch`].indexOf(e.method) !== -1 &&
      e.headers.setContentType(`application/x-www-form-urlencoded`, !1),
    vc
      .getAdapter(
        e.adapter || Ms.adapter,
        e,
      )(e)
      .then(
        function (t) {
          (yc(e), (e.response = t));
          try {
            t.data = Ns.call(e, e.transformResponse, t);
          } finally {
            delete e.response;
          }
          return ((t.headers = ts.from(t.headers)), t);
        },
        function (t) {
          if (!Ps(t) && (yc(e), t && t.response)) {
            e.response = t.response;
            try {
              t.response.data = Ns.call(e, e.transformResponse, t.response);
            } finally {
              delete e.response;
            }
            t.response.headers = ts.from(t.response.headers);
          }
          return Promise.reject(t);
        },
      )
  );
}
var xc = {};
[`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
  (e, t) => {
    xc[e] = function (n) {
      return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e;
    };
  },
);
var Sc = {};
((xc.transitional = function (e, t, n) {
  function r(e, t) {
    return (
      `[Axios v` +
      sc +
      `] Transitional option '` +
      e +
      `'` +
      t +
      (n ? `. ` + n : ``)
    );
  }
  return (n, i, a) => {
    if (e === !1)
      throw new B(
        r(i, ` has been removed` + (t ? ` in ` + t : ``)),
        B.ERR_DEPRECATED,
      );
    return (
      t &&
        !Sc[i] &&
        ((Sc[i] = !0),
        console.warn(
          r(
            i,
            ` has been deprecated since v` +
              t +
              ` and will be removed in the near future`,
          ),
        )),
      e ? e(n, i, a) : !0
    );
  };
}),
  (xc.spelling = function (e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
  }));
function Cc(e, t, n) {
  if (typeof e != `object`)
    throw new B(`options must be an object`, B.ERR_BAD_OPTION_VALUE);
  let r = Object.keys(e),
    i = r.length;
  for (; i-- > 0; ) {
    let a = r[i],
      o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (o) {
      let t = e[a],
        n = t === void 0 || o(t, a, e);
      if (n !== !0)
        throw new B(`option ` + a + ` must be ` + n, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new B(`Unknown option ` + a, B.ERR_BAD_OPTION);
  }
}
var wc = { assertOptions: Cc, validators: xc },
  Tc = wc.validators,
  Ec = class {
    constructor(e) {
      ((this.defaults = e || {}),
        (this.interceptors = { request: new gs(), response: new gs() }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t = {};
          Error.captureStackTrace ? Error.captureStackTrace(t) : (t = Error());
          let n = (() => {
            if (!t.stack) return ``;
            let e = t.stack.indexOf(`
`);
            return e === -1 ? `` : t.stack.slice(e + 1);
          })();
          try {
            if (!e.stack) e.stack = n;
            else if (n) {
              let t = n.indexOf(`
`),
                r =
                  t === -1
                    ? -1
                    : n.indexOf(
                        `
`,
                        t + 1,
                      ),
                i = r === -1 ? `` : n.slice(r + 1);
              String(e.stack).endsWith(i) ||
                (e.stack +=
                  `
` + n);
            }
          } catch {}
        }
        throw e;
      }
    }
    _request(e, t) {
      (typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
        (t = Ys(this.defaults, t)));
      let { transitional: n, paramsSerializer: r, headers: i } = t;
      (n !== void 0 &&
        wc.assertOptions(
          n,
          {
            silentJSONParsing: Tc.transitional(Tc.boolean),
            forcedJSONParsing: Tc.transitional(Tc.boolean),
            clarifyTimeoutError: Tc.transitional(Tc.boolean),
            legacyInterceptorReqResOrdering: Tc.transitional(Tc.boolean),
          },
          !1,
        ),
        r != null &&
          (z.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : wc.assertOptions(
                r,
                { encode: Tc.function, serialize: Tc.function },
                !0,
              )),
        t.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls === void 0
            ? (t.allowAbsoluteUrls = !0)
            : (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)),
        wc.assertOptions(
          t,
          {
            baseUrl: Tc.spelling(`baseURL`),
            withXsrfToken: Tc.spelling(`withXSRFToken`),
          },
          !0,
        ),
        (t.method = (t.method || this.defaults.method || `get`).toLowerCase()));
      let a = i && z.merge(i.common, i[t.method]);
      (i &&
        z.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `query`, `common`],
          (e) => {
            delete i[e];
          },
        ),
        (t.headers = ts.concat(a, i)));
      let o = [],
        s = !0;
      this.interceptors.request.forEach(function (e) {
        if (typeof e.runWhen == `function` && e.runWhen(t) === !1) return;
        s &&= e.synchronous;
        let n = t.transitional || _s;
        n && n.legacyInterceptorReqResOrdering
          ? o.unshift(e.fulfilled, e.rejected)
          : o.push(e.fulfilled, e.rejected);
      });
      let c = [];
      this.interceptors.response.forEach(function (e) {
        c.push(e.fulfilled, e.rejected);
      });
      let l,
        u = 0,
        d;
      if (!s) {
        let e = [bc.bind(this), void 0];
        for (
          e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t);
          u < d;
        )
          l = l.then(e[u++], e[u++]);
        return l;
      }
      d = o.length;
      let f = t;
      for (; u < d; ) {
        let e = o[u++],
          t = o[u++];
        try {
          f = e(f);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        l = bc.call(this, f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (u = 0, d = c.length; u < d; ) l = l.then(c[u++], c[u++]);
      return l;
    }
    getUri(e) {
      return (
        (e = Ys(this.defaults, e)),
        hs(
          qs(e.baseURL, e.url, e.allowAbsoluteUrls),
          e.params,
          e.paramsSerializer,
        )
      );
    }
  };
(z.forEach([`delete`, `get`, `head`, `options`], function (e) {
  Ec.prototype[e] = function (t, n) {
    return this.request(
      Ys(n || {}, { method: e, url: t, data: (n || {}).data }),
    );
  };
}),
  z.forEach([`post`, `put`, `patch`, `query`], function (e) {
    function t(t) {
      return function (n, r, i) {
        return this.request(
          Ys(i || {}, {
            method: e,
            headers: t ? { "Content-Type": `multipart/form-data` } : {},
            url: n,
            data: r,
          }),
        );
      };
    }
    ((Ec.prototype[e] = t()),
      e !== `query` && (Ec.prototype[e + `Form`] = t(!0)));
  }));
var Dc = class e {
  constructor(e) {
    if (typeof e != `function`) throw TypeError(`executor must be a function.`);
    let t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    let n = this;
    (this.promise.then((e) => {
      if (!n._listeners) return;
      let t = n._listeners.length;
      for (; t-- > 0; ) n._listeners[t](e);
      n._listeners = null;
    }),
      (this.promise.then = (e) => {
        let t,
          r = new Promise((e) => {
            (n.subscribe(e), (t = e));
          }).then(e);
        return (
          (r.cancel = function () {
            n.unsubscribe(t);
          }),
          r
        );
      }),
      e(function (e, r, i) {
        n.reason || ((n.reason = new Fs(e, r, i)), t(n.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    let t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    let e = new AbortController(),
      t = (t) => {
        e.abort(t);
      };
    return (
      this.subscribe(t),
      (e.signal.unsubscribe = () => this.unsubscribe(t)),
      e.signal
    );
  }
  static source() {
    let t;
    return {
      token: new e(function (e) {
        t = e;
      }),
      cancel: t,
    };
  }
};
function Oc(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
function kc(e) {
  return z.isObject(e) && e.isAxiosError === !0;
}
var Ac = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Ac).forEach(([e, t]) => {
  Ac[t] = e;
});
function jc(e) {
  let t = new Ec(e),
    n = Na(Ec.prototype.request, t);
  return (
    z.extend(n, Ec.prototype, t, { allOwnKeys: !0 }),
    z.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (t) {
      return jc(Ys(e, t));
    }),
    n
  );
}
var V = jc(Ms);
((V.Axios = Ec),
  (V.CanceledError = Fs),
  (V.CancelToken = Dc),
  (V.isCancel = Ps),
  (V.VERSION = sc),
  (V.toFormData = us),
  (V.AxiosError = B),
  (V.Cancel = V.CanceledError),
  (V.all = function (e) {
    return Promise.all(e);
  }),
  (V.spread = Oc),
  (V.isAxiosError = kc),
  (V.mergeConfig = Ys),
  (V.AxiosHeaders = ts),
  (V.formToJSON = (e) => ks(z.isHTMLForm(e) ? new FormData(e) : e)),
  (V.getAdapter = vc.getAdapter),
  (V.HttpStatusCode = Ac),
  (V.default = V));
var H = V.create({ baseURL: `http://localhost:8080/api/v1` });
H.interceptors.request.use(
  (e) => (
    localStorage.getItem(`token`) &&
      (e.headers.Authorization = `Bearer ${localStorage.getItem(`token`)}`),
    e
  ),
);
function Mc({ isOpen: e, onClose: t }) {
  let [n, r] = (0, v.useState)(!1),
    [i, a] = (0, v.useState)(`in`),
    [o, s] = (0, v.useState)(``),
    [c, l] = (0, v.useState)(``),
    [u, d] = (0, v.useState)(``),
    [f, p] = (0, v.useState)(!1),
    { user: m } = Br((e) => e.auth),
    h = () => {
      (r(!0),
        setTimeout(() => {
          (r(!1), t());
        }, 280));
    };
  return !e && !n
    ? null
    : (0, E.jsx)(`div`, {
        className: `fixed inset-0 z-50 flex items-start sm:items-center justify-center pt-16 sm:pt-15 px-4 pb-4 overflow-y-auto
        bg-primary-light/20 backdrop-blur-xs transition-opacity duration-280
        ${n ? `opacity-0` : `opacity-100`}`,
        onClick: (e) => e.target === e.currentTarget && h(),
        children: (0, E.jsxs)(`div`, {
          className: `w-full max-w-md rounded-3xl bg-primary-light/90 backdrop-blur-xl
          border border-primary-dark/50 shadow-[0_10px_40px_rgba(0,0,0,0.08),0_32px_60px_rgba(0,0,0,0.12)]
          ${n ? `animate-[modalSlideOut_0.28s_cubic-bezier(0.4,0,1,1)_forwards]` : `animate-[modalDrop_0.35s_cubic-bezier(0.34,1.56,0.64,1)]`}`,
          children: [
            (0, E.jsxs)(`div`, {
              className: `flex items-center justify-between px-6 py-5 border-b border-primary-dark/20`,
              children: [
                (0, E.jsx)(`h5`, {
                  className: `text-xl font-semibold text-primary-dark`,
                  children: `Manage Blood Record`,
                }),
                (0, E.jsx)(`button`, {
                  onClick: h,
                  className: `cursor-pointer w-10 h-10 rounded-xl flex items-center justify-center\r
              text-primary-dark/50 hover:text-primary-dark hover:bg-primary-dark/10\r
              transition-all duration-200`,
                  children: (0, E.jsx)(Ma, {}),
                }),
              ],
            }),
            (0, E.jsxs)(`div`, {
              className: `p-4 sm:p-6 space-y-3`,
              children: [
                (0, E.jsxs)(`div`, {
                  className: `flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3`,
                  children: [
                    (0, E.jsx)(`span`, {
                      className: `text-sm font-medium shrink-0`,
                      children: `Inventory Type:`,
                    }),
                    (0, E.jsxs)(`div`, {
                      className: `flex flex-wrap items-center gap-3`,
                      children: [
                        (0, E.jsxs)(`div`, {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, E.jsx)(`input`, {
                              id: `in`,
                              type: `radio`,
                              name: `inRadio`,
                              value: `in`,
                              defaultChecked: !0,
                              onChange: (e) => a(e.target.value),
                              className: `accent-primary-green`,
                            }),
                            (0, E.jsx)(`label`, {
                              htmlFor: `in`,
                              className: `cursor-pointer`,
                              children: `IN`,
                            }),
                          ],
                        }),
                        (0, E.jsxs)(`div`, {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, E.jsx)(`input`, {
                              id: `out`,
                              type: `radio`,
                              name: `inRadio`,
                              value: `out`,
                              onChange: (e) => a(e.target.value),
                              className: `accent-primary-green`,
                            }),
                            (0, E.jsx)(`label`, {
                              htmlFor: `out`,
                              className: `cursor-pointer`,
                              children: `OUT`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, E.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, E.jsx)(`label`, {
                      htmlFor: `bloodGroupSelect`,
                      children: `Select Blood Group`,
                    }),
                    (0, E.jsxs)(`div`, {
                      className: `relative`,
                      children: [
                        (0, E.jsxs)(`select`, {
                          id: `bloodGroupSelect`,
                          value: o,
                          onChange: (e) => s(e.target.value),
                          onMouseDown: () => p((e) => !e),
                          onBlur: () => p(!1),
                          className: `w-full appearance-none border border-primary-dark rounded-2xl\r
                  px-4 py-2 text-sm text-primary-dark outline-none cursor-pointer`,
                          children: [
                            (0, E.jsx)(`option`, {
                              defaultValue: `Select a blood group`,
                              children: `Select a blood group`,
                            }),
                            (0, E.jsx)(`option`, {
                              value: `O+`,
                              children: `O+ (O Positive)`,
                            }),
                            (0, E.jsx)(`option`, {
                              value: `O-`,
                              children: `O- (O Negative)`,
                            }),
                            (0, E.jsx)(`option`, {
                              value: `A+`,
                              children: `A+ (A Positive)`,
                            }),
                            (0, E.jsx)(`option`, {
                              value: `A-`,
                              children: `A- (A Negative)`,
                            }),
                            (0, E.jsx)(`option`, {
                              value: `B+`,
                              children: `B+ (B Positive)`,
                            }),
                            (0, E.jsx)(`option`, {
                              value: `B-`,
                              children: `B- (B Negative)`,
                            }),
                            (0, E.jsx)(`option`, {
                              value: `AB+`,
                              children: `AB+ (AB Positive)`,
                            }),
                            (0, E.jsx)(`option`, {
                              value: `AB-`,
                              children: `AB- (AB Negative)`,
                            }),
                          ],
                        }),
                        (0, E.jsx)(`span`, {
                          className: `flex items-center pointer-events-none absolute inset-y-0 right-4`,
                          children: (0, E.jsx)(va, {
                            className: `text-primary-dark/40 transition-transform duration-200
                    ${f ? `rotate-180` : ``}`,
                            size: 14,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, E.jsx)(F, {
                  labelText: `Donor Email`,
                  labelFor: `donorEmail`,
                  inputType: `email`,
                  value: u,
                  onChange: (e) => d(e.target.value),
                }),
                (0, E.jsx)(F, {
                  labelText: `Quantity (mL)`,
                  labelFor: `quantity`,
                  inputType: `number`,
                  value: c,
                  onChange: (e) => l(e.target.value),
                }),
              ],
            }),
            (0, E.jsxs)(`div`, {
              className: `flex justify-end gap-3 px-6 py-5 border-t border-primary-dark/20`,
              children: [
                (0, E.jsx)(`button`, {
                  onClick: h,
                  className: `cursor-pointer text-sm bg-primary-light/50 border border-primary-dark/20\r
              px-3 py-1 rounded-full hover:bg-primary-dark/10 transition-all duration-200`,
                  children: `Cancel`,
                }),
                (0, E.jsx)(`button`, {
                  className: `cursor-pointer text-sm bg-primary-green text-primary-light\r
            hover:bg-primary-green/80 px-3 py-1 rounded-full transition-all duration-200`,
                  onClick: async () => {
                    try {
                      if (!o || !c) return alert(`Please provide all fields!`);
                      let { data: e } = await H.post(
                        `/inventory/create-inventory`,
                        {
                          inventoryType: i,
                          bloodGroup: o,
                          email: u,
                          quantity: c,
                          organisation: m?._id,
                        },
                      );
                      e?.success &&
                        (alert(`New Record Created!`),
                        window.location.reload());
                    } catch (e) {
                      (alert(e.response.data.message),
                        console.log(e),
                        window.location.reload());
                    }
                  },
                  children: `Save`,
                }),
              ],
            }),
          ],
        }),
      });
}
function Nc() {
  let [e, t] = (0, v.useState)(!1),
    { loading: n, error: r, user: i } = Br((e) => e.auth),
    [a, o] = (0, v.useState)([]),
    s = Ft(),
    c = async () => {
      try {
        let e = await H.get(`/inventory/get-inventory`);
        e.data?.success && o(e.data.inventory);
      } catch (e) {
        (console.log(e), M.error(`Failed to fetch inventory`));
      }
    };
  return (
    (0, v.useEffect)(() => {
      c();
    }, []),
    (0, E.jsxs)(ja, {
      children: [
        i?.role === `admin` && s(`/admin`),
        r && M.error(r),
        n
          ? (0, E.jsx)(Wi, {})
          : (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsxs)(`div`, {
                  className: `mb-6`,
                  children: [
                    (0, E.jsx)(`h1`, {
                      className: `text-2xl sm:text-3xl font-bold text-primary-dark tracking-tight`,
                      children: `Blood availability`,
                    }),
                    (0, E.jsx)(`p`, {
                      className: `mt-2 text-sm sm:text-base text-primary-dark/60`,
                      children: `View current blood stock to donate or request blood for patients.`,
                    }),
                  ],
                }),
                i?.role === `organisation` &&
                  (0, E.jsx)(`div`, {
                    className: `flex justify-end items-center mb-4`,
                    children: (0, E.jsx)(`button`, {
                      onClick: () => t(!0),
                      className: `w-full sm:w-auto px-4 py-2 text-sm sm:text-base text-white font-medium bg-primary-red rounded-full cursor-pointer`,
                      children: `+ Add Inventory`,
                    }),
                  }),
                (0, E.jsx)(Gi, {
                  children: (0, E.jsxs)(`table`, {
                    className: `w-full text-sm`,
                    children: [
                      (0, E.jsx)(`thead`, {
                        className: `bg-primary-red text-primary-light`,
                        children: (0, E.jsxs)(`tr`, {
                          children: [
                            (0, E.jsx)(`th`, {
                              className: `p-2 sm:p-3 whitespace-nowrap`,
                              children: `#`,
                            }),
                            (0, E.jsx)(`th`, {
                              className: `p-2 sm:p-3 whitespace-nowrap`,
                              children: `Blood Group`,
                            }),
                            (0, E.jsx)(`th`, {
                              className: `p-2 sm:p-3 whitespace-nowrap`,
                              children: `Inventory Type`,
                            }),
                            (0, E.jsx)(`th`, {
                              className: `p-2 sm:p-3 whitespace-nowrap`,
                              children: `Quantity`,
                            }),
                            (0, E.jsx)(`th`, {
                              className: `p-2 sm:p-3 whitespace-nowrap`,
                              children: `Donor Email`,
                            }),
                            (0, E.jsx)(`th`, {
                              className: `p-2 sm:p-3 whitespace-nowrap`,
                              children: `Date & Time`,
                            }),
                          ],
                        }),
                      }),
                      (0, E.jsx)(`tbody`, {
                        children:
                          a?.length > 0
                            ? a.map((e, t) =>
                                (0, E.jsxs)(
                                  `tr`,
                                  {
                                    className: `border-b border-primary-dark/40 font-medium`,
                                    children: [
                                      (0, E.jsxs)(`td`, {
                                        className: `p-3 text-center`,
                                        children: [t + 1, `.`],
                                      }),
                                      (0, E.jsx)(`td`, {
                                        className: `p-3 text-center`,
                                        children: e.bloodGroup,
                                      }),
                                      (0, E.jsx)(`td`, {
                                        className: `p-3 text-center uppercase ${e.inventoryType === `in` ? `text-primary-green` : `text-primary-red`}`,
                                        children: e.inventoryType,
                                      }),
                                      (0, E.jsxs)(`td`, {
                                        className: `p-3 text-center ${e.inventoryType === `in` ? `text-primary-green` : `text-primary-red`}`,
                                        children: [
                                          e.quantity,
                                          ` mL`,
                                          e.inventoryType === `in` ? `↑` : `↓`,
                                        ],
                                      }),
                                      (0, E.jsx)(`td`, {
                                        className: `p-3 text-center ${e.email ? `text-primary-dark` : `text-primary-dark/50`}`,
                                        children: e.email || `Not Available`,
                                      }),
                                      (0, E.jsx)(`td`, {
                                        className: `p-3 text-center`,
                                        children: new Date(e.createdAt)
                                          .toLocaleString(`en-GB`, {
                                            day: `numeric`,
                                            month: `long`,
                                            year: `numeric`,
                                            hour: `numeric`,
                                            minute: `2-digit`,
                                            hour12: !0,
                                          })
                                          .replace(` at `, `, `)
                                          .replace(/am|pm/i, (e) =>
                                            e.toUpperCase(),
                                          ),
                                      }),
                                    ],
                                  },
                                  e._id,
                                ),
                              )
                            : (0, E.jsx)(`tr`, {
                                children: (0, E.jsx)(`td`, {
                                  colSpan: 6,
                                  className: `p-4 text-center text-primary-dark/50`,
                                  children: `No records found`,
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
                (0, E.jsx)(Mc, { isOpen: e, onClose: () => t(!1) }),
              ],
            }),
      ],
    })
  );
}
var Pc = [
  { to: `/about`, label: `About Us` },
  { to: `/help`, label: `Need Help` },
  { to: `/contact`, label: `Contact` },
  { to: `/blood`, label: `Donate Blood` },
];
function Fc() {
  return (0, E.jsx)(`footer`, {
    className: `border-t border-primary-dark/10 bg-primary-dark text-primary-light mt-16`,
    children: (0, E.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 py-10`,
      children: [
        (0, E.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6`,
          children: [
            (0, E.jsxs)(`div`, {
              children: [
                (0, E.jsx)(`p`, {
                  className: `text-2xl sm:text-3xl font-bold`,
                  children: `RaktSeva`,
                }),
                (0, E.jsx)(`p`, {
                  className: `text-sm text-primary-light/60 mt-1 max-w-md`,
                  children: `Connecting donors, hospitals, and blood banks to save lives through smarter inventory and coordination.`,
                }),
              ],
            }),
            (0, E.jsx)(`nav`, {
              className: `flex flex-wrap gap-x-6 gap-y-2`,
              children: Pc.map((e) =>
                (0, E.jsx)(
                  $n,
                  {
                    to: e.to,
                    className: `text-sm text-primary-light/70 hover:text-primary-green transition-colors`,
                    children: e.label,
                  },
                  e.to,
                ),
              ),
            }),
          ],
        }),
        (0, E.jsxs)(`p`, {
          className: `text-xs text-primary-light/40 mt-8 pt-6 border-t border-primary-light/10`,
          children: [
            `© `,
            new Date().getFullYear(),
            ` RaktSeva. Every drop counts.`,
          ],
        }),
      ],
    }),
  });
}
function Ic({ children: e }) {
  return (0, E.jsxs)(E.Fragment, {
    children: [
      (0, E.jsx)(Aa, {}),
      (0, E.jsx)(`main`, {
        className: `min-h-screen w-full overflow-x-hidden`,
        children: e,
      }),
      (0, E.jsx)(Fc, {}),
    ],
  });
}
function Lc() {
  let { token: e, user: t } = Br((e) => e.auth);
  return !!(e || t || localStorage.getItem(`token`));
}
function Rc({
  primaryLabel: e = `Get started`,
  primaryGuestTo: t = `/register`,
  secondaryLabel: n,
  secondaryTo: r,
  layout: i = `row`,
  className: a = ``,
}) {
  let { user: o } = Br((e) => e.auth),
    s = Lc(),
    c = wa(o?.role),
    l =
      i === `column`
        ? `flex flex-col gap-3`
        : `flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4`;
  return s
    ? (0, E.jsxs)(`div`, {
        className: `${l} ${a}`,
        children: [
          (0, E.jsx)($n, {
            to: `/blood`,
            className: `w-full sm:w-auto text-center px-6 py-3 rounded-full bg-primary-red text-primary-light font-semibold hover:opacity-90 transition-opacity`,
            children: `View blood availability`,
          }),
          (0, E.jsx)($n, {
            to: c,
            className: `w-full sm:w-auto text-center px-6 py-3 rounded-full bg-primary-green text-primary-light font-semibold hover:opacity-90 transition-opacity`,
            children: `Go to dashboard`,
          }),
        ],
      })
    : (0, E.jsxs)(`div`, {
        className: `${l} ${a}`,
        children: [
          (0, E.jsx)($n, {
            to: t,
            className: `w-full sm:w-auto text-center px-6 py-3 rounded-full bg-primary-red text-primary-light font-semibold hover:opacity-90 transition-opacity`,
            children: e,
          }),
          n &&
            r &&
            (0, E.jsx)($n, {
              to: r,
              className: `w-full sm:w-auto text-center px-6 py-3 rounded-full border-2 border-primary-green text-primary-green font-semibold hover:bg-primary-green/10 transition-colors`,
              children: n,
            }),
        ],
      });
}
var U = {
    hero: `/images/hero.jpg`,
    donate: `/images/donate.jpg`,
    hospital: `/images/hospital.jpg`,
    inventory: `/images/inventory.jpg`,
    community: `/images/community.jpg`,
    about: `/images/about.jpg`,
    help: `/images/help.jpg`,
    contact: `/images/contact.jpg`,
  },
  zc = [
    {
      icon: oa,
      title: `Donor-first experience`,
      description: `Register as a donor, track your donations, and stay connected with organisations that need your blood group.`,
      image: U.donate,
    },
    {
      icon: ca,
      title: `Hospital coordination`,
      description: `Hospitals request and manage blood needs while viewing nearby organisations and available inventory.`,
      image: U.hospital,
    },
    {
      icon: ba,
      title: `Organisation inventory`,
      description: `Blood banks and NGOs maintain real-time stock levels, in/out records, and donor linkage in one dashboard.`,
      image: U.inventory,
    },
  ],
  Bc = [
    `Create an account as a donor, hospital, or organisation.`,
    `Organisations log inventory; donors see where they can help.`,
    `Hospitals coordinate requests when patients need blood urgently.`,
  ];
function Vc() {
  return (0, E.jsxs)(Ic, {
    children: [
      (0, E.jsx)(`section`, {
        className: `relative overflow-hidden`,
        children: (0, E.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-24`,
          children: (0, E.jsxs)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`,
            children: [
              (0, E.jsxs)(`div`, {
                className: `order-2 lg:order-1`,
                children: [
                  (0, E.jsx)(`p`, {
                    className: `text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-green mb-3`,
                    children: `Blood donation, simplified`,
                  }),
                  (0, E.jsxs)(`h1`, {
                    className: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight`,
                    children: [
                      `Save lives with`,
                      ` `,
                      (0, E.jsx)(`span`, {
                        className: `gradient-text`,
                        children: `RaktSeva`,
                      }),
                    ],
                  }),
                  (0, E.jsx)(`p`, {
                    className: `mt-6 text-lg text-primary-dark/70 max-w-lg leading-relaxed`,
                    children: `RaktSeva is a platform that connects donors, hospitals, and blood organisations—so the right blood reaches the right patient at the right time.`,
                  }),
                  (0, E.jsx)(Rc, {
                    primaryLabel: `Get started`,
                    primaryGuestTo: `/register`,
                    secondaryLabel: `Donate blood`,
                    secondaryTo: `/blood`,
                    className: `mt-6 sm:mt-8`,
                  }),
                ],
              }),
              (0, E.jsxs)(`div`, {
                className: `order-1 lg:order-2 relative pb-4 sm:pb-0`,
                children: [
                  (0, E.jsx)(`div`, {
                    className: `rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-video sm:aspect-4/3`,
                    children: (0, E.jsx)(`img`, {
                      src: U.hero,
                      alt: `Blood donation and healthcare teamwork`,
                      className: `w-full h-full object-cover`,
                    }),
                  }),
                  (0, E.jsx)(`div`, {
                    className: `mt-4 sm:mt-0 sm:absolute sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-primary-light rounded-2xl shadow-lg p-3 sm:p-4 border border-primary-green/20 max-w-full`,
                    children: (0, E.jsxs)(`div`, {
                      className: `flex items-center gap-2 sm:gap-3`,
                      children: [
                        (0, E.jsx)(ga, {
                          size: 28,
                          className: `text-primary-red shrink-0 sm:w-8 sm:h-8`,
                        }),
                        (0, E.jsxs)(`div`, {
                          className: `min-w-0`,
                          children: [
                            (0, E.jsx)(`p`, {
                              className: `text-lg sm:text-2xl font-bold text-primary-dark`,
                              children: `One platform`,
                            }),
                            (0, E.jsx)(`p`, {
                              className: `text-xs sm:text-sm text-primary-dark/60`,
                              children: `Donors · Hospitals · Organisations`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, E.jsx)(`section`, {
        className: `bg-primary-red text-primary-light py-8 sm:py-12`,
        children: (0, E.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6`,
          children: (0, E.jsx)(`div`, {
            className: `grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center`,
            children: [
              { value: `24/7`, label: `Inventory visibility` },
              { value: `4+`, label: `User roles supported` },
              { value: `Real-time`, label: `Stock tracking` },
              { value: `India`, label: `Built for local needs` },
            ].map((e) =>
              (0, E.jsxs)(
                `div`,
                {
                  children: [
                    (0, E.jsx)(`p`, {
                      className: `text-lg sm:text-2xl md:text-3xl font-bold`,
                      children: e.value,
                    }),
                    (0, E.jsx)(`p`, {
                      className: `text-xs sm:text-sm text-primary-light/80 mt-1`,
                      children: e.label,
                    }),
                  ],
                },
                e.label,
              ),
            ),
          }),
        }),
      }),
      (0, E.jsx)(`section`, {
        className: `py-16 sm:py-20`,
        children: (0, E.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6`,
          children: [
            (0, E.jsx)(`h2`, {
              className: `text-3xl sm:text-4xl font-bold text-primary-dark text-center`,
              children: `What you can do on RaktSeva`,
            }),
            (0, E.jsx)(`p`, {
              className: `text-center text-primary-dark/60 mt-3 max-w-2xl mx-auto`,
              children: `Whether you donate, run a blood bank, or manage a hospital, the platform is built around transparent blood availability.`,
            }),
            (0, E.jsx)(`div`, {
              className: `mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`,
              children: zc.map((e) => {
                let t = e.icon;
                return (0, E.jsxs)(
                  `article`,
                  {
                    className: `rounded-2xl border border-primary-dark/10 overflow-hidden bg-primary-light hover:shadow-lg transition-shadow`,
                    children: [
                      (0, E.jsx)(`div`, {
                        className: `aspect-video overflow-hidden`,
                        children: (0, E.jsx)(`img`, {
                          src: e.image,
                          alt: ``,
                          className: `w-full h-full object-cover`,
                        }),
                      }),
                      (0, E.jsxs)(`div`, {
                        className: `p-6`,
                        children: [
                          (0, E.jsx)(t, {
                            size: 28,
                            className: `text-primary-green mb-3`,
                          }),
                          (0, E.jsx)(`h3`, {
                            className: `text-xl font-bold text-primary-dark`,
                            children: e.title,
                          }),
                          (0, E.jsx)(`p`, {
                            className: `mt-2 text-primary-dark/70 text-sm leading-relaxed`,
                            children: e.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.title,
                );
              }),
            }),
          ],
        }),
      }),
      (0, E.jsx)(`section`, {
        className: `py-16 bg-primary-green/5`,
        children: (0, E.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6`,
          children: (0, E.jsxs)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`,
            children: [
              (0, E.jsx)(`div`, {
                className: `order-1 lg:order-none rounded-2xl overflow-hidden shadow-lg aspect-video sm:aspect-4/3`,
                children: (0, E.jsx)(`img`, {
                  src: U.community,
                  alt: `Community and volunteers united for a cause`,
                  className: `w-full h-full object-cover`,
                }),
              }),
              (0, E.jsxs)(`div`, {
                className: `order-2 lg:order-none`,
                children: [
                  (0, E.jsx)(`h2`, {
                    className: `text-2xl sm:text-3xl font-bold text-primary-dark`,
                    children: `How it works`,
                  }),
                  (0, E.jsx)(`ol`, {
                    className: `mt-8 space-y-4`,
                    children: Bc.map((e, t) =>
                      (0, E.jsxs)(
                        `li`,
                        {
                          className: `flex gap-4`,
                          children: [
                            (0, E.jsx)(`span`, {
                              className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-green text-primary-light text-sm font-bold`,
                              children: t + 1,
                            }),
                            (0, E.jsx)(`p`, {
                              className: `text-primary-dark/80 pt-0.5`,
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, E.jsx)($n, {
                    to: `/about`,
                    className: `inline-block mt-8 text-primary-green font-semibold hover:underline`,
                    children: `Learn more about us →`,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, E.jsx)(`section`, {
        className: `py-16 sm:py-20`,
        children: (0, E.jsxs)(`div`, {
          className: `max-w-3xl mx-auto px-4 sm:px-6 text-center`,
          children: [
            (0, E.jsx)(`h2`, {
              className: `text-3xl font-bold text-primary-dark`,
              children: `Ready to make a difference?`,
            }),
            (0, E.jsx)(`p`, {
              className: `mt-4 text-primary-dark/70`,
              children: `Join RaktSeva today—or reach out if you need urgent help locating blood.`,
            }),
            (0, E.jsx)(Rc, {
              primaryLabel: `Sign up free`,
              primaryGuestTo: `/register`,
              secondaryLabel: `Need help now?`,
              secondaryTo: `/help`,
              layout: `row`,
              className: `mt-8 justify-center`,
            }),
          ],
        }),
      }),
    ],
  });
}
function Hc({ title: e, subtitle: t, image: n, imageAlt: r }) {
  return (0, E.jsx)(`section`, {
    className: `relative overflow-hidden bg-primary-green/5 border-b border-primary-green/10`,
    children: (0, E.jsx)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20`,
      children: (0, E.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center`,
        children: [
          (0, E.jsxs)(`div`, {
            className: `order-2 lg:order-1`,
            children: [
              (0, E.jsx)(`h1`, {
                className: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight`,
                children: e,
              }),
              t &&
                (0, E.jsx)(`p`, {
                  className: `mt-4 text-base sm:text-lg text-primary-dark/70 max-w-xl leading-relaxed`,
                  children: t,
                }),
            ],
          }),
          n &&
            (0, E.jsxs)(`div`, {
              className: `order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-video sm:aspect-4/3 max-h-[280px] sm:max-h-none`,
              children: [
                (0, E.jsx)(`img`, {
                  src: n,
                  alt: r ?? ``,
                  className: `w-full h-full object-cover`,
                }),
                (0, E.jsx)(`div`, {
                  className: `absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent`,
                }),
              ],
            }),
        ],
      }),
    }),
  });
}
var Uc = [
  {
    title: `Transparency`,
    text: `Inventory and donation records are visible to authorised users so decisions are based on facts, not guesswork.`,
  },
  {
    title: `Speed`,
    text: `When minutes matter, hospitals and organisations can coordinate faster through a single shared system.`,
  },
  {
    title: `Community`,
    text: `Donors are at the heart of the network—we celebrate every contribution and make it easy to stay involved.`,
  },
];
function Wc() {
  return (0, E.jsxs)(Ic, {
    children: [
      (0, E.jsx)(Hc, {
        title: `About RaktSeva`,
        subtitle: `RaktSeva (रक्त सेवा — service of blood) was built to bridge the gap between those who can give blood and those who need it, with tools tailored for Indian hospitals and blood banks.`,
        image: U.about,
        imageAlt: `Healthcare professionals working together`,
      }),
      (0, E.jsx)(`section`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16`,
        children: (0, E.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12`,
          children: [
            (0, E.jsxs)(`div`, {
              children: [
                (0, E.jsx)(`h2`, {
                  className: `text-2xl font-bold text-primary-dark`,
                  children: `Our mission`,
                }),
                (0, E.jsx)(`p`, {
                  className: `mt-4 text-primary-dark/70 leading-relaxed`,
                  children: `Every year, countless patients depend on timely blood availability. Fragmented records, phone chains, and outdated stock lists delay care. RaktSeva centralises inventory management, donor engagement, and hospital requests so life-saving blood moves with less friction.`,
                }),
                (0, E.jsx)(`p`, {
                  className: `mt-4 text-primary-dark/70 leading-relaxed`,
                  children: `We support donors who want to give regularly, organisations that maintain stock, hospitals that serve patients, and administrators who oversee the ecosystem—with role-based dashboards for each.`,
                }),
              ],
            }),
            (0, E.jsx)(`div`, {
              className: `rounded-2xl overflow-hidden shadow-lg aspect-[4/3]`,
              children: (0, E.jsx)(`img`, {
                src: U.community,
                alt: `Volunteers and community support`,
                className: `w-full h-full object-cover`,
              }),
            }),
          ],
        }),
      }),
      (0, E.jsx)(`section`, {
        className: `bg-primary-green/5 py-16`,
        children: (0, E.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6`,
          children: [
            (0, E.jsx)(`h2`, {
              className: `text-2xl font-bold text-primary-dark text-center`,
              children: `What we stand for`,
            }),
            (0, E.jsx)(`div`, {
              className: `mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`,
              children: Uc.map((e) =>
                (0, E.jsxs)(
                  `div`,
                  {
                    className: `bg-primary-light rounded-2xl p-6 border border-primary-green/10`,
                    children: [
                      (0, E.jsx)(`h3`, {
                        className: `text-lg font-bold text-primary-green`,
                        children: e.title,
                      }),
                      (0, E.jsx)(`p`, {
                        className: `mt-2 text-sm text-primary-dark/70 leading-relaxed`,
                        children: e.text,
                      }),
                    ],
                  },
                  e.title,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
var Gc = [
    {
      q: `I need blood urgently. What should I do?`,
      a: `Contact your hospital or treating doctor first. They can coordinate with registered organisations on RaktSeva. You can also use our Contact page to reach our team—we will guide you to next steps.`,
    },
    {
      q: `How do I register as a donor?`,
      a: `Click Get started or Sign up, choose the donor role, and complete your profile including blood group. Once registered, you can view organisations and track donations from your dashboard.`,
    },
    {
      q: `Who can see blood inventory?`,
      a: `Inventory visibility depends on your role. Organisations manage stock; authorised hospital and admin users can view records relevant to their access level.`,
    },
    {
      q: `Is donating blood safe?`,
      a: `Yes, when done at licensed blood banks with proper screening. Always donate through verified centres. RaktSeva helps you find and coordinate with registered organisations—it does not replace medical professionals.`,
    },
    {
      q: `I forgot my password. How do I sign in?`,
      a: `Use the login page with your registered email. If you still cannot access your account, contact us with the email you used to register and we will assist you.`,
    },
  ],
  Kc = [
    `Call your hospital emergency desk or treating physician.`,
    `Note the required blood group and units if known.`,
    `Ask if they use RaktSeva or a partner blood bank.`,
    `Reach us via Contact if you need platform support.`,
  ];
function qc() {
  return (0, E.jsxs)(Ic, {
    children: [
      (0, E.jsx)(Hc, {
        title: `Need help?`,
        subtitle: `Find answers to common questions, steps for urgent blood needs, and ways to get in touch with our team.`,
        image: U.help,
        imageAlt: `Medical support and assistance`,
      }),
      (0, E.jsx)(`section`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 py-16`,
        children: (0, E.jsxs)(`div`, {
          className: `rounded-2xl border-2 border-primary-red/30 bg-primary-red/5 p-6 sm:p-8`,
          children: [
            (0, E.jsx)(`h2`, {
              className: `text-xl font-bold text-primary-red`,
              children: `Urgent blood requirement`,
            }),
            (0, E.jsx)(`p`, {
              className: `mt-2 text-primary-dark/70 text-sm`,
              children: `In a medical emergency, always follow your doctor and hospital first. Use this checklist while they coordinate care:`,
            }),
            (0, E.jsx)(`ol`, {
              className: `mt-4 space-y-2`,
              children: Kc.map((e, t) =>
                (0, E.jsxs)(
                  `li`,
                  {
                    className: `flex gap-3 text-primary-dark/80 text-sm`,
                    children: [
                      (0, E.jsxs)(`span`, {
                        className: `font-bold text-primary-red`,
                        children: [t + 1, `.`],
                      }),
                      e,
                    ],
                  },
                  e,
                ),
              ),
            }),
            (0, E.jsx)($n, {
              to: `/contact`,
              className: `inline-block mt-6 px-5 py-2.5 rounded-full bg-primary-red text-primary-light text-sm font-semibold`,
              children: `Contact support`,
            }),
          ],
        }),
      }),
      (0, E.jsxs)(`section`, {
        className: `max-w-3xl mx-auto px-4 sm:px-6 pb-16`,
        children: [
          (0, E.jsx)(`h2`, {
            className: `text-2xl font-bold text-primary-dark mb-8`,
            children: `Frequently asked questions`,
          }),
          (0, E.jsx)(`div`, {
            className: `space-y-4`,
            children: Gc.map((e) =>
              (0, E.jsxs)(
                `details`,
                {
                  className: `group rounded-xl border border-primary-dark/10 bg-primary-light overflow-hidden`,
                  children: [
                    (0, E.jsxs)(`summary`, {
                      className: `cursor-pointer px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-semibold text-primary-dark list-none flex justify-between items-start sm:items-center gap-3 sm:gap-4`,
                      children: [
                        (0, E.jsx)(`span`, {
                          className: `pr-2`,
                          children: e.q,
                        }),
                        (0, E.jsx)(`span`, {
                          className: `text-primary-green text-xl group-open:rotate-45 transition-transform`,
                          children: `+`,
                        }),
                      ],
                    }),
                    (0, E.jsx)(`p`, {
                      className: `px-5 pb-4 text-sm text-primary-dark/70 leading-relaxed`,
                      children: e.a,
                    }),
                  ],
                },
                e.q,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Jc() {
  let [e, t] = (0, v.useState)({
      name: ``,
      email: ``,
      subject: ``,
      message: ``,
    }),
    n = (e) => {
      t((t) => ({ ...t, [e.target.name]: e.target.value }));
    };
  return (0, E.jsxs)(Ic, {
    children: [
      (0, E.jsx)(Hc, {
        title: `Contact us`,
        subtitle: `Questions about the platform, partnerships, or urgent coordination? Send us a message and we will respond as soon as possible.`,
        image: U.contact,
        imageAlt: `Communication and support`,
      }),
      (0, E.jsx)(`section`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 py-16`,
        children: (0, E.jsxs)(`div`, {
          className: `grid lg:grid-cols-5 gap-12`,
          children: [
            (0, E.jsxs)(`div`, {
              className: `lg:col-span-2 space-y-6`,
              children: [
                (0, E.jsx)(`h2`, {
                  className: `text-xl font-bold text-primary-dark`,
                  children: `Get in touch`,
                }),
                (0, E.jsx)(`p`, {
                  className: `text-sm text-primary-dark/70 leading-relaxed`,
                  children: `For medical emergencies, contact your hospital directly. This form is for platform support, feedback, and non-emergency enquiries.`,
                }),
                (0, E.jsxs)(`ul`, {
                  className: `space-y-4 text-sm`,
                  children: [
                    (0, E.jsxs)(`li`, {
                      className: `flex items-start gap-3 text-primary-dark/80`,
                      children: [
                        (0, E.jsx)(da, {
                          size: 20,
                          className: `text-primary-green shrink-0 mt-0.5`,
                        }),
                        (0, E.jsx)(`span`, {
                          children: `support@raktseva.org`,
                        }),
                      ],
                    }),
                    (0, E.jsxs)(`li`, {
                      className: `flex items-start gap-3 text-primary-dark/80`,
                      children: [
                        (0, E.jsx)(la, {
                          size: 20,
                          className: `text-primary-green shrink-0 mt-0.5`,
                        }),
                        (0, E.jsx)(`span`, {
                          children: `+91 1800-000-0000 (placeholder)`,
                        }),
                      ],
                    }),
                    (0, E.jsxs)(`li`, {
                      className: `flex items-start gap-3 text-primary-dark/80`,
                      children: [
                        (0, E.jsx)(ua, {
                          size: 20,
                          className: `text-primary-green shrink-0 mt-0.5`,
                        }),
                        (0, E.jsx)(`span`, {
                          children: `India — serving hospitals and blood banks nationwide`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, E.jsxs)(`form`, {
              onSubmit: (n) => {
                if (
                  (n.preventDefault(),
                  !e.name.trim() || !e.email.trim() || !e.message.trim())
                ) {
                  M.error(`Please fill in name, email, and message.`);
                  return;
                }
                (M.success(`Thank you! We will get back to you soon.`),
                  t({ name: ``, email: ``, subject: ``, message: `` }));
              },
              className: `lg:col-span-3 rounded-2xl border border-primary-dark/10 p-6 sm:p-8 bg-primary-light shadow-sm space-y-4`,
              children: [
                (0, E.jsxs)(`div`, {
                  className: `grid sm:grid-cols-2 gap-4`,
                  children: [
                    (0, E.jsxs)(`label`, {
                      className: `block`,
                      children: [
                        (0, E.jsx)(`span`, {
                          className: `text-sm font-medium text-primary-dark`,
                          children: `Name *`,
                        }),
                        (0, E.jsx)(`input`, {
                          type: `text`,
                          name: `name`,
                          value: e.name,
                          onChange: n,
                          className: `mt-1 w-full px-4 py-2.5 rounded-xl border border-primary-dark/15 focus:outline-none focus:ring-2 focus:ring-primary-green/40`,
                          placeholder: `Your name`,
                        }),
                      ],
                    }),
                    (0, E.jsxs)(`label`, {
                      className: `block`,
                      children: [
                        (0, E.jsx)(`span`, {
                          className: `text-sm font-medium text-primary-dark`,
                          children: `Email *`,
                        }),
                        (0, E.jsx)(`input`, {
                          type: `email`,
                          name: `email`,
                          value: e.email,
                          onChange: n,
                          className: `mt-1 w-full px-4 py-2.5 rounded-xl border border-primary-dark/15 focus:outline-none focus:ring-2 focus:ring-primary-green/40`,
                          placeholder: `you@example.com`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, E.jsxs)(`label`, {
                  className: `block`,
                  children: [
                    (0, E.jsx)(`span`, {
                      className: `text-sm font-medium text-primary-dark`,
                      children: `Subject`,
                    }),
                    (0, E.jsx)(`input`, {
                      type: `text`,
                      name: `subject`,
                      value: e.subject,
                      onChange: n,
                      className: `mt-1 w-full px-4 py-2.5 rounded-xl border border-primary-dark/15 focus:outline-none focus:ring-2 focus:ring-primary-green/40`,
                      placeholder: `How can we help?`,
                    }),
                  ],
                }),
                (0, E.jsxs)(`label`, {
                  className: `block`,
                  children: [
                    (0, E.jsx)(`span`, {
                      className: `text-sm font-medium text-primary-dark`,
                      children: `Message *`,
                    }),
                    (0, E.jsx)(`textarea`, {
                      name: `message`,
                      value: e.message,
                      onChange: n,
                      rows: 5,
                      className: `mt-1 w-full px-4 py-2.5 rounded-xl border border-primary-dark/15 focus:outline-none focus:ring-2 focus:ring-primary-green/40 resize-y`,
                      placeholder: `Tell us more...`,
                    }),
                  ],
                }),
                (0, E.jsx)(`button`, {
                  type: `submit`,
                  className: `w-full sm:w-auto px-8 py-3 rounded-full bg-primary-green text-primary-light font-semibold hover:opacity-90 transition-opacity cursor-pointer`,
                  children: `Send message`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Yc(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Xc = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  Zc = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  Qc = {
    INIT: `@@redux/INIT${Zc()}`,
    REPLACE: `@@redux/REPLACE${Zc()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Zc()}`,
  };
function $c(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function el(e, t, n) {
  if (typeof e != `function`) throw Error(Yc(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(Yc(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(Yc(1));
    return n(el)(e, t);
  }
  let r = e,
    i = t,
    a = new Map(),
    o = a,
    s = 0,
    c = !1;
  function l() {
    o === a &&
      ((o = new Map()),
      a.forEach((e, t) => {
        o.set(t, e);
      }));
  }
  function u() {
    if (c) throw Error(Yc(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(Yc(4));
    if (c) throw Error(Yc(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(Yc(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!$c(e)) throw Error(Yc(7));
    if (e.type === void 0) throw Error(Yc(8));
    if (typeof e.type != `string`) throw Error(Yc(17));
    if (c) throw Error(Yc(9));
    try {
      ((c = !0), (i = r(i, e)));
    } finally {
      c = !1;
    }
    return (
      (a = o).forEach((e) => {
        e();
      }),
      e
    );
  }
  function p(e) {
    if (typeof e != `function`) throw Error(Yc(10));
    ((r = e), f({ type: Qc.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(Yc(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [Xc]() {
        return this;
      },
    };
  }
  return (
    f({ type: Qc.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [Xc]: m }
  );
}
function tl(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: Qc.INIT }) === void 0) throw Error(Yc(12));
    if (n(void 0, { type: Qc.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(Yc(13));
  });
}
function nl(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    tl(n);
  } catch (e) {
    i = e;
  }
  return function (e = {}, t) {
    if (i) throw i;
    let a = !1,
      o = {};
    for (let i = 0; i < r.length; i++) {
      let s = r[i],
        c = n[s],
        l = e[s],
        u = c(l, t);
      if (u === void 0) throw (t && t.type, Error(Yc(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function rl(...e) {
  return e.length === 0
    ? (e) => e
    : e.length === 1
      ? e[0]
      : e.reduce(
          (e, t) =>
            (...n) =>
              e(t(...n)),
        );
}
function il(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(Yc(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = rl(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function al(e) {
  return $c(e) && `type` in e && typeof e.type == `string`;
}
var ol = Symbol.for(`immer-nothing`),
  sl = Symbol.for(`immer-draftable`),
  cl = Symbol.for(`immer-state`);
function W(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var G = Object,
  ll = G.getPrototypeOf,
  ul = `constructor`,
  dl = `prototype`,
  fl = `configurable`,
  pl = `enumerable`,
  ml = `writable`,
  hl = `value`,
  gl = (e) => !!e && !!e[cl];
function _l(e) {
  return e ? bl(e) || Dl(e) || !!e[sl] || !!e[ul]?.[sl] || Ol(e) || kl(e) : !1;
}
var vl = G[dl][ul].toString(),
  yl = new WeakMap();
function bl(e) {
  if (!e || !Al(e)) return !1;
  let t = ll(e);
  if (t === null || t === G[dl]) return !0;
  let n = G.hasOwnProperty.call(t, ul) && t[ul];
  if (n === Object) return !0;
  if (!jl(n)) return !1;
  let r = yl.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), yl.set(n, r)),
    r === vl
  );
}
function xl(e, t, n = !0) {
  Sl(e) === 0
    ? (n ? Reflect.ownKeys(e) : G.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Sl(e) {
  let t = e[cl];
  return t ? t.type_ : Dl(e) ? 1 : Ol(e) ? 2 : kl(e) ? 3 : 0;
}
var Cl = (e, t, n = Sl(e)) =>
    n === 2 ? e.has(t) : G[dl].hasOwnProperty.call(e, t),
  wl = (e, t, n = Sl(e)) => (n === 2 ? e.get(t) : e[t]),
  Tl = (e, t, n, r = Sl(e)) => {
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
  };
function El(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var Dl = Array.isArray,
  Ol = (e) => e instanceof Map,
  kl = (e) => e instanceof Set,
  Al = (e) => typeof e == `object`,
  jl = (e) => typeof e == `function`,
  Ml = (e) => typeof e == `boolean`;
function Nl(e) {
  let t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var Pl = (e) => e.copy_ || e.base_,
  Fl = (e) => (e.modified_ ? e.copy_ : e.base_);
function Il(e, t) {
  if (Ol(e)) return new Map(e);
  if (kl(e)) return new Set(e);
  if (Dl(e)) return Array[dl].slice.call(e);
  let n = bl(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = G.getOwnPropertyDescriptors(e);
    delete t[cl];
    let n = Reflect.ownKeys(t);
    for (let r = 0; r < n.length; r++) {
      let i = n[r],
        a = t[i];
      (a[ml] === !1 && ((a[ml] = !0), (a[fl] = !0)),
        (a.get || a.set) &&
          (t[i] = { [fl]: !0, [ml]: !0, [pl]: a[pl], [hl]: e[i] }));
    }
    return G.create(ll(e), t);
  } else {
    let t = ll(e);
    if (t !== null && n) return { ...e };
    let r = G.create(t);
    return G.assign(r, e);
  }
}
function Ll(e, t = !1) {
  return q(e) || gl(e) || !_l(e)
    ? e
    : (Sl(e) > 1 &&
        G.defineProperties(e, { set: K, add: K, clear: K, delete: K }),
      G.freeze(e),
      t &&
        xl(
          e,
          (e, t) => {
            Ll(t, !0);
          },
          !1,
        ),
      e);
}
function Rl() {
  W(2);
}
var K = { [hl]: Rl };
function q(e) {
  return e === null || !Al(e) ? !0 : G.isFrozen(e);
}
var J = `MapSet`,
  Y = `Patches`,
  X = `ArrayMethods`,
  zl = {};
function Bl(e) {
  let t = zl[e];
  return (t || W(0, e), t);
}
var Vl = (e) => !!zl[e],
  Hl,
  Ul = () => Hl,
  Wl = (e, t) => ({
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: Vl(J) ? Bl(J) : void 0,
    arrayMethodsPlugin_: Vl(X) ? Bl(X) : void 0,
  });
function Gl(e, t) {
  t &&
    ((e.patchPlugin_ = Bl(Y)),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Kl(e) {
  (ql(e), e.drafts_.forEach(Yl), (e.drafts_ = null));
}
function ql(e) {
  e === Hl && (Hl = e.parent_);
}
var Jl = (e) => (Hl = Wl(Hl, e));
function Yl(e) {
  let t = e[cl];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Xl(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  if (e !== void 0 && e !== n) {
    (n[cl].modified_ && (Kl(t), W(4)), _l(e) && (e = Zl(t, e)));
    let { patchPlugin_: r } = t;
    r && r.generateReplacementPatches_(n[cl].base_, e, t);
  } else e = Zl(t, n);
  return (
    Ql(t, e, !0),
    Kl(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === ol ? void 0 : e
  );
}
function Zl(e, t) {
  if (q(t)) return t;
  let n = t[cl];
  if (!n) return ou(t, e.handledSet_, e);
  if (!eu(n, e)) return t;
  if (!n.modified_) return n.base_;
  if (!n.finalized_) {
    let { callbacks_: t } = n;
    if (t) for (; t.length > 0; ) t.pop()(e);
    iu(n, e);
  }
  return n.copy_;
}
function Ql(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ll(t, n);
}
function $l(e) {
  ((e.finalized_ = !0), e.scope_.unfinalizedDrafts_--);
}
var eu = (e, t) => e.scope_ === t,
  tu = [];
function nu(e, t, n, r) {
  let i = Pl(e),
    a = e.type_;
  if (r !== void 0 && wl(i, r, a) === t) {
    Tl(i, r, n, a);
    return;
  }
  if (!e.draftLocations_) {
    let t = (e.draftLocations_ = new Map());
    xl(i, (e, n) => {
      if (gl(n)) {
        let r = t.get(n) || [];
        (r.push(e), t.set(n, r));
      }
    });
  }
  let o = e.draftLocations_.get(t) ?? tu;
  for (let e of o) Tl(i, e, n, a);
}
function ru(e, t, n) {
  e.callbacks_.push(function (r) {
    let i = t;
    if (!i || !eu(i, r)) return;
    r.mapSetPlugin_?.fixSetContents(i);
    let a = Fl(i);
    (nu(e, i.draft_ ?? i, a, n), iu(i, r));
  });
}
function iu(e, t) {
  if (
    e.modified_ &&
    !e.finalized_ &&
    (e.type_ === 3 ||
      (e.type_ === 1 && e.allIndicesReassigned_) ||
      (e.assigned_?.size ?? 0) > 0)
  ) {
    let { patchPlugin_: n } = t;
    if (n) {
      let r = n.getPath(e);
      r && n.generatePatches_(e, r, t);
    }
    $l(e);
  }
}
function au(e, t, n) {
  let { scope_: r } = e;
  if (gl(n)) {
    let i = n[cl];
    eu(i, r) &&
      i.callbacks_.push(function () {
        (mu(e), nu(e, n, Fl(i), t));
      });
  } else
    _l(n) &&
      e.callbacks_.push(function () {
        let i = Pl(e);
        e.type_ === 3
          ? i.has(n) && ou(n, r.handledSet_, r)
          : wl(i, t, e.type_) === n &&
            r.drafts_.length > 1 &&
            (e.assigned_.get(t) ?? !1) === !0 &&
            e.copy_ &&
            ou(wl(e.copy_, t, e.type_), r.handledSet_, r);
      });
}
function ou(e, t, n) {
  return (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) ||
    gl(e) ||
    t.has(e) ||
    !_l(e) ||
    q(e)
    ? e
    : (t.add(e),
      xl(e, (r, i) => {
        if (gl(i)) {
          let t = i[cl];
          eu(t, n) && (Tl(e, r, Fl(t), e.type_), $l(t));
        } else _l(i) && ou(i, t, n);
      }),
      e);
}
function su(e, t) {
  let n = Dl(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Ul(),
      modified_: !1,
      finalized_: !1,
      assigned_: void 0,
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
      callbacks_: void 0,
    },
    i = r,
    a = cu;
  n && ((i = [r]), (a = lu));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), [s, r]);
}
var cu = {
    get(e, t) {
      if (t === cl) return e;
      let n = e.scope_.arrayMethodsPlugin_,
        r = e.type_ === 1 && typeof t == `string`;
      if (r && n?.isArrayOperationMethod(t))
        return n.createMethodInterceptor(e, t);
      let i = Pl(e);
      if (!Cl(i, t, e.type_)) return du(e, i, t);
      let a = i[t];
      if (
        e.finalized_ ||
        !_l(a) ||
        (r &&
          e.operationMethod &&
          n?.isMutatingArrayMethod(e.operationMethod) &&
          Nl(t))
      )
        return a;
      if (a === uu(e.base_, t)) {
        mu(e);
        let n = e.type_ === 1 ? +t : t,
          r = gu(e.scope_, a, e, n);
        return (e.copy_[n] = r);
      }
      return a;
    },
    has(e, t) {
      return t in Pl(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Pl(e));
    },
    set(e, t, n) {
      let r = fu(Pl(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = uu(Pl(e), t),
          i = r?.[cl];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), e.assigned_.set(t, !1), !0);
        if (El(n, r) && (n !== void 0 || Cl(e.base_, t, e.type_))) return !0;
        (mu(e), pu(e));
      }
      return (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
        (Number.isNaN(n) && Number.isNaN(e.copy_[t]))
        ? !0
        : ((e.copy_[t] = n), e.assigned_.set(t, !0), au(e, t, n), !0);
    },
    deleteProperty(e, t) {
      return (
        mu(e),
        uu(e.base_, t) !== void 0 || t in e.base_
          ? (e.assigned_.set(t, !1), pu(e))
          : e.assigned_.delete(t),
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = Pl(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          [ml]: !0,
          [fl]: e.type_ !== 1 || t !== `length`,
          [pl]: r[pl],
          [hl]: n[t],
        }
      );
    },
    defineProperty() {
      W(11);
    },
    getPrototypeOf(e) {
      return ll(e.base_);
    },
    setPrototypeOf() {
      W(12);
    },
  },
  lu = {};
for (let e in cu) {
  let t = cu[e];
  lu[e] = function () {
    let e = arguments;
    return ((e[0] = e[0][0]), t.apply(this, e));
  };
}
((lu.deleteProperty = function (e, t) {
  return lu.set.call(this, e, t, void 0);
}),
  (lu.set = function (e, t, n) {
    return cu.set.call(this, e[0], t, n, e[0]);
  }));
function uu(e, t) {
  let n = e[cl];
  return (n ? Pl(n) : e)[t];
}
function du(e, t, n) {
  let r = fu(t, n);
  return r ? (hl in r ? r[hl] : r.get?.call(e.draft_)) : void 0;
}
function fu(e, t) {
  if (!(t in e)) return;
  let n = ll(e);
  for (; n; ) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = ll(n);
  }
}
function pu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && pu(e.parent_));
}
function mu(e) {
  e.copy_ ||=
    ((e.assigned_ = new Map()),
    Il(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var hu = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !1),
      (this.produce = (e, t, n) => {
        if (jl(e) && !jl(t)) {
          let n = t;
          t = e;
          let r = this;
          return function (e = n, ...i) {
            return r.produce(e, (e) => t.call(this, e, ...i));
          };
        }
        (jl(t) || W(6), n !== void 0 && !jl(n) && W(7));
        let r;
        if (_l(e)) {
          let i = Jl(this),
            a = gu(i, e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Kl(i) : ql(i);
          }
          return (Gl(i, n), Xl(r, i));
        } else if (!e || !Al(e)) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === ol && (r = void 0),
            this.autoFreeze_ && Ll(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (Bl(Y).generateReplacementPatches_(e, r, {
              patches_: t,
              inversePatches_: i,
            }),
              n(t, i));
          }
          return r;
        } else W(1, e);
      }),
      (this.produceWithPatches = (e, t) => {
        if (jl(e))
          return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
        let n, r;
        return [
          this.produce(e, t, (e, t) => {
            ((n = e), (r = t));
          }),
          n,
          r,
        ];
      }),
      Ml(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze),
      Ml(e?.useStrictShallowCopy) &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy),
      Ml(e?.useStrictIteration) &&
        this.setUseStrictIteration(e.useStrictIteration));
  }
  createDraft(e) {
    (_l(e) || W(8), gl(e) && (e = _u(e)));
    let t = Jl(this),
      n = gu(t, e, void 0);
    return ((n[cl].isManual_ = !0), ql(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[cl];
    (!n || !n.isManual_) && W(9);
    let { scope_: r } = n;
    return (Gl(r, t), Xl(void 0, r));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (r.path.length === 0 && r.op === `replace`) {
        e = r.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    let r = Bl(Y).applyPatches_;
    return gl(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function gu(e, t, n, r) {
  let [i, a] = Ol(t)
    ? Bl(J).proxyMap_(t, n)
    : kl(t)
      ? Bl(J).proxySet_(t, n)
      : su(t, n);
  return (
    (n?.scope_ ?? Ul()).drafts_.push(i),
    (a.callbacks_ = n?.callbacks_ ?? []),
    (a.key_ = r),
    n && r !== void 0
      ? ru(n, a, r)
      : a.callbacks_.push(function (e) {
          e.mapSetPlugin_?.fixSetContents(a);
          let { patchPlugin_: t } = e;
          a.modified_ && t && t.generatePatches_(a, [], e);
        }),
    i
  );
}
function _u(e) {
  return (gl(e) || W(10, e), vu(e));
}
function vu(e) {
  if (!_l(e) || q(e)) return e;
  let t = e[cl],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = Il(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = Il(e, !0);
  return (
    xl(
      n,
      (e, t) => {
        Tl(n, e, vu(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var yu = new hu().produce;
function bu(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var xu = bu(),
  Su = bu,
  Cu =
    typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == `object`
              ? rl
              : rl.apply(null, arguments);
        };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var wu = (e) => e && typeof e.match == `function`;
function Tu(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(md(0));
      return {
        type: e,
        payload: r.payload,
        ...(`meta` in r && { meta: r.meta }),
        ...(`error` in r && { error: r.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (t) => al(t) && t.type === e),
    n
  );
}
var Eu = class e extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, e.prototype));
  }
  static get [Symbol.species]() {
    return e;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new e(...t[0].concat(this))
      : new e(...t.concat(this));
  }
};
function Du(e) {
  return _l(e) ? yu(e, () => {}) : e;
}
function Ou(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function ku(e) {
  return typeof e == `boolean`;
}
var Au = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new Eu();
      return (t && (ku(t) ? a.push(xu) : a.push(Su(t.extraArgument))), a);
    },
  ju = `RTK_autoBatch`,
  Mu = (e) => (t) => {
    setTimeout(t, e);
  },
  Nu =
    (e = { type: `raf` }) =>
    (t) =>
    (...n) => {
      let r = t(...n),
        i = !0,
        a = !1,
        o = !1,
        s = new Set(),
        c =
          e.type === `tick`
            ? queueMicrotask
            : e.type === `raf`
              ? typeof window < `u` && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Mu(10)
              : e.type === `callback`
                ? e.queueNotification
                : Mu(e.timeout),
        l = () => {
          ((o = !1), a && ((a = !1), s.forEach((e) => e())));
        };
      return Object.assign({}, r, {
        subscribe(e) {
          let t = r.subscribe(() => i && e());
          return (
            s.add(e),
            () => {
              (t(), s.delete(e));
            }
          );
        },
        dispatch(e) {
          try {
            return (
              (i = !e?.meta?.[ju]),
              (a = !i),
              a && (o || ((o = !0), c(l))),
              r.dispatch(e)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  Pu = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new Eu(e);
      return (n && r.push(Nu(typeof n == `object` ? n : void 0)), r);
    };
function Fu(e) {
  let t = Au(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      duplicateMiddlewareCheck: a = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {},
    c;
  if (typeof n == `function`) c = n;
  else if ($c(n)) c = nl(n);
  else throw Error(md(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = rl;
  i && (u = Cu({ trace: !1, ...(typeof i == `object` && i) }));
  let d = Pu(il(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return el(c, o, p);
}
function Iu(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(md(28));
        if (r in t) throw Error(md(29));
        return ((t[r] = n), i);
      },
      addAsyncThunk(e, r) {
        return (
          r.pending && (t[e.pending.type] = r.pending),
          r.rejected && (t[e.rejected.type] = r.rejected),
          r.fulfilled && (t[e.fulfilled.type] = r.fulfilled),
          r.settled && n.push({ matcher: e.settled, reducer: r.settled }),
          i
        );
      },
      addMatcher(e, t) {
        return (n.push({ matcher: e, reducer: t }), i);
      },
      addDefaultCase(e) {
        return ((r = e), i);
      },
    };
  return (e(i), [t, n, r]);
}
function Lu(e) {
  return typeof e == `function`;
}
function Ru(e, t) {
  let [n, r, i] = Iu(t),
    a;
  if (Lu(e)) a = () => Du(e());
  else {
    let t = Du(e);
    a = () => t;
  }
  function o(e = a(), t) {
    let o = [
      n[t.type],
      ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e),
    ];
    return (
      o.filter((e) => !!e).length === 0 && (o = [i]),
      o.reduce((e, n) => {
        if (n)
          if (gl(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          } else if (_l(e)) return yu(e, (e) => n(e, t));
          else {
            let r = n(e, t);
            if (r === void 0) {
              if (e === null) return e;
              throw Error(
                `A case reducer on a non-draftable value must not return undefined`,
              );
            }
            return r;
          }
        return e;
      }, e)
    );
  }
  return ((o.getInitialState = a), o);
}
var zu = (e, t) => (wu(e) ? e.match(t) : e(t));
function Bu(...e) {
  return (t) => e.some((e) => zu(e, t));
}
var Vu = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  Hu = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--; ) t += Vu[(Math.random() * 64) | 0];
    return t;
  },
  Uu = [`name`, `message`, `stack`, `code`],
  Wu = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Z = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Gu = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of Uu) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Ku = `External signal was aborted`,
  qu = (() => {
    function e(e, t, n) {
      let r = Tu(e + `/fulfilled`, (e, t, n, r) => ({
          payload: e,
          meta: {
            ...(r || {}),
            arg: n,
            requestId: t,
            requestStatus: `fulfilled`,
          },
        })),
        i = Tu(e + `/pending`, (e, t, n) => ({
          payload: void 0,
          meta: {
            ...(n || {}),
            arg: t,
            requestId: e,
            requestStatus: `pending`,
          },
        })),
        a = Tu(e + `/rejected`, (e, t, r, i, a) => ({
          payload: i,
          error: ((n && n.serializeError) || Gu)(e || `Rejected`),
          meta: {
            ...(a || {}),
            arg: r,
            requestId: t,
            rejectedWithValue: !!i,
            requestStatus: `rejected`,
            aborted: e?.name === `AbortError`,
            condition: e?.name === `ConditionError`,
          },
        }));
      function o(e, { signal: o } = {}) {
        return (s, c, l) => {
          let u = n?.idGenerator ? n.idGenerator(e) : Hu(),
            d = new AbortController(),
            f,
            p;
          function m(e) {
            ((p = e), d.abort());
          }
          o &&
            (o.aborted
              ? m(Ku)
              : o.addEventListener(`abort`, () => m(Ku), { once: !0 }));
          let h = (async function () {
            let o;
            try {
              let a = n?.condition?.(e, { getState: c, extra: l });
              if ((Yu(a) && (a = await a), a === !1 || d.signal.aborted))
                throw {
                  name: `ConditionError`,
                  message: `Aborted due to condition callback returning false.`,
                };
              let h = new Promise((e, t) => {
                ((f = () => {
                  t({ name: `AbortError`, message: p || `Aborted` });
                }),
                  d.signal.addEventListener(`abort`, f, { once: !0 }));
              });
              (s(
                i(
                  u,
                  e,
                  n?.getPendingMeta?.(
                    { requestId: u, arg: e },
                    { getState: c, extra: l },
                  ),
                ),
              ),
                (o = await Promise.race([
                  h,
                  Promise.resolve(
                    t(e, {
                      dispatch: s,
                      getState: c,
                      extra: l,
                      requestId: u,
                      signal: d.signal,
                      abort: m,
                      rejectWithValue: (e, t) => new Wu(e, t),
                      fulfillWithValue: (e, t) => new Z(e, t),
                    }),
                  ).then((t) => {
                    if (t instanceof Wu) throw t;
                    return t instanceof Z
                      ? r(t.payload, u, e, t.meta)
                      : r(t, u, e);
                  }),
                ])));
            } catch (t) {
              o =
                t instanceof Wu ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
            } finally {
              f && d.signal.removeEventListener(`abort`, f);
            }
            return (
              (n &&
                !n.dispatchConditionRejection &&
                a.match(o) &&
                o.meta.condition) ||
                s(o),
              o
            );
          })();
          return Object.assign(h, {
            abort: m,
            requestId: u,
            arg: e,
            unwrap() {
              return h.then(Ju);
            },
          });
        };
      }
      return Object.assign(o, {
        pending: i,
        rejected: a,
        fulfilled: r,
        settled: Bu(a, r),
        typePrefix: e,
      });
    }
    return ((e.withTypes = () => e), e);
  })();
function Ju(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Yu(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var Xu = Symbol.for(`rtk-slice-createasyncthunk`);
function Zu(e, t) {
  return `${e}/${t}`;
}
function Qu({ creators: e } = {}) {
  let t = e?.asyncThunk?.[Xu];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(md(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(td()) : e.reducers) || {},
      a = Object.keys(i),
      o = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      s = {
        addCase(e, t) {
          let n = typeof e == `string` ? e : e.type;
          if (!n) throw Error(md(12));
          if (n in o.sliceCaseReducersByType) throw Error(md(13));
          return ((o.sliceCaseReducersByType[n] = t), s);
        },
        addMatcher(e, t) {
          return (o.sliceMatchers.push({ matcher: e, reducer: t }), s);
        },
        exposeAction(e, t) {
          return ((o.actionCreators[e] = t), s);
        },
        exposeCaseReducer(e, t) {
          return ((o.sliceCaseReducersByName[e] = t), s);
        },
      };
    a.forEach((r) => {
      let a = i[r],
        o = {
          reducerName: r,
          type: Zu(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      rd(a) ? ad(o, a, s, t) : nd(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? Iu(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return Ru(e.initialState, (e) => {
        for (let t in i) e.addCase(t, i[t]);
        for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
        for (let t of n) e.addMatcher(t.matcher, t.reducer);
        r && e.addDefaultCase(r);
      });
    }
    let l = (e) => e,
      u = new Map(),
      d = new WeakMap(),
      f;
    function p(e, t) {
      return ((f ||= c()), f(e, t));
    }
    function m() {
      return ((f ||= c()), f.getInitialState());
    }
    function h(t, n = !1) {
      function r(e) {
        let i = e[t];
        return (i === void 0 && n && (i = Ou(d, r, m)), i);
      }
      function i(t = l) {
        return Ou(
          Ou(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = $u(a, t, () => Ou(d, t, m), n);
            return r;
          },
        );
      }
      return {
        reducerPath: t,
        getSelectors: i,
        get selectors() {
          return i(r);
        },
        selectSlice: r,
      };
    }
    let g = {
      name: n,
      reducer: p,
      actions: o.actionCreators,
      caseReducers: o.sliceCaseReducersByName,
      getInitialState: m,
      ...h(r),
      injectInto(e, { reducerPath: t, ...n } = {}) {
        let i = t ?? r;
        return (
          e.inject({ reducerPath: i, reducer: p }, n),
          { ...g, ...h(i, !0) }
        );
      },
    };
    return g;
  };
}
function $u(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (o === void 0 && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var ed = Qu();
function td() {
  function e(e, t) {
    return { _reducerDefinitionType: `asyncThunk`, payloadCreator: e, ...t };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(e) {
        return Object.assign(
          {
            [e.name](...t) {
              return e(...t);
            },
          }[e.name],
          { _reducerDefinitionType: `reducer` },
        );
      },
      preparedReducer(e, t) {
        return {
          _reducerDefinitionType: `reducerWithPrepare`,
          prepare: e,
          reducer: t,
        };
      },
      asyncThunk: e,
    }
  );
}
function nd({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !id(r)) throw Error(md(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? Tu(e, o) : Tu(e));
}
function rd(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function id(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function ad({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(md(18));
  let {
      payloadCreator: a,
      fulfilled: o,
      pending: s,
      rejected: c,
      settled: l,
      options: u,
    } = n,
    d = i(e, a, u);
  (r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    s && r.addCase(d.pending, s),
    c && r.addCase(d.rejected, c),
    l && r.addMatcher(d.settled, l),
    r.exposeCaseReducer(t, {
      fulfilled: o || od,
      pending: s || od,
      rejected: c || od,
      settled: l || od,
    }));
}
function od() {}
var sd = `listener`,
  cd = `completed`,
  ld = `cancelled`;
(`${ld}`, `${cd}`, `${sd}${ld}`, `${sd}${cd}`);
var { assign: ud } = Object,
  dd = `listenerMiddleware`,
  fd = ud(Tu(`${dd}/add`), { withTypes: () => fd });
`${dd}`;
var pd = ud(Tu(`${dd}/remove`), { withTypes: () => pd });
function md(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var hd = qu(
    `auth/login`,
    async ({ role: e, email: t, password: n }, { rejectWithValue: r }) => {
      try {
        let { data: r } = await H.post(`/auth/login`, {
          role: e,
          email: t,
          password: n,
        });
        return (
          r.success &&
            (localStorage.setItem(`token`, r.token),
            M.success(r.message),
            setTimeout(() => {
              window.location.replace(`/blood`);
            }, 2e3)),
          r
        );
      } catch (e) {
        return e.response && e.response.data.message
          ? r(e.response.data.message)
          : r(e.message);
      }
    },
  ),
  gd = qu(
    `auth/register`,
    async (
      {
        role: e,
        name: t,
        email: n,
        password: r,
        organisationName: i,
        hospitalName: a,
        website: o,
        address: s,
        phone: c,
      },
      { rejectWithValue: l },
    ) => {
      try {
        let { data: l } = await H.post(`/auth/register`, {
          role: e,
          name: t,
          email: n,
          password: r,
          organisationName: i,
          hospitalName: a,
          website: o,
          address: s,
          phone: c,
        });
        return (
          l.success &&
            (M.success(l.message),
            setTimeout(() => {
              window.location.replace(`/login`);
            }, 2e3)),
          l
        );
      } catch (e) {
        return e.response && e.response.data.message
          ? l(e.response.data.message)
          : l(e.message);
      }
    },
  ),
  _d = qu(`auth/getCurrentUser`, async (e, { rejectWithValue: t }) => {
    try {
      let e = await H.get(`/auth/current-user`);
      if (e?.data) return e?.data;
    } catch (e) {
      return e.response && e.response.data.message
        ? t(e.response.data.message)
        : t(e.message);
    }
  }),
  vd = qu(`auth/updateProfile`, async (e, { rejectWithValue: t }) => {
    try {
      let { data: n } = await H.put(`/auth/update-profile`, e);
      return n?.success
        ? (M.success(n.message), n)
        : t(n?.message ?? `Update failed`);
    } catch (e) {
      let n = e.response?.data?.message ?? e.message ?? `Update failed`;
      return (M.error(n), t(n));
    }
  });
function yd({ children: e }) {
  let t = Lr(),
    n = async () => {
      try {
        let { data: e } = await H.get(`/auth/current-user`);
        e?.success && t(_d(e));
      } catch (e) {
        (localStorage.clear(), console.log(e));
      }
    };
  return (
    (0, v.useEffect)(() => {
      n();
    }),
    localStorage.getItem(`token`) ? e : (0, E.jsx)(sn, { to: `login` })
  );
}
var Q = [
    `Age 18–65 (varies by centre; check local guidelines)`,
    `Minimum weight around 50 kg`,
    `Good general health on the day of donation`,
    `At least 3 months since your last whole blood donation`,
    `Not currently ill, on certain medications, or at risk per screening`,
  ],
  bd = [
    `Sleep well and eat a healthy meal before donating.`,
    `Stay hydrated—drink extra water before and after.`,
    `Bring a valid ID and any donor card if you have one.`,
    `Rest for a few minutes after donation and avoid heavy exercise that day.`,
  ];
function xd() {
  let e = Lc(),
    { user: t } = Br((e) => e.auth);
  return (0, E.jsxs)(Ic, {
    children: [
      (0, E.jsx)(Hc, {
        title: `Donate blood`,
        subtitle: `One donation can save up to three lives. Learn what to expect, check basic eligibility, and register on RaktSeva to connect with organisations near you.`,
        image: U.donate,
        imageAlt: `Blood donation process`,
      }),
      (0, E.jsx)(`section`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16`,
        children: (0, E.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12`,
          children: [
            (0, E.jsxs)(`div`, {
              children: [
                (0, E.jsx)(`h2`, {
                  className: `text-2xl font-bold text-primary-dark`,
                  children: `Why donate through RaktSeva?`,
                }),
                (0, E.jsx)(`p`, {
                  className: `mt-4 text-primary-dark/70 leading-relaxed`,
                  children: `When you register as a donor, your profile—including blood group—helps organisations plan drives and reach out when stock is low. You can track your donation history and stay connected to the hospitals and blood banks in our network.`,
                }),
                (0, E.jsx)(Rc, {
                  primaryLabel: `Register as a donor`,
                  primaryGuestTo: `/register`,
                  className: `mt-6`,
                }),
              ],
            }),
            (0, E.jsx)(`div`, {
              className: `rounded-2xl overflow-hidden shadow-lg aspect-4/3`,
              children: (0, E.jsx)(`img`, {
                src: U.hero,
                alt: `Donor giving blood`,
                className: `w-full h-full object-cover`,
              }),
            }),
          ],
        }),
      }),
      (0, E.jsx)(`section`, {
        className: `bg-primary-green/5 py-16`,
        children: (0, E.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12`,
          children: [
            (0, E.jsxs)(`div`, {
              children: [
                (0, E.jsx)(`h2`, {
                  className: `text-xl font-bold text-primary-dark`,
                  children: `Basic eligibility`,
                }),
                (0, E.jsx)(`p`, {
                  className: `text-sm text-primary-dark/60 mt-1`,
                  children: `Final eligibility is determined by the blood bank at screening.`,
                }),
                (0, E.jsx)(`ul`, {
                  className: `mt-6 space-y-3`,
                  children: Q.map((e) =>
                    (0, E.jsxs)(
                      `li`,
                      {
                        className: `flex gap-2 text-sm text-primary-dark/80`,
                        children: [
                          (0, E.jsx)(`span`, {
                            className: `text-primary-green font-bold`,
                            children: `✓`,
                          }),
                          e,
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, E.jsxs)(`div`, {
              children: [
                (0, E.jsx)(`h2`, {
                  className: `text-xl font-bold text-primary-dark`,
                  children: `Before you donate`,
                }),
                (0, E.jsx)(`ul`, {
                  className: `mt-6 space-y-3`,
                  children: bd.map((e) =>
                    (0, E.jsxs)(
                      `li`,
                      {
                        className: `flex gap-2 text-sm text-primary-dark/80`,
                        children: [
                          (0, E.jsx)(`span`, {
                            className: `text-primary-red font-bold`,
                            children: `•`,
                          }),
                          e,
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      !e &&
        (0, E.jsx)(`section`, {
          className: `max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center`,
          children: (0, E.jsxs)(`p`, {
            className: `text-primary-dark/70`,
            children: [
              `Already registered?`,
              ` `,
              (0, E.jsx)($n, {
                to: `/login`,
                className: `text-primary-green font-semibold hover:underline`,
                children: `Sign in`,
              }),
              ` `,
              `to view your dashboard and donation history.`,
            ],
          }),
        }),
      e &&
        (0, E.jsxs)(`section`, {
          className: `max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center`,
          children: [
            (0, E.jsx)(`p`, {
              className: `text-primary-dark/70 mb-4`,
              children: `You are signed in. View available blood stock or go to your dashboard.`,
            }),
            (0, E.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row gap-3 justify-center`,
              children: [
                (0, E.jsx)($n, {
                  to: `/blood`,
                  className: `px-6 py-3 rounded-full bg-primary-red text-primary-light font-semibold`,
                  children: `View blood availability`,
                }),
                (0, E.jsx)($n, {
                  to: wa(t?.role),
                  className: `px-6 py-3 rounded-full bg-primary-green text-primary-light font-semibold`,
                  children: `Go to dashboard`,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Sd() {
  return localStorage.getItem(`token`)
    ? (0, E.jsx)(yd, { children: (0, E.jsx)(Nc, {}) })
    : (0, E.jsx)(xd, {});
}
function Cd() {
  let e = Lr();
  return (
    (0, v.useEffect)(() => {
      localStorage.getItem(`token`) &&
        (async () => {
          try {
            let { data: t } = await H.get(`/auth/current-user`);
            t?.success && e(_d(t));
          } catch {
            localStorage.clear();
          }
        })();
    }, [e]),
    null
  );
}
var wd = Fu({
    reducer: {
      auth: ed({
        name: `auth`,
        initialState: {
          loading: !1,
          user: null,
          token: localStorage.getItem(`token`)
            ? localStorage.getItem(`token`)
            : null,
          error: null,
        },
        reducers: {},
        extraReducers: (e) => {
          (e.addCase(hd.pending, (e) => {
            ((e.loading = !0), (e.error = null));
          }),
            e.addCase(hd.fulfilled, (e, { payload: t }) => {
              ((e.loading = !1), (e.user = t.user), (e.token = t.token));
            }),
            e.addCase(hd.rejected, (e, { payload: t }) => {
              ((e.loading = !1), (e.error = t));
            }),
            e.addCase(gd.pending, (e) => {
              ((e.loading = !0), (e.error = null));
            }),
            e.addCase(gd.fulfilled, (e, { payload: t }) => {
              ((e.loading = !1), (e.success = t.user));
            }),
            e.addCase(gd.rejected, (e, { payload: t }) => {
              ((e.loading = !1), (e.error = t));
            }),
            e.addCase(_d.pending, (e) => {
              ((e.loading = !0), (e.error = null));
            }),
            e.addCase(_d.fulfilled, (e, { payload: t }) => {
              ((e.loading = !1),
                (e.user = t.user),
                (e.token = localStorage.getItem(`token`)));
            }),
            e.addCase(_d.rejected, (e, { payload: t }) => {
              ((e.loading = !1), (e.error = t));
            }),
            e.addCase(vd.pending, (e) => {
              ((e.loading = !0), (e.error = null));
            }),
            e.addCase(vd.fulfilled, (e, { payload: t }) => {
              ((e.loading = !1), (e.user = t.user));
            }),
            e.addCase(vd.rejected, (e, { payload: t }) => {
              ((e.loading = !1), (e.error = t));
            }));
        },
      }).reducer,
    },
  }),
  Td = (e, t, n, r) => {
    e.preventDefault();
    try {
      if (!r || !t || !n) return alert(`Please provide all fields!`);
      wd.dispatch(hd({ email: t, password: n, role: r }));
    } catch (e) {
      console.log(e);
    }
  },
  Ed = (e, t, n, r, i, a, o, s, c, l) => {
    e.preventDefault();
    try {
      wd.dispatch(
        gd({
          role: t,
          name: n,
          email: r,
          password: i,
          organisationName: a,
          hospitalName: o,
          website: s,
          address: c,
          phone: l,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };
function Dd({ formType: e, formTitle: t, formText: n, submitBtn: r }) {
  let [i, a] = (0, v.useState)(``),
    [o, s] = (0, v.useState)(``),
    [c, l] = (0, v.useState)(``),
    [u, d] = (0, v.useState)(``),
    [f, p] = (0, v.useState)(``),
    [m, h] = (0, v.useState)(``),
    [g, _] = (0, v.useState)(``),
    [y, b] = (0, v.useState)(``),
    [x, S] = (0, v.useState)(``),
    [C, w] = (0, v.useState)(!1);
  return (0, E.jsx)(`div`, {
    className: `w-full max-w-lg mx-auto`,
    children: (0, E.jsxs)(`form`, {
      onSubmit: (t) => {
        if (e === `isLogin`) return Td(t, c, u, i);
        if (e === `isRegister`) return Ed(t, i, o, c, u, f, m, g, y, x);
      },
      className: `flex flex-col w-full p-4 sm:p-6 md:p-10 border-2 border-primary-dark rounded-2xl sm:rounded-4xl space-y-2`,
      children: [
        (0, E.jsx)(`h2`, {
          className: `text-2xl sm:text-3xl font-medium tracking-tighter`,
          children: t,
        }),
        (0, E.jsx)(`p`, {
          className: `text-primary-dark/80 text-sm mb-6`,
          children: n,
        }),
        (0, E.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            (0, E.jsx)(`label`, {
              htmlFor: `roleSelect`,
              className: `text-sm text-primary-dark`,
              children: `Select Role`,
            }),
            (0, E.jsxs)(`div`, {
              className: `relative`,
              children: [
                (0, E.jsxs)(`select`, {
                  id: `roleSelect`,
                  value: i,
                  onChange: (e) => a(e.target.value),
                  onMouseDown: () => w((e) => !e),
                  onBlur: () => w(!1),
                  className: `w-full appearance-none border border-primary-dark rounded-2xl px-4 py-2 pr-10 text-sm text-primary-dark outline-none cursor-pointer`,
                  children: [
                    (0, E.jsx)(`option`, {
                      defaultValue: `Select your role`,
                      children: `Select your role`,
                    }),
                    (0, E.jsx)(`option`, { value: `admin`, children: `Admin` }),
                    (0, E.jsx)(`option`, { value: `donor`, children: `Donor` }),
                    (0, E.jsx)(`option`, {
                      value: `hospital`,
                      children: `Hospital`,
                    }),
                    (0, E.jsx)(`option`, {
                      value: `organisation`,
                      children: `Organisation`,
                    }),
                  ],
                }),
                (0, E.jsx)(`div`, {
                  className: `flex items-center pointer-events-none absolute inset-y-0 right-4`,
                  children: (0, E.jsx)(va, {
                    className: `text-primary-dark/40 transition-transform duration-200 ${C ? `rotate-180` : ``}`,
                    size: 14,
                  }),
                }),
              ],
            }),
          ],
        }),
        (() => {
          switch (!0) {
            case e === `isLogin`:
              return (0, E.jsxs)(E.Fragment, {
                children: [
                  (0, E.jsx)(F, {
                    labelFor: `forEmail`,
                    labelText: `Email`,
                    inputType: `email`,
                    name: `email`,
                    value: c,
                    onChange: (e) => l(e.target.value),
                  }),
                  (0, E.jsx)(F, {
                    labelFor: `forPassword`,
                    labelText: `Password`,
                    inputType: `password`,
                    name: `password`,
                    value: u,
                    onChange: (e) => d(e.target.value),
                  }),
                  (0, E.jsx)(`button`, {
                    className: `bg-primary-green hover:bg-primary-green/90 text-white text-lg font-medium p-2 my-2 rounded-2xl cursor-pointer`,
                    type: `submit`,
                    children: r,
                  }),
                ],
              });
            case e === `isRegister`:
              return (0, E.jsxs)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 w-full gap-x-4 gap-y-2`,
                children: [
                  (i === `admin` || i === `donor`) &&
                    (0, E.jsx)(F, {
                      labelFor: `forName`,
                      labelText: `Name`,
                      inputType: `text`,
                      name: `name`,
                      value: o,
                      onChange: (e) => s(e.target.value),
                    }),
                  i === `hospital` &&
                    (0, E.jsx)(F, {
                      labelFor: `forHospitalName`,
                      labelText: `Hospital Name`,
                      inputType: `text`,
                      name: `hospitalName`,
                      value: m,
                      onChange: (e) => h(e.target.value),
                    }),
                  i === `organisation` &&
                    (0, E.jsx)(F, {
                      labelFor: `forOrganisationName`,
                      labelText: `Organisation Name`,
                      inputType: `text`,
                      name: `organisationName`,
                      value: f,
                      onChange: (e) => p(e.target.value),
                    }),
                  (0, E.jsx)(F, {
                    labelFor: `forEmail`,
                    labelText: `Email`,
                    inputType: `email`,
                    name: `email`,
                    value: c,
                    onChange: (e) => l(e.target.value),
                  }),
                  (0, E.jsx)(F, {
                    labelFor: `forPassword`,
                    labelText: `Password`,
                    inputType: `password`,
                    name: `password`,
                    value: u,
                    onChange: (e) => d(e.target.value),
                  }),
                  (0, E.jsx)(F, {
                    labelFor: `forWebsite`,
                    labelText: `Website URL`,
                    inputType: `text`,
                    name: `website`,
                    value: g,
                    onChange: (e) => _(e.target.value),
                  }),
                  (0, E.jsx)(F, {
                    labelFor: `forPhone`,
                    labelText: `Phone Number`,
                    inputType: `text`,
                    name: `phone`,
                    value: x,
                    onChange: (e) => S(e.target.value),
                  }),
                  (0, E.jsx)(F, {
                    labelFor: `forAddress`,
                    labelText: `Address`,
                    inputType: `text`,
                    name: `address`,
                    value: y,
                    onChange: (e) => b(e.target.value),
                  }),
                  (0, E.jsx)(`button`, {
                    className: `col-span-2 bg-primary-green hover:bg-primary-green/90 text-white text-lg font-medium p-2 my-2 rounded-2xl cursor-pointer`,
                    type: `submit`,
                    children: r,
                  }),
                ],
              });
          }
        })(),
        (0, E.jsxs)(`div`, {
          className: `flex items-center justify-center gap-1 mt-1 text-sm tracking-tight text-primary-dark/60`,
          children: [
            (0, E.jsx)(`span`, {
              children:
                e === `isLogin`
                  ? `Don't have an account?`
                  : `Already have an account?`,
            }),
            (0, E.jsx)($n, {
              to: e === `isLogin` ? `/register` : `/login`,
              className: `text-primary-green font-semibold hover:underline underline-offset-2`,
              children: e === `isLogin` ? `Sign Up` : `Sign In`,
            }),
          ],
        }),
      ],
    }),
  });
}
function Od() {
  let { loading: e, error: t } = Br((e) => e.auth);
  return (0, E.jsxs)(E.Fragment, {
    children: [
      t && (0, E.jsx)(`span`, { children: M.error(t) }),
      e
        ? (0, E.jsx)(Wi, {})
        : (0, E.jsx)(`div`, {
            className: `min-h-[calc(100dvh-4rem)] flex justify-center items-center px-4 py-8 tracking-tight`,
            children: (0, E.jsx)(Dd, {
              formType: `isRegister`,
              formTitle: `Create your new account`,
              formText: `Enter your details to get started`,
              submitBtn: `Sign Up`,
            }),
          }),
    ],
  });
}
function kd() {
  let { loading: e, error: t } = Br((e) => e.auth);
  return (0, E.jsxs)(E.Fragment, {
    children: [
      t && (0, E.jsx)(`span`, { children: M.error(t) }),
      e
        ? (0, E.jsx)(Wi, {})
        : (0, E.jsx)(`div`, {
            className: `min-h-[calc(100dvh-4rem)] flex justify-center items-center px-4 py-8 tracking-tight`,
            children: (0, E.jsx)(Dd, {
              formType: `isLogin`,
              formTitle: `Sign in to your account`,
              formText: `Enter your email and password to access your account`,
              submitBtn: `Sign In`,
            }),
          }),
    ],
  });
}
function Ad({ children: e }) {
  return localStorage.getItem(`token`)
    ? (0, E.jsx)(sn, { to: `/blood`, replace: !0 })
    : e;
}
function jd() {
  let { user: e } = Br((e) => e.auth);
  return (0, E.jsx)(ja, {
    children: (0, E.jsxs)(`div`, {
      className: `max-w-3xl`,
      children: [
        (0, E.jsxs)(`h1`, {
          className: `text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter`,
          children: [
            `Welcome, Admin `,
            (0, E.jsx)(`i`, {
              className: `gradient-text capitalize`,
              children: e?.name,
            }),
          ],
        }),
        (0, E.jsx)(`h3`, {
          className: `text-base sm:text-lg mt-2 text-primary-dark/80`,
          children: `Manage blood bank app`,
        }),
        (0, E.jsx)(`p`, {
          className: `mt-4 text-sm sm:text-base text-primary-dark/70 leading-relaxed`,
          children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa amet, exercitationem iste minus necessitatibus aperiam totam eligendi nihil recusandae quia, mollitia atque illo repellat minima error, earum ducimus similique incidunt vero animi velit quam sed! Quia esse, nihil quidem incidunt provident quaerat fuga totam, eaque minus tenetur ducimus ea praesentium. Ut distinctio deserunt earum a quod architecto, nostrum, sapiente sed tempore voluptatum cumque id nobis eum atque? Voluptatum minima molestiae voluptatem autem optio sed, laboriosam repellat nostrum nesciunt nam alias magnam exercitationem obcaecati? Tempore, id aliquam veniam nihil at, provident, quasi iure repellendus quas totam nam consectetur ad pariatur ea dicta voluptatum dignissimos? Libero eaque nam maiores! Fuga ipsa, quam facere doloremque aliquid consequatur necessitatibus eum eius nemo officiis numquam! Incidunt fugit illo iure voluptatum non quasi porro nesciunt laboriosam repudiandae vel facere placeat numquam quod provident, accusamus eaque, dolor error recusandae. Voluptatum odit consectetur repellendus officiis eos, quae laboriosam sunt sed aspernatur nisi. Beatae, natus cum sit necessitatibus voluptates voluptas nulla ullam omnis et dolores explicabo nostrum? Ea, laboriosam debitis? Dolore possimus quis non et corporis fuga deserunt illum quae sed. Earum quam cupiditate saepe minus eius, repellendus beatae commodi nostrum pariatur veritatis maiores hic voluptates atque deleniti laboriosam quos in at quasi tenetur iusto unde omnis voluptatum possimus suscipit? Voluptates rerum exercitationem, blanditiis magni earum laboriosam consequuntur dolore facilis autem illo numquam cum ex similique reprehenderit recusandae dolorem voluptas sint eos ad incidunt nobis voluptatibus. Repellat esse numquam architecto eos voluptas ratione, quis excepturi tenetur non, dolor animi assumenda? Voluptates sunt nobis laboriosam est eveniet eaque aliquam explicabo, porro ab alias consequatur magni saepe praesentium? Earum laboriosam a repellendus vitae dolor vel aut molestias harum aliquid quia sapiente optio illo atque et ullam inventore fugit expedita blanditiis quidem, illum explicabo nesciunt ut sed soluta? Sint, odio nostrum omnis eum hic nobis suscipit quis rerum expedita quo cupiditate eveniet! Sed a ducimus voluptatibus optio perspiciatis deserunt inventore laboriosam molestias magni qui! Natus perspiciatis consequatur ad, omnis atque neque ratione ipsa accusantium nisi id soluta? Maiores ipsa molestiae sunt architecto? Illo assumenda quam voluptate praesentium rem iste mollitia nesciunt magni voluptatibus, cupiditate recusandae commodi sequi nostrum ipsam repellat iure sit molestiae repudiandae perspiciatis dolores hic. Dicta id, modi qui odit quasi dolorem eveniet minus minima ipsum, magnam ut quidem, voluptatum facilis dolore eligendi? Cupiditate, ad provident obcaecati dolore pariatur quam rem facilis voluptas delectus sit nam laudantium, vel atque!`,
        }),
      ],
    }),
  });
}
function Md() {
  let [e, t] = (0, v.useState)([]),
    n = async () => {
      try {
        let { data: e } = await H.get(`/inventory/get-donors`);
        e?.success && t(e?.donors);
      } catch (e) {
        console.log(e);
      }
    };
  return (
    (0, v.useEffect)(() => {
      n();
    }, []),
    (0, E.jsx)(ja, {
      children: (0, E.jsx)(Gi, {
        children: (0, E.jsxs)(`table`, {
          className: `w-full text-sm`,
          children: [
            (0, E.jsx)(`thead`, {
              className: `bg-primary-red text-primary-light`,
              children: (0, E.jsxs)(`tr`, {
                children: [
                  (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Name` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Email` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Phone` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Date` }),
                ],
              }),
            }),
            (0, E.jsx)(`tbody`, {
              children:
                e?.length > 0
                  ? e.map((e, t) =>
                      (0, E.jsxs)(
                        `tr`,
                        {
                          className: `border-b border-primary-dark/40 font-medium`,
                          children: [
                            (0, E.jsxs)(`td`, {
                              className: `p-3 text-center`,
                              children: [t + 1, `.`],
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center uppercase`,
                              children: e.name,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center ${e.email ? `text-primary-dark` : `text-primary-dark/50`}`,
                              children: e.email || `Not Available`,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: e.phone,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: new Date(e.createdAt)
                                .toLocaleString(`en-GB`, {
                                  day: `numeric`,
                                  month: `long`,
                                  year: `numeric`,
                                  hour: `numeric`,
                                  minute: `2-digit`,
                                  hour12: !0,
                                })
                                .replace(` at `, `, `)
                                .replace(/am|pm/i, (e) => e.toUpperCase()),
                            }),
                          ],
                        },
                        e._id,
                      ),
                    )
                  : (0, E.jsx)(`tr`, {
                      children: (0, E.jsx)(`td`, {
                        className: `p-4 text-center text-primary-dark/50`,
                        children: `No records found`,
                      }),
                    }),
            }),
          ],
        }),
      }),
    })
  );
}
function $() {
  let [e, t] = (0, v.useState)([]),
    n = async () => {
      try {
        let { data: e } = await H.get(`/inventory/get-hospitals`);
        e?.success && t(e?.hospitals);
      } catch (e) {
        console.log(e);
      }
    };
  return (
    (0, v.useEffect)(() => {
      n();
    }, []),
    (0, E.jsx)(ja, {
      children: (0, E.jsx)(Gi, {
        children: (0, E.jsxs)(`table`, {
          className: `w-full text-sm`,
          children: [
            (0, E.jsx)(`thead`, {
              className: `bg-primary-red text-primary-light`,
              children: (0, E.jsxs)(`tr`, {
                children: [
                  (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Name` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Email` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Phone` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Address` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Date` }),
                ],
              }),
            }),
            (0, E.jsx)(`tbody`, {
              children:
                e?.length > 0
                  ? e.map((e, t) =>
                      (0, E.jsxs)(
                        `tr`,
                        {
                          className: `border-b border-primary-dark/40 font-medium`,
                          children: [
                            (0, E.jsxs)(`td`, {
                              className: `p-3 text-center`,
                              children: [t + 1, `.`],
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center uppercase`,
                              children: e.hospitalName + ` (Org)`,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: e.email || `Not Available`,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: e.phone,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center capitalize`,
                              children: e.address,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: new Date(e.createdAt)
                                .toLocaleString(`en-GB`, {
                                  day: `numeric`,
                                  month: `long`,
                                  year: `numeric`,
                                  hour: `numeric`,
                                  minute: `2-digit`,
                                  hour12: !0,
                                })
                                .replace(` at `, `, `)
                                .replace(/am|pm/i, (e) => e.toUpperCase()),
                            }),
                          ],
                        },
                        e._id,
                      ),
                    )
                  : (0, E.jsx)(`tr`, {
                      children: (0, E.jsx)(`td`, {
                        className: `p-4 text-center text-primary-dark/50`,
                        children: `No records found`,
                      }),
                    }),
            }),
          ],
        }),
      }),
    })
  );
}
function Nd() {
  let { user: e } = Br((e) => e.auth),
    [t, n] = (0, v.useState)([]),
    r = async () => {
      try {
        if (e?.role === `donor`) {
          let { data: e } = await H.get(`/inventory/get-organisations`);
          e?.success && n(e?.organisations);
        }
        if (e?.role === `hospital`) {
          let { data: e } = await H.get(
            `/inventory/get-organisation-for-hospital`,
          );
          e?.success && n(e?.organisations);
        }
      } catch (e) {
        console.log(e);
      }
    };
  return (
    (0, v.useEffect)(() => {
      r();
    }, [e]),
    (0, E.jsx)(ja, {
      children: (0, E.jsx)(Gi, {
        children: (0, E.jsxs)(`table`, {
          className: `w-full text-sm`,
          children: [
            (0, E.jsx)(`thead`, {
              className: `bg-primary-red text-primary-light`,
              children: (0, E.jsxs)(`tr`, {
                children: [
                  (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Name` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Email` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Phone` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Address` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Date` }),
                ],
              }),
            }),
            (0, E.jsx)(`tbody`, {
              children:
                t?.length > 0
                  ? t.map((e, t) =>
                      (0, E.jsxs)(
                        `tr`,
                        {
                          className: `border-b border-primary-dark/40 font-medium`,
                          children: [
                            (0, E.jsxs)(`td`, {
                              className: `p-3 text-center`,
                              children: [t + 1, `.`],
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center uppercase`,
                              children: e.organisationName + ` (Org)`,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: e.email || `Not Available`,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: e.phone,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center capitalize`,
                              children: e.address,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: new Date(e.createdAt)
                                .toLocaleString(`en-GB`, {
                                  day: `numeric`,
                                  month: `long`,
                                  year: `numeric`,
                                  hour: `numeric`,
                                  minute: `2-digit`,
                                  hour12: !0,
                                })
                                .replace(` at `, `, `)
                                .replace(/am|pm/i, (e) => e.toUpperCase()),
                            }),
                          ],
                        },
                        e._id,
                      ),
                    )
                  : (0, E.jsx)(`tr`, {
                      children: (0, E.jsx)(`td`, {
                        className: `p-4 text-center text-primary-dark/50`,
                        children: `No records found`,
                      }),
                    }),
            }),
          ],
        }),
      }),
    })
  );
}
function Pd() {
  let [e, t] = (0, v.useState)([]),
    { user: n } = Br((e) => e.auth),
    r = async () => {
      try {
        let { data: e } = await H.post(`/inventory/get-inventory-hospital`, {
          filters: { inventoryType: `out`, hospital: n?._id },
        });
        e?.success && (t(e?.inventory), console.log(e));
      } catch (e) {
        console.log(e);
      }
    };
  return (
    (0, v.useEffect)(() => {
      r();
    }, []),
    (0, E.jsx)(ja, {
      children: (0, E.jsx)(Gi, {
        children: (0, E.jsxs)(`table`, {
          className: `w-full text-sm`,
          children: [
            (0, E.jsx)(`thead`, {
              className: `bg-primary-red text-primary-light`,
              children: (0, E.jsxs)(`tr`, {
                children: [
                  (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                  (0, E.jsx)(`th`, {
                    className: `p-3`,
                    children: `Blood Group`,
                  }),
                  (0, E.jsx)(`th`, {
                    className: `p-3`,
                    children: `Inventory Type`,
                  }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Quantity` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Email` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Date` }),
                ],
              }),
            }),
            (0, E.jsx)(`tbody`, {
              children:
                e?.length > 0
                  ? e.map((e, t) =>
                      (0, E.jsxs)(
                        `tr`,
                        {
                          className: `border-b border-primary-dark/40 font-medium`,
                          children: [
                            (0, E.jsxs)(`td`, {
                              className: `p-3 text-center`,
                              children: [t + 1, `.`],
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: e.bloodGroup,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center uppercase ${e.inventoryType === `in` ? `text-primary-green` : `text-primary-red`}`,
                              children: e.inventoryType,
                            }),
                            (0, E.jsxs)(`td`, {
                              className: `p-3 text-center ${e.inventoryType === `in` ? `text-primary-green` : `text-primary-red`}`,
                              children: [
                                e.quantity,
                                ` mL`,
                                e.inventoryType === `in` ? `↑` : `↓`,
                              ],
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center ${e.email ? `text-primary-dark` : `text-primary-dark/50`}`,
                              children: e.email || `Not Available`,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: new Date(e.createdAt)
                                .toLocaleString(`en-GB`, {
                                  day: `numeric`,
                                  month: `long`,
                                  year: `numeric`,
                                  hour: `numeric`,
                                  minute: `2-digit`,
                                  hour12: !0,
                                })
                                .replace(` at `, `, `)
                                .replace(/am|pm/i, (e) => e.toUpperCase()),
                            }),
                          ],
                        },
                        e._id,
                      ),
                    )
                  : (0, E.jsx)(`tr`, {
                      children: (0, E.jsx)(`td`, {
                        className: `p-4 text-center text-primary-dark/50`,
                        children: `No records found`,
                      }),
                    }),
            }),
          ],
        }),
      }),
    })
  );
}
function Fd() {
  let [e, t] = (0, v.useState)([]),
    { user: n } = Br((e) => e.auth),
    r = async () => {
      try {
        let { data: e } = await H.post(`/inventory/get-inventory-hospital`, {
          filters: { inventoryType: `in`, donor: n?._id },
        });
        e?.success && (t(e?.inventory), console.log(e));
      } catch (e) {
        console.log(e);
      }
    };
  return (
    (0, v.useEffect)(() => {
      r();
    }, []),
    (0, E.jsx)(ja, {
      children: (0, E.jsx)(Gi, {
        children: (0, E.jsxs)(`table`, {
          className: `w-full text-sm`,
          children: [
            (0, E.jsx)(`thead`, {
              className: `bg-primary-red text-primary-light`,
              children: (0, E.jsxs)(`tr`, {
                children: [
                  (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                  (0, E.jsx)(`th`, {
                    className: `p-3`,
                    children: `Blood Group`,
                  }),
                  (0, E.jsx)(`th`, {
                    className: `p-3`,
                    children: `Inventory Type`,
                  }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Quantity` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Email` }),
                  (0, E.jsx)(`th`, { className: `p-3`, children: `Date` }),
                ],
              }),
            }),
            (0, E.jsx)(`tbody`, {
              children:
                e?.length > 0
                  ? e.map((e, t) =>
                      (0, E.jsxs)(
                        `tr`,
                        {
                          className: `border-b border-primary-dark/40 font-medium`,
                          children: [
                            (0, E.jsxs)(`td`, {
                              className: `p-3 text-center`,
                              children: [t + 1, `.`],
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: e.bloodGroup,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center uppercase ${e.inventoryType === `in` ? `text-primary-green` : `text-primary-red`}`,
                              children: e.inventoryType,
                            }),
                            (0, E.jsxs)(`td`, {
                              className: `p-3 text-center ${e.inventoryType === `in` ? `text-primary-green` : `text-primary-red`}`,
                              children: [
                                e.quantity,
                                ` mL`,
                                e.inventoryType === `in` ? `↑` : `↓`,
                              ],
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center ${e.email ? `text-primary-dark` : `text-primary-dark/50`}`,
                              children: e.email || `Not Available`,
                            }),
                            (0, E.jsx)(`td`, {
                              className: `p-3 text-center`,
                              children: new Date(e.createdAt)
                                .toLocaleString(`en-GB`, {
                                  day: `numeric`,
                                  month: `long`,
                                  year: `numeric`,
                                  hour: `numeric`,
                                  minute: `2-digit`,
                                  hour12: !0,
                                })
                                .replace(` at `, `, `)
                                .replace(/am|pm/i, (e) => e.toUpperCase()),
                            }),
                          ],
                        },
                        e._id,
                      ),
                    )
                  : (0, E.jsx)(`tr`, {
                      children: (0, E.jsx)(`td`, {
                        className: `p-4 text-center text-primary-dark/50`,
                        children: `No records found`,
                      }),
                    }),
            }),
          ],
        }),
      }),
    })
  );
}
function Id() {
  let [e, t] = (0, v.useState)([]),
    [n, r] = (0, v.useState)([]),
    i = [
      `bg-[rgba(227,22,18,0.25)]`,
      `bg-[rgba(5,133,52,0.25)]`,
      `bg-[rgba(33,150,243,0.25)]`,
    ],
    a = async () => {
      try {
        let { data: e } = await H.get(`/analytics/bloodGroups-data`);
        e?.success && t(e?.bloodGroupData);
      } catch (e) {
        console.log(e);
      }
    };
  (0, v.useEffect)(() => {
    a();
  }, []);
  let o = async () => {
    try {
      let { data: e } = await H.get(`/inventory/get-recent-inventory`);
      e?.success && r(e.inventory);
    } catch (e) {
      (M.error(`Failed to fetch inventory`), console.log(e));
    }
  };
  return (
    (0, v.useEffect)(() => {
      o();
    }, []),
    (0, E.jsxs)(ja, {
      children: [
        (0, E.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`,
          children: e?.map((e, t) => {
            let n = i[t % i.length];
            return (0, E.jsx)(
              `div`,
              {
                className: `${n} rounded-3xl p-4 border border-primary-dark/20 hover:shadow-xl transition-all duration-200 transform hover:scale-105`,
                style: { willChange: `transform` },
                children: (0, E.jsxs)(`div`, {
                  className: `space-y-1 text-base`,
                  children: [
                    (0, E.jsxs)(`p`, {
                      className: `font-medium`,
                      children: [`Blood Group: `, e.bloodGroup],
                    }),
                    (0, E.jsxs)(`p`, {
                      className: `font-medium`,
                      children: [`Total In: `, e.totalIn, ` mL`],
                    }),
                    (0, E.jsxs)(`p`, {
                      className: `font-medium`,
                      children: [`Total Out: `, e.totalOut, ` mL`],
                    }),
                    (0, E.jsxs)(`div`, {
                      className: `flex items-center justify-center bg-primary-dark text-primary-light text-sm font-medium rounded-xl py-1 mt-4 cursor-pointer`,
                      children: [`Available Blood: `, e.availableBlood, ` mL`],
                    }),
                  ],
                }),
              },
              e.bloodGroup,
            );
          }),
        }),
        (0, E.jsxs)(`div`, {
          className: `w-full mt-8 sm:mt-10`,
          children: [
            (0, E.jsx)(`h1`, {
              className: `text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3`,
              children: `Recent Blood Transactions`,
            }),
            (0, E.jsx)(Gi, {
              children: (0, E.jsxs)(`table`, {
                className: `w-full text-sm`,
                children: [
                  (0, E.jsx)(`thead`, {
                    className: `bg-primary-red text-primary-light`,
                    children: (0, E.jsxs)(`tr`, {
                      children: [
                        (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                        (0, E.jsx)(`th`, {
                          className: `p-3`,
                          children: `Blood Group`,
                        }),
                        (0, E.jsx)(`th`, {
                          className: `p-3`,
                          children: `Inventory Type`,
                        }),
                        (0, E.jsx)(`th`, {
                          className: `p-3`,
                          children: `Quantity`,
                        }),
                        (0, E.jsx)(`th`, {
                          className: `p-3`,
                          children: `Donor Email`,
                        }),
                        (0, E.jsx)(`th`, {
                          className: `p-3`,
                          children: `Date & Time`,
                        }),
                      ],
                    }),
                  }),
                  (0, E.jsx)(`tbody`, {
                    children:
                      n?.length > 0
                        ? n.map((e, t) =>
                            (0, E.jsx)(E.Fragment, {
                              children: (0, E.jsxs)(
                                `tr`,
                                {
                                  className: `border-b border-primary-dark/40 font-medium`,
                                  children: [
                                    (0, E.jsxs)(`td`, {
                                      className: `p-3 text-center`,
                                      children: [t + 1, `.`],
                                    }),
                                    (0, E.jsx)(`td`, {
                                      className: `p-3 text-center`,
                                      children: e.bloodGroup,
                                    }),
                                    (0, E.jsx)(`td`, {
                                      className: `p-3 text-center uppercase ${e.inventoryType === `in` ? `text-primary-green` : `text-primary-red`}`,
                                      children: e.inventoryType,
                                    }),
                                    (0, E.jsxs)(`td`, {
                                      className: `p-3 text-center ${e.inventoryType === `in` ? `text-primary-green` : `text-primary-red`}`,
                                      children: [
                                        e.quantity,
                                        ` mL`,
                                        e.inventoryType === `in` ? `↑` : `↓`,
                                      ],
                                    }),
                                    (0, E.jsx)(`td`, {
                                      className: `p-3 text-center ${e.email ? `text-primary-dark` : `text-primary-dark/50`}`,
                                      children: e.email || `Not Available`,
                                    }),
                                    (0, E.jsx)(`td`, {
                                      className: `p-3 text-center`,
                                      children: new Date(e.createdAt)
                                        .toLocaleString(`en-GB`, {
                                          day: `numeric`,
                                          month: `long`,
                                          year: `numeric`,
                                          hour: `numeric`,
                                          minute: `2-digit`,
                                          hour12: !0,
                                        })
                                        .replace(` at `, `, `)
                                        .replace(/am|pm/i, (e) =>
                                          e.toUpperCase(),
                                        ),
                                    }),
                                  ],
                                },
                                e._id,
                              ),
                            }),
                          )
                        : (0, E.jsx)(`tr`, {
                            children: (0, E.jsx)(`td`, {
                              className: `p-4 text-center text-primary-dark/50`,
                              children: `No records found`,
                            }),
                          }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Ld(e) {
  return ia({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24`, fill: `currentColor` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z`,
        },
        child: [],
      },
    ],
  })(e);
}
function Rd() {
  let [e, t] = (0, v.useState)([]),
    n = async () => {
      try {
        let { data: e } = await H.get(`/admin/donor-list`);
        e?.success && t(e?.donorData);
      } catch (e) {
        console.log(e);
      }
    };
  (0, v.useEffect)(() => {
    n();
  }, []);
  let r = async (e) => {
    try {
      if (
        !window.prompt(
          `Are you sure, want to delete this donor record?`,
          `Sure`,
        )
      )
        return;
      let { data: t } = await H.delete(`/admin/delete/${e}`);
      (alert(t?.message), window.location.reload());
    } catch (e) {
      console.log(e);
    }
  };
  return (0, E.jsx)(ja, {
    children: (0, E.jsx)(Gi, {
      children: (0, E.jsxs)(`table`, {
        className: `w-full text-sm`,
        children: [
          (0, E.jsx)(`thead`, {
            className: `bg-primary-red text-primary-light`,
            children: (0, E.jsxs)(`tr`, {
              children: [
                (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Name` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Email` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Phone` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Date` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Action` }),
              ],
            }),
          }),
          (0, E.jsx)(`tbody`, {
            children:
              e?.length > 0
                ? e.map((e, t) =>
                    (0, E.jsxs)(
                      `tr`,
                      {
                        className: `border-b border-primary-dark/40 font-medium`,
                        children: [
                          (0, E.jsxs)(`td`, {
                            className: `p-3 text-center text-primary-dark`,
                            children: [t + 1, `.`],
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center capitalize ${e.name ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.name || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.email ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.email || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.phone ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.phone || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.createdAt ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.createdAt
                              ? new Date(e.createdAt)
                                  .toLocaleString(`en-GB`, {
                                    day: `numeric`,
                                    month: `long`,
                                    year: `numeric`,
                                    hour: `numeric`,
                                    minute: `2-digit`,
                                    hour12: !0,
                                  })
                                  .replace(` at `, `, `)
                                  .replace(/am|pm/i, (e) => e.toUpperCase())
                              : `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 flex justify-center items-center`,
                            children: (0, E.jsxs)(`button`, {
                              onClick: () => r(e._id),
                              className: `flex justify-center items-center gap-x-1 bg-primary-red/20 hover:bg-primary-red/30 text-sm border border-primary-red/40 rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`,
                              children: [
                                (0, E.jsx)(Ld, {
                                  size: 12,
                                  className: `mt-0.45`,
                                }),
                                (0, E.jsx)(`p`, { children: `Delete` }),
                              ],
                            }),
                          }),
                        ],
                      },
                      e._id,
                    ),
                  )
                : (0, E.jsx)(`tr`, {
                    children: (0, E.jsx)(`td`, {
                      colSpan: 6,
                      className: `p-4 text-center text-primary-dark/75`,
                      children: `No records found`,
                    }),
                  }),
          }),
        ],
      }),
    }),
  });
}
function zd() {
  let [e, t] = (0, v.useState)([]),
    n = async () => {
      try {
        let { data: e } = await H.get(`/admin/hospital-list`);
        e?.success && t(e?.hospitalData);
      } catch (e) {
        console.log(e);
      }
    };
  (0, v.useEffect)(() => {
    n();
  }, []);
  let r = async (e) => {
    try {
      if (
        !window.prompt(
          `Are you sure, want to delete this hospital record?`,
          `Sure`,
        )
      )
        return;
      let { data: t } = await H.delete(`/admin/delete/${e}`);
      (alert(t?.message), window.location.reload());
    } catch (e) {
      console.log(e);
    }
  };
  return (0, E.jsx)(ja, {
    children: (0, E.jsx)(Gi, {
      children: (0, E.jsxs)(`table`, {
        className: `w-full text-sm`,
        children: [
          (0, E.jsx)(`thead`, {
            className: `bg-primary-red text-primary-light`,
            children: (0, E.jsxs)(`tr`, {
              children: [
                (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Name` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Email` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Phone` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Date` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Action` }),
              ],
            }),
          }),
          (0, E.jsx)(`tbody`, {
            children:
              e?.length > 0
                ? e.map((e, t) =>
                    (0, E.jsxs)(
                      `tr`,
                      {
                        className: `border-b border-primary-dark/40 font-medium`,
                        children: [
                          (0, E.jsxs)(`td`, {
                            className: `p-3 text-center text-primary-dark`,
                            children: [t + 1, `.`],
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center capitalize ${e.name ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.name || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.email ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.email || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.phone ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.phone || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.createdAt ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.createdAt
                              ? new Date(e.createdAt)
                                  .toLocaleString(`en-GB`, {
                                    day: `numeric`,
                                    month: `long`,
                                    year: `numeric`,
                                    hour: `numeric`,
                                    minute: `2-digit`,
                                    hour12: !0,
                                  })
                                  .replace(` at `, `, `)
                                  .replace(/am|pm/i, (e) => e.toUpperCase())
                              : `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 flex justify-center items-center`,
                            children: (0, E.jsxs)(`button`, {
                              onClick: () => r(e._id),
                              className: `flex justify-center items-center gap-x-1 bg-primary-red/20 hover:bg-primary-red/30 text-sm border border-primary-red/40 rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`,
                              children: [
                                (0, E.jsx)(Ld, {
                                  size: 12,
                                  className: `mt-0.45`,
                                }),
                                (0, E.jsx)(`p`, { children: `Delete` }),
                              ],
                            }),
                          }),
                        ],
                      },
                      e._id,
                    ),
                  )
                : (0, E.jsx)(`tr`, {
                    children: (0, E.jsx)(`td`, {
                      colSpan: 6,
                      className: `p-4 text-center text-primary-dark/75`,
                      children: `No records found`,
                    }),
                  }),
          }),
        ],
      }),
    }),
  });
}
function Bd() {
  let [e, t] = (0, v.useState)([]),
    n = async () => {
      try {
        let { data: e } = await H.get(`/admin/organisation-list`);
        e?.success && t(e?.organisationData);
      } catch (e) {
        console.log(e);
      }
    };
  (0, v.useEffect)(() => {
    n();
  }, []);
  let r = async (e) => {
    try {
      if (
        !window.prompt(
          `Are you sure, want to delete this organisation record?`,
          `Sure`,
        )
      )
        return;
      let { data: t } = await H.delete(`/admin/delete/${e}`);
      (alert(t?.message), window.location.reload());
    } catch (e) {
      console.log(e);
    }
  };
  return (0, E.jsx)(ja, {
    children: (0, E.jsx)(Gi, {
      children: (0, E.jsxs)(`table`, {
        className: `w-full text-sm`,
        children: [
          (0, E.jsx)(`thead`, {
            className: `bg-primary-red text-primary-light`,
            children: (0, E.jsxs)(`tr`, {
              children: [
                (0, E.jsx)(`th`, { className: `p-3`, children: `#` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Name` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Email` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Phone` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Date` }),
                (0, E.jsx)(`th`, { className: `p-3`, children: `Action` }),
              ],
            }),
          }),
          (0, E.jsx)(`tbody`, {
            children:
              e?.length > 0
                ? e.map((e, t) =>
                    (0, E.jsxs)(
                      `tr`,
                      {
                        className: `border-b border-primary-dark/40 font-medium`,
                        children: [
                          (0, E.jsxs)(`td`, {
                            className: `p-3 text-center text-primary-dark`,
                            children: [t + 1, `.`],
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center capitalize ${e.name ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.name || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.email ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.email || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.phone ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.phone || `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 text-center ${e.createdAt ? `text-primary-dark` : `text-primary-dark/75`}`,
                            children: e.createdAt
                              ? new Date(e.createdAt)
                                  .toLocaleString(`en-GB`, {
                                    day: `numeric`,
                                    month: `long`,
                                    year: `numeric`,
                                    hour: `numeric`,
                                    minute: `2-digit`,
                                    hour12: !0,
                                  })
                                  .replace(` at `, `, `)
                                  .replace(/am|pm/i, (e) => e.toUpperCase())
                              : `Not Available`,
                          }),
                          (0, E.jsx)(`td`, {
                            className: `p-3 flex justify-center items-center`,
                            children: (0, E.jsxs)(`button`, {
                              onClick: () => r(e._id),
                              className: `flex justify-center items-center gap-x-1 bg-primary-red/20 hover:bg-primary-red/30 text-sm border border-primary-red/40 rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`,
                              children: [
                                (0, E.jsx)(Ld, {
                                  size: 12,
                                  className: `mt-0.45`,
                                }),
                                (0, E.jsx)(`p`, { children: `Delete` }),
                              ],
                            }),
                          }),
                        ],
                      },
                      e._id,
                    ),
                  )
                : (0, E.jsx)(`tr`, {
                    children: (0, E.jsx)(`td`, {
                      colSpan: 6,
                      className: `p-4 text-center text-primary-dark/75`,
                      children: `No records found`,
                    }),
                  }),
          }),
        ],
      }),
    }),
  });
}
var Vd = [
    { value: ``, label: `Select blood group` },
    { value: `O+`, label: `O+ (O Positive)` },
    { value: `O-`, label: `O- (O Negative)` },
    { value: `A+`, label: `A+ (A Positive)` },
    { value: `A-`, label: `A- (A Negative)` },
    { value: `B+`, label: `B+ (B Positive)` },
    { value: `B-`, label: `B- (B Negative)` },
    { value: `AB+`, label: `AB+ (AB Positive)` },
    { value: `AB-`, label: `AB- (AB Negative)` },
  ],
  Hd = {
    admin: `Admin`,
    donor: `Donor`,
    hospital: `Hospital`,
    organisation: `Organisation`,
  };
function Ud(e) {
  return e
    ? {
        name: e.name ?? ``,
        email: e.email ?? ``,
        phone: e.phone ?? ``,
        address: e.address ?? ``,
        website: e.website ?? ``,
        organisationName: e.organisationName ?? ``,
        hospitalName: e.hospitalName ?? ``,
        bloodGroup: e.bloodGroup ?? ``,
      }
    : {
        name: ``,
        email: ``,
        phone: ``,
        address: ``,
        website: ``,
        organisationName: ``,
        hospitalName: ``,
        bloodGroup: ``,
      };
}
function Wd() {
  let e = Lr(),
    { user: t, loading: n } = Br((e) => e.auth),
    [r, i] = (0, v.useState)(Ud(t)),
    [a, o] = (0, v.useState)(!1);
  (0, v.useEffect)(() => {
    i(Ud(t));
  }, [t]);
  let s = (e) => {
    i((t) => ({ ...t, [e.target.name]: e.target.value }));
  };
  return t
    ? (0, E.jsx)(ja, {
        children: (0, E.jsxs)(`div`, {
          className: `max-w-2xl`,
          children: [
            (0, E.jsx)(`h1`, {
              className: `text-2xl sm:text-3xl font-bold text-primary-dark tracking-tight`,
              children: `Settings`,
            }),
            (0, E.jsx)(`p`, {
              className: `mt-2 text-sm text-primary-dark/60`,
              children: `Update your profile details. Your role cannot be changed here.`,
            }),
            (0, E.jsx)(`div`, {
              className: `mt-4 inline-flex items-center gap-2 rounded-full bg-primary-green/10 px-3 py-1`,
              children: (0, E.jsx)(`span`, {
                className: `text-xs font-semibold text-primary-green uppercase tracking-wide`,
                children: Hd[t.role] ?? t.role,
              }),
            }),
            n
              ? (0, E.jsx)(`div`, {
                  className: `mt-10`,
                  children: (0, E.jsx)(Wi, {}),
                })
              : (0, E.jsxs)(`form`, {
                  onSubmit: (n) => {
                    n.preventDefault();
                    let i = {
                      email: r.email.trim(),
                      phone: r.phone.trim(),
                      address: r.address.trim(),
                      website: r.website.trim(),
                    };
                    ((t?.role === `admin` || t?.role === `donor`) &&
                      (i.name = r.name.trim()),
                      t?.role === `organisation` &&
                        (i.organisationName = r.organisationName.trim()),
                      t?.role === `hospital` &&
                        (i.hospitalName = r.hospitalName.trim()),
                      t?.role === `donor` &&
                        r.bloodGroup &&
                        (i.bloodGroup = r.bloodGroup),
                      e(vd(i)));
                  },
                  className: `mt-8 space-y-4 rounded-2xl border border-primary-dark/10 bg-primary-light p-4 sm:p-6 shadow-sm`,
                  children: [
                    (t.role === `admin` || t.role === `donor`) &&
                      (0, E.jsx)(F, {
                        labelFor: `settingsName`,
                        labelText: `Name`,
                        name: `name`,
                        value: r.name,
                        inputType: `text`,
                        onChange: s,
                      }),
                    t.role === `organisation` &&
                      (0, E.jsx)(F, {
                        labelFor: `settingsOrganisationName`,
                        labelText: `Organisation Name`,
                        name: `organisationName`,
                        value: r.organisationName,
                        inputType: `text`,
                        onChange: s,
                      }),
                    t.role === `hospital` &&
                      (0, E.jsx)(F, {
                        labelFor: `settingsHospitalName`,
                        labelText: `Hospital Name`,
                        name: `hospitalName`,
                        value: r.hospitalName,
                        inputType: `text`,
                        onChange: s,
                      }),
                    (0, E.jsx)(F, {
                      labelFor: `settingsEmail`,
                      labelText: `Email`,
                      name: `email`,
                      value: r.email,
                      inputType: `email`,
                      onChange: s,
                    }),
                    (0, E.jsx)(F, {
                      labelFor: `settingsPhone`,
                      labelText: `Phone Number`,
                      name: `phone`,
                      value: r.phone,
                      inputType: `tel`,
                      onChange: s,
                    }),
                    (0, E.jsx)(F, {
                      labelFor: `settingsAddress`,
                      labelText: `Address`,
                      name: `address`,
                      value: r.address,
                      inputType: `text`,
                      onChange: s,
                    }),
                    (t.role === `organisation` || t.role === `hospital`) &&
                      (0, E.jsx)(F, {
                        labelFor: `settingsWebsite`,
                        labelText: `Website`,
                        name: `website`,
                        value: r.website,
                        inputType: `url`,
                        onChange: s,
                      }),
                    t.role === `donor` &&
                      (0, E.jsxs)(`div`, {
                        className: `flex flex-col text-sm`,
                        children: [
                          (0, E.jsx)(`label`, {
                            htmlFor: `settingsBloodGroup`,
                            children: `Blood Group`,
                          }),
                          (0, E.jsxs)(`div`, {
                            className: `relative mt-1`,
                            children: [
                              (0, E.jsx)(`select`, {
                                id: `settingsBloodGroup`,
                                name: `bloodGroup`,
                                value: r.bloodGroup,
                                onChange: s,
                                onMouseDown: () => o((e) => !e),
                                onBlur: () => o(!1),
                                className: `w-full appearance-none font-medium px-4 py-2 rounded-2xl border border-primary-dark outline-none cursor-pointer`,
                                children: Vd.map((e) =>
                                  (0, E.jsx)(
                                    `option`,
                                    { value: e.value, children: e.label },
                                    e.value || `empty`,
                                  ),
                                ),
                              }),
                              (0, E.jsx)(`div`, {
                                className: `flex items-center pointer-events-none absolute inset-y-0 right-4`,
                                children: (0, E.jsx)(va, {
                                  className: `text-primary-dark/40 transition-transform duration-200 ${a ? `rotate-180` : ``}`,
                                  size: 14,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, E.jsx)(`button`, {
                      type: `submit`,
                      className: `w-full sm:w-auto mt-2 px-8 py-2.5 rounded-full bg-primary-green text-primary-light font-semibold hover:opacity-90 transition-opacity cursor-pointer`,
                      children: `Save changes`,
                    }),
                  ],
                }),
          ],
        }),
      })
    : (0, E.jsx)(ja, { children: (0, E.jsx)(Wi, {}) });
}
function Gd() {
  return (0, E.jsx)(jr, {
    store: wd,
    children: (0, E.jsx)(pe, {
      root: !0,
      options: {
        lerp: 0.05,
        wheelMultiplier: 2.5,
        touchMultiplier: 1,
        smoothWheel: !0,
        smoothTouch: !0,
      },
      children: (0, E.jsxs)(Xn, {
        children: [
          (0, E.jsx)(Cd, {}),
          (0, E.jsx)(Ui, {
            position: `top-right`,
            autoClose: 3e3,
            hideProgressBar: !1,
            newestOnTop: !0,
            closeOnClick: !0,
            pauseOnHover: !0,
            draggable: !0,
            theme: `colored`,
          }),
          (0, E.jsxs)(ln, {
            children: [
              (0, E.jsx)(A, {
                path: `/register`,
                element: (0, E.jsx)(Ad, { children: (0, E.jsx)(Od, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/login`,
                element: (0, E.jsx)(Ad, { children: (0, E.jsx)(kd, {}) }),
              }),
              (0, E.jsx)(A, { path: `/`, element: (0, E.jsx)(Vc, {}) }),
              (0, E.jsx)(A, { path: `/about`, element: (0, E.jsx)(Wc, {}) }),
              (0, E.jsx)(A, { path: `/help`, element: (0, E.jsx)(qc, {}) }),
              (0, E.jsx)(A, { path: `/contact`, element: (0, E.jsx)(Jc, {}) }),
              (0, E.jsx)(A, { path: `/blood`, element: (0, E.jsx)(Sd, {}) }),
              (0, E.jsx)(A, {
                path: `/inventory`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Nc, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/admin`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(jd, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/donor`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Md, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/hospital`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)($, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/organisation`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Nd, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/consumer`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Pd, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/donation`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Fd, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/analytics`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Id, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/settings`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Wd, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/donor-list`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Rd, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/hospital-list`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(zd, {}) }),
              }),
              (0, E.jsx)(A, {
                path: `/organisation-list`,
                element: (0, E.jsx)(yd, { children: (0, E.jsx)(Bd, {}) }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
(0, y.createRoot)(document.getElementById(`root`)).render(
  (0, E.jsx)(v.StrictMode, { children: (0, E.jsx)(Gd, {}) }),
);
