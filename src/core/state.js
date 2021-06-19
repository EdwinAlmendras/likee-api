"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var axios_1 = __importDefault(require("axios"));
var Constants = __importStar(require("./constants"));
var State = /** @class */ (function () {
    function State(cookies) {
        var _a, _b, _c;
        this.cookies = cookies;
        this.constants = Constants;
        this.axios = axios_1.default.create({
            headers: {
                "x-auth-token": (_a = this.cookies) === null || _a === void 0 ? void 0 : _a.web_token,
                "x-client-deviceid": (_b = this.cookies) === null || _b === void 0 ? void 0 : _b.web_deviceid,
                "x-uid": (_c = this.cookies) === null || _c === void 0 ? void 0 : _c.web_uid,
            },
        });
    }
    return State;
}());
exports.State = State;
