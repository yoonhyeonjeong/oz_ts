"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.appName = void 0;
exports.log = log;
function log(message) {
    console.log(message);
}
exports.appName = "demo";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
