import {
	a2 as H,
	a3 as N,
	a4 as O,
	K as M,
	a5 as Y,
	I,
	a6 as b,
	f as C,
	a as P,
	g as $,
	a7 as T,
	s as g,
	d as A,
	O as j,
	e as v,
	a8 as q,
	a9 as B,
	aa as K,
	ab as W,
	ac as z,
	ad as F,
	c as G,
	l as J,
	p as Q,
	h as E,
	r as U,
	R as X
} from './runtime.Cl3lITj1.js';
import { r as Z } from './svelte-head.DR2xgcYk.js';
import { c as x } from './template.0enpisfs.js';
const aa = new Set(),
	D = new Set();
function m(a) {
	var S;
	var r = this,
		n = r.ownerDocument,
		_ = a.type,
		o = ((S = a.composedPath) == null ? void 0 : S.call(a)) || [],
		e = o[0] || a.target,
		d = 0,
		h = a.__root;
	if (h) {
		var u = o.indexOf(h);
		if (u !== -1 && (r === document || r === window)) {
			a.__root = r;
			return;
		}
		var c = o.indexOf(r);
		if (c === -1) return;
		u <= c && (d = u);
	}
	if (((e = o[d] || a.target), e !== r)) {
		H(a, 'currentTarget', {
			configurable: !0,
			get() {
				return e || n;
			}
		});
		var w = Y,
			i = I;
		N(null), O(null);
		try {
			for (var t, s = []; e !== null; ) {
				var f = e.assignedSlot || e.parentNode || e.host || null;
				try {
					var l = e['__' + _];
					if (l !== void 0 && !e.disabled)
						if (M(l)) {
							var [V, ...k] = l;
							V.apply(e, [a, ...k]);
						} else l.call(e, a);
				} catch (y) {
					t ? s.push(y) : (t = y);
				}
				if (a.cancelBubble || f === r || f === null) break;
				e = f;
			}
			if (t) {
				for (let y of s)
					queueMicrotask(() => {
						throw y;
					});
				throw t;
			}
		} finally {
			(a.__root = r), delete a.currentTarget, N(w), O(i);
		}
	}
}
const ra = ['touchstart', 'touchmove'];
function ea(a) {
	return ra.includes(a);
}
function oa(a, r) {
	var n = r == null ? '' : typeof r == 'object' ? r + '' : r;
	n !== (a.__t ?? (a.__t = a.nodeValue)) && ((a.__t = n), (a.nodeValue = n == null ? '' : n + ''));
}
function ta(a, r) {
	return L(a, r);
}
function fa(a, r) {
	b(), (r.intro = r.intro ?? !1);
	const n = r.target,
		_ = E,
		o = v;
	try {
		for (var e = C(n); e && (e.nodeType !== 8 || e.data !== P); ) e = $(e);
		if (!e) throw T;
		g(!0), A(e), j();
		const d = L(a, { ...r, anchor: e });
		if (v === null || v.nodeType !== 8 || v.data !== q) throw (B(), T);
		return g(!1), d;
	} catch (d) {
		if (d === T) return r.recover === !1 && K(), b(), W(n), g(!1), ta(a, r);
		throw d;
	} finally {
		g(_), A(o), Z();
	}
}
const p = new Map();
function L(a, { target: r, anchor: n, props: _ = {}, events: o, context: e, intro: d = !0 }) {
	b();
	var h = new Set(),
		u = (i) => {
			for (var t = 0; t < i.length; t++) {
				var s = i[t];
				if (!h.has(s)) {
					h.add(s);
					var f = ea(s);
					r.addEventListener(s, m, { passive: f });
					var l = p.get(s);
					l === void 0
						? (document.addEventListener(s, m, { passive: f }), p.set(s, 1))
						: p.set(s, l + 1);
				}
			}
		};
	u(z(aa)), D.add(u);
	var c = void 0,
		w = F(() => {
			var i = n ?? r.appendChild(G());
			return (
				J(() => {
					if (e) {
						Q({});
						var t = X;
						t.c = e;
					}
					o && (_.$$events = o),
						E && x(i, null),
						(c = a(i, _) || {}),
						E && (I.nodes_end = v),
						e && U();
				}),
				() => {
					var f;
					for (var t of h) {
						r.removeEventListener(t, m);
						var s = p.get(t);
						--s === 0 ? (document.removeEventListener(t, m), p.delete(t)) : p.set(t, s);
					}
					D.delete(u), R.delete(c), i !== n && ((f = i.parentNode) == null || f.removeChild(i));
				}
			);
		});
	return R.set(c, w), c;
}
let R = new WeakMap();
function da(a) {
	const r = R.get(a);
	r && r();
}
export { fa as h, ta as m, oa as s, da as u };
