// 🫤 this code could be cleaner
function processUsers(users: User[]) {
    const result = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            const formattedUser = {
                name: users[i].name.toUpperCase(),
                age: users[i].age,
                isAdult: true
            };
            result.push(formattedUser);
        }
    }
    return result;
}

// 🚩 there are way more layers and abstractions here than necessary
class UserProcessor {
    private users: User[];

    constructor(users: User[]) {
        this.users = users;
    }

    public process(): FormattedUser[] {
        return this.filterAdults().formatUsers();
    }

    private filterAdults(): UserProcessor {
        this.users = this.users.filter(user => user.age >= 18);
        return this;
    }

    private formatUsers(): FormattedUser[] {
        return this.users.map(user => ({
            name: this.formatName(user.name),
            age: user.age,
            isAdult: true
        }));
    }

    private formatName(name: string): string {
        return name.toUpperCase();
    }
}

const processUsers = (users: User[]): FormattedUser[] => {
    return new UserProcessor(users).process();
};

console.log(processUsers([{name:'Mike',age:37}]));