class MyComponent {
	constructor(view,onRender) {
		this.viewFn = view;
		this.onRenderFn = onRender;
	}

	view() {
		return this.viewFn;
	}

	onRender() {
		this.onRenderFn();
	}
}

export default MyComponent;