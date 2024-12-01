var At = Array.isArray,
	gt = Array.from,
	Rt = Object.defineProperty,
	on = Object.getOwnPropertyDescriptor,
	Un = Object.getOwnPropertyDescriptors,
	St = Object.prototype,
	Dt = Array.prototype,
	Vn = Object.getPrototypeOf;
const It = () => {};
function Ot(n) {
	return n();
}
function Gn(n) {
	for (var t = 0; t < n.length; t++) n[t]();
}
const y = 2,
	vn = 4,
	M = 8,
	tn = 16,
	m = 32,
	$ = 64,
	I = 128,
	U = 256,
	p = 512,
	R = 1024,
	Y = 2048,
	C = 4096,
	j = 8192,
	Kn = 16384,
	pn = 32768,
	xt = 65536,
	$n = 1 << 18,
	hn = 1 << 19,
	un = Symbol('$state'),
	kt = Symbol('legacy props'),
	Nt = Symbol('');
function dn(n) {
	return n === this.v;
}
function Zn(n, t) {
	return n != n
		? t == t
		: n !== t || (n !== null && typeof n == 'object') || typeof n == 'function';
}
function En(n) {
	return !Zn(n, this.v);
}
function zn(n) {
	throw new Error('effect_in_teardown');
}
function Wn() {
	throw new Error('effect_in_unowned_derived');
}
function Xn(n) {
	throw new Error('effect_orphan');
}
function Jn() {
	throw new Error('effect_update_depth_exceeded');
}
function Ct() {
	throw new Error('hydration_failed');
}
function bt(n) {
	throw new Error('props_invalid_value');
}
function Pt() {
	throw new Error('state_descriptors_fixed');
}
function Ft() {
	throw new Error('state_prototype_fixed');
}
function Qn() {
	throw new Error('state_unsafe_local_read');
}
function nt() {
	throw new Error('state_unsafe_mutation');
}
let Z = !1;
function qt() {
	Z = !0;
}
function rn(n) {
	return { f: 0, v: n, reactions: null, equals: dn, version: 0 };
}
function Lt(n) {
	return tt(rn(n));
}
function Mt(n, t = !1) {
	var e;
	const r = rn(n);
	return (
		t || (r.equals = En), Z && _ !== null && _.l !== null && ((e = _.l).s ?? (e.s = [])).push(r), r
	);
}
function tt(n) {
	return u !== null && u.f & y && (T === null ? ht([n]) : T.push(n)), n;
}
function Yt(n, t) {
	return u !== null && ln() && u.f & (y | tn) && (T === null || !T.includes(n)) && nt(), rt(n, t);
}
function rt(n, t) {
	return (
		n.equals(t) ||
			((n.v = t),
			(n.version = Ln()),
			yn(n, R),
			ln() &&
				o !== null &&
				o.f & p &&
				!(o.f & m) &&
				(c !== null && c.includes(n) ? (A(o, R), W(o)) : g === null ? dt([n]) : g.push(n))),
		t
	);
}
function yn(n, t) {
	var r = n.reactions;
	if (r !== null)
		for (var e = ln(), s = r.length, l = 0; l < s; l++) {
			var a = r[l],
				i = a.f;
			i & R || (!e && a === o) || (A(a, t), i & (p | I) && (i & y ? yn(a, Y) : W(a)));
		}
}
const jt = 1,
	Ht = 2,
	Bt = 16,
	Ut = 1,
	Vt = 2,
	Gt = 4,
	Kt = 8,
	$t = 16,
	Zt = 1,
	zt = 2,
	et = '[',
	st = '[!',
	lt = ']',
	wn = {},
	Wt = Symbol();
