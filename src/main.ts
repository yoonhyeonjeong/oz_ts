// 타입스크립트 모듈 (modules)
import {log as Logger, appName, User} from "./utils";

console.log(appName);

const user = new User("john");

Logger(user.getName());

import {Student, StudentProfile} from "./student";

const student: Student = {
    id: 123,
    name: "jess",
    age: 18,
};

function createStudentProfile(profile: StudentProfile) {
    console.log(`${profile.studentId}, ${profile.photoUrl}`);
}

createStudentProfile({
    studentId: student.id,
    photoUrl: "http://somephotourl.png",
});
