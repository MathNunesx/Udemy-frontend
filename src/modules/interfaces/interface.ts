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

  const myResume: Resume = {
    fullName: 'Matheus Rodrigues Nunes',
    email: 'matheus@gmail.com',
    skills: [
      { name: 'Javascript', level: 'intermediate' },
      { name: 'Typescript', level: 'advanced' },
    ],
  };
};