function Tn(n) {
	console.warn('hydration_mismatch');
}
let D = !1;
function Xt(n) {
	D = n;
}
let w;
function F(n) {
	if (n === null) throw (Tn(), wn);
	return (w = n);
}
function Jt() {
	return F(O(w));
}
function Qt(n) {
	if (D) {
		if (O(w) !== null) throw (Tn(), wn);
		w = n;
	}
}
function nr(n = 1) {
	if (D) {
		for (var t = n, r = w; t--; ) r = O(r);
		w = r;
	}
}
function tr() {
	for (var n = 0, t = w; ; ) {
		if (t.nodeType === 8) {
			var r = t.data;
			if (r === lt) {
				if (n === 0) return t;
				n -= 1;
			} else (r === et || r === st) && (n += 1);
		}
		var e = O(t);
		t.remove(), (t = e);
	}
}
var fn, mn, An;
function rr() {
	if (fn === void 0) {
		fn = window;
		var n = Element.prototype,
			t = Node.prototype;
		(mn = on(t, 'firstChild').get),
			(An = on(t, 'nextSibling').get),
			(n.__click = void 0),
			(n.__className = ''),
			(n.__attributes = null),
			(n.__styles = null),
			(n.__e = void 0),
			(Text.prototype.__t = void 0);
	}
}
function X(n = '') {
	return document.createTextNode(n);
}
function J(n) {
	return mn.call(n);
}
function O(n) {
	return An.call(n);
}
function er(n, t) {
	if (!D) return J(n);
	var r = J(w);
	if (r === null) r = w.appendChild(X());
	else if (t && r.nodeType !== 3) {
		var e = X();
		return r == null || r.before(e), F(e), e;
	}
	return F(r), r;
}
function sr(n, t) {
	if (!D) {
		var r = J(n);
		return r instanceof Comment && r.data === '' ? O(r) : r;
	}
	return w;
}
function lr(n, t = 1, r = !1) {
	let e = D ? w : n;
	for (var s; t--; ) (s = e), (e = O(e));
	if (!D) return e;
	var l = e == null ? void 0 : e.nodeType;
	if (r && l !== 3) {
		var a = X();
		return e === null ? s == null || s.after(a) : e.before(a), F(a), a;
	}
	return F(e), e;
}
function ar(n) {
	n.textContent = '';
}
function at(n) {
	var t = y | R;
	o === null ? (t |= I) : (o.f |= hn);
	var r = u !== null && u.f & y ? u : null;
	const e = {
		children: null,
		ctx: _,
		deps: null,
		equals: dn,
		f: t,
		fn: n,
		reactions: null,
		v: null,
		version: 0,
		parent: r ?? o
	};
	return r !== null && (r.children ?? (r.children = [])).push(e), e;
}
function or(n) {
	const t = at(n);
	return (t.equals = En), t;
}
function gn(n) {
	var t = n.children;
	if (t !== null) {
		n.children = null;
		for (var r = 0; r < t.length; r += 1) {
			var e = t[r];
			e.f & y ? en(e) : P(e);
		}
	}
}
function ot(n) {
	for (var t = n.parent; t !== null; ) {
		if (!(t.f & y)) return t;
		t = t.parent;
	}
	return null;
}
function Rn(n) {
	var t,
		r = o;
	K(ot(n));
	try {
		gn(n), (t = Mn(n));
	} finally {
		K(r);
	}
	return t;
}
function Sn(n) {
	var t = Rn(n),
		r = (x || n.f & I) && n.deps !== null ? Y : p;
	A(n, r), n.equals(t) || ((n.v = t), (n.version = Ln()));
}
function en(n) {
	gn(n), L(n, 0), A(n, j), (n.v = n.children = n.deps = n.ctx = n.reactions = null);
}
function Dn(n) {
	o === null && u === null && Xn(), u !== null && u.f & I && Wn(), sn && zn();
}
function ut(n, t) {
	var r = t.last;
	r === null ? (t.last = t.first = n) : ((r.next = n), (n.prev = r), (t.last = n));
}
function b(n, t, r, e = !0) {
	var s = (n & $) !== 0,
		l = o,
		a = {
			ctx: _,
			deps: null,
			deriveds: null,
			nodes_start: null,
			nodes_end: null,
			f: n | R,
			first: null,
			fn: t,
			last: null,
			next: null,
			parent: s ? null : l,
			prev: null,
			teardown: null,
			transitions: null,
			version: 0
		};
	if (r) {
		var i = k;
		try {
			_n(!0), z(a), (a.f |= Kn);
		} catch (f) {
			throw (P(a), f);
		} finally {
			_n(i);
		}
	} else t !== null && W(a);
	var E =
		r &&
		a.deps === null &&
		a.first === null &&
		a.nodes_start === null &&
		a.teardown === null &&
		(a.f & hn) === 0;
	if (!E && !s && e && (l !== null && ut(a, l), u !== null && u.f & y)) {
		var h = u;
		(h.children ?? (h.children = [])).push(a);
	}
	return a;
}
function ur(n) {
	const t = b(M, null, !1);
	return A(t, p), (t.teardown = n), t;
}
function ir(n) {
	Dn();
	var t = o !== null && (o.f & m) !== 0 && _ !== null && !_.m;
	if (t) {
		var r = _;
		(r.e ?? (r.e = [])).push({ fn: n, effect: o, reaction: u });
	} else {
		var e = In(n);
		return e;
	}
}
function fr(n) {
	return Dn(), it(n);
}
function _r(n) {
	const t = b($, n, !0);
	return () => {
		P(t);
	};
}
function In(n) {
	return b(vn, n, !1);
}
function it(n) {
	return b(M, n, !0);
}
function cr(n) {
	return ft(n);
}
function ft(n, t = 0) {
	return b(M | tn | t, n, !0);
}
function vr(n, t = !0) {
	return b(M | m, n, !0, t);
}
function On(n) {
	var t = n.teardown;
	if (t !== null) {
		const r = sn,
			e = u;
		cn(!0), G(null);
		try {
			t.call(null);
		} finally {
			cn(r), G(e);
		}
	}
}
function xn(n) {
	var t = n.deriveds;
	if (t !== null) {
		n.deriveds = null;
		for (var r = 0; r < t.length; r += 1) en(t[r]);
	}
}
function kn(n, t = !1) {
	var r = n.first;
	for (n.first = n.last = null; r !== null; ) {
		var e = r.next;
		P(r, t), (r = e);
	}
}
function _t(n) {
	for (var t = n.first; t !== null; ) {
		var r = t.next;
		t.f & m || P(t), (t = r);
	}
}
function P(n, t = !0) {
	var r = !1;
	if ((t || n.f & $n) && n.nodes_start !== null) {
		for (var e = n.nodes_start, s = n.nodes_end; e !== null; ) {
			var l = e === s ? null : O(e);
			e.remove(), (e = l);
		}
		r = !0;
	}
	kn(n, t && !r), xn(n), L(n, 0), A(n, j);
	var a = n.transitions;
	if (a !== null) for (const E of a) E.stop();
	On(n);
	var i = n.parent;
	i !== null && i.first !== null && Nn(n),
		(n.next =
			n.prev =
			n.teardown =
			n.ctx =
			n.deps =
			n.parent =
			n.fn =
			n.nodes_start =
			n.nodes_end =
				null);
}
function Nn(n) {
	var t = n.parent,
		r = n.prev,
		e = n.next;
	r !== null && (r.next = e),
		e !== null && (e.prev = r),
		t !== null && (t.first === n && (t.first = e), t.last === n && (t.last = r));
}
function pr(n, t) {
	var r = [];
	Cn(n, r, !0),
		ct(r, () => {
			P(n), t && t();
		});
}
function ct(n, t) {
	var r = n.length;
	if (r > 0) {
		var e = () => --r || t();
		for (var s of n) s.out(e);
	} else t();
}
function Cn(n, t, r) {
	if (!(n.f & C)) {
		if (((n.f ^= C), n.transitions !== null))
			for (const a of n.transitions) (a.is_global || r) && t.push(a);
		for (var e = n.first; e !== null; ) {
			var s = e.next,
				l = (e.f & pn) !== 0 || (e.f & m) !== 0;
			Cn(e, t, l ? r : !1), (e = s);
		}
	}
}
function hr(n) {
	bn(n, !0);
}
function bn(n, t) {
	if (n.f & C) {
		H(n) && z(n), (n.f ^= C);
		for (var r = n.first; r !== null; ) {
			var e = r.next,
				s = (r.f & pn) !== 0 || (r.f & m) !== 0;
			bn(r, s ? t : !1), (r = e);
		}
		if (n.transitions !== null) for (const l of n.transitions) (l.is_global || t) && l.in();
	}
}
let V = !1,
	Q = [];
