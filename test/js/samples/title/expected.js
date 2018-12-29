/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, flush, init, noop, run, safe_not_equal } from "svelte/internal";

function create_fragment(component, ctx) {
	var title_value, current;

	document.title = title_value = "a " + ctx.custom + " title";

	return {
		c: noop,
		m: noop,

		p(changed, ctx) {
			if ((changed.custom) && title_value !== (title_value = "a " + ctx.custom + " title")) {
				document.title = title_value;
			}
		},

		i: noop,
		o: run,
		d: noop
	};
}

function instance($$self, $$props, $$invalidate) {
	let { custom } = $$props;

	$$self.$set = $$props => {
		if ('custom' in $$props) $$invalidate('custom', custom = $$props.custom);
	};

	return { custom };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get custom() {
		return this.$$.ctx.custom;
	}

	set custom(custom) {
		this.$set({ custom });
		flush();
	}
}

export default SvelteComponent;