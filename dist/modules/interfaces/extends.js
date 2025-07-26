export const bootstrap = () => {
    class MyResume {
        fullName;
        email;
        skills;
        font;
        colorScheme;
        layout;
        dataOfbirth;
        constructor(fullName, email, skills, font, colorScheme, layout, dataOfbirth) {
            this.fullName = fullName;
            this.email = email;
            this.skills = skills;
            this.font = font;
            this.colorScheme = colorScheme;
            this.layout = layout;
            this.dataOfbirth = dataOfbirth;
        }
        addSkill(skill) {
            const initialLength = this.skills.length;
            this.skills.push(skill);
            return this.skills.length > initialLength;
        }
    }
    const myResume = new MyResume('Mahtheus Rodrigues', 'matheus@gamil', [], 'roboto', 'dark', 'one-column', new Date('2004-01-03'));
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