function Pn() {
	V = !1;
	const n = Q.slice();
	(Q = []), Gn(n);
}
function dr(n) {
	V || ((V = !0), queueMicrotask(Pn)), Q.push(n);
}
function vt() {
	V && Pn();
}
const Fn = 0,
	pt = 1;
let B = Fn,
	q = !1,
	k = !1,
	sn = !1;
function _n(n) {
	k = n;
}
function cn(n) {
	sn = n;
}
let S = [],
	N = 0;
let u = null;
function G(n) {
	u = n;
}
let o = null;
function K(n) {
	o = n;
}
let T = null;
function ht(n) {
	T = n;
}
let c = null,
	d = 0,
	g = null;
function dt(n) {
	g = n;
}
let qn = 0,
	x = !1,
	_ = null;
function Ln() {
	return ++qn;
}
function ln() {
	return !Z || (_ !== null && _.l === null);
}
function H(n) {
	var a, i;
	var t = n.f;
	if (t & R) return !0;
	if (t & Y) {
		var r = n.deps,
			e = (t & I) !== 0;
		if (r !== null) {
			var s;
			if (t & U) {
				for (s = 0; s < r.length; s++) ((a = r[s]).reactions ?? (a.reactions = [])).push(n);
				n.f ^= U;
			}
			for (s = 0; s < r.length; s++) {
				var l = r[s];
				if (
					(H(l) && Sn(l),
					e &&
						o !== null &&
						!x &&
						!((i = l == null ? void 0 : l.reactions) != null && i.includes(n)) &&
						(l.reactions ?? (l.reactions = [])).push(n),
					l.version > n.version)
				)
					return !0;
			}
		}
		e || A(n, p);
	}
	return !1;
}
function Et(n, t, r) {
	throw n;
}
function Mn(n) {
	var an;
	var t = c,
		r = d,
		e = g,
		s = u,
		l = x,
		a = T,
		i = _,
		E = n.f;
	(c = null),
		(d = 0),
		(g = null),
		(u = E & (m | $) ? null : n),
		(x = !k && (E & I) !== 0),
		(T = null),
		(_ = n.ctx);
	try {
		var h = (0, n.fn)(),
			f = n.deps;
		if (c !== null) {
			var v;
			if ((L(n, d), f !== null && d > 0))
				for (f.length = d + c.length, v = 0; v < c.length; v++) f[d + v] = c[v];
			else n.deps = f = c;
			if (!x) for (v = d; v < f.length; v++) ((an = f[v]).reactions ?? (an.reactions = [])).push(n);
		} else f !== null && d < f.length && (L(n, d), (f.length = d));
		return h;
	} finally {
		(c = t), (d = r), (g = e), (u = s), (x = l), (T = a), (_ = i);
	}
}
function yt(n, t) {
	let r = t.reactions;
	if (r !== null) {
		var e = r.indexOf(n);
		if (e !== -1) {
			var s = r.length - 1;
			s === 0 ? (r = t.reactions = null) : ((r[e] = r[s]), r.pop());
		}
	}
	r === null &&
		t.f & y &&
		(c === null || !c.includes(t)) &&
		(A(t, Y), t.f & (I | U) || (t.f ^= U), L(t, 0));
}
function L(n, t) {
	var r = n.deps;
	if (r !== null) for (var e = t; e < r.length; e++) yt(n, r[e]);
}
function z(n) {
	var t = n.f;
	if (!(t & j)) {
		A(n, p);
		var r = o;
		o = n;
		try {
			t & tn ? _t(n) : kn(n), xn(n), On(n);
			var e = Mn(n);
			(n.teardown = typeof e == 'function' ? e : null), (n.version = qn);
		} catch (s) {
			Et(s);
		} finally {
			o = r;
		}
	}
}
function Yn() {
	N > 1e3 && ((N = 0), Jn()), N++;
}
function jn(n) {
	var t = n.length;
	if (t !== 0) {
		Yn();
		var r = k;
		k = !0;
		try {
			for (var e = 0; e < t; e++) {
				var s = n[e];
				s.f & p || (s.f ^= p);
				var l = [];
				Hn(s, l), wt(l);
			}
		} finally {
			k = r;
		}
	}
}
function wt(n) {
	var t = n.length;
	if (t !== 0)
		for (var r = 0; r < t; r++) {
			var e = n[r];
			!(e.f & (j | C)) &&
				H(e) &&
				(z(e),
				e.deps === null &&
					e.first === null &&
					e.nodes_start === null &&
					(e.teardown === null ? Nn(e) : (e.fn = null)));
		}
}
function Tt() {
	if (((q = !1), N > 1001)) return;
	const n = S;
	(S = []), jn(n), q || (N = 0);
}
function W(n) {
	B === Fn && (q || ((q = !0), queueMicrotask(Tt)));
	for (var t = n; t.parent !== null; ) {
		t = t.parent;
		var r = t.f;
		if (r & ($ | m)) {
			if (!(r & p)) return;
			t.f ^= p;
		}
	}
	S.push(t);
}
function Hn(n, t) {
	var r = n.first,
		e = [];
	n: for (; r !== null; ) {
		var s = r.f,
			l = (s & m) !== 0,
			a = l && (s & p) !== 0;
		if (!a && !(s & C))
			if (s & M) {
				l ? (r.f ^= p) : H(r) && z(r);
				var i = r.first;
				if (i !== null) {
					r = i;
					continue;
				}
			} else s & vn && e.push(r);
		var E = r.next;
		if (E === null) {
			let v = r.parent;
			for (; v !== null; ) {
				if (n === v) break n;
				var h = v.next;
				if (h !== null) {
					r = h;
					continue n;
				}
				v = v.parent;
			}
		}
		r = E;
	}
	for (var f = 0; f < e.length; f++) (i = e[f]), t.push(i), Hn(i, t);
}
function Bn(n) {
	var t = B,
		r = S;
	try {
		Yn();
		const s = [];
		(B = pt), (S = s), (q = !1), jn(r);
		var e = n == null ? void 0 : n();
		return vt(), (S.length > 0 || s.length > 0) && Bn(), (N = 0), e;
	} finally {
		(B = t), (S = r);
	}
}
async function Er() {
	await Promise.resolve(), Bn();
}
function yr(n) {
	var f;
	var t = n.f,
		r = (t & y) !== 0;
	if (r && t & j) {
		var e = Rn(n);
		return en(n), e;
	}
	if (u !== null) {
		T !== null && T.includes(n) && Qn();
		var s = u.deps;
		c === null && s !== null && s[d] === n ? d++ : c === null ? (c = [n]) : c.push(n),
			g !== null && o !== null && o.f & p && !(o.f & m) && g.includes(n) && (A(o, R), W(o));
	} else if (r && n.deps === null)
		for (var l = n, a = l.parent, i = l; a !== null; )
			if (a.f & y) {
				var E = a;
				(i = E), (a = E.parent);
			} else {
				var h = a;
				((f = h.deriveds) != null && f.includes(i)) || (h.deriveds ?? (h.deriveds = [])).push(i);
				break;
			}
	return r && ((l = n), H(l) && Sn(l)), n.v;
}
function wr(n) {
	const t = u;
	try {
		return (u = null), n();
	} finally {
		u = t;
	}
}
const mt = ~(R | Y | p);
function A(n, t) {
	n.f = (n.f & mt) | t;
}
function Tr(n, t = !1, r) {
	(_ = { p: _, c: null, e: null, m: !1, s: n, x: null, l: null }),
		Z && !t && (_.l = { s: null, u: null, r1: [], r2: rn(!1) });
}
function mr(n) {
	const t = _;
	if (t !== null) {
		const a = t.e;
		if (a !== null) {
			var r = o,
				e = u;
			t.e = null;
			try {
				for (var s = 0; s < a.length; s++) {
					var l = a[s];
					K(l.effect), G(l.reaction), In(l.fn);
				}
			} finally {
				K(r), G(e);
			}
		}
		(_ = t.p), (t.m = !0);
	}
	return {};
}
function Ar(n) {
	if (!(typeof n != 'object' || !n || n instanceof EventTarget)) {
		if (un in n) nn(n);
		else if (!Array.isArray(n))
			for (let t in n) {
				const r = n[t];
				typeof r == 'object' && r && un in r && nn(r);
			}
	}
}
function nn(n, t = new Set()) {
	if (typeof n == 'object' && n !== null && !(n instanceof EventTarget) && !t.has(n)) {
		t.add(n), n instanceof Date && n.getTime();
		for (let e in n)
			try {
				nn(n[e], t);
			} catch {}
		const r = Vn(n);
		if (
			r !== Object.prototype &&
			r !== Array.prototype &&
			r !== Map.prototype &&
			r !== Set.prototype &&
			r !== Date.prototype
		) {
			const e = Un(r);
			for (let s in e) {
				const l = e[s].get;
				if (l)
					try {
						l.call(n);
					} catch {}
			}
		}
	}
}
export {
	Ar as $,
	Yt as A,
	St as B,
	Dt as C,
	rn as D,
	pn as E,
	Pt as F,
	on as G,
	$n as H,
	o as I,
	Ft as J,
	At as K,
	Nt as L,
	hr as M,
	pr as N,
	Jt as O,
	st as P,
	tr as Q,
	_ as R,
	un as S,
	Z as T,
	Wt as U,
	ir as V,
	Zt as W,
	zt as X,
	fr as Y,
	Gn as Z,
	Ot as _,
	et as a,
	at as a0,
	cr as a1,
	Rt as a2,
	G as a3,
	K as a4,
	u as a5,
	rr as a6,
	wn as a7,
	lt as a8,
	Tn as a9,
	Ht as aA,
	jt as aB,
	Bt as aC,
	Zn as aD,
	Ct as aa,
	ar as ab,
	gt as ac,
	_r as ad,
	In as ae,
	it as af,
	dr as ag,
	bt as ah,
	xt as ai,
	Gt as aj,
	En as ak,
	m as al,
	$ as am,
	Ut as an,
	Vt as ao,
	Kt as ap,
	kt as aq,
	or as ar,
	$t as as,
	Bn as at,
	Er as au,
	Lt as av,
	C as aw,
	rt as ax,
	Cn as ay,
	ct as az,
	ft as b,
	X as c,
	F as d,
	w as e,
	J as f,
	O as g,
	D as h,
	Vn as i,
	Un as j,
	qt as k,
	vr as l,
	P as m,
	It as n,
	lr as o,
	Tr as p,
	sr as q,
	mr as r,
	Xt as s,
	nr as t,
	er as u,
	Qt as v,
	wr as w,
	ur as x,
	Mt as y,
	yr as z
};
