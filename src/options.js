"use strict";

const ravenwood = require("ravenwood");

/**
 * A middleware to handle OPTIONS requests.
 */
const Middleware = class Middleware extends ravenwood.Middleware() {
	/**
	 * Replies to incoming OPTIONS requests.
	 *
	 * @param {ravenwood.Request} request - The incoming request
	 * @param {Array<String>}     allowed - The methods for which routes exist on the incoming request path.
	 *
	 * @returns {(Response|undefined)} A response to the incoming OPTIONS request.
	 */
	enter(request, allowed) {
		if (request.method === "OPTIONS") {
			return new ravenwood.Response(ravenwood.status.noContent).setHeader("allow", allowed);
		}
	}
};

module.exports = {Middleware};
