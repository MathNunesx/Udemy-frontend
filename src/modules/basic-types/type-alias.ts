type Salary = number | string;


type Programmer = {
name: string;
  age: number;
  skills?: string[];
  contact: {email: string; phone: string}
  salary: Salary
}

export function showProgrammer(programmer: Programmer) {
   console.log(programmer);
}


showProgrammer({ name: 'Felix', age: 58, skills: ['PHP'], contact: {email: 'nunes@gmail.com', phone: '9340394'}, salary: "R$ 2000" });
