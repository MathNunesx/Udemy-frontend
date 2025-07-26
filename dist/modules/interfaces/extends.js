export const bootstrap = () => {
    //   declaration merging
    class MyResume {
        fullName;
        email;
        skills;
        font;
        colorScheme;
        layout;
        constructor(fullName, email, skills, font, colorScheme, layout) {
            this.fullName = fullName;
            this.email = email;
            this.skills = skills;
            this.font = font;
            this.colorScheme = colorScheme;
            this.layout = layout;
        }
        addSkill(skill) {
            const initialLength = this.skills.length;
            this.skills.push(skill);
            return this.skills.length > initialLength;
        }
    }
    const myResume = new MyResume('Mahtheus Rodrigues', 'matheus@gamil', [], 'roboto', 'dark', 'one-column');
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
