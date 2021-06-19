"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeeVideos = void 0;
var ERRORS = {
    "50001": "System error",
    "40001": "Invalid scene",
};
var LikeeVideos = /** @class */ (function () {
    function LikeeVideos(client) {
        this.client = client;
    }
    LikeeVideos.prototype.byUser = function (_a) {
        var uid = _a.uid, count = _a.count, lastId = _a.lastId;
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.client.api.request({
                                url: "videoApi/getUserVideo",
                                data: {
                                    count: count,
                                    tabType: 0,
                                    lastPostId: lastId || "",
                                    uid: uid,
                                    scene: "WELOG_POPULAR",
                                },
                            })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, Promise.resolve(data.data.videoList)];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, Promise.reject(new Error(error_1))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LikeeVideos.prototype.trends = function (_a) {
        var _b, _c;
        var lastId = _a.lastId, count = _a.count;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.client.api.request({
                            url: "videoApi/getSquareVideos",
                            data: {
                                country: "ES",
                                startNum: 5,
                                deviceId: ((_b = this.client.state.cookies) === null || _b === void 0 ? void 0 : _b.web_deviceid) || "web85fdb9e8b1d94940a911472aea15189f",
                                fetchNum: count || 5,
                                language: "es",
                                lastPostId: lastId || "",
                                uid: ((_c = this.client.state.cookies) === null || _c === void 0 ? void 0 : _c.web_uid) || "2368630855",
                                scene: "WELOG_POPULAR",
                            },
                        })];
                    case 1:
                        data = (_d.sent()).data;
                        console.log(data);
                        return [2 /*return*/, Promise.resolve(data.videoList)];
                }
            });
        });
    };
    LikeeVideos.prototype.like = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.client.api.request({
                                url: "likee-activity-flow-micro/videoApi/likeVideo",
                                data: {
                                    postId: id,
                                    type: 1,
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve()];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(new Error(error_2))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return LikeeVideos;
}());
exports.LikeeVideos = LikeeVideos;
