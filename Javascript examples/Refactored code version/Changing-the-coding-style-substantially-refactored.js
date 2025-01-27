// ✅ cleaner and more conventional 
function processUsers(users: User[]): FormattedUser[] {
    return users
        .filter(user => user.age >= 18)
        .map(user => ({
            name: user.name.toUpperCase(),
            age: user.age,
            isAdult: true
        }));
}