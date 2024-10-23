"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = isDate;
const getType_js_1 = require("./getType.js");
function isDate(payload) {
    return (0, getType_js_1.getType)(payload) === 'Date' && !isNaN(payload);
}
//# sourceMappingURL=isDate.js.map