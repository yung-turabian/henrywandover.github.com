import {
	c as _,
	b as o,
	H as f,
	h as a,
	a as c,
	g as d,
	s,
	d as i,
	e as r,
	f as u
} from './runtime.Cl3lITj1.js';
let e;
function g() {
	e = void 0;
}
function p(h) {
	let t = null,
		l = a;
	var n;
	if (a) {
		for (
			t = r, e === void 0 && (e = u(document.head));
			e !== null && (e.nodeType !== 8 || e.data !== c);

		)
			e = d(e);
		e === null ? s(!1) : (e = i(d(e)));
	}
	a || (n = document.head.appendChild(_()));
	try {
		o(() => h(n), f);
	} finally {
		l && (s(!0), (e = r), i(t));
	}
}
export { p as h, g as r };
