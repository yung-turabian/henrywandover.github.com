import {
	f as d,
	c as u,
	W as p,
	X as v,
	h as f,
	e as o,
	I as _,
	d as h,
	O as T
} from './runtime.Cl3lITj1.js';
function E(t) {
	var e = document.createElement('template');
	return (e.innerHTML = t), e.content;
}
function i(t, e) {
	var r = _;
	r.nodes_start === null && ((r.nodes_start = t), (r.nodes_end = e));
}
function g(t, e) {
	var r = (e & p) !== 0,
		c = (e & v) !== 0,
		a,
		s = !t.startsWith('<!>');
	return () => {
		if (f) return i(o, null), o;
		a === void 0 && ((a = E(s ? t : '<!>' + t)), r || (a = d(a)));
		var n = c ? document.importNode(a, !0) : a.cloneNode(!0);
		if (r) {
			var l = d(n),
				m = n.lastChild;
			i(l, m);
		} else i(n, n);
		return n;
	};
}
function x(t, e) {
	var r = g(t, e);
	return () => y(r());
}
function y(t) {
	if (f) return t;
	const e = t.nodeType === 11,
		r = t.tagName === 'SCRIPT' ? [t] : t.querySelectorAll('script'),
		c = _;
	for (const s of r) {
		const n = document.createElement('script');
		for (var a of s.attributes) n.setAttribute(a.name, a.value);
		(n.textContent = s.textContent),
			(e ? t.firstChild === s : t === s) && (c.nodes_start = n),
			(e ? t.lastChild === s : t === s) && (c.nodes_end = n),
			s.replaceWith(n);
	}
	return t;
}
function A(t = '') {
	if (!f) {
		var e = u(t + '');
		return i(e, e), e;
	}
	var r = o;
	return r.nodeType !== 3 && (r.before((r = u())), h(r)), i(r, r), r;
}
function M() {
	if (f) return i(o, null), o;
	var t = document.createDocumentFragment(),
		e = document.createComment(''),
		r = u();
	return t.append(e, r), i(e, r), t;
}
function N(t, e) {
	if (f) {
		(_.nodes_end = o), T();
		return;
	}
	t !== null && t.before(e);
}
export { N as a, x as b, i as c, M as d, A as e, E as f, g as t };
