"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeeClient = void 0;
/* eslint-disable no-invalid-this */
var state_1 = require("./state");
var api_1 = require("./api");
var user_1 = require("./user");
var videos_1 = require("./videos");
var auth_1 = require("./auth");
var LikeeClient = /** @class */ (function () {
    function LikeeClient(cookies) {
        this.cookies = cookies;
        this.api = new api_1.LikeeApi(this);
        this.state = new state_1.State(this.cookies);
        this.user = new user_1.User(this);
        this.videos = new videos_1.LikeeVideos(this);
        this.auth = new auth_1.Auth(this);
    }
    return LikeeClient;
}());
exports.LikeeClient = LikeeClient;
