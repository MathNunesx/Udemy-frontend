export const bootstrap = (): void => {
  
  type Font = 'roboto' | 'open sans';
  type colorScheme = 'light' | 'dark';
  type layout = 'one-column' | 'two-column';

  
  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
      public font: Font,
      public colorScheme: colorScheme,
      public layout: layout,
      public dataOfbirth: Date
    ) {}

    addSkill(skill: Skill): boolean {
      const initialLength = this.skills.length;
      this.skills.push(skill);
      return this.skills.length > initialLength;
    }
  }

  const myResume = new MyResume(
    'Mahtheus Rodrigues',
    'matheus@gamil',
    [],
    'roboto',
    'dark',
    'one-column',
    new Date('2004-01-03')
  );

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
