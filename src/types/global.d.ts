 //   declaration merging

  interface Resume {
    dateOfbirth?: Date;
    sumary?: string;
  }

  //   declaration merging
  
    interface PersonalInfo {
      /**
       * Nome completo
       */
    fullName: string;
    email: string;

    /**
     * new Date()
     */
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

  /**  interface utilizada para criação de curriculos
   */
  interface Resume extends PersonalInfo, Theme {
    addSkill?: (skill: Skill) => boolean;
  }

