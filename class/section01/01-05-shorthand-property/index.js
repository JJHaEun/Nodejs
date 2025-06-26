function qqq(aaa) {
    console.log(aaa);
    console.log(aaa.name);
    console.log(aaa.age);
    console.log(aaa.school);
    console.log(aaa.createdAt);
}

const name = "철수";
const age = 15;
const school = "공룡중학교";
const createdAt = "2025-06-24";

qqq({name, age, school, createdAt})