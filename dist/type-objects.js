"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProgrammer = showProgrammer;
let programmer = {
    // let programmer: { name: string; age: number, skills: string[]} ={
    name: 'Kaio',
    age: 35,
    skills: ['java', 'python'],
};
programmer.name;
programmer.age;
function showProgrammer(programmer) {
    console.log(programmer);
}
showProgrammer(programmer);
showProgrammer({ name: 'Felix', age: 58, skills: ['PHP'] });
