"use strict";

const assert = require("assert");

const ravenwood = require("ravenwood");

const {Middleware} = requireSrc("options");

describe("options", function () {
	it("should conform", function () {
		assert(Middleware instanceof Function);
		assert(new Middleware() instanceof Middleware);
	});

	it("should respond to OPTIONS requests", function () {
		const response = new Middleware().enter(new ravenwood.Request("OPTIONS", "/"), ["POST", "PUT", "GET"]);

		assert(response instanceof ravenwood.Response);
		assert.equal(response.statusCode, 204);
		assert.equal(response.statusMessage, "No Content");
		assert.deepEqual(response.headers, {Allow: ["POST", "PUT", "GET"]});
	});

	it("should passthrough non-OPTIONS requests", function () {
		const response = new Middleware().enter(new ravenwood.Request("POST", "/"), ["POST", "PUT", "GET"]);

		assert.equal(response, undefined);
	});
});
