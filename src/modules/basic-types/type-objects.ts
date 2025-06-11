let programmer = {
  // let programmer: { name: string; age: number, skills: string[]} ={
  name: 'Kaio',
  age: 35,
  skills: ['java', 'python'],
};

programmer.name;
programmer.age;

export function showProgrammer(programmer: {
  name: string;
  age: number;
  skills?: string[];
}) {
  console.log(programmer);
}

showProgrammer(programmer);
showProgrammer({ name: 'Felix', age: 58, skills: ['PHP'] });
