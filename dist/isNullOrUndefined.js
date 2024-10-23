"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrUndefined = void 0;
const isNull_js_1 = require("./isNull.js");
const isOneOf_js_1 = require("./isOneOf.js");
const isUndefined_js_1 = require("./isUndefined.js");
exports.isNullOrUndefined = (0, isOneOf_js_1.isOneOf)(isNull_js_1.isNull, isUndefined_js_1.isUndefined);
//# sourceMappingURL=isNullOrUndefined.js.map