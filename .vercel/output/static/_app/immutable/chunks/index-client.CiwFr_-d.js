import { R as o, T as t, V as c, w as u } from './runtime.Cl3lITj1.js';
function a(e) {
	throw new Error('lifecycle_outside_component');
}
function r(e) {
	o === null && a(),
		t && o.l !== null
			? l(o).m.push(e)
			: c(() => {
					const n = u(e);
					if (typeof n == 'function') return n;
				});
}
function l(e) {
	var n = e.l;
	return n.u ?? (n.u = { a: [], b: [], m: [] });
}
export { r as o };
