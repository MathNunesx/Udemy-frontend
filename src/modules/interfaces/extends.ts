export const bootstrap = (): void => {
  
    //   declaration merging

  interface Resume {
    dateOfbirth?: Date;
    sumary?: string;
  }

  //   declaration merging
  
    interface PersonalInfo {
    fullName: string;
    email: string;
    ateOfbirth?: Date;
    sumary?: string;
  }

  interface Theme {
    font: 'roboto' | 'open sans';
    colorScheme: 'light' | 'dark';
    layout: 'one-column' | 'two-column';
  }

  interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
  }

  interface Resume extends PersonalInfo, Theme {
    addSkill?: (skill: Skill) => boolean;
  }


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
