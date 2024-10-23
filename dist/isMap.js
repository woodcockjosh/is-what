"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMap = isMap;
const getType_js_1 = require("./getType.js");
function isMap(payload) {
    return (0, getType_js_1.getType)(payload) === 'Map';
}
//# sourceMappingURL=isMap.js.map