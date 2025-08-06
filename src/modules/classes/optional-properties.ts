export const bootstrap = (): void => {
  class User {
    private bio?: string;

    constructor(
      private name: string,
      private age: number,
    ) {}

    setBio(bio: string): void {
      this.bio = bio;
    }

    getBio(): string {
      return this.bio || 'Biografia indisponivel';
    }
  }

  const user = new User('João', 45);
  console.log(user.getBio());

  user.setBio('Programador em cresimento');
  console.log(user.getBio());
};
