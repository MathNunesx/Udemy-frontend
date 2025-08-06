export const bootstrap = () => {
    class User {
        name;
        age;
        bio;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        setBio(bio) {
            this.bio = bio;
        }
        getBio() {
            return this.bio || 'Biografia indisponivel';
        }
    }
    const user = new User('João', 45);
    console.log(user.getBio());
    user.setBio('Programador em cresimento');
    console.log(user.getBio());
};
