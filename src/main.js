"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 타입스크립트 모듈 (modules)
var utils_1 = require("./utils");
console.log(utils_1.appName);
var user = new utils_1.User("john");
(0, utils_1.log)(user.getName());
var student = {
    id: 123,
    name: "jess",
    age: 18,
};
function createStudentProfile(profile) {
    console.log("".concat(profile.studentId, ", ").concat(profile.photoUrl));
}
createStudentProfile({
    studentId: student.id,
    photoUrl: "http://somephotourl.png",
});
