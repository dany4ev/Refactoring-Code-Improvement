// ✅ cleaner and more conventional 
const isAdult = (user: User): boolean => user.age >= 18;

const formatUser = (user: User): FormattedUser => ({
    name: user.name.toUpperCase(),
    age: user.age,
    isAdult: true
});

function processUsers(users: User[]): FormattedUser[] {
    return users.filter(isAdult).map(formatUser);
}

console.log(processUsers([{name:'Mike',age:37}]));

