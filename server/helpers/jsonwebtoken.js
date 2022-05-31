"use strict";

const jwt = require("jsonwebtoken");

const key = "it's secret";

const signToken = (data) => {
	return jwt.sign(data, key);
};

const payLoad = (token) => {
	return jwt.verify(token, key);
};

module.exports = {
	signToken,
	payLoad,
};
