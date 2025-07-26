export const bootstrap = () => {
    ;
    class MyResume {
        fullName;
        email;
        skills;
        constructor(fullName, email, skills) {
            this.fullName = fullName;
            this.email = email;
            this.skills = skills;
        }
        addSkill(skill) {
            const initialLength = this.skills.length;
            this.skills.push(skill);
            return this.skills.length > initialLength;
        }
    }
    const myResume = new MyResume('Mahtheus Rodrigues', 'matheus@gamil', []);
    myResume.addSkill({ name: 'Js', level: 'advanced' });
    myResume.addSkill({ name: 'Ts', level: 'advanced' });
    console.log(myResume);
    //   const myResume: Resume = {
    //     fullName: 'Matheus Rodrigues Nunes',
    //     email: 'matheus@gmail.com',
    //     skills: [
    //       { name: 'Javascript', level: 'intermediate' },
    //       { name: 'Typescript', level: 'advanced' },
    //     ],
    //   };
};
