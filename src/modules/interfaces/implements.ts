export const bootstrap = (): void => {
  interface Resume {
    fullName: string;
    email: string;
    skills: Skill[];
    addSkill?: (skill: Skill) => boolean
  }

  interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
  };

  class MyResume implements Resume {
    constructor(
        public fullName: string,
        public email: string,
        public skills: Skill[],
    ){}

    addSkill(skill: Skill): boolean {
        const initialLength = this.skills.length
        this.skills.push(skill)
        return this.skills.length > initialLength
    }
  }

  const myResume = new MyResume('Mahtheus Rodrigues', 'matheus@gamil', [])

  myResume.addSkill({name: 'Js', level: 'advanced'})
  myResume.addSkill({name: 'Ts', level: 'advanced'})
  console.log(myResume)

//   const myResume: Resume = {
//     fullName: 'Matheus Rodrigues Nunes',
//     email: 'matheus@gmail.com',
//     skills: [
//       { name: 'Javascript', level: 'intermediate' },
//       { name: 'Typescript', level: 'advanced' },
//     ],
//   };

};
